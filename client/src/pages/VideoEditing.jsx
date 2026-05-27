import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineCamera,
  HiOutlineFilm,
  HiOutlineLightningBolt,
  HiOutlinePlay,
  HiOutlinePresentationChartLine,
  HiOutlineSparkles,
  HiOutlineVideoCamera,
} from "react-icons/hi";

import MainLayout from "../layouts/MainLayout";
import { videoPreviewUrl } from "../data/media";

const editingServices = [
  {
    title: "Reels Editing",
    icon: <HiOutlineVideoCamera />,
    desc:
      "Fast-paced short videos with hooks, captions, transitions and trend-ready pacing.",
  },
  {
    title: "YouTube Videos",
    icon: <HiOutlineFilm />,
    desc:
      "Clean long-form edits with storytelling, cuts, b-roll, audio balancing and thumbnails support.",
  },
  {
    title: "Motion Graphics",
    icon: <HiOutlineSparkles />,
    desc:
      "Animated text, lower thirds, brand elements and visual effects that make videos feel premium.",
  },
  {
    title: "Advertisement Videos",
    icon: <HiOutlinePresentationChartLine />,
    desc:
      "Conversion-focused ad edits for Meta, Google, YouTube and product promotion campaigns.",
  },
  {
    title: "Promo Videos",
    icon: <HiOutlineCamera />,
    desc:
      "Business promos, event highlights, product launches and service explainers with strong impact.",
  },
  {
    title: "Short Form Content",
    icon: <HiOutlineLightningBolt />,
    desc:
      "High-retention clips for Instagram, YouTube Shorts, Facebook and LinkedIn content calendars.",
  },
];

const tools = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "CapCut Pro",
  "Canva",
  "Audition",
];

const projects = [
  {
    title: "Fitness Reels Pack",
    category: "Short Form",
    desc:
      "A high-energy reel series with beat cuts, bold captions and transformation-focused storytelling.",
    gradient: "from-[#1D4ED8] via-[#7C3AED] to-[#EC4899]",
  },
  {
    title: "Restaurant Promo Video",
    category: "Business Promo",
    desc:
      "A food brand promo with cinematic cuts, menu highlights, offer frames and social-ready exports.",
    gradient: "from-[#F97316] via-[#EF4444] to-[#FACC15]",
  },
  {
    title: "Product Ad Campaign",
    category: "Ad Creative",
    desc:
      "Performance-focused product videos with problem-solution flow, CTA screens and multiple ratios.",
    gradient: "from-[#071120] via-[#0F766E] to-[#22C55E]",
  },
];

const process = [
  {
    step: "01",
    title: "Footage Review",
    desc: "We review raw clips, brand references, script, music mood and platform requirements.",
  },
  {
    step: "02",
    title: "Rough Cut",
    desc: "We build the story structure, select the best shots and set the video pacing.",
  },
  {
    step: "03",
    title: "Effects & Polish",
    desc: "We add captions, transitions, motion graphics, sound design and color correction.",
  },
  {
    step: "04",
    title: "Final Export",
    desc: "You get ready-to-upload files in the required sizes for each platform.",
  },
];

const deliverables = [
  "Vertical reels",
  "YouTube exports",
  "Captioned versions",
  "Ad-ready ratios",
  "Thumbnail frames",
  "Revision support",
];

const VideoEditing = () => {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#22C55E]/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                  Video Editing
                </p>
              </div>

              <h1 className="text-[40px] sm:text-[56px] md:text-[76px] font-bold font-outfit text-dark leading-[1.02] mt-8">
                Professional Video Editing Services
              </h1>

              <p className="paragraph mt-7 text-[15px] md:text-[18px] max-w-2xl">
                High-quality editing for reels, ads, YouTube videos and
                business promotions with smooth cuts, premium effects and
                platform-ready exports.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/contact" className="gradient-btn">
                  Start Editing Project
                  <HiArrowRight />
                </Link>

                <Link
                  to="/portfolio"
                  className="h-[56px] px-8 rounded-full border border-gray-200 bg-white text-[#071120] font-semibold flex items-center justify-center hover:bg-[#071120] hover:text-white transition-all duration-300"
                >
                  View Work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[90px] rounded-full" />

              <div className="relative overflow-hidden rounded-[36px] border border-gray-200 bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
                <div className="relative overflow-hidden rounded-[28px] bg-[#071120]">
                  <video
                    src={videoPreviewUrl}
                    className="w-full h-[360px] md:h-[520px] object-cover opacity-90"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/70 via-transparent to-transparent" />

                  <div className="absolute left-6 bottom-6 right-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-[2px]">
                        Preview Timeline
                      </p>

                      <h3 className="text-white text-[26px] font-bold mt-2">
                        Reels, Ads & Promos
                      </h3>
                    </div>

                    <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center text-2xl shrink-0">
                      <HiOutlinePlay />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Editing Services
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Video Content Built For Views And Leads
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {editingServices.map((item) => (
              <div
                key={item.title}
                className="group bg-[#F8FAFC] rounded-[30px] p-8 border border-gray-200 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(2,6,23,0.06)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-dark mt-7">
                  {item.title}
                </h3>

                <p className="paragraph mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  Tools We Use
                </p>
              </div>

              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
                Edited With Professional Production Tools
              </h2>

              <p className="paragraph mt-6 max-w-xl">
                We use the right software for each type of edit, from social
                reels and YouTube videos to motion graphics and ad creatives.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-white rounded-[28px] p-7 border border-gray-200 shadow-[0_12px_40px_rgba(15,23,42,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-primary flex items-center justify-center text-3xl">
                    <HiOutlineFilm />
                  </div>

                  <h3 className="text-[22px] font-bold text-dark mt-6">
                    {tool}
                  </h3>

                  <p className="text-gray-500 text-[14px] leading-[1.8] mt-3">
                    Used for editing, effects, audio, color and platform
                    exports.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Recent Projects
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Work We Have Edited Recently
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-[#F8FAFC] rounded-[34px] overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)] transition-all duration-300"
              >
                <div
                  className={`h-[260px] bg-gradient-to-br ${project.gradient} p-7 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="absolute -right-14 -top-14 w-44 h-44 rounded-full bg-white/15" />
                  <div className="absolute right-10 bottom-10 w-24 h-24 rounded-[28px] bg-white/15 rotate-12" />

                  <span className="relative w-fit px-4 py-2 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-[2px]">
                    {project.category}
                  </span>

                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-white/15 border border-white/20 text-white flex items-center justify-center text-2xl mb-5">
                      <HiOutlinePlay />
                    </div>

                    <h3 className="text-white text-[30px] font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="paragraph">{project.desc}</p>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-3 text-primary font-semibold mt-7 group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Project
                    <HiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  Workflow
                </p>
              </div>

              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
                Clear Editing Process From Raw Footage To Final Video
              </h2>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {deliverables.map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      <HiOutlineBadgeCheck />
                    </span>

                    <p className="text-[#071120] font-semibold text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-[28px] p-7 border border-gray-200 flex gap-6 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-all duration-300"
                >
                  <div className="text-[44px] leading-none font-bold text-primary/20">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-[24px] font-bold text-dark">
                      {item.title}
                    </h3>

                    <p className="paragraph mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[40px] bg-[#071120] px-8 md:px-16 py-16 md:py-20">
            <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-primary/20 blur-[110px]" />
            <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-[#22C55E]/10 blur-[110px]" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-[3px] text-[12px]">
                  Ready To Create Better Videos?
                </p>

                <h2 className="text-[36px] sm:text-[50px] md:text-[64px] font-bold font-outfit text-white leading-[1.05] mt-5">
                  Send Raw Clips And Get A Polished Final Edit
                </h2>

                <p className="text-white/70 text-[15px] md:text-[18px] leading-[1.9] mt-6 max-w-2xl">
                  Share your content goal and we will edit videos that look
                  sharp, hold attention and are ready for posting.
                </p>
              </div>

              <Link
                to="/contact"
                className="h-[58px] px-9 rounded-full bg-white text-[#071120] font-semibold flex items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Consultation
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default VideoEditing;
