import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineChatAlt2,
  HiOutlineChip,
  HiOutlineCog,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
  HiOutlinePuzzle,
  HiOutlineRefresh,
  HiOutlineSparkles,
  HiOutlineSupport,
} from "react-icons/hi";

import MainLayout from "../layouts/MainLayout";

const automationServices = [
  {
    title: "AI Chatbots",
    icon: <HiOutlineChatAlt2 />,
    desc:
      "Smart website chatbots for lead capture, support questions, service guidance and quick replies.",
  },
  {
    title: "Lead Automation",
    icon: <HiOutlineLightningBolt />,
    desc:
      "Automate contact forms, follow-ups, lead routing, CRM updates and sales team notifications.",
  },
  {
    title: "Workflow Automation",
    icon: <HiOutlineCog />,
    desc:
      "Connect tools and automate repeated business tasks across marketing, sales and operations.",
  },
  {
    title: "AI Content Systems",
    icon: <HiOutlineSparkles />,
    desc:
      "Build AI-assisted systems for captions, blog outlines, emails, proposals and content workflows.",
  },
  {
    title: "CRM Integration",
    icon: <HiOutlineDatabase />,
    desc:
      "Sync leads, customer data, campaign responses and follow-up status into your CRM or sheets.",
  },
  {
    title: "Support Automation",
    icon: <HiOutlineSupport />,
    desc:
      "Automated FAQs, ticket triage, response templates and customer support workflows.",
  },
];

const tools = [
  "OpenAI",
  "Zapier",
  "Make",
  "Google Sheets",
  "WhatsApp API",
  "CRM Tools",
];

const projects = [
  {
    title: "Website Lead Bot",
    category: "Chatbot",
    desc:
      "An AI assistant that captures visitor details, suggests services and sends leads to the sales team.",
    gradient: "from-[#1D4ED8] via-[#7C3AED] to-[#EC4899]",
  },
  {
    title: "CRM Follow-Up Flow",
    category: "Sales Automation",
    desc:
      "A lead pipeline that updates CRM stages, sends reminders and triggers follow-up messages.",
    gradient: "from-[#071120] via-[#0F766E] to-[#22C55E]",
  },
  {
    title: "Content Automation Kit",
    category: "AI Content",
    desc:
      "A workflow for generating post ideas, captions, email drafts and campaign briefs faster.",
    gradient: "from-[#F97316] via-[#FACC15] to-[#13C4A3]",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We understand your repeated tasks, tools, customer journey and team workflow.",
  },
  {
    step: "02",
    title: "Map",
    desc: "We design the automation flow with triggers, actions, conditions and human checkpoints.",
  },
  {
    step: "03",
    title: "Build",
    desc: "We connect tools, create AI prompts, test edge cases and prepare dashboards or logs.",
  },
  {
    step: "04",
    title: "Optimize",
    desc: "We monitor performance, improve prompts, reduce manual work and refine the process.",
  },
];

const deliverables = [
  "Automation blueprint",
  "AI prompt setup",
  "Tool integrations",
  "Testing support",
  "Team handover",
  "Optimization plan",
];

const metrics = [
  {
    value: "70%",
    label: "Manual Work Reduced",
  },
  {
    value: "24/7",
    label: "Lead Response",
  },
  {
    value: "5+",
    label: "Tools Connected",
  },
];

const AIAutomation = () => {
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
                  AI Automation
                </p>
              </div>

              <h1 className="text-[40px] sm:text-[56px] md:text-[76px] font-bold font-outfit text-dark leading-[1.02] mt-8">
                Automate Repeated Work And Scale Faster
              </h1>

              <p className="paragraph mt-7 text-[15px] md:text-[18px] max-w-2xl">
                We build AI-powered workflows, chatbots and integrations that
                save time, capture leads faster and help your team focus on
                higher-value work.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/contact" className="gradient-btn">
                  Automate My Business
                  <HiArrowRight />
                </Link>

                <Link
                  to="/portfolio"
                  className="h-[56px] px-8 rounded-full border border-gray-200 bg-white text-[#071120] font-semibold flex items-center justify-center hover:bg-[#071120] hover:text-white transition-all duration-300"
                >
                  View Use Cases
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
                            Automation Engine
                          </p>

                          <h3 className="text-white text-[42px] font-bold mt-2">
                            Live
                          </h3>
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl">
                          <HiOutlineChip />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {metrics.map((item) => (
                        <div
                          key={item.label}
                          className="bg-white/8 border border-white/10 rounded-[22px] p-4"
                        >
                          <h3 className="text-white text-[24px] font-bold">
                            {item.value}
                          </h3>

                          <p className="text-white/60 text-xs mt-2">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-[24px] p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
                        <HiOutlineRefresh />
                      </div>

                      <div>
                        <h3 className="text-[#071120] text-[22px] font-bold">
                          No-Code + AI Workflows
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          Forms, CRM, sheets, email and chat connected.
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
                Automation Services
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Smart Systems For Faster Business Operations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {automationServices.map((item) => (
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
                  Tools We Connect
                </p>
              </div>

              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
                Your Favorite Tools Working Together
              </h2>

              <p className="paragraph mt-6 max-w-xl">
                We connect AI with the tools your team already uses so leads,
                support, content and reporting can move automatically.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-white rounded-[28px] p-7 border border-gray-200 shadow-[0_12px_40px_rgba(15,23,42,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-primary flex items-center justify-center text-3xl">
                    <HiOutlinePuzzle />
                  </div>

                  <h3 className="text-[22px] font-bold text-dark mt-6">
                    {tool}
                  </h3>

                  <p className="text-gray-500 text-[14px] leading-[1.8] mt-3">
                    Used for automation, AI responses, data syncs and team
                    notifications.
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
                Recent Automation Work
              </p>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
              Automation Use Cases We Can Build
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
                      Automation Flow
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
                  Automation Process
                </p>
              </div>

              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold font-outfit text-dark leading-[1.05] mt-8">
                From Manual Tasks To Automated Systems
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
                  Ready To Save Time?
                </p>

                <h2 className="text-[36px] sm:text-[50px] md:text-[64px] font-bold font-outfit text-white leading-[1.05] mt-5">
                  Build An AI Workflow For Your Business
                </h2>

                <p className="text-white/70 text-[15px] md:text-[18px] leading-[1.9] mt-6 max-w-2xl">
                  Tell us your repeated work. We will map what can be
                  automated and build a practical system for your team.
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

export default AIAutomation;
