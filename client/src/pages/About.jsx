import MainLayout from "../layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";
import InfiniteMenu from "../components/common/InfiniteMenu";

import { HiCheckCircle, HiArrowRight } from "react-icons/hi2";
import aboutHeaderImage from "../assets/about/about-header-image.png";
import work1 from "../assets/WorkCultureSection/work-1.webp";
import work2 from "../assets/WorkCultureSection/work-2.webp";
import work3 from "../assets/WorkCultureSection/work-3.webp";
import work4 from "../assets/WorkCultureSection/work-4.webp";

const About = () => {
  const location = useLocation();
  const workCultureItems = [
    {
      image: work1,

      title: "Creative Team",

      description: "Passionate minds building modern digital experiences.",

      link: "/contact",
    },

    {
      image: work2,

      title: "Smart Workspace",

      description: "Focused environment designed for innovation and growth.",

      link: "/about",
    },

    {
      image: work3,

      title: "Collaboration",

      description: "Strong teamwork that helps brands scale faster.",

      link: "/services",
    },

    {
      image: work4,

      title: "Digital Experts",

      description: "Premium strategy, branding and development solutions.",

      link: "/portfolio",
    },
  ];
  return (
    <MainLayout>
      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="relative overflow-hidden bg-[#071120] py-20 md:py-28">
        {/* BG EFFECT */}

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[120px]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}

            <div>
              {/* BADGE */}

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  About EverGrow Digital
                </p>
              </div>

              {/* TITLE */}

              <h1 className="text-[34px] sm:text-[42px] md:text-[58px] font-bold text-white leading-[1.08] tracking-[-2px] mt-7">
                Helping Brands Grow Faster Online
              </h1>

              {/* TEXT */}

              <p className="text-white/70 text-[15px] md:text-[17px] leading-[1.9] mt-7 max-w-[620px]">
                EverGrow Digital helps startups, creators and businesses grow
                with modern websites, SEO, branding, marketing and scalable
                digital solutions.
              </p>

              {/* POINTS */}

              <div className="space-y-4 mt-10">
                {[
                  "Modern Responsive Websites",

                  "SEO & Performance Marketing",

                  "Creative Branding Solutions",

                  "Professional Video Editing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <HiCheckCircle className="text-primary text-[20px] flex-shrink-0" />

                    <p className="text-white text-[15px] md:text-[16px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="h-[52px] px-7 rounded-full bg-primary text-white font-medium hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                  Get Free Consultation
                  <HiArrowRight />
                </button>

                <button className="h-[52px] px-7 rounded-full border border-white/15 text-white hover:bg-white hover:text-[#071120] transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              {/* IMAGE */}

              <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <img
                  src={aboutHeaderImage}
                  alt="About EverGrow Digital"
                  className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"
                />
              </div>

              {/* FLOAT CARD */}

              <div className="absolute bottom-5 left-5 bg-white rounded-[22px] p-5 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                <h3 className="text-[34px] md:text-[42px] font-bold text-primary">
                  250+
                </h3>

                <p className="text-gray-500 text-sm md:text-base mt-2">
                  Successful Projects Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
    DYNAMIC BREADCRUMB
========================================= */}

      <section className="border-b border-gray-200 bg-white py-4">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-[13px] md:text-[14px] text-gray-500 flex-wrap">
            {/* HOME */}

            <Link
              to="/"
              className="hover:text-primary transition-all duration-300"
            >
              Home
            </Link>

            {/* SLASH */}

            <span>/</span>

            {/* CURRENT PAGE */}

            <span className="text-primary font-medium">
              {location.pathname
                .replace("/", "")
                .replace("-", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase()) || "Home"}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================
          STATS SECTION
      ========================================= */}

      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="absolute left-0 top-20 w-[280px] h-[280px] bg-primary/10 blur-[110px]" />

        <div className="container-custom relative z-10">
          {/* TOP */}

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-end">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  Why Choose Us
                </p>
              </div>

              <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-[#071120] leading-[1.08] mt-7 max-w-2xl">
                We Focus On Real Business Growth
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.9] max-w-2xl">
                We combine strategy, design, technology and marketing into one
                clear growth system, so every digital touchpoint is built to
                attract better leads and convert them into customers.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-7 max-w-xl">
                {[
                  { value: "250+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "5+", label: "Years" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[18px] border border-gray-200 bg-[#F8FAFC] px-4 py-4"
                  >
                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#071120] leading-none">
                      {item.value}
                    </h3>

                    <p className="text-gray-500 text-[12px] md:text-[13px] mt-2 leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARDS */}

          <div className="grid lg:grid-cols-3 gap-6 mt-14 md:mt-16">
            {[
              {
                number: "01",

                title: "Growth Strategy",

                desc: "Clear roadmaps based on your goals, audience, offer and competitive position.",

                points: ["Market research", "Conversion planning", "Channel strategy"],
              },

              {
                number: "02",

                title: "Premium Execution",

                desc: "High-quality websites, content and campaigns built with consistent brand standards.",

                points: ["Modern UI systems", "SEO-ready structure", "Fast delivery cycles"],
              },

              {
                number: "03",

                title: "Measurable Results",

                desc: "Every decision is connected to performance, from traffic quality to lead generation.",

                points: ["Lead tracking", "Performance reviews", "Continuous optimization"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-gray-200
                  bg-white
                  p-7
                  md:p-8
                  shadow-[0_18px_50px_rgba(2,6,23,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-[0_24px_70px_rgba(2,6,23,0.09)]
                "
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#1D4ED8] to-[#22C55E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center justify-between gap-4">
                  <div className="w-[66px] h-[66px] rounded-[22px] bg-[#071120] text-white flex items-center justify-center font-bold text-[18px]">
                    {item.number}
                  </div>

                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <HiArrowRight />
                  </div>
                </div>

                <h3 className="text-[24px] md:text-[30px] font-bold text-[#071120] mt-8 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[14px] md:text-[16px] leading-[1.85] mt-4">
                  {item.desc}
                </p>

                <div className="space-y-3 mt-7 pt-7 border-t border-gray-100">
                  {item.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-center gap-3">
                      <HiCheckCircle className="text-primary text-[20px] flex-shrink-0" />

                      <p className="text-[#071120] text-[14px] md:text-[15px] font-medium leading-snug">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PROOF STRIP */}

          <div className="mt-6 rounded-[28px] border border-gray-200 bg-[#F8FAFC] p-5 md:p-7">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Business-first planning before design",
                "Responsive builds with strong performance",
                "Long-term support after launch",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-[20px] bg-white px-5 py-4 border border-gray-100"
                >
                  <HiCheckCircle className="text-primary text-[22px] flex-shrink-0" />

                  <p className="text-[#071120] text-[14px] md:text-[15px] font-semibold leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    OUR COLLABORATIONS SECTION
========================================= */}

      <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute top-[-120px] right-[-80px] w-[360px] h-[360px] bg-primary/20 blur-[130px]" />

        <div className="absolute bottom-[-140px] left-[-90px] w-[360px] h-[360px] bg-[#1D4ED8]/15 blur-[130px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            {/* LEFT */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-[#071120]
                p-7
                sm:p-9
                md:p-10
                shadow-[0_28px_90px_rgba(2,6,23,0.22)]
              "
            >
              <div className="absolute top-0 right-0 w-[230px] h-[230px] bg-primary/20 blur-[90px]" />

              <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-[#1D4ED8]/20 blur-[90px]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                  <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                    Official Growth Partner
                  </p>
                </div>

                <h2 className="text-[32px] sm:text-[42px] md:text-[58px] font-bold text-white leading-[1.08] mt-8">
                  Trusted Industry Collaborations
                </h2>

                <p className="text-white/70 text-[15px] md:text-[17px] leading-[1.9] mt-6">
                  We proudly collaborate with leading marketing agencies to
                  deliver high-performance digital growth solutions for brands
                  worldwide.
                </p>

                <div className="relative mt-9 rounded-[28px] border border-white/10 bg-white/[0.06] p-5 md:p-6 backdrop-blur-xl">
                  <div className="absolute left-[38px] right-[38px] top-[50%] h-px bg-gradient-to-r from-primary/0 via-primary/60 to-[#1D4ED8]/0" />

                  <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/10 p-5">
                      <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[2px]">
                        Agency
                      </p>

                      <h3 className="text-white text-[22px] md:text-[26px] font-bold mt-2">
                        EverGrow
                      </h3>
                    </div>

                    <div className="relative w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_35px_rgba(19,196,163,0.55)]">
                      <HiArrowRight />
                    </div>

                    <div className="rounded-[24px] border border-primary/25 bg-primary/15 p-5">
                      <p className="text-primary text-[11px] font-semibold uppercase tracking-[2px]">
                        Partner
                      </p>

                      <h3 className="text-white text-[22px] md:text-[26px] font-bold mt-2">
                        Rank Wrap
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
                  {[
                    { value: "120+", label: "Projects" },
                    { value: "18M+", label: "Reach" },
                    { value: "240+", label: "Campaigns" },
                    { value: "90+", label: "Clients" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[20px] border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                    >
                      <h3 className="text-white text-[24px] md:text-[28px] font-bold leading-none">
                        {item.value}
                      </h3>

                      <p className="text-white/50 text-[12px] md:text-[13px] mt-2 leading-snug">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative min-h-[560px]">
              <div className="absolute left-1/2 top-1/2 w-[70%] h-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px]" />

              <div className="absolute left-[8%] top-[5%] w-[62%] overflow-hidden rounded-[30px] border border-white shadow-[0_24px_70px_rgba(2,6,23,0.16)] transition-all duration-500 hover:-translate-y-3 hover:rotate-0 rotate-[-2deg]">
                <img
                  src={work1}
                  alt="Digital campaign collaboration"
                  className="h-[260px] w-full object-cover"
                />
              </div>

              <div className="absolute right-[2%] top-[18%] w-[42%] overflow-hidden rounded-[26px] border border-white shadow-[0_24px_70px_rgba(2,6,23,0.14)] transition-all duration-500 hover:-translate-y-3 hover:rotate-0 rotate-[3deg]">
                <img
                  src={work2}
                  alt="Marketing strategy workshop"
                  className="h-[230px] w-full object-cover"
                />
              </div>

              <div className="absolute left-[2%] bottom-[8%] w-[46%] overflow-hidden rounded-[26px] border border-white shadow-[0_24px_70px_rgba(2,6,23,0.14)] transition-all duration-500 hover:-translate-y-3 hover:rotate-0 rotate-[2deg]">
                <img
                  src={work3}
                  alt="Creative agency collaboration"
                  className="h-[240px] w-full object-cover"
                />
              </div>

              <div className="absolute right-[8%] bottom-[2%] w-[58%] overflow-hidden rounded-[30px] border border-white shadow-[0_24px_70px_rgba(2,6,23,0.16)] transition-all duration-500 hover:-translate-y-3 hover:rotate-0 rotate-[-3deg]">
                <img
                  src={work4}
                  alt="Digital growth project planning"
                  className="h-[255px] w-full object-cover"
                />
              </div>

              <div className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/50 bg-white/80 p-6 text-center shadow-[0_28px_80px_rgba(2,6,23,0.18)] backdrop-blur-xl">
                <div className="mx-auto flex w-16 h-16 items-center justify-center rounded-[22px] bg-[#071120] text-white text-[24px] font-bold">
                  RW
                </div>

                <p className="text-primary text-[11px] font-bold uppercase tracking-[2px] mt-5">
                  Featured Partner
                </p>

                <h3 className="text-[#071120] text-[28px] font-bold mt-2">
                  Rank Wrap
                </h3>

                <p className="text-gray-500 text-[13px] leading-[1.7] mt-3">
                  Strategic marketing collaboration for scalable brand growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
    TEAM SECTION
========================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            {/* LEFT */}

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  Our Team
                </p>
              </div>

              <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-[#071120] leading-[1.08] tracking-[-2px] mt-7">
                Meet The Creative Minds
              </h2>
            </div>

            {/* RIGHT */}

            <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.9] max-w-xl">
              Passionate professionals helping businesses grow with modern
              websites, branding, SEO and digital marketing strategies.
            </p>
          </div>

          {/* TEAM GRID */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {[
              {
                name: "Gaurav Mishra",

                role: "Digital Strategist",

                desc: "Helping brands scale through performance marketing and SEO.",

                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
              },

              {
                name: "Shrish Agrawal",

                role: "AI & ML Specialist",

                desc: "Building AI systems and automation workflows for businesses.",

                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
              },

              {
                name: "Abhishek Agrawal",

                role: "Full Stack Developer",

                desc: "Developing scalable websites and premium digital products.",

                image:
                  "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
              },

              {
                name: "Sujal Mishra",

                role: "Marketing Head",

                desc: "Focused on growth strategies, branding and lead generation.",

                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="
            relative
            overflow-hidden
            rounded-[28px]
            group
            h-[420px]
            md:h-[520px]
          "
              >
                {/* IMAGE */}

                <img
                  src={member.image}
                  alt={member.name}
                  className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
                />

                {/* DARK OVERLAY */}

                <div
                  className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#071120]
              via-[#071120]/20
              to-transparent
            "
                />

                {/* DEFAULT CONTENT */}

                <div
                  className="
              absolute
              bottom-0
              left-0
              w-full
              p-6
              md:p-8
              transition-all
              duration-500
              group-hover:opacity-0
            "
                >
                  <h3 className="text-white text-[24px] md:text-[30px] font-bold leading-tight">
                    {member.name}
                  </h3>

                  <p className="text-white/70 mt-2 text-[15px] md:text-[16px]">
                    {member.role}
                  </p>
                </div>

                {/* HOVER CARD */}

                <div
                  className="
              absolute
              inset-0
              bg-primary
              p-6
              md:p-8
              flex
              flex-col
              justify-between

              translate-y-full
              group-hover:translate-y-0

              transition-all
              duration-500
            "
                >
                  {/* TOP */}

                  <div>
                    <h3 className="text-white text-[24px] md:text-[30px] font-bold leading-tight">
                      {member.name}
                    </h3>

                    <p className="text-white/80 mt-2 text-[15px] md:text-[16px]">
                      {member.role}
                    </p>

                    <p className="text-white/90 leading-[1.9] text-[14px] md:text-[16px] mt-10">
                      {member.desc}
                    </p>
                  </div>

                  {/* SOCIALS */}

                  <div className="flex items-center gap-4">
                    {["in", "tw", "ig"].map((social, i) => (
                      <div
                        key={i}
                        className="
                      w-[52px]
                      h-[52px]
                      rounded-full
                      border
                      border-white/20

                      flex
                      items-center
                      justify-center

                      text-white
                      font-semibold

                      hover:bg-white
                      hover:text-primary

                      transition-all
                      duration-300

                      cursor-pointer
                    "
                      >
                        {social}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    WORK CULTURE SECTION
========================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Work Culture
              </p>
            </div>

            <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-bold text-[#071120] leading-[1.08] tracking-[-2px] mt-7">
              Creative Environment
              <br />
              Built For Innovation
            </h2>

            <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.9] mt-6">
              We believe creativity, teamwork and innovation are the foundation
              of modern digital growth.
            </p>
          </div>

          {/* 3D SLIDER */}

          <div className="mt-20 h-[650px] md:h-[750px] rounded-[32px] overflow-hidden border border-gray-200 bg-white">
            <InfiniteMenu items={workCultureItems} scale={1} />
          </div>
        </div>
      </section>

      {/* =========================================
    PREMIUM CTA SECTION
========================================= */}

      <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24">
        {/* BLUR EFFECT */}

        <div className="absolute top-0 left-0 w-[260px] h-[260px] bg-primary/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-primary/10 blur-[100px]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="container-custom relative z-10">
          <div
            className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-gray-200
        bg-white
        px-6
        sm:px-10
        md:px-16
        py-14
        md:py-20
        shadow-[0_20px_60px_rgba(2,6,23,0.06)]
      "
          >
            {/* SMALL BLUR */}

            <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-primary/10 blur-[90px]" />

            {/* CONTENT */}

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              {/* BADGE */}

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  Start Growing Today
                </p>
              </div>

              {/* TITLE */}

              <h2
                className="
            text-[30px]
            sm:text-[42px]
            md:text-[58px]
            font-bold
            text-[#071120]
            leading-[1.08]
            tracking-[-2px]
            mt-8
          "
              >
                Let’s Build Something
                <br />
                Amazing Together
              </h2>

              {/* TEXT */}

              <p
                className="
            text-gray-500
            text-[15px]
            md:text-[18px]
            leading-[1.9]
            mt-7
            max-w-2xl
            mx-auto
          "
              >
                We help startups, creators and businesses grow with modern
                websites, branding, SEO and premium digital experiences designed
                for long-term success.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {/* PRIMARY BTN */}

                <button
                  className="
              h-[54px]
              px-8
              rounded-full
              bg-primary
              text-white
              font-medium

              flex
              items-center
              gap-3

              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(37,99,235,0.25)]

              transition-all
              duration-300
            "
                >
                  Start Your Project
                  <HiArrowRight />
                </button>

                {/* SECONDARY BTN */}

                <button
                  className="
              h-[54px]
              px-8
              rounded-full

              border
              border-gray-200

              text-[#071120]
              font-medium

              hover:bg-[#071120]
              hover:text-white
              hover:border-[#071120]

              transition-all
              duration-300
            "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
