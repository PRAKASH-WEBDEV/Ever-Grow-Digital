import MainLayout from "../layouts/MainLayout";

import marketingHero from "../assets/digital-marketing/marketing-hero.jpg";

import {
  HiArrowRight,
  HiOutlineSearch,
  HiOutlineChartSquareBar,
  HiOutlineGlobeAlt,
  HiOutlineMail,
  HiOutlineSpeakerphone,
  HiOutlineUserGroup,
} from "react-icons/hi";

const marketingServices = [
  {
    title: "SEO Optimization",

    icon: <HiOutlineSearch />,

    desc:
      "Improve rankings, organic traffic and online visibility with advanced SEO strategies.",
  },

  {
    title: "Google Ads",

    icon: <HiOutlineChartSquareBar />,

    desc:
      "Performance-focused Google Ads campaigns designed for leads and conversions.",
  },

  {
    title: "Meta Ads",

    icon: <HiOutlineSpeakerphone />,

    desc:
      "Instagram and Facebook advertising campaigns optimized for ROI and audience growth.",
  },

  {
    title: "Social Media Marketing",

    icon: <HiOutlineUserGroup />,

    desc:
      "Modern social media strategies to grow your brand and increase engagement.",
  },

  {
    title: "Content Marketing",

    icon: <HiOutlineGlobeAlt />,

    desc:
      "High-quality content strategies that build authority and improve brand trust.",
  },

  {
    title: "Email Marketing",

    icon: <HiOutlineMail />,

    desc:
      "Automated email campaigns designed to nurture leads and increase sales.",
  },
];

const stats = [
  {
    number: "300+",
    label: "Campaigns Managed",
  },

  {
    number: "95%",
    label: "Client Satisfaction",
  },

  {
    number: "5X",
    label: "Average ROI Growth",
  },

  {
    number: "24/7",
    label: "Marketing Support",
  },
];

const process = [
  {
    step: "01",

    title: "Research",

    desc:
      "Analyzing your business, audience and competitors for better strategy.",
  },

  {
    step: "02",

    title: "Strategy",

    desc:
      "Creating a customized marketing roadmap focused on growth.",
  },

  {
    step: "03",

    title: "Execution",

    desc:
      "Running campaigns, ads and optimization with modern tools.",
  },

  {
    step: "04",

    title: "Growth",

    desc:
      "Scaling campaigns and improving performance continuously.",
  },
];

const DigitalMarketing = () => {
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
                  Digital Marketing
                </p>
              </div>

              {/* TITLE */}

              <h1 className="text-[38px] sm:text-[52px] md:text-[72px] font-bold text-[#071120] leading-[1.02] tracking-[-3px] mt-8">
                Grow Your Brand
                With Modern
                Marketing
              </h1>

              {/* TEXT */}

              <p className="text-gray-500 text-[15px] md:text-[18px] leading-[1.9] mt-7 max-w-2xl">
                We help businesses scale faster with SEO,
                Google Ads, Meta Ads, social media marketing
                and modern growth-focused strategies.
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
                  Start Campaign
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
                  View Services
                </button>
              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
                {stats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-[28px] md:text-[36px] font-bold text-[#071120]">
                      {item.number}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              {/* BG */}

              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />

              {/* CARD */}

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
                  src={marketingHero}
                  alt="Digital Marketing"
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-[28px]
                  "
                />

                {/* FLOAT CARD */}

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
                    Growth Strategy
                  </p>

                  <h3 className="text-[#071120] text-[24px] font-bold mt-2">
                    High ROI Campaigns
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

      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Marketing Services
              </p>
            </div>

            <h2 className="text-[38px] sm:text-[52px] md:text-[72px] font-bold text-[#071120] leading-[1.02] tracking-[-3px] mt-8">
              Marketing Solutions
              Built For Growth
            </h2>

            <p className="text-gray-500 text-[15px] md:text-[18px] leading-[1.9] mt-7 max-w-2xl mx-auto">
              Premium digital marketing services focused
              on traffic, leads and business growth.
            </p>
          </div>

          {/* GRID */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
            {marketingServices.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative

                  overflow-hidden

                  bg-[#F8FAFC]

                  border
                  border-gray-200

                  rounded-[36px]

                  p-8
                  md:p-10

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

                <h3 className="text-[28px] font-bold text-[#071120] leading-[1.2] mt-8">
                  {item.title}
                </h3>

                {/* DESC */}

                <p className="text-gray-500 text-[15px] leading-[1.9] mt-5">
                  {item.desc}
                </p>

                {/* BUTTON */}

                <button
                  className="
                    mt-8

                    text-primary

                    font-semibold

                    flex
                    items-center
                    gap-3

                    group-hover:translate-x-2

                    transition-all
                    duration-300
                  "
                >
                  Explore Service →
                </button>

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
          PROCESS SECTION
      ========================================= */}

      <section className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
        <div className="container-custom">
          {/* TOP */}

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                Our Process
              </p>
            </div>

            <h2 className="text-[38px] sm:text-[52px] md:text-[72px] font-bold text-[#071120] leading-[1.02] tracking-[-3px] mt-8">
              Simple Strategy.
              Powerful Growth.
            </h2>
          </div>

          {/* PROCESS GRID */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">
            {process.map((item, index) => (
              <div
                key={index}
                className="
                  relative

                  bg-white

                  border
                  border-gray-200

                  rounded-[36px]

                  p-8

                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(2,6,23,0.06)]

                  transition-all
                  duration-500
                "
              >
                {/* NUMBER */}

                <div className="text-[70px] font-bold text-primary/10 leading-none">
                  {item.step}
                </div>

                {/* TITLE */}

                <h3 className="text-[28px] font-bold text-[#071120] mt-8">
                  {item.title}
                </h3>

                {/* TEXT */}

                <p className="text-gray-500 text-[15px] leading-[1.9] mt-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA SECTION
      ========================================= */}

      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-custom">
          <div
            className="
              relative
              overflow-hidden

              rounded-[40px]

              bg-[#071120]

              px-8
              md:px-16

              py-16
              md:py-20
            "
          >
            {/* BLUR */}

            <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-primary/20 blur-[120px]" />

            {/* CONTENT */}

            <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                <p className="text-white font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                  Start Growing Today
                </p>
              </div>

              <h2 className="text-[38px] sm:text-[52px] md:text-[72px] font-bold text-white leading-[1.02] tracking-[-3px] mt-8">
                Ready To Scale
                Your Business?
              </h2>

              <p className="text-white/70 text-[15px] md:text-[18px] leading-[1.9] mt-7 max-w-2xl">
                Let’s build modern marketing campaigns
                designed to increase traffic, leads and sales.
              </p>

              {/* BUTTON */}

              <button
                className="
                  mt-10

                  h-[56px]
                  px-8

                  rounded-full

                  bg-white

                  text-[#071120]

                  font-medium

                  flex
                  items-center
                  gap-3

                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >
                Get Free Consultation
                <HiArrowRight />
              </button>
              </div>

              {/* IMAGE */}

              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-[90px] rounded-full" />

                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[32px]

                    border
                    border-white/10

                    shadow-[0_24px_70px_rgba(0,0,0,0.35)]
                  "
                >
                  <img
                    src={marketingHero}
                    alt="Digital marketing strategy"
                    className="
                      w-full
                      h-[280px]
                      sm:h-[340px]
                      lg:h-[420px]

                      object-cover
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DigitalMarketing;
