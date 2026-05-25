import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
  HiOutlineClipboardCheck,
  HiOutlineCode,
  HiOutlineCursorClick,
  HiOutlineDocumentSearch,
  HiOutlineGlobeAlt,
  HiOutlineSearch,
} from "react-icons/hi";

import MainLayout from "../layouts/MainLayout";

const seoServices = [
  {
    title: "Technical SEO",
    icon: <HiOutlineCode />,
    desc:
      "Fix crawl issues, improve indexability, optimize site speed and create a cleaner technical foundation.",
  },
  {
    title: "Keyword Research",
    icon: <HiOutlineSearch />,
    desc:
      "Find high-intent keywords your customers are searching for and map them to the right pages.",
  },
  {
    title: "On-Page SEO",
    icon: <HiOutlineDocumentSearch />,
    desc:
      "Optimize titles, meta descriptions, headings, internal links and content structure for rankings.",
  },
  {
    title: "Local SEO",
    icon: <HiOutlineGlobeAlt />,
    desc:
      "Improve visibility for city-based searches, Google Business Profile and local customer discovery.",
  },
  {
    title: "SEO Content",
    icon: <HiOutlineClipboardCheck />,
    desc:
      "Create blog and landing page content plans that attract traffic and convert visitors into leads.",
  },
  {
    title: "SEO Reporting",
    icon: <HiOutlineChartSquareBar />,
    desc:
      "Track rankings, traffic, conversions and opportunities with simple monthly performance reports.",
  },
];

const tools = [
  "Google Search Console",
  "Google Analytics",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "PageSpeed Insights",
];

const projects = [
  {
    title: "Local Business Growth",
    category: "Local SEO",
    desc:
      "Improved local keyword visibility, service pages and map presence for a service-based brand.",
    gradient: "from-[#1D4ED8] via-[#0F766E] to-[#22C55E]",
  },
  {
    title: "Ecommerce SEO Audit",
    category: "Technical SEO",
    desc:
      "Resolved crawl waste, duplicate pages, metadata gaps and product category optimization issues.",
    gradient: "from-[#071120] via-[#7C3AED] to-[#EC4899]",
  },
  {
    title: "Blog Traffic Strategy",
    category: "Content SEO",
    desc:
      "Built a topic cluster strategy around high-intent keywords to increase organic traffic quality.",
    gradient: "from-[#F97316] via-[#FACC15] to-[#13C4A3]",
  },
];

const process = [
  {
    step: "01",
    title: "SEO Audit",
    desc: "We check technical issues, content gaps, competitors, backlinks, rankings and analytics data.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We create a keyword, content and optimization roadmap based on business goals.",
  },
  {
    step: "03",
    title: "Optimization",
    desc: "We improve pages, speed, metadata, internal links, content quality and local visibility.",
  },
  {
    step: "04",
    title: "Tracking",
    desc: "We monitor rankings, traffic, leads and opportunities to keep improving performance.",
  },
];

const deliverables = [
  "SEO audit report",
  "Keyword strategy",
  "On-page fixes",
  "Technical fixes",
  "Content roadmap",
  "Monthly report",
];

const stats = [
  {
    value: "120+",
    label: "SEO Pages Optimized",
  },
  {
    value: "3X",
    label: "Organic Growth Focus",
  },
  {
    value: "40+",
    label: "Ranking Factors Checked",
  },
];

const SEOOptimization = () => {
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
                  SEO Optimization
                </p>
              </div>

              <h1 className="text-[40px] sm:text-[56px] md:text-[76px] font-bold font-outfit text-dark leading-[1.02] mt-8">
                Rank Higher And Get More Organic Leads
              </h1>

              <p className="paragraph mt-7 text-[15px] md:text-[18px] max-w-2xl">
                We improve your website visibility with technical SEO, keyword
                strategy, on-page optimization, content planning and local SEO
                built for long-term growth.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/contact" className="gradient-btn">
                  Get SEO Audit
                  <HiArrowRight />
                </Link>

                <Link
                  to="/portfolio"
                  className="h-[56px] px-8 rounded-full border border-gray-200 bg-white text-[#071120] font-semibold flex items-center justify-center hover:bg-[#071120] hover:text-white transition-all duration-300"
                >
                  View Results
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[90px] rounded-full" />

              <div className="relative bg-white border border-gray-200 rounded-[36px] p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
                <div className="rounded-[28px] bg-[#071120] p-6 md:p-8 overflow-hidden relative">
                  <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-primary/20" />
                  <div className="absolute -left-10 bottom-0 w-44 h-44 rounded-full bg-[#22C55E]/10" />

                  <div className="relative grid gap-5">
                    <div className="bg-white/8 border border-white/10 rounded-[24px] p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-[2px] font-semibold">
                            Organic Traffic
                          </p>

                          <h3 className="text-white text-[42px] font-bold mt-2">
                            +186%
                          </h3>
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl">
                          <HiOutlineChartBar />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      {stats.slice(0, 2).map((item) => (
                        <div
                          key={item.label}
                          className="bg-white/8 border border-white/10 rounded-[22px] p-5"
                        >
                          <h3 className="text-white text-[30px] font-bold">
                            {item.value}
                          </h3>

                          <p className="text-white/60 text-sm mt-2">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-[24px] p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
                        <HiOutlineCursorClick />
                      </div>

                      <div>
                        <h3 className="text-[#071120] text-[22px] font-bold">
                          Search Visibility
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          Better rankings, clicks and qualified leads.
                        </p>
                      </div>
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
                SEO Services
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Everything Your Website Needs To Rank Better
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {seoServices.map((item) => (
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
                SEO Decisions Backed By Data
              </h2>

              <p className="paragraph mt-6 max-w-xl">
                We use trusted SEO and analytics tools to find search demand,
                technical issues, content gaps and ranking opportunities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-white rounded-[28px] p-7 border border-gray-200 shadow-[0_12px_40px_rgba(15,23,42,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-primary flex items-center justify-center text-3xl">
                    <HiOutlineChartPie />
                  </div>

                  <h3 className="text-[22px] font-bold text-dark mt-6">
                    {tool}
                  </h3>

                  <p className="text-gray-500 text-[14px] leading-[1.8] mt-3">
                    Used for audits, tracking, research and growth reporting.
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
                Recent SEO Work
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Projects Focused On Visibility And Leads
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
                    <p className="text-white/70 text-sm font-semibold uppercase tracking-[2px]">
                      SEO Campaign
                    </p>

                    <h3 className="text-white text-[30px] font-bold mt-2">
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
                    View Details
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
                  SEO Process
                </p>
              </div>

              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
                A Clear Process For Sustainable Organic Growth
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
                  Ready To Grow On Google?
                </p>

                <h2 className="text-[36px] sm:text-[50px] md:text-[64px] font-bold font-outfit text-white leading-[1.05] mt-5">
                  Get An SEO Plan For Your Website
                </h2>

                <p className="text-white/70 text-[15px] md:text-[18px] leading-[1.9] mt-6 max-w-2xl">
                  Share your website and business goals. We will review your
                  SEO opportunities and suggest the next best growth steps.
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

export default SEOOptimization;
