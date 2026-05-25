import MainLayout from "../layouts/MainLayout";

import webHero from "../assets/web-development/hero.jpg";

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

const services = [
  {
    title: "Business Website",

    icon: <HiOutlineGlobeAlt />,

    desc: "Professional business websites with modern UI/UX and premium performance.",
  },

  {
    title: "WordPress Development",

    icon: <HiOutlineTemplate />,

    desc: "Custom WordPress websites with fast speed, SEO optimization and scalability.",
  },

  {
    title: "Shopify Store",

    icon: <HiOutlineShoppingCart />,

    desc: "Modern Shopify stores designed for conversions and eCommerce growth.",
  },

  {
    title: "Custom Web App",

    icon: <HiOutlineCube />,

    desc: "Scalable web applications using modern technologies and secure architecture.",
  },

  {
    title: "AI Tools & SaaS",

    icon: <HiOutlineChip />,

    desc: "AI-powered tools and SaaS platforms built for automation and productivity.",
  },

  {
    title: "Portfolio Website",

    icon: <HiOutlineCode />,

    desc: "Creative portfolio websites for creators, agencies and professionals.",
  },

  {
    title: "Landing Pages",

    icon: <HiOutlineLightningBolt />,

    desc: "High-converting landing pages optimized for ads and marketing campaigns.",
  },

  {
    title: "Responsive Design",

    icon: <HiOutlineDeviceMobile />,

    desc: "Fully responsive and mobile-friendly digital experiences.",
  },

  {
    title: "Dashboard Development",

    icon: <HiOutlineDesktopComputer />,

    desc: "Modern admin dashboards and CRM systems with premium UI.",
  },
];

const WebDevelopment = () => {
  return (
    <MainLayout>
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* BLUR */}

        <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-primary/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  View Portfolio
                </button>
              </div>

              {/* STATS */}

              <div className="flex flex-wrap gap-10 mt-14">
                <div>
                  <h3 className="text-[34px] font-bold text-[#071120]">250+</h3>

                  <p className="text-gray-500 mt-2">Projects Completed</p>
                </div>

                <div>
                  <h3 className="text-[34px] font-bold text-[#071120]">98%</h3>

                  <p className="text-gray-500 mt-2">Client Satisfaction</p>
                </div>

                <div>
                  <h3 className="text-[34px] font-bold text-[#071120]">24/7</h3>

                  <p className="text-gray-500 mt-2">Support</p>
                </div>
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
                    h-full
                    object-cover
                    rounded-[28px]
                  "
                />

                {/* FLOATING CARD */}

                <div
                  className="
                    absolute
                    bottom-8
                    left-8

                    bg-white/90
                    backdrop-blur-md

                    border
                    border-white/20

                    rounded-[22px]

                    px-6
                    py-5

                    shadow-lg
                  "
                >
                  <p className="text-primary font-semibold text-sm uppercase tracking-[2px]">
                    Modern Development
                  </p>

                  <h3 className="text-[#071120] text-[24px] font-bold mt-2">
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
                  hover:shadow-[0_20px_60px_rgba(2,6,23,0.08)]

                  transition-all
                  duration-300
                "
              >
                {/* ICON */}

                <div
                  className="
                    w-[74px]
                    h-[74px]

                    rounded-[24px]

                    bg-primary/10

                    flex
                    items-center
                    justify-center

                    text-primary
                    text-[34px]

                    group-hover:scale-110

                    transition-all
                    duration-300
                  "
                >
                  {item.icon}
                </div>

                {/* TITLE */}

                <h3 className="text-[26px] font-bold text-[#071120] mt-8 leading-tight">
                  {item.title}
                </h3>

                {/* TEXT */}

                <p className="text-gray-500 leading-[1.9] text-[15px] mt-5">
                  {item.desc}
                </p>

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

      <section className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
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

          {/* GRID */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
            {[
              {
                icon: "⚛️",

                title: "React JS",

                desc: "Modern frontend development",
              },

              {
                icon: "▲",

                title: "Next JS",

                desc: "Fast scalable web apps",
              },

              {
                icon: "🟢",

                title: "Node JS",

                desc: "Backend & APIs",
              },

              {
                icon: "🍃",

                title: "MongoDB",

                desc: "Database management",
              },

              {
                icon: "🛒",

                title: "Shopify",

                desc: "eCommerce development",
              },

              {
                icon: "📰",

                title: "WordPress",

                desc: "CMS website solutions",
              },

              {
                icon: "🎨",

                title: "Tailwind CSS",

                desc: "Modern responsive UI",
              },

              {
                icon: "☁️",

                title: "Cloud Hosting",

                desc: "Fast & secure deployment",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group
            relative

            overflow-hidden

            bg-white

            border
            border-gray-200

            rounded-[32px]

            p-8

            hover:-translate-y-2
            hover:border-primary/20
            hover:shadow-[0_20px_60px_rgba(2,6,23,0.06)]

            transition-all
            duration-500
          "
              >
                {/* ICON */}

                <div
                  className="
              w-[78px]
              h-[78px]

              rounded-[24px]

              bg-primary/10

              flex
              items-center
              justify-center

              text-[34px]

              group-hover:scale-110

              transition-all
              duration-300
            "
                >
                  {item.icon}
                </div>

                {/* TITLE */}

                <h3
                  className="
              text-[28px]

              font-bold

              text-[#071120]

              leading-[1.2]

              mt-8
            "
                >
                  {item.title}
                </h3>

                {/* DESC */}

                <p
                  className="
              text-gray-500

              text-[15px]

              leading-[1.9]

              mt-4
            "
                >
                  {item.desc}
                </p>

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
