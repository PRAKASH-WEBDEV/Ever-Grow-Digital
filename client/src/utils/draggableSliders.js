const SLIDER_SELECTOR = [
  ".slider",
  ".slider-wrapper",
  ".blog-slider-wrapper",
  ".tech-slider-wrapper",
].join(",");

const DRAG_THRESHOLD = 5;
const MOMENTUM_FRICTION = 0.94;
const MIN_VELOCITY = 0.12;

const sliders = new WeakSet();

const stopMomentum = (state) => {
  if (state.rafId) {
    cancelAnimationFrame(state.rafId);
    state.rafId = null;
  }
};

const runMomentum = (slider, state) => {
  stopMomentum(state);

  const animate = () => {
    if (Math.abs(state.velocity) < MIN_VELOCITY) {
      state.rafId = null;
      return;
    }

    slider.scrollLeft -= state.velocity;
    state.velocity *= MOMENTUM_FRICTION;
    state.rafId = requestAnimationFrame(animate);
  };

  state.rafId = requestAnimationFrame(animate);
};

const bindSlider = (slider) => {
  if (sliders.has(slider)) return;
  sliders.add(slider);

  const state = {
    isDown: false,
    didDrag: false,
    pointerId: null,
    startX: 0,
    lastX: 0,
    startScrollLeft: 0,
    velocity: 0,
    rafId: null,
  };

  const start = (event) => {
    if (event.button !== undefined && event.button !== 0) return;

    state.isDown = true;
    state.didDrag = false;
    state.pointerId = event.pointerId;
    state.startX = event.clientX;
    state.lastX = state.startX;
    state.startScrollLeft = slider.scrollLeft;
    state.velocity = 0;

    stopMomentum(state);
    slider.classList.add("is-dragging");
    slider.setPointerCapture?.(event.pointerId);
  };

  const move = (event) => {
    if (!state.isDown || event.pointerId !== state.pointerId) return;

    const x = event.clientX;
    const delta = x - state.startX;
    const frameDelta = x - state.lastX;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      state.didDrag = true;
      event.preventDefault();
    }

    slider.scrollLeft = state.startScrollLeft - delta;
    state.velocity = frameDelta;
    state.lastX = x;
  };

  const end = (event) => {
    if (!state.isDown) return;

    if (event?.pointerId === state.pointerId) {
      slider.releasePointerCapture?.(event.pointerId);
    }

    state.isDown = false;
    state.pointerId = null;
    slider.classList.remove("is-dragging");

    if (state.didDrag) {
      runMomentum(slider, state);
    }
  };

  const preventDraggedClick = (event) => {
    if (!state.didDrag) return;

    event.preventDefault();
    event.stopPropagation();
    state.didDrag = false;
  };

  slider.addEventListener("pointerdown", start);
  slider.addEventListener("pointermove", move);
  slider.addEventListener("pointerup", end);
  slider.addEventListener("pointercancel", end);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("dragstart", (event) => event.preventDefault());
  slider.addEventListener("click", preventDraggedClick, true);
};

export const initDraggableSliders = () => {
  document.querySelectorAll(SLIDER_SELECTOR).forEach(bindSlider);
};

export const watchDraggableSliders = () => {
  initDraggableSliders();

  const observer = new MutationObserver(initDraggableSliders);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return () => observer.disconnect();
};
