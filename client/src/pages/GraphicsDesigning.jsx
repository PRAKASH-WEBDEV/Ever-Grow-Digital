import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineColorSwatch,
  HiOutlineCube,
  HiOutlinePhotograph,
  HiOutlinePresentationChartLine,
  HiOutlineSparkles,
  HiOutlineTemplate,
} from "react-icons/hi";
import {
  SiCanva,
  SiFigma,
} from "react-icons/si";

import MainLayout from "../layouts/MainLayout";

const services = [
  {
    title: "Logo Design",
    icon: <HiOutlineSparkles />,
    desc:
      "Distinct logo concepts with clean typography, brand marks and usage-ready final files.",
  },
  {
    title: "Social Media Design",
    icon: <HiOutlinePhotograph />,
    desc:
      "Scroll-stopping posts, stories, reels covers and ad creatives for consistent brand visibility.",
  },
  {
    title: "Banner Design",
    icon: <HiOutlinePresentationChartLine />,
    desc:
      "Website banners, campaign headers and promotional creatives made for strong first impressions.",
  },
  {
    title: "Brand Identity",
    icon: <HiOutlineBadgeCheck />,
    desc:
      "Color palette, typography, visual rules and brand assets that make your business look premium.",
  },
  {
    title: "UI/UX Design",
    icon: <HiOutlineTemplate />,
    desc:
      "Modern app and website interface layouts focused on clarity, conversion and smooth user flow.",
  },
  {
    title: "Marketing Creatives",
    icon: <HiOutlineColorSwatch />,
    desc:
      "High-performing creatives for ads, offers, launches, brochures and business campaigns.",
  },
];

const tools = [
  {
    name: "Adobe Photoshop",
    icon: <HiOutlinePhotograph />,
    use: "Image editing, mockups and campaign visuals",
  },
  {
    name: "Adobe Illustrator",
    icon: <HiOutlineColorSwatch />,
    use: "Logos, icons and vector brand assets",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    use: "UI design, wireframes and design systems",
  },
  {
    name: "Canva",
    icon: <SiCanva />,
    use: "Fast social creatives and reusable templates",
  },
  {
    name: "Adobe InDesign",
    icon: <HiOutlineTemplate />,
    use: "Brochures, profiles and print-ready layouts",
  },
  {
    name: "After Effects",
    icon: <HiOutlineCube />,
    use: "Motion graphics and animated brand content",
  },
];

const projects = [
  {
    title: "Restaurant Social Kit",
    category: "Social Media",
    desc:
      "A complete Instagram post and story pack for offers, menu highlights and festive campaigns.",
    colors: "from-[#FF6B6B] via-[#FFD166] to-[#06D6A0]",
  },
  {
    title: "Startup Brand Identity",
    category: "Branding",
    desc:
      "Logo direction, brand colors, typography and presentation-ready identity guidelines.",
    colors: "from-[#1D4ED8] via-[#7C3AED] to-[#EC4899]",
  },
  {
    title: "Ecommerce Sale Campaign",
    category: "Ad Creatives",
    desc:
      "Performance-focused product banners, offer creatives and carousel layouts for paid ads.",
    colors: "from-[#071120] via-[#0F766E] to-[#22C55E]",
  },
];

const process = [
  {
    step: "01",
    title: "Brief",
    desc: "We understand your business, audience, offer and design references.",
  },
  {
    step: "02",
    title: "Concept",
    desc: "We create creative directions with layout, color and typography ideas.",
  },
  {
    step: "03",
    title: "Design",
    desc: "Final visuals are designed with brand consistency and platform requirements.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "You receive optimized files for web, social media, print and future edits.",
  },
];

const deliverables = [
  "Editable source files",
  "Social media sizes",
  "Print-ready exports",
  "Brand color palette",
  "Font pairing guidance",
  "Revision support",
];

const GraphicsDesigning = () => {
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
                  Graphics Designing
                </p>
              </div>

              <h1 className="text-[40px] sm:text-[56px] md:text-[76px] font-bold font-outfit text-dark leading-[1.02] mt-8">
                Creative Designs That Build Brands
              </h1>

              <p className="paragraph mt-7 text-[15px] md:text-[18px] max-w-2xl">
                Professional visual design for social media, branding,
                marketing campaigns and business identity with a premium,
                modern look.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/contact" className="gradient-btn">
                  Start A Design Project
                  <HiArrowRight />
                </Link>

                <Link
                  to="/portfolio"
                  className="h-[56px] px-8 rounded-full border border-gray-200 bg-white text-[#071120] font-semibold flex items-center justify-center hover:bg-[#071120] hover:text-white transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[90px] rounded-full" />

              <div className="relative bg-white border border-gray-200 rounded-[36px] p-5 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Brand Kit",
                    "Social Post",
                    "Ad Banner",
                    "UI Screen",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`
                        min-h-[150px]
                        rounded-[28px]
                        p-5
                        flex
                        flex-col
                        justify-between
                        overflow-hidden
                        bg-gradient-to-br
                        ${
                          index === 0
                            ? "from-[#1D4ED8] to-[#13C4A3]"
                            : ""
                        }
                        ${
                          index === 1
                            ? "from-[#F97316] to-[#EC4899]"
                            : ""
                        }
                        ${
                          index === 2
                            ? "from-[#071120] to-[#7C3AED]"
                            : ""
                        }
                        ${
                          index === 3
                            ? "from-[#0F766E] to-[#22C55E]"
                            : ""
                        }
                      `}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/18 border border-white/20 flex items-center justify-center text-white text-2xl">
                        <HiOutlineCube />
                      </div>

                      <div>
                        <p className="text-white/70 text-xs font-semibold uppercase tracking-[2px]">
                          Design Asset
                        </p>

                        <h3 className="text-white text-[22px] font-bold mt-2">
                          {item}
                        </h3>
                      </div>
                    </div>
                  ))}
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
                Design Services
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Visuals Made For Attention And Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {services.map((item) => (
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

      <section className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
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
                Designed With Professional Creative Tools
              </h2>

              <p className="paragraph mt-6 max-w-xl">
                We choose the tool according to the output: vector logos,
                social creatives, print files, UI screens or motion graphics.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white rounded-[28px] p-7 border border-gray-200 shadow-[0_12px_40px_rgba(15,23,42,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-primary flex items-center justify-center text-3xl">
                    {tool.icon}
                  </div>

                  <h3 className="text-[22px] font-bold text-dark mt-6">
                    {tool.name}
                  </h3>

                  <p className="text-gray-500 text-[14px] leading-[1.8] mt-3">
                    {tool.use}
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
                Project Work
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Recent Creative Directions
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-[#F8FAFC] rounded-[34px] overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)] transition-all duration-300"
              >
                <div
                  className={`h-[260px] bg-gradient-to-br ${project.colors} p-7 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="absolute -right-14 -top-14 w-44 h-44 rounded-full bg-white/15" />
                  <div className="absolute right-10 bottom-10 w-24 h-24 rounded-[28px] bg-white/15 rotate-12" />

                  <span className="relative w-fit px-4 py-2 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-[2px]">
                    {project.category}
                  </span>

                  <div className="relative">
                    <p className="text-white/70 text-sm font-semibold uppercase tracking-[2px]">
                      Visual System
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
                  Process
                </p>
              </div>

              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
                From Idea To Finished Design
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
                  Ready For Better Branding?
                </p>

                <h2 className="text-[36px] sm:text-[50px] md:text-[64px] font-bold font-outfit text-white leading-[1.05] mt-5">
                  Let Us Design Your Next Creative Campaign
                </h2>

                <p className="text-white/70 text-[15px] md:text-[18px] leading-[1.9] mt-6 max-w-2xl">
                  Share your idea and we will turn it into polished visuals
                  for your brand, ads, website and social media.
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

export default GraphicsDesigning;
