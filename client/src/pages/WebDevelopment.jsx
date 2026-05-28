import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import webHero from "../assets/web-development/hero.webp";

import {
  HiArrowRight,
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineShoppingCart,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineCube,
  HiOutlineTemplate,
  HiOutlineChip,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
import {
  SiReact,
  SiWordpress,
  SiShopify,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiVercel,
  SiVuedotjs,
  SiTypescript,
  SiFramer,
  SiExpress,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiWebflow,
  SiRender,
  SiNetlify,
} from "react-icons/si";

const services = [
  {
    title: "Business Website",

    icon: <HiOutlineGlobeAlt />,

    logo: <SiReact />,

    tag: "React",

    desc: "Professional business websites with modern UI/UX and premium performance.",
  },

  {
    title: "WordPress Development",

    icon: <SiWordpress />,

    logo: <HiOutlineTemplate />,

    tag: "WordPress",

    desc: "Custom WordPress websites with fast speed, SEO optimization and scalability.",
  },

  {
    title: "Shopify Store",

    icon: <SiShopify />,

    logo: <HiOutlineShoppingCart />,

    tag: "Shopify",

    desc: "Modern Shopify stores designed for conversions and eCommerce growth.",
  },

  {
    title: "Custom Web App",

    icon: <SiNextdotjs />,

    logo: <HiOutlineCube />,

    tag: "Next JS",

    desc: "Scalable web applications using modern technologies and secure architecture.",
  },

  {
    title: "AI Tools & SaaS",

    icon: <HiOutlineChip />,

    logo: <SiNodedotjs />,

    tag: "Node JS",

    desc: "AI-powered tools and SaaS platforms built for automation and productivity.",
  },

  {
    title: "Portfolio Website",

    icon: <SiTailwindcss />,

    logo: <HiOutlineCode />,

    tag: "Tailwind",

    desc: "Creative portfolio websites for creators, agencies and professionals.",
  },

  {
    title: "Landing Pages",

    icon: <HiOutlineLightningBolt />,

    logo: <HiOutlineGlobeAlt />,

    tag: "Conversion",

    desc: "High-converting landing pages optimized for ads and marketing campaigns.",
  },

  {
    title: "Responsive Design",

    icon: <HiOutlineDeviceMobile />,

    logo: <SiTailwindcss />,

    tag: "Mobile UI",

    desc: "Fully responsive and mobile-friendly digital experiences.",
  },

  {
    title: "Dashboard Development",

    icon: <HiOutlineDesktopComputer />,

    logo: <SiReact />,

    tag: "Dashboard",

    desc: "Modern admin dashboards and CRM systems with premium UI.",
  },
];

const projectShowcases = [
  {
    title: "Business Growth Website",
    category: "Corporate Website",
    desc: "A premium lead-generation website built for speed, trust and conversion-focused service pages.",
    tech: ["React", "Tailwind CSS", "SEO", "Analytics"],
    metrics: "42% lead uplift",
  },
  {
    title: "Online Store Platform",
    category: "eCommerce",
    desc: "A scalable shopping experience with optimized product pages, checkout flow and campaign landing pages.",
    tech: ["Shopify", "Custom UI", "Payments", "CRM"],
    metrics: "2.4x sales growth",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    desc: "A clean admin dashboard with role-based views, data cards, forms and responsive product workflows.",
    tech: ["React", "Node JS", "MongoDB", "REST API"],
    metrics: "60% faster workflow",
  },
];

const technologyGroups = [
  {
    category: "Frontend Technologies",
    desc: "Interfaces that feel fast, polished and easy to use.",
    color: "from-[#38BDF8] to-[#1D4ED8]",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    category: "Backend Technologies",
    desc: "Reliable APIs and business logic for scalable products.",
    color: "from-[#22C55E] to-[#15803D]",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Database Technologies",
    desc: "Structured and flexible data layers for modern applications.",
    color: "from-[#16A34A] to-[#065F46]",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "CMS & eCommerce",
    desc: "Content and commerce systems built for teams and sales.",
    color: "from-[#A3E635] to-[#15803D]",
    items: [
      { name: "WordPress", icon: <SiWordpress /> },
      { name: "Shopify", icon: <SiShopify /> },
      { name: "Webflow", icon: <SiWebflow /> },
    ],
  },
  {
    category: "Hosting & Deployment",
    desc: "Fast, secure launches with dependable cloud infrastructure.",
    color: "from-[#0F172A] to-[#475569]",
    items: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "AWS", icon: <HiOutlineGlobeAlt /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

const WebDevelopment = () => {
  return (
    <MainLayout>
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24">
        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* BLUR */}

        <div className="absolute top-[-120px] right-[-80px] w-[420px] h-[420px] bg-primary/10 blur-[130px]" />

        <div className="absolute bottom-[-160px] left-[-120px] w-[420px] h-[420px] bg-[#1D4ED8]/10 blur-[130px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT */}

            <div>
              {/* BADGE */}

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                  Web Development
                </p>
              </div>

              {/* HEADING */}

              <h1 className="text-[38px] sm:text-[52px] md:text-[72px] font-bold text-[#071120] leading-[1.02] tracking-[-3px] mt-8">
                Premium Websites
                <br />
                Built For Growth
              </h1>

              {/* TEXT */}

              <p className="text-gray-500 text-[15px] md:text-[18px] leading-[1.9] mt-7 max-w-2xl">
                We create modern websites, Shopify stores, SaaS products, AI
                tools and scalable web apps designed to help businesses grow
                digitally.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/contact"
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
                </Link>

                <Link
                  to="/portfolio"
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
                  View Portfolio
                </Link>
              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-3 mt-12 max-w-[560px]">
                {[
                  { value: "250+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24/7", label: "Support" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-gray-200 bg-white/80 px-4 py-5 shadow-[0_12px_35px_rgba(2,6,23,0.04)]"
                  >
                    <h3 className="text-[24px] sm:text-[30px] font-bold text-[#071120] leading-none">
                      {item.value}
                    </h3>

                    <p className="text-gray-500 text-[12px] sm:text-sm mt-2 leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">
              {/* BG */}

              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />

              {/* IMAGE CARD */}

              <div
                className="
                  relative
                  bg-white
                  border
                  border-gray-200

                  rounded-[36px]

                  p-5

                  shadow-[0_20px_60px_rgba(2,6,23,0.08)]
                "
              >
                <img
                  src={webHero}
                  alt="Web Development"
                  className="
                    w-full
                    h-[330px]
                    sm:h-[440px]
                    lg:h-[520px]
                    object-cover
                    rounded-[28px]
                  "
                />

                {/* FLOATING CARD */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5

                    bg-white/90
                    backdrop-blur-md

                    border
                    border-white/20

                    rounded-[22px]

                    px-4
                    py-4
                    md:px-6
                    md:py-5

                    shadow-lg
                  "
                >
                  <p className="text-primary font-semibold text-[11px] md:text-sm uppercase tracking-[2px]">
                    Modern Development
                  </p>

                  <h3 className="text-[#071120] text-[20px] md:text-[24px] font-bold mt-2">
                    Fast & Scalable
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SERVICES SECTION
      ========================================= */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Development Services
              </p>
            </div>

            <h2 className="text-[34px] sm:text-[46px] md:text-[60px] font-bold text-[#071120] leading-[1.08] tracking-[-2px] mt-7">
              Modern Web Solutions For Every Business
            </h2>

            <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.9] mt-6 max-w-2xl">
              From business websites to AI-powered SaaS products, we build
              modern digital experiences with premium design and scalable
              architecture.
            </p>
          </div>

          {/* GRID */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden

                  bg-[#F8FAFC]
                  border
                  border-gray-200

                  rounded-[30px]

                  p-8
                  md:p-10

                  hover:-translate-y-2
                  hover:border-primary/20
                  hover:bg-white
                  hover:shadow-[0_20px_60px_rgba(2,6,23,0.08)]

                  transition-all
                  duration-300
                "
              >
                <div className="absolute right-[-34px] top-[-34px] w-[125px] h-[125px] rounded-full bg-primary/10 blur-[6px] transition-all duration-500 group-hover:scale-125 group-hover:bg-primary/15" />

                <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-[12px] font-semibold text-[#071120] shadow-[0_10px_25px_rgba(2,6,23,0.05)] backdrop-blur-md">
                  <span className="text-primary text-[15px]">{item.logo}</span>
                  {item.tag}
                </div>

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10
                    w-[74px]
                    h-[74px]

                    rounded-[24px]

                    bg-gradient-to-br
                    from-primary
                    to-[#1D4ED8]

                    flex
                    items-center
                    justify-center

                    text-white
                    text-[34px]

                    group-hover:scale-110
                    group-hover:rotate-3
                    shadow-[0_18px_35px_rgba(19,196,163,0.22)]

                    transition-all
                    duration-300
                  "
                >
                  {item.icon}
                </div>

                {/* TITLE */}

                <h3 className="relative z-10 text-[26px] font-bold text-[#071120] mt-8 leading-tight">
                  {item.title}
                </h3>

                {/* TEXT */}

                <p className="relative z-10 text-gray-500 leading-[1.9] text-[15px] mt-5">
                  {item.desc}
                </p>

                <div className="relative z-10 mt-7 inline-flex items-center gap-2 text-primary text-[14px] font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore service
                  <HiArrowRight />
                </div>

                {/* HOVER LINE */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[4px]
                    w-0

                    bg-primary

                    group-hover:w-full

                    transition-all
                    duration-500
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    TECHNOLOGIES WE USE
========================================= */}
      <section className="relative py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute top-[-140px] left-[-100px] w-[360px] h-[360px] bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-[-140px] right-[-100px] w-[360px] h-[360px] bg-[#1D4ED8]/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          {/* TOP */}

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Technologies We Use
              </p>
            </div>

            <h2
              className="
          text-[38px]
          sm:text-[52px]
          md:text-[72px]

          font-bold

          text-[#071120]

          leading-[1.02]

          tracking-[-3px]

          mt-8
        "
            >
              Modern Tech Stack We Work With
            </h2>

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
              We use modern frontend, backend, CMS and cloud technologies to
              build scalable and premium digital products.
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[34px] border border-white/10 bg-[#071120] p-6 md:p-8 shadow-[0_28px_90px_rgba(2,6,23,0.18)]">
            <div className="absolute right-[-90px] top-[-90px] w-[260px] h-[260px] rounded-full bg-primary/20 blur-[90px]" />

            <div className="absolute left-[-90px] bottom-[-90px] w-[260px] h-[260px] rounded-full bg-[#1D4ED8]/20 blur-[90px]" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_1.4fr] gap-7 lg:gap-10 items-center">
              <div>
                <p className="text-primary text-[12px] font-bold uppercase tracking-[3px]">
                  Stack Strategy
                </p>

                <h3 className="text-white text-[28px] md:text-[38px] font-bold leading-tight mt-4">
                  We choose technology around performance, scale and business
                  outcomes.
                </h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  "Fast frontend systems",
                  "Secure backend APIs",
                  "Reliable cloud deployment",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                  >
                    <p className="text-white text-[15px] font-semibold leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GRID */}

          <div className="grid lg:grid-cols-6 gap-6 mt-10">
            {technologyGroups.map((group, index) => (
              <div
                key={index}
                className={`
            group
            relative

            overflow-hidden

            bg-white

            border
            border-gray-200

            rounded-[30px]
            md:rounded-[34px]

            p-6
            md:p-8

            hover:-translate-y-2
            hover:border-primary/20
            hover:shadow-[0_20px_60px_rgba(2,6,23,0.06)]

            transition-all
            duration-500
            ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
          `}
              >
                <div
                  className={`absolute right-[-42px] top-[-42px] w-[150px] h-[150px] rounded-full bg-gradient-to-br ${group.color} opacity-10 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-20`}
                />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                  <div>
                    <p className="text-primary text-[12px] font-bold uppercase tracking-[2px]">
                      Stack Layer 0{index + 1}
                    </p>

                    <h3 className="text-[24px] md:text-[32px] font-bold text-[#071120] leading-tight mt-3">
                      {group.category}
                    </h3>

                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.8] mt-4 max-w-xl">
                      {group.desc}
                    </p>
                  </div>

                  <div
                    className={`w-[58px] h-[58px] rounded-[20px] bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-[0_18px_36px_rgba(2,6,23,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <HiOutlineCode className="text-[28px]" />
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 rounded-[18px] border border-gray-200 bg-[#F8FAFC] px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white"
                    >
                      <div
                        className={`w-10 h-10 rounded-[14px] bg-gradient-to-br ${group.color} flex items-center justify-center text-white text-[20px] flex-shrink-0`}
                      >
                        {tech.icon}
                      </div>

                      <p className="text-[#071120] text-[13px] md:text-[14px] font-bold leading-snug">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-7 flex items-center gap-2 text-primary text-[13px] md:text-[14px] font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Recommended stack
                  <HiArrowRight />
                </div>

                {/* HOVER LINE */}

                <div
                  className="
              absolute
              bottom-0
              left-0

              h-[4px]
              w-0

              bg-primary

              group-hover:w-full

              transition-all
              duration-500
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    PROJECTS BUILT WITH TECH
========================================= */}

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="absolute right-[-120px] top-[-120px] w-[360px] h-[360px] bg-primary/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-end">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  Project Showcase
                </p>
              </div>

              <h2 className="text-[34px] sm:text-[46px] md:text-[60px] font-bold text-[#071120] leading-[1.08] mt-7">
                Projects Built With The Right Tech
              </h2>
            </div>

            <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.9] max-w-2xl lg:pb-2">
              We build each project with a technology stack that matches the
              business goal, whether it needs speed, SEO, eCommerce, automation
              or a scalable custom dashboard.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-14 md:mt-16">
            {projectShowcases.map((project, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-gray-200
                  bg-[#F8FAFC]
                  p-6
                  md:p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:bg-white
                  hover:shadow-[0_24px_70px_rgba(2,6,23,0.08)]
                "
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#1D4ED8] to-[#22C55E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-primary text-[12px] font-bold uppercase tracking-[2px]">
                      {project.category}
                    </p>

                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#071120] leading-tight mt-4">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <HiArrowRight />
                  </div>
                </div>

                <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.85] mt-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-7">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[12px] font-semibold text-[#071120]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-[22px] bg-[#071120] px-5 py-4">
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[2px]">
                    Result Focus
                  </p>

                  <h4 className="text-white text-[22px] font-bold mt-2">
                    {project.metrics}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    WORK PROCESS
========================================= */}

      <section className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Work Process
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[50px] md:text-[68px] font-bold text-[#071120] leading-[1.05] tracking-[-3px] mt-8">
              Simple Process. Powerful Results.
            </h2>
          </div>

          {/* TIMELINE */}

          <div className="relative mt-24">
            {/* LINE */}

            <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-gray-200" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Research",
                },

                {
                  step: "02",
                  title: "Planning",
                },

                {
                  step: "03",
                  title: "Development",
                },

                {
                  step: "04",
                  title: "Launch",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              relative
              z-10
            "
                >
                  {/* DOT */}

                  <div
                    className="
                w-20
                h-20

                rounded-full

                bg-white

                border-[10px]
                border-[#F8FAFC]

                shadow-[0_10px_30px_rgba(0,0,0,0.06)]

                flex
                items-center
                justify-center

                mx-auto
              "
                  >
                    <span className="text-primary font-bold text-xl">
                      {item.step}
                    </span>
                  </div>

                  {/* CARD */}

                  <div
                    className="
                bg-white

                border
                border-gray-200

                rounded-[28px]

                p-8

                mt-8

                text-center

                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(2,6,23,0.06)]

                transition-all
                duration-300
              "
                  >
                    <h3 className="text-[28px] font-bold text-[#071120]">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 leading-[1.9] text-[15px] mt-5">
                      Premium workflow designed for modern digital product
                      development.
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

export default WebDevelopment;
