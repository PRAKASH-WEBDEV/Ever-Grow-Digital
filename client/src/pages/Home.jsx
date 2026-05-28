import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import blogs from "../data/blogs";
import { videoPreviewUrl } from "../data/media";
import { Link } from "react-router-dom";
import clientLogo01 from "../assets/Home/Brands & Agencies/client-logo-01.webp";
import clientLogo02 from "../assets/Home/Brands & Agencies/client-logo-02.webp";
import clientLogo03 from "../assets/Home/Brands & Agencies/client-logo-03.webp";
import clientLogo04 from "../assets/Home/Brands & Agencies/client-logo-04.webp";
import clientLogo05 from "../assets/Home/Brands & Agencies/client-logo-05.webp";
import clientLogo06 from "../assets/Home/Brands & Agencies/client-logo-06.webp";
import clientLogo07 from "../assets/Home/Brands & Agencies/client-logo-07.webp";
import webDevImg from "../assets/Home/our-services/Web-development-Services.webp";
import seoImg from "../assets/Home/our-services/Seo-Optimization.webp";
import graphicsImg from "../assets/Home/our-services/UI-UX-Services.webp";
// import graphicsImg from "../assets/Home/our-services/Graphic-Designer-services.webp";
import videoImg from "../assets/Home/our-services/Content creator editing video footage in studio.webp";

import LottieModule from "lottie-react";
import brandStrategyAnim from "../assets/Home/Why Choose EverGrow/marketing-network.json";
import webDevAnim from "../assets/Home/Why Choose EverGrow/laptop.json";
import digitalMarketingAnim from "../assets/Home/Why Choose EverGrow/programmer.json";
import creativeDesignAnim from "../assets/Home/Why Choose EverGrow/learning.json";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiWordpress,
  SiShopify,
  SiWoocommerce,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiGithub,
  SiGoogleads,
  SiFigma,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { MdOutlineAutoAwesome } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
const CONTACT_API_URL = `${API_BASE_URL}/api/contact`;
const POPUP_STORAGE_KEY = "evergrow_strategy_popup_seen";
const Lottie = LottieModule.default ?? LottieModule;
const getProjectScreenshotUrl = (url) =>
  `https://image.thum.io/get/width/1200/crop/900/noanimate/?url=${encodeURIComponent(
    url,
  )}`;

const getProjectScreenshotFallbackUrl = (url) =>
  `https://image.thum.io/get/width/1200/crop/900/noanimate/${url}`;

const clientLogos = [
  clientLogo01,
  clientLogo02,
  clientLogo03,
  clientLogo04,
  clientLogo05,
  clientLogo06,
  clientLogo07,
];

const technologiesTop = [
  {
    name: "React JS",
    icon: <SiReact />,
  },

  {
    name: "Next JS",
    icon: <SiNextdotjs />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "Node JS",
    icon: <SiNodedotjs />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Python",
    icon: <SiPython />,
  },

  {
    name: "WordPress",
    icon: <SiWordpress />,
  },

  {
    name: "Shopify",
    icon: <SiShopify />,
  },

  {
    name: "WooCommerce",
    icon: <SiWoocommerce />,
  },
];

const technologiesBottom = [
  {
    name: "AI Automation",
    icon: <MdOutlineAutoAwesome />,
  },

  {
    name: "Google Ads",
    icon: <SiGoogleads />,
  },

  {
    name: "SEO",
    icon: <SiGoogleads />,
  },

  {
    name: "Social Media",
    icon: <SiFigma />,
  },

  {
    name: "Figma",
    icon: <SiFigma />,
  },

  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },

  {
    name: "Express JS",
    icon: <SiExpress />,
  },

  {
    name: "Java",
    icon: <FaJava />,
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
  },

  {
    name: "GitHub",
    icon: <SiGithub />,
  },
];

const Home = () => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(POPUP_STORAGE_KEY)) {
      return undefined;
    }

    const openPopupOnce = () => {
      if (localStorage.getItem(POPUP_STORAGE_KEY)) {
        return;
      }

      localStorage.setItem(POPUP_STORAGE_KEY, "true");
      setShowPopup(true);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timer);
    };

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      const scrollProgress = window.scrollY / scrollableHeight;

      if (scrollProgress >= 0.45) {
        openPopupOnce();
      }
    };

    const timer = window.setTimeout(openPopupOnce, 13000);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePopupClose = () => {
    localStorage.setItem(POPUP_STORAGE_KEY, "true");
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e, defaultService = "") => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        ...formData,
        service: formData.service || defaultService,
      };

      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      await response.json();

      /* TOAST */

      setToast({
        show: true,
        message: "🎉 Consultation Request Sent Successfully!",
        type: "success",
      });

      /* RESET FORM */

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      /* AUTO CLOSE POPUP */

      setTimeout(() => {
        localStorage.setItem(POPUP_STORAGE_KEY, "true");
        setShowPopup(false);
      }, 1500);

      /* HIDE TOAST */

      setTimeout(() => {
        setToast({
          show: false,
          message: "",
          type: "success",
        });
      }, 4000);
    } catch {
      setToast({
        show: true,
        message: "❌ Something went wrong!",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  {
    /* =========================================
    SERVICES DATA
========================================= */
  }

  const services = [
    {
      tab: "Web Development",

      title: "Modern Website Development Solutions",

      link: "/web-development",

      image: webDevImg,

      desc: "We build fast, scalable, responsive and premium websites for startups, businesses and brands.",

      points: ["Business Website", "E-Commerce Website", "Portfolio Website"],
    },

    {
      tab: "SEO Optimization",

      title: "SEO Optimization",

      link: "/digital-marketing",

      image: seoImg,

      desc: "Boost your search rankings and drive organic traffic with advanced SEO strategies.",

      points: ["On-Page SEO", "Technical SEO", "Keyword Research"],
    },

    {
      tab: "Graphics Designing",

      title: "Creative Graphic Designing",

      link: "/graphics-designing",

      image: graphicsImg,

      desc: "Premium branding and graphic solutions for modern businesses.",

      points: ["Social Media Design", "Brand Identity", "Creative Banners"],
    },

    {
      tab: "Video Editing",

      title: "Professional Video Editing",

      link: "/video-editing",

      image: videoImg,

      desc: "Modern video editing solutions for brands, creators and businesses.",

      points: ["Reels Editing", "YouTube Videos", "Commercial Videos"],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <MainLayout>
      {/* =========================================
    TOAST
========================================= */}
      {toast.show && (
        <div className="fixed top-5 right-5 z-[99999] animate-[toast_0.4s_ease]">
          <div
            className={`
        min-w-[320px]
        max-w-[90vw]
        rounded-2xl
        px-6
        py-5
        shadow-2xl
        backdrop-blur-xl
        border
        flex
        items-start
        gap-4
        ${
          toast.type === "success"
            ? "bg-white border-green-200"
            : "bg-white border-red-200"
        }
      `}
          >
            {/* ICON */}

            <div
              className={`
          w-12 h-12 rounded-full flex items-center justify-center text-xl
          ${
            toast.type === "success"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }
        `}
            >
              {toast.type === "success" ? "✓" : "!"}
            </div>

            {/* TEXT */}

            <div className="flex-1">
              <h4 className="text-lg font-bold text-dark">
                {toast.type === "success" ? "Success" : "Error"}
              </h4>

              <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                {toast.message}
              </p>
            </div>

            {/* CLOSE */}

            <button
              onClick={() =>
                setToast({
                  show: false,
                  message: "",
                  type: "success",
                })
              }
              className="text-gray-400 hover:text-black text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F8FBFF]">
        {/* =========================================
      BACKGROUND
  ========================================= */}

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* BLUE BLUR */}

        <div className="absolute top-[-180px] left-[-140px] w-[500px] h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[120px]" />

        {/* GREEN BLUR */}

        <div className="absolute bottom-[-180px] right-[-140px] w-[450px] h-[450px] bg-[#22C55E]/10 rounded-full blur-[120px]" />

        {/* =========================================
      CONTAINER
  ========================================= */}

        <div className="container-custom relative z-10 py-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center min-h-[85vh]">
            {/* =========================================
          LEFT CONTENT
      ========================================= */}

            <div>
              {/* BADGE */}

              <div
                className="
            inline-flex
            items-center
            gap-3

            px-5
            py-2.5

            rounded-full

            border
            border-[#DCE8FF]

            bg-white

            text-[#1D4ED8]
            text-sm
            font-semibold

            shadow-sm

            mb-7
          "
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                Digital Growth Agency
              </div>

              {/* HEADING */}

              <h1 className="heading-xl max-w-[700px]">
                Build Modern
                <br />
                Digital Experiences
                <span className="block text-[#1D4ED8]">For Your Brand</span>
              </h1>

              {/* DESCRIPTION */}

              <p className="paragraph max-w-xl mt-7">
                EverGrow Digital helps startups and businesses grow with premium
                websites, branding, SEO, social media marketing and modern
                digital solutions built for real business growth.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                {/* PRIMARY BUTTON */}

                <Link
                  to="/contact"
                  className="
              h-[56px]
              px-8

              inline-flex
              items-center
              justify-center

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1840C4]

              transition-all
              duration-300
            "
                >
                  Get Started
                </Link>

                {/* SECONDARY BUTTON */}

                <Link
                  to="/portfolio"
                  className="
              h-[56px]
              px-8

              inline-flex
              items-center
              justify-center

              rounded-full

              border
              border-[#DCE8FF]

              bg-white

              text-[#071120]
              font-semibold

              hover:border-[#1D4ED8]
              hover:text-[#1D4ED8]

              transition-all
              duration-300
            "
                >
                  View Portfolio
                </Link>
              </div>

              {/* STATS */}

              <div className="flex flex-wrap gap-10 mt-14">
                <div>
                  <h3 className="text-[32px] font-black text-[#1D4ED8]">
                    120+
                  </h3>

                  <p className="small-text">Projects Completed</p>
                </div>

                <div>
                  <h3 className="text-[32px] font-black text-[#22C55E]">98%</h3>

                  <p className="small-text">Client Satisfaction</p>
                </div>

                <div>
                  <h3 className="text-[32px] font-black text-[#1D4ED8]">5+</h3>

                  <p className="small-text">Years Experience</p>
                </div>
              </div>
            </div>

            {/* =========================================
          RIGHT CONTENT
      ========================================= */}

            <div className="relative flex justify-center">
              {/* MAIN CARD */}

              <div
                className="
            relative

            w-full
            max-w-[720px]

            rounded-[32px]

            border
            border-[#EAF2FF]

            bg-white

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]

            overflow-hidden
          "
              >
                {/* TOP BAR */}

                <div className="flex items-center gap-2 px-6 pt-5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />

                  <span className="w-3 h-3 rounded-full bg-yellow-400" />

                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* ANIMATION */}

                <div className="p-4 md:p-8">
                  <DotLottieReact
                    src="https://lottie.host/eb2b3892-af76-4259-92dc-c99edcee7248/LYHbcVObNa.lottie"
                    loop
                    autoplay
                  />
                </div>
              </div>

              {/* FLOATING CARD */}

              <div
                className="
            hidden
            lg:flex

            absolute
            -bottom-8
            -left-8

            items-center
            gap-4

            px-5
            py-4

            rounded-[22px]

            bg-white

            border
            border-[#EAF2FF]

            shadow-[0_15px_40px_rgba(15,23,42,0.08)]
          "
              >
                <div
                  className="
              w-14
              h-14

              rounded-2xl

              bg-[#EEF4FF]

              flex
              items-center
              justify-center

              text-2xl
            "
                >
                  📈
                </div>

                <div>
                  <h3 className="text-[26px] font-black text-[#071120]">
                    +245%
                  </h3>

                  <p className="small-text">Revenue Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    Brands & Agencies
========================================= */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        {/* SOFT BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* LIGHT GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* GLOW */}

        <div className="absolute top-[-120px] left-[10%] w-[280px] h-[280px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[10%] w-[280px] h-[280px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* =========================================
      TOP CONTENT
  ========================================= */}

        <div className="container-custom relative z-10 text-center mb-12 md:mb-16">
          {/* BADGE */}

          <div
            className="
        inline-flex
        items-center
        gap-2

        px-5
        py-2.5

        rounded-full

        bg-white

        border
        border-[#E4EEFF]

        text-[#1D4ED8]
        text-sm
        font-semibold

        shadow-sm
      "
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            Trusted By Brands
          </div>

          {/* HEADING */}

          <h2
            className="
        mt-6

        text-[34px]
        sm:text-[44px]
        lg:text-[56px]

        font-black

        leading-[1.05]

        tracking-[-2px]

        text-[#071120]
      "
          >
            Brands &<span className="text-[#1D4ED8]"> Agencies</span>
            <br />
            We Worked With
          </h2>

          {/* TEXT */}

          <p
            className="
        mt-5

        max-w-2xl
        mx-auto

        text-[16px]
        md:text-[18px]

        leading-[1.8]

        text-slate-600
      "
          >
            Helping startups, agencies and businesses grow with modern digital
            experiences and scalable marketing solutions.
          </p>
        </div>

        {/* =========================================
      CLIENT LOGO SLIDER
  ========================================= */}

        <div className="slider relative z-10 overflow-hidden">
          <div className="client-slider-track">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="
            client-logo-card

            flex-shrink-0

            flex
            items-center
            justify-center

            bg-white

            border
            border-[#EAF2FF]

            rounded-[24px]

            transition-all
            duration-300

            hover:-translate-y-1

            hover:shadow-[0_15px_40px_rgba(15,23,42,0.06)]

            hover:border-[#D7E7FF]
          "
              >
                <img
                  src={logo}
                  alt="client-logo"
                  className="
              max-w-[180px]
              md:max-w-[200px]

              max-h-[42px]
              md:max-h-[50px]

              object-contain

              hover:opacity-100

              transition-all
              duration-300
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    WHY CHOOSE US
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#F8FBFF]">
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DCE8FF] text-[#1D4ED8] text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                Growth Driven Execution
              </div>

              <h2 className="mt-7 text-[34px] sm:text-[44px] lg:text-[56px] font-black leading-[1.05] text-[#071120]">
                We Focus On
                <span className="block text-[#1D4ED8]">
                  Real Business Growth
                </span>
              </h2>

              <p className="paragraph mt-6 max-w-xl">
                We combine strategy, clean design, strong technology and
                performance marketing to help your brand attract better leads,
                build trust and convert more customers.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 max-w-xl">
                {[
                  { value: "120+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "5+", label: "Years" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-[#E4EEFF] rounded-[18px] p-4 shadow-[0_12px_32px_rgba(15,23,42,0.04)]"
                  >
                    <h3 className="text-[24px] md:text-[30px] font-black text-[#071120]">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm font-semibold text-[#64748B]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-9">
                <Link
                  to="/contact"
                  className="h-[54px] px-7 inline-flex items-center justify-center rounded-full bg-[#1D4ED8] text-white font-semibold hover:bg-[#1840C4] transition-all duration-300"
                >
                  Get Free Consultation
                </Link>

                <Link
                  to="/services"
                  className="h-[54px] px-7 inline-flex items-center justify-center rounded-full border border-[#DCE8FF] bg-white text-[#071120] font-semibold hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Strategy First",
                  animation: brandStrategyAnim,
                  desc: "Clear positioning, audience research and practical plans before execution begins.",
                },
                {
                  title: "Conversion Websites",
                  animation: webDevAnim,
                  desc: "Fast, responsive websites designed to guide visitors toward real business actions.",
                },
                {
                  title: "Performance Marketing",
                  animation: digitalMarketingAnim,
                  desc: "SEO, ads and content campaigns focused on qualified traffic and measurable growth.",
                },
                {
                  title: "Brand Experience",
                  animation: creativeDesignAnim,
                  desc: "Consistent visuals, UI and content that make your business look credible everywhere.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-[#E4EEFF] rounded-[22px] p-6 md:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:border-[#1D4ED8]/25 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F8FF] border border-[#E4EEFF] flex items-center justify-center overflow-hidden">
                    <Lottie
                      animationData={item.animation}
                      loop
                      autoplay
                      aria-label={item.title}
                      className="w-12 h-12"
                    />
                  </div>

                  <h3 className="mt-6 text-[22px] md:text-[24px] font-bold text-[#071120] leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75] text-[#64748B]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    SERVICES SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          {/* =========================================
        TOP
    ========================================= */}

          <div className="max-w-3xl mx-auto text-center">
            {/* BADGE */}

            <div
              className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2.5

          rounded-full

          bg-white

          border
          border-[#DCE8FF]

          text-[#1D4ED8]
          text-sm
          font-semibold

          shadow-sm
        "
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Our Services
            </div>

            {/* HEADING */}

            <h2 className="heading-lg mt-7">
              Smart Digital Solutions
              <span className="block text-[#1D4ED8]">Designed For Growth</span>
            </h2>

            {/* TEXT */}

            <p className="paragraph max-w-2xl mx-auto mt-6">
              We help startups and businesses grow with premium websites, SEO
              optimization, branding, AI automation and modern digital
              experiences.
            </p>
          </div>

          {/* =========================================
        TABS
    ========================================= */}

          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-14">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                }}
                className={`
            px-5
            md:px-6

            h-[52px]

            rounded-full

            text-sm
            md:text-[15px]

            font-semibold

            transition-all
            duration-300

            ${
              activeTab === index
                ? "bg-[#1D4ED8] text-white shadow-[0_10px_30px_rgba(29,78,216,0.18)]"
                : "bg-white border border-[#E4EEFF] text-[#071120] hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
            }
          `}
              >
                {service.tab}
              </button>
            ))}
          </div>

          {/* =========================================
        CONTENT
    ========================================= */}

          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-16"
          >
            {/* =========================================
          LEFT
      ========================================= */}

            <div className="flex justify-center">
              <div
                className="
      group

      relative

      w-full
      max-w-[580px]

      h-[420px]
      md:h-[520px]

      rounded-[32px]

      border
      border-[#EAF2FF]

      bg-white

      shadow-[0_20px_60px_rgba(15,23,42,0.08)]

      overflow-hidden

      transition-all
      duration-500

      hover:-translate-y-2
      hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
    "
              >
                {/* TOP BAR */}

                <div className="flex items-center gap-2 px-6 pt-5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />

                  <span className="w-3 h-3 rounded-full bg-yellow-400" />

                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* IMAGE PLACEHOLDER */}

                <div
                  className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        p-8
      "
                >
                  {/* BACKGROUND */}

                  <div
                    className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)]

          bg-[size:40px_40px]
        "
                  />

                  {/* IMAGE */}

                  <img
                    src={services[activeTab].image}
                    alt={services[activeTab].title}
                    className="
          relative
          z-10

          w-full
          h-full

          object-contain

          transition-all
          duration-700

          group-hover:scale-[1.03]
        "
                  />
                </div>
              </div>
            </div>

            {/* =========================================
          RIGHT
      ========================================= */}

            <div>
              {/* TITLE */}

              <h3 className="text-[34px] md:text-[48px] font-black leading-[1.1] text-[#071120]">
                {services[activeTab].title}
              </h3>

              {/* DESC */}

              <p className="paragraph mt-7">{services[activeTab].desc}</p>

              {/* POINTS */}

              <div className="space-y-6 mt-10">
                {services[activeTab].points.map((point, index) => (
                  <div
                    key={index}
                    className="
                  group

                  flex
                  gap-5

                  p-5

                  rounded-[24px]

                  bg-white

                  border
                  border-[#EAF2FF]

                  shadow-[0_10px_30px_rgba(15,23,42,0.04)]

                  hover:border-[#D7E7FF]
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
                  >
                    {/* ICON */}

                    <div
                      className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-[#EEF4FF]

                    border
                    border-[#DCE8FF]

                    flex
                    items-center
                    justify-center

                    flex-shrink-0

                    text-[#1D4ED8]
                    text-xl
                    font-bold

                    transition-all
                    duration-300

                    group-hover:bg-[#1D4ED8]
                    group-hover:text-white
                  "
                    >
                      ✓
                    </div>

                    {/* TEXT */}

                    <div>
                      <h4 className="text-[22px] font-bold text-[#071120]">
                        {point}
                      </h4>

                      <p className="paragraph mt-2">
                        Premium solutions designed to help your business grow
                        faster with modern strategies and technologies.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BUTTON */}

              <div className="mt-10">
                <Link
                  to={services[activeTab].link}
                  className="
              inline-flex
              items-center
              justify-center

              h-[56px]
              px-8

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1840C4]

              transition-all
              duration-300
            "
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
    PROCESS SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          {/* =========================================
        TOP
    ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* BADGE */}

            <div
              className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2.5

          rounded-full

          bg-white

          border
          border-[#DCE8FF]

          text-[#1D4ED8]
          text-sm
          font-semibold

          shadow-sm
        "
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Our Process
            </div>

            {/* HEADING */}

            <h2 className="heading-lg mt-7">
              Simple Process
              <span className="block text-[#1D4ED8]">Powerful Results</span>
            </h2>

            {/* TEXT */}

            <p className="paragraph mt-6 max-w-2xl mx-auto">
              We follow a streamlined workflow to create premium digital
              experiences focused on business growth, performance and long-term
              success.
            </p>
          </motion.div>

          {/* =========================================
        STEPS
    ========================================= */}

          <div className="relative mt-20">
            {/* LINE */}

            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-[#DCE8FF] via-[#1D4ED8] to-[#DCE8FF]" />

            {/* GRID */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  desc: "Understanding your business goals, audience and project requirements.",
                },

                {
                  number: "02",
                  title: "Planning",
                  desc: "Creating strategy, wireframes, timelines and project roadmap.",
                },

                {
                  number: "03",
                  title: "Development",
                  desc: "Building scalable digital products using modern technologies.",
                },

                {
                  number: "04",
                  title: "Launch & Growth",
                  desc: "Launching, optimizing and scaling your business for growth.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
              group

              relative

              bg-white

              rounded-[30px]

              border
              border-[#EAF2FF]

              p-8

              shadow-[0_15px_40px_rgba(15,23,42,0.05)]

              hover:-translate-y-2
              hover:border-[#D7E7FF]

              transition-all
              duration-500
            "
                >
                  {/* NUMBER */}

                  <div
                    className="
                relative
                z-10

                w-20
                h-20

                rounded-full

                bg-[#EEF4FF]

                border
                border-[#DCE8FF]

                flex
                items-center
                justify-center

                mx-auto

                text-[28px]
                font-black

                text-[#1D4ED8]

                transition-all
                duration-500

                group-hover:bg-[#1D4ED8]
                group-hover:text-white
              "
                  >
                    {item.number}
                  </div>

                  {/* CONTENT */}

                  <div className="text-center mt-8">
                    <h3 className="text-[28px] font-bold text-[#071120] leading-[1.2]">
                      {item.title}
                    </h3>

                    <p className="paragraph mt-5">{item.desc}</p>
                  </div>

                  {/* HOVER GLOW */}

                  <div
                    className="
                absolute
                inset-0

                rounded-[30px]

                opacity-0

                bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.08),transparent_70%)]

                transition-all
                duration-500

                group-hover:opacity-100
              "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    LATEST BLOG SECTION
========================================= */}
      <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[220px] md:w-[320px] h-[220px] md:h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[220px] md:w-[320px] h-[220px] md:h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          <div
            className="
        grid
        grid-cols-1
        lg:grid-cols-[400px_1fr]

        gap-12
        lg:gap-20

        items-center
      "
          >
            {/* =========================================
          LEFT
      ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* BADGE */}

              <div
                className="
            inline-flex
            items-center
            gap-2

            px-4
            md:px-5

            py-2.5

            rounded-full

            bg-white

            border
            border-[#DCE8FF]

            text-[#1D4ED8]

            text-xs
            md:text-sm

            font-semibold

            shadow-sm
          "
              >
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                Latest Blogs
              </div>

              {/* HEADING */}

              <h2
                className="
            mt-6

            text-[30px]
            sm:text-[38px]
            md:text-[48px]

            font-bold

            leading-[1.1]

            text-[#071120]
          "
              >
                Latest Insights &
                <span className="block text-[#1D4ED8]">Marketing Blogs</span>
              </h2>

              {/* TEXT */}

              <p
                className="
            mt-6

            text-[15px]
            md:text-[16px]

            leading-[1.9]

            text-[#64748B]

            max-w-md

            mx-auto
            lg:mx-0
          "
              >
                Explore SEO strategies, branding ideas, digital marketing tips
                and modern business growth insights from EverGrow Digital.
              </p>

              {/* BUTTON */}

              <div className="mt-8 md:mt-10">
                <Link
                  to="/blog"
                  className="
              inline-flex
              items-center
              justify-center

              h-[52px]
              md:h-[56px]

              px-7
              md:px-8

              rounded-full

              bg-[#1D4ED8]

              text-white

              text-sm
              md:text-[15px]

              font-semibold

              hover:bg-[#1840C4]

              transition-all
              duration-300
            "
                >
                  Explore All Blogs
                </Link>
              </div>
            </motion.div>

            {/* =========================================
          RIGHT SLIDER
      ========================================= */}

            <div className="blog-slider-wrapper overflow-hidden">
              <div className="blog-slider-track">
                {[...blogs, ...blogs].map((blog, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="
                group

                flex-shrink-0

                w-[280px]
                sm:w-[320px]
                md:w-[360px]

                bg-white

                rounded-[24px]
                md:rounded-[30px]

                border
                border-[#EAF2FF]

                overflow-hidden

                shadow-[0_15px_40px_rgba(15,23,42,0.05)]

                hover:-translate-y-2
                hover:border-[#D7E7FF]

                transition-all
                duration-500
              "
                  >
                    {/* IMAGE */}

                    <div className="relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="
                    w-full

                    h-[200px]
                    sm:h-[220px]
                    md:h-[230px]

                    object-cover

                    transition-all
                    duration-700

                    group-hover:scale-105
                  "
                      />

                      {/* CATEGORY */}

                      <div className="absolute top-4 left-4">
                        <span
                          className="
                      bg-white/90
                      backdrop-blur-md

                      px-3
                      md:px-4

                      py-2

                      rounded-full

                      text-[11px]
                      md:text-[13px]

                      font-semibold

                      text-[#1D4ED8]

                      border
                      border-white/40
                    "
                        >
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="p-5 md:p-7">
                      {/* TITLE */}

                      <h3
                        className="
                    text-[22px]
                    sm:text-[24px]
                    md:text-[28px]

                    font-bold

                    text-[#071120]

                    leading-[1.25]

                    transition-all
                    duration-300

                    group-hover:text-[#1D4ED8]
                  "
                      >
                        {blog.title}
                      </h3>

                      {/* DESC */}

                      <p
                        className="
                    mt-4
                    md:mt-5

                    text-[14px]
                    md:text-[15px]

                    leading-[1.8]

                    text-[#64748B]
                  "
                      >
                        {blog.description}
                      </p>

                      {/* BUTTON */}

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="
                    inline-flex
                    items-center

                    mt-6
                    md:mt-7

                    text-[#1D4ED8]

                    text-sm
                    md:text-[15px]

                    font-semibold

                    transition-all
                    duration-300

                    group-hover:translate-x-2
                  "
                      >
                        Read More →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    TECHNOLOGIES SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          {/* =========================================
        TOP
    ========================================= */}

          <div className="max-w-4xl">
            {/* BADGE */}

            <div
              className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2.5

          rounded-full

          bg-white

          border
          border-[#DCE8FF]

          text-[#1D4ED8]
          text-sm
          font-semibold

          shadow-sm
        "
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Technologies We Use
            </div>

            {/* HEADING */}

            <h2 className="heading-lg mt-7 max-w-4xl">
              Modern Technologies
              <span className="block text-[#1D4ED8]">We Use To Build</span>
              Premium Digital Products
            </h2>

            {/* TEXT */}

            <p className="paragraph mt-7 max-w-2xl">
              We use modern frontend, backend, AI and eCommerce technologies to
              create fast, scalable and premium digital experiences.
            </p>
          </div>
        </div>

        {/* =========================================
      FIRST ROW
  ========================================= */}

        <div className="tech-slider-wrapper mt-20">
          <div className="tech-slider-track">
            {[...technologiesTop, ...technologiesTop].map((tech, index) => (
              <div
                key={index}
                className="
              group

              tech-card

              bg-white

              border
              border-[#EAF2FF]

              shadow-[0_15px_40px_rgba(15,23,42,0.05)]

              hover:-translate-y-2
              hover:border-[#D7E7FF]

              transition-all
              duration-500
            "
              >
                {/* ICON */}

                <div
                  className="
                tech-icon

                text-[#1D4ED8]

                transition-all
                duration-500

                group-hover:text-[#22C55E]
                group-hover:scale-110
              "
                >
                  {tech.icon}
                </div>

                {/* NAME */}

                <h3
                  className="
                tech-name

                text-[#071120]

                transition-all
                duration-300

                group-hover:text-[#1D4ED8]
              "
                >
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
      SECOND ROW
  ========================================= */}

        <div className="tech-slider-wrapper mt-6">
          <div className="tech-slider-track reverse-tech-slider">
            {[...technologiesBottom, ...technologiesBottom].map(
              (tech, index) => (
                <div
                  key={index}
                  className="
              group

              tech-card

              bg-white

              border
              border-[#EAF2FF]

              shadow-[0_15px_40px_rgba(15,23,42,0.05)]

              hover:-translate-y-2
              hover:border-[#D7E7FF]

              transition-all
              duration-500
            "
                >
                  {/* ICON */}

                  <div
                    className="
                tech-icon

                text-[#1D4ED8]

                transition-all
                duration-500

                group-hover:text-[#22C55E]
                group-hover:scale-110
              "
                  >
                    {tech.icon}
                  </div>

                  {/* NAME */}

                  <h3
                    className="
                tech-name

                text-[#071120]

                transition-all
                duration-300

                group-hover:text-[#1D4ED8]
              "
                  >
                    {tech.name}
                  </h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =========================================
    RECENT PROJECTS SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          {/* TOP */}

          <div className="max-w-3xl mx-auto text-center">
            {/* BADGE */}

            <div
              className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2.5

          rounded-full

          bg-white

          border
          border-[#DCE8FF]

          text-[#1D4ED8]
          text-sm
          font-semibold

          shadow-sm
        "
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Featured Projects
            </div>

            {/* HEADING */}

            <h2 className="heading-lg mt-7">
              Recent Projects &
              <span className="block text-[#1D4ED8]">Digital Experiences</span>
            </h2>

            {/* TEXT */}

            <p className="paragraph mt-7 max-w-2xl mx-auto">
              Explore premium websites, branding projects and digital
              experiences designed for modern businesses and startups.
            </p>
          </div>

          {/* =========================================
        PROJECT GRID
    ========================================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: "Kidzee Hub",
                category: "Education Website",
                link: "https://kidzeehub.com/",
              },
              {
                title: "Ajjars",
                category: "eCommerce Store",
                link: "https://www.ajjars.com/",
              },
              {
                title: "Career BrainMap",
                category: "Career Platform",
                link: "https://careerbrainmap.com/",
              },
              {
                title: "RankWrap",
                category: "SEO Agency",
                link: "https://rankwrap.com/",
              },
              {
                title: "IPL 2026",
                category: "Sports News",
                link: "https://ipl2026.com.in/",
              },
              {
                title: "DecentSquare",
                category: "Business Website",
                link: "https://decentsquare.com/",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
        group
        relative
        bg-white
        border
        border-[#E4EEFF]
        rounded-[32px]
        overflow-hidden
        shadow-[0_15px_40px_rgba(15,23,42,0.05)]
        hover:-translate-y-2
        hover:border-[#D7E7FF]
        transition-all
        duration-500
      "
              >
                {/* IMAGE */}

                <div className="relative overflow-hidden">
                  <img
                    src={getProjectScreenshotUrl(project.link)}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = getProjectScreenshotFallbackUrl(
                        project.link,
                      );
                    }}
                    className="
            w-full
            h-[260px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071120]/70
            via-transparent
            to-transparent
          "
                  />

                  {/* CATEGORY */}

                  <div className="absolute top-5 left-5">
                    <span
                      className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-white/90
              backdrop-blur-md
              text-[#1D4ED8]
              text-[13px]
              font-semibold
              border
              border-white/40
            "
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-7">
                  {/* TITLE */}

                  <h3
                    className="
            text-[28px]
            font-bold
            text-[#071120]
            leading-[1.2]
            transition-all
            duration-300
            group-hover:text-[#1D4ED8]
          "
                  >
                    {project.title}
                  </h3>

                  {/* TEXT */}

                  <p className="paragraph mt-5">
                    Premium digital solutions crafted for branding, engagement
                    and business growth.
                  </p>

                  {/* LINK */}

                  <div
                    className="
            inline-flex
            items-center
            mt-6
            text-[#1D4ED8]
            font-semibold
            transition-all
            duration-300
            group-hover:translate-x-2
          "
                  >
                    View Project →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    AGENCY VIDEO SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          <div
            className="
        grid
        grid-cols-1
        lg:grid-cols-2

        gap-14
        lg:gap-20

        items-center
      "
          >
            {/* =========================================
          LEFT CONTENT
      ========================================= */}

            <div>
              {/* BADGE */}

              <div
                className="
            inline-flex
            items-center
            gap-2

            px-5
            py-2.5

            rounded-full

            bg-white

            border
            border-[#DCE8FF]

            text-[#1D4ED8]
            text-sm
            font-semibold

            shadow-sm
          "
              >
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                Agency Introduction
              </div>

              {/* HEADING */}

              <h2 className="heading-lg mt-7">
                Creative Digital
                <span className="block text-[#1D4ED8]">Solutions For</span>
                Modern Businesses
              </h2>

              {/* TEXT */}

              <p className="paragraph mt-7 max-w-xl">
                We help startups and businesses grow with premium website
                development, SEO marketing, branding, AI automation and creative
                digital experiences.
              </p>

              {/* FEATURES */}

              <div className="space-y-5 mt-10">
                {[
                  "Modern Website Development",
                  "SEO & Digital Marketing",
                  "Branding & Creative Design",
                  "AI Automation Solutions",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                flex
                items-center
                gap-4
              "
                  >
                    {/* DOT */}

                    <div
                      className="
                  w-10
                  h-10

                  rounded-full

                  bg-[#EEF4FF]

                  border
                  border-[#DCE8FF]

                  flex
                  items-center
                  justify-center

                  text-[#1D4ED8]
                  font-bold
                "
                    >
                      ✓
                    </div>

                    {/* TEXT */}

                    <p
                      className="
                  text-[#071120]

                  text-[16px]
                  md:text-[17px]

                  font-semibold
                "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTON */}

              <Link
                to="/services"
                className="
            mt-10

            inline-flex
            items-center
            justify-center

            px-8
            py-4

            rounded-full

            bg-[#1D4ED8]

            text-white
            font-semibold

            shadow-[0_15px_40px_rgba(29,78,216,0.25)]

            hover:-translate-y-1
            hover:bg-[#1746C9]

            transition-all
            duration-300
          "
              >
                Explore Services
              </Link>
            </div>

            {/* =========================================
          RIGHT VIDEO
      ========================================= */}

            <div className="relative">
              {/* GLOW */}

              <div className="absolute inset-0 bg-[#1D4ED8]/10 blur-[80px] rounded-full scale-90" />

              {/* VIDEO CARD */}

              <div
                className="
            relative

            overflow-hidden

            rounded-[34px]

            border
            border-[#E4EEFF]

            bg-white

            shadow-[0_25px_80px_rgba(15,23,42,0.10)]
          "
              >
                {/* TOP BAR */}

                <div
                  className="
              flex
              items-center
              gap-2

              px-6
              py-5

              border-b
              border-[#EEF4FF]

              bg-[#F8FBFF]
            "
                >
                  <span className="w-3 h-3 rounded-full bg-red-400" />

                  <span className="w-3 h-3 rounded-full bg-yellow-400" />

                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* VIDEO */}

                <div className="relative overflow-hidden">
                  <video
                    src={videoPreviewUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                w-full

                h-[260px]
                sm:h-[380px]
                lg:h-[500px]

                object-cover
              "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#071120]/30
                via-transparent
                to-transparent
              "
                  />
                </div>
              </div>

              {/* FLOATING CARD */}

              <div
                className="
            hidden
            md:flex

            absolute
            -bottom-8
            -left-8

            items-center
            gap-5

            px-6
            py-5

            rounded-3xl

            bg-white/90

            backdrop-blur-xl

            border
            border-[#E4EEFF]

            shadow-[0_20px_60px_rgba(15,23,42,0.10)]
          "
              >
                {/* NUMBER */}

                <div>
                  <h3
                    className="
                text-3xl
                font-bold

                text-[#1D4ED8]
              "
                  >
                    150+
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Projects Delivered
                  </p>
                </div>

                {/* LINE */}

                <div className="w-[1px] h-12 bg-[#E4EEFF]" />

                {/* TEXT */}

                <div>
                  <h4
                    className="
                text-[#071120]
                font-semibold
              "
                  >
                    Premium Digital Agency
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Trusted by modern brands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
   FAQ SECTION
========================================= */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                FAQs
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-dark mt-7 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="paragraph mt-6 text-base md:text-lg">
              Everything you need to know about our digital services, AI
              automation, SEO, and growth solutions.
            </p>
          </div>

          {/* CONTENT */}

          <div
            className="
      mt-16

      grid
      grid-cols-1
      lg:grid-cols-2

      gap-10
      lg:gap-16

      items-center
    "
          >
            {/* LEFT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="
          absolute
          inset-0

          bg-primary/10

          blur-[100px]

          rounded-full
        "
              />

              <img
                src="https://cdn.shopify.com/app-store/listing_images/be8e18fe7fd62b265563360c2986633d/promotional_image/CLHpktmI5_QCEAE=.jpeg?height=720&quality=90&width=1280"
                alt="FAQ"
                className="
            relative

            w-full

            rounded-[30px]

            shadow-2xl

            border
            border-gray-200

            object-cover
          "
              />
            </motion.div>

            {/* RIGHT FAQS */}

            <div className="space-y-5">
              {[
                {
                  question: "Why should I choose GrowthGarage for my business?",
                  answer:
                    "We provide modern websites, AI automation, SEO, and marketing solutions focused on business growth and ROI.",
                },

                {
                  question: "Do you provide SEO services?",
                  answer:
                    "Yes, we provide complete SEO optimization including technical SEO, on-page SEO, keyword research, and ranking strategies.",
                },

                {
                  question: "Can you build eCommerce websites?",
                  answer:
                    "Absolutely. We build Shopify, WooCommerce, and custom eCommerce stores optimized for sales and conversions.",
                },

                {
                  question: "Do you provide AI automation solutions?",
                  answer:
                    "Yes, we create AI chatbots, automated workflows, CRM integrations, and business automation systems.",
                },

                {
                  question: "How long does a website project take?",
                  answer:
                    "Most websites take between 1-4 weeks depending on features, design complexity, and revisions.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="
              group

              bg-[#F8FAFC]

              border
              border-gray-200

              rounded-2xl

              overflow-hidden

              transition-all
              duration-300

              hover:border-primary
            "
                >
                  <summary
                    className="
              list-none

              cursor-pointer

              px-6
              md:px-8

              py-5

              flex
              items-center
              justify-between

              gap-5
            "
                  >
                    <h3
                      className="
                text-base
                md:text-lg

                font-semibold

                text-dark

                leading-relaxed
              "
                    >
                      {faq.question}
                    </h3>

                    <span
                      className="
                min-w-[42px]
                min-h-[42px]

                rounded-full

                bg-primary/10

                flex
                items-center
                justify-center

                text-primary

                text-2xl

                transition-all
                duration-300

                group-open:rotate-45
              "
                    >
                      +
                    </span>
                  </summary>

                  <div
                    className="
              px-6
              md:px-8

              pb-6
            "
                  >
                    <p
                      className="
                text-gray-600

                leading-relaxed

                text-sm
                md:text-base
              "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    CONTACT SECTION
========================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#F8FBFF]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#1D4ED8]/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#22C55E]/10 rounded-full blur-[100px]" />

        {/* CONTAINER */}

        <div className="container-custom relative z-10">
          {/* =========================================
        TOP
    ========================================= */}

          <div className="text-center max-w-3xl mx-auto">
            {/* BADGE */}

            <div
              className="
          inline-flex
          items-center
          gap-2

          px-5
          py-2.5

          rounded-full

          bg-white

          border
          border-[#DCE8FF]

          text-[#1D4ED8]
          text-sm
          font-semibold

          shadow-sm
        "
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Contact Us
            </div>

            {/* HEADING */}

            <h2 className="heading-lg mt-7">
              Let’s Build Something
              <span className="block text-[#1D4ED8]">Amazing Together</span>
            </h2>

            {/* TEXT */}

            <p className="paragraph mt-7 max-w-2xl mx-auto">
              Connect with EverGrow Digital for website development, SEO
              marketing, branding, AI automation and premium digital solutions.
            </p>
          </div>

          {/* =========================================
        CONTACT WRAPPER
    ========================================= */}

          <div
            className="
        grid
        grid-cols-1
        lg:grid-cols-[1fr_420px]

        gap-8

        mt-20
      "
          >
            {/* =========================================
          LEFT CONTACT CARDS
      ========================================= */}

            <div className="grid md:grid-cols-2 gap-8">
              {/* CARD */}

              <div
                className="
            group

            bg-white/90

            backdrop-blur-xl

            border
            border-[#E4EEFF]

            rounded-[32px]

            p-8

            shadow-[0_15px_40px_rgba(15,23,42,0.05)]

            hover:-translate-y-2
            hover:border-[#D7E7FF]

            transition-all
            duration-500
          "
              >
                {/* ICON */}

                <div
                  className="
              w-16
              h-16

              rounded-2xl

              bg-[#EEF4FF]

              border
              border-[#DCE8FF]

              flex
              items-center
              justify-center

              text-3xl

              transition-all
              duration-500

              group-hover:bg-[#1D4ED8]
            "
                >
                  <span className="group-hover:text-white transition-all duration-500">
                    📍
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="text-[32px] font-bold text-[#071120] mt-7">
                  Noida
                </h3>

                {/* TEXT */}

                <p className="paragraph mt-4">
                  Sector-62, Noida, Uttar Pradesh, India
                </p>

                {/* BUTTON */}

                <a
                  href="tel:+919958938205"
                  className="
              inline-flex
              items-center
              justify-center

              mt-8

              h-14

              px-7

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1746C9]

              transition-all
              duration-300
            "
                >
                  +91 9958938205
                </a>
              </div>
              <div
                className="
            group

            bg-white/90

            backdrop-blur-xl

            border
            border-[#E4EEFF]

            rounded-[32px]

            p-8

            shadow-[0_15px_40px_rgba(15,23,42,0.05)]

            hover:-translate-y-2
            hover:border-[#D7E7FF]

            transition-all
            duration-500
          "
              >
                {/* ICON */}

                <div
                  className="
              w-16
              h-16

              rounded-2xl

              bg-[#EEF4FF]

              border
              border-[#DCE8FF]

              flex
              items-center
              justify-center

              text-3xl

              transition-all
              duration-500

              group-hover:bg-[#1D4ED8]
            "
                >
                  <span className="group-hover:text-white transition-all duration-500">
                    📍
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="text-[32px] font-bold text-[#071120] mt-7">
                  Noida
                </h3>

                {/* TEXT */}

                <p className="paragraph mt-4">
                  Sector-62, Noida, Uttar Pradesh, India
                </p>

                {/* BUTTON */}

                <a
                  href="tel:+919958938205"
                  className="
              inline-flex
              items-center
              justify-center

              mt-8

              h-14

              px-7

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              hover:bg-[#1746C9]

              transition-all
              duration-300
            "
                >
                  +91 9958938205
                </a>
              </div>

              {/* CARD */}

              <div
                className="
            group

            bg-white/90

            backdrop-blur-xl

            border
            border-[#E4EEFF]

            rounded-[32px]

            p-8

            shadow-[0_15px_40px_rgba(15,23,42,0.05)]

            hover:-translate-y-2
            hover:border-[#D7E7FF]

            transition-all
            duration-500
          "
              >
                {/* ICON */}

                <div
                  className="
              w-16
              h-16

              rounded-2xl

              bg-[#EEF4FF]

              border
              border-[#DCE8FF]

              flex
              items-center
              justify-center

              text-3xl

              transition-all
              duration-500

              group-hover:bg-[#1D4ED8]
            "
                >
                  <span className="group-hover:text-white transition-all duration-500">
                    💬
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="text-[32px] font-bold text-[#071120] mt-7">
                  Sales Enquiry
                </h3>

                {/* EMAIL */}

                <div className="mt-6">
                  <p className="text-sm text-gray-500">Email Address</p>

                  <a
                    href="mailto:hello@evergrowdigital.com"
                    className="
                inline-block

                mt-2

                text-[#1D4ED8]
                font-semibold

                break-all
              "
                  >
                    hello@evergrowdigital.com
                  </a>
                </div>

                {/* WHATSAPP */}

                <div className="mt-6">
                  <p className="text-sm text-gray-500">WhatsApp</p>

                  <a
                    href="https://wa.me/919958938205"
                    target="_blank"
                    rel="noreferrer"
                    className="
                inline-block

                mt-2

                text-[#1D4ED8]
                font-semibold
              "
                  >
                    +91 9958938205
                  </a>
                </div>
              </div>
            </div>

            {/* =========================================
          RIGHT FORM
      ========================================= */}

            <div
              className="
          relative

          bg-white/90

          backdrop-blur-xl

          border
          border-[#E4EEFF]

          rounded-[36px]

          p-8
          md:p-10

          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        "
            >
              {/* TOP */}

              <div>
                <h3 className="text-[34px] font-bold text-[#071120]">
                  Quick Contact
                </h3>

                <p className="paragraph mt-4">
                  Fill out the form and our team will connect with you shortly.
                </p>
              </div>

              {/* FORM */}

              <form
                onSubmit={(event) => handleSubmit(event, "Quick Contact")}
                className="space-y-5 mt-10"
              >
                {/* INPUT */}

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
              w-full
              h-14

              rounded-2xl

              border
              border-[#DCE8FF]

              bg-[#F8FBFF]

              px-5

              outline-none

              focus:border-[#1D4ED8]

              transition-all
              duration-300
            "
                />

                {/* INPUT */}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="
              w-full
              h-14

              rounded-2xl

              border
              border-[#DCE8FF]

              bg-[#F8FBFF]

              px-5

              outline-none

              focus:border-[#1D4ED8]

              transition-all
              duration-300
            "
                />

                {/* INPUT */}

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
              w-full
              h-14

              rounded-2xl

              border
              border-[#DCE8FF]

              bg-[#F8FBFF]

              px-5

              outline-none

              focus:border-[#1D4ED8]

              transition-all
              duration-300
            "
                />

                {/* TEXTAREA */}

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="
              w-full

              rounded-2xl

              border
              border-[#DCE8FF]

              bg-[#F8FBFF]

              px-5
              py-4

              outline-none

              resize-none

              focus:border-[#1D4ED8]

              transition-all
              duration-300
            "
                />

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
              w-full
              h-14

              rounded-full

              bg-[#1D4ED8]

              text-white
              font-semibold

              shadow-[0_15px_40px_rgba(29,78,216,0.20)]

              hover:bg-[#1746C9]
              hover:-translate-y-1

              transition-all
              duration-300
            "
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    SCROLL POPUP
========================================= */}

      {showPopup && (
        <div
          className="popup-overlay"
          role="presentation"
          onClick={handlePopupClose}
        >
          {/* POPUP */}

          <div
            className="popup-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="strategy-popup-title"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={handlePopupClose}
              className="popup-close-btn"
              aria-label="Close popup"
            >
              ✕
            </button>

            {/* TOP */}

            <div className="popup-top">
              <div className="popup-badge">Free Strategy Call</div>

              <h2 id="strategy-popup-title" className="popup-title">
                Let’s Build Something Powerful
              </h2>

              <p className="popup-text">
                Get a modern high-converting website for your business,
                startup or brand.
              </p>
            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit} className="popup-form">
              {/* NAME */}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="popup-input"
                required
              />

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="popup-input"
                required
              />

              {/* PHONE */}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="popup-input"
                required
              />

              {/* SERVICE */}

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="popup-input"
                required
              >
                <option value="" disabled>
                  Select Service
                </option>

                <option value="Web Development">Web Development</option>

                <option value="SEO Optimization">SEO Optimization</option>

                <option value="Digital Marketing">Digital Marketing</option>

                <option value="Graphics Designing">Graphics Designing</option>

                <option value="Video Editing">Video Editing</option>
              </select>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="popup-submit-btn"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>

            {/* CONTACT */}

            <div className="popup-contact">
              <a href="tel:+919876543210" className="popup-contact-link">
                +91 9876543210
              </a>

              <span className="popup-divider" />

              <a
                href="mailto:hello@evergrowdigital.com"
                className="popup-contact-link"
              >
                hello@evergrowdigital.com
              </a>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
