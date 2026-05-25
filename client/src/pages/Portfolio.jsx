import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import {
  HiArrowRight,
  HiOutlineChartBar,
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineExternalLink,
  HiOutlineSearch,
  HiOutlineVideoCamera,
} from "react-icons/hi";

const portfolioSections = [
  {
    title: "Web Development",
    eyebrow: "01 / Websites",
    desc:
      "Scalable business websites, ecommerce stores and web platforms built for speed, branding and conversions.",
    icon: <HiOutlineCode />,
    projects: [
      {
        title: "Kidzee Hub",
        category: "Education Website",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
        link: "https://kidzeehub.com/",
        desc:
          "A clean education website experience built for parents, admissions and local school visibility.",
      },
      {
        title: "Ajjars",
        category: "eCommerce Store",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.ajjars.com/",
        desc:
          "A commerce-focused store layout designed for product browsing, trust and smooth purchase flow.",
      },
      {
        title: "Career BrainMap",
        category: "Career Platform",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        link: "https://careerbrainmap.com/",
        desc:
          "A career guidance platform with a professional structure for students, mentors and resources.",
      },
      {
        title: "IPL 2026",
        category: "Sports News",
        image:
          "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
        link: "https://ipl2026.com.in/",
        desc:
          "A sports content website made for news updates, traffic growth and easy content publishing.",
      },
    ],
  },
  {
    title: "SEO Optimization",
    eyebrow: "02 / Organic Growth",
    desc:
      "Search visibility projects focused on technical fixes, keyword strategy, on-page SEO and local rankings.",
    icon: <HiOutlineSearch />,
    projects: [
      {
        title: "RankWrap",
        category: "SEO Agency",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "https://rankwrap.com/",
        desc:
          "An SEO-focused agency presence structured around credibility, service clarity and organic lead generation.",
      },
      {
        title: "Local Service SEO",
        category: "Local SEO",
        gradient: "from-[#1D4ED8] via-[#0F766E] to-[#22C55E]",
        desc:
          "Service pages, local keyword targeting and map visibility improvements for location-based leads.",
      },
      {
        title: "Content Growth Plan",
        category: "Content SEO",
        gradient: "from-[#071120] via-[#7C3AED] to-[#EC4899]",
        desc:
          "Topic clusters, blog planning and high-intent keyword mapping for consistent organic traffic.",
      },
    ],
  },
  {
    title: "Video Editing",
    eyebrow: "03 / Video Content",
    desc:
      "Short-form reels, YouTube videos, ad creatives and promo edits built for retention and brand impact.",
    icon: <HiOutlineVideoCamera />,
    projects: [
      {
        title: "Fitness Reels Pack",
        category: "Short Form",
        gradient: "from-[#1D4ED8] via-[#7C3AED] to-[#EC4899]",
        desc:
          "A high-energy reel series with hooks, captions, beat cuts and social-ready export sizes.",
      },
      {
        title: "Restaurant Promo",
        category: "Promo Video",
        gradient: "from-[#F97316] via-[#EF4444] to-[#FACC15]",
        desc:
          "A food business promo with menu highlights, cinematic cuts, offer frames and CTA screens.",
      },
      {
        title: "Product Ad Edits",
        category: "Ad Creative",
        gradient: "from-[#071120] via-[#0F766E] to-[#22C55E]",
        desc:
          "Performance-focused product ads with problem-solution structure and multiple platform ratios.",
      },
    ],
  },
  {
    title: "Graphic Designing",
    eyebrow: "04 / Visual Identity",
    desc:
      "Brand visuals, social creatives, banners, UI assets and marketing designs made to look premium.",
    icon: <HiOutlineColorSwatch />,
    projects: [
      {
        title: "Startup Brand Kit",
        category: "Brand Identity",
        gradient: "from-[#1D4ED8] via-[#13C4A3] to-[#22C55E]",
        desc:
          "Logo direction, color palette, typography system and reusable visual assets for a new brand.",
      },
      {
        title: "Social Media Pack",
        category: "Social Creatives",
        gradient: "from-[#F97316] via-[#EC4899] to-[#7C3AED]",
        desc:
          "Post templates, story designs, offer creatives and carousel layouts for social consistency.",
      },
      {
        title: "Campaign Banners",
        category: "Marketing Design",
        gradient: "from-[#071120] via-[#1D4ED8] to-[#13C4A3]",
        desc:
          "Website banners and promotional graphics made for launches, ads and seasonal campaigns.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    eyebrow: "05 / Campaigns",
    desc:
      "Growth campaigns across social media, ads, email and content designed to increase leads and sales.",
    icon: <HiOutlineChartBar />,
    projects: [
      {
        title: "Meta Ads Campaign",
        category: "Paid Ads",
        gradient: "from-[#1D4ED8] via-[#7C3AED] to-[#EC4899]",
        desc:
          "Audience targeting, creative testing and conversion-focused campaign setup for lead generation.",
      },
      {
        title: "Social Growth Plan",
        category: "Social Media",
        gradient: "from-[#13C4A3] via-[#22C55E] to-[#FACC15]",
        desc:
          "Monthly content calendar, creative direction and engagement strategy for stronger visibility.",
      },
      {
        title: "Email Nurture Flow",
        category: "Email Marketing",
        gradient: "from-[#071120] via-[#0F766E] to-[#1D4ED8]",
        desc:
          "Automated email sequence built to educate leads, improve trust and support conversions.",
      },
    ],
  },
  {
    title: "AI Automation",
    eyebrow: "06 / Smart Systems",
    desc:
      "AI chatbots, lead workflows, CRM syncs and no-code automations that reduce repeated manual work.",
    icon: <HiOutlineChip />,
    projects: [
      {
        title: "Website Lead Bot",
        category: "AI Chatbot",
        gradient: "from-[#1D4ED8] via-[#7C3AED] to-[#EC4899]",
        desc:
          "A website assistant that qualifies visitors, captures details and sends leads to the team.",
      },
      {
        title: "CRM Follow-Up Flow",
        category: "Sales Automation",
        gradient: "from-[#071120] via-[#0F766E] to-[#22C55E]",
        desc:
          "A workflow that updates CRM stages, sends reminders and keeps follow-ups organized.",
      },
      {
        title: "AI Content Workflow",
        category: "Content Automation",
        gradient: "from-[#F97316] via-[#FACC15] to-[#13C4A3]",
        desc:
          "A system for generating content ideas, captions, email drafts and campaign briefs faster.",
      },
    ],
  },
];

const stats = [
  {
    value: "6",
    label: "Service Categories",
  },
  {
    value: "20+",
    label: "Project Types",
  },
  {
    value: "360",
    label: "Digital Growth Support",
  },
];

const ProjectVisual = ({ project, icon }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
      />
    );
  }

  return (
    <div
      className={`h-[260px] bg-gradient-to-br ${project.gradient} p-7 flex flex-col justify-between relative overflow-hidden`}
    >
      <div className="absolute -right-14 -top-14 w-44 h-44 rounded-full bg-white/15" />
      <div className="absolute right-10 bottom-10 w-24 h-24 rounded-[28px] bg-white/15 rotate-12" />

      <div className="relative w-16 h-16 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center text-3xl">
        {icon}
      </div>

      <div className="relative">
        <p className="text-white/70 text-sm font-semibold uppercase tracking-[2px]">
          Case Study
        </p>

        <h3 className="text-white text-[30px] font-bold mt-2">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, icon }) => {
  const CardTag = project.link ? "a" : "div";

  return (
    <CardTag
      href={project.link}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noreferrer" : undefined}
      className="group bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,194,168,0.16)] transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        <ProjectVisual project={project} icon={icon} />

        {project.image && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        )}

        <div className="absolute top-5 left-5">
          <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            {project.category}
          </span>
        </div>

        <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary text-2xl shadow-lg">
          {icon}
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-3xl font-bold text-dark font-outfit group-hover:text-primary transition">
          {project.title}
        </h3>

        <p className="paragraph mt-4">{project.desc}</p>

        <div className="mt-7 flex items-center justify-between">
          <span className="text-primary font-semibold text-lg">
            {project.link ? "View Project" : "View Case Study"}
          </span>

          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
            {project.link ? <HiOutlineExternalLink /> : <HiArrowRight />}
          </div>
        </div>
      </div>
    </CardTag>
  );
};

const Portfolio = () => {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#22C55E]/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Our Portfolio
              </p>
            </div>

            <h1 className="text-[42px] sm:text-[58px] md:text-[76px] font-bold font-outfit text-dark leading-[1.02] mt-8">
              Projects Across Every Growth Service
            </h1>

            <p className="paragraph mt-7 text-lg md:text-xl max-w-3xl mx-auto">
              Explore web development, SEO, video editing, graphic design,
              digital marketing and AI automation work crafted for ambitious
              brands.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mt-12">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-gray-200 rounded-[26px] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="text-primary text-[34px] font-bold">
                    {item.value}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                Featured Work
              </p>

              <h2 className="heading-lg mt-4">
                Digital Experiences We Built
              </h2>
            </div>

            <p className="paragraph max-w-2xl">
              Every section below represents one core service area, from live
              website builds to campaign, creative, SEO and automation case
              studies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {portfolioSections.map((section) => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`}
                className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <div className="text-primary text-3xl group-hover:text-white">
                  {section.icon}
                </div>

                <p className="text-[#071120] group-hover:text-white font-semibold mt-4">
                  {section.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {portfolioSections.map((section, index) => (
        <section
          key={section.title}
          id={section.title.toLowerCase().replaceAll(" ", "-")}
          className={`py-16 md:py-24 ${
            index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"
          }`}
        >
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
                  <span className="w-2 h-2 rounded-full bg-primary" />

                  <p className="text-primary font-semibold uppercase tracking-[3px] text-[11px] md:text-xs">
                    {section.eyebrow}
                  </p>
                </div>

                <h2 className="text-[34px] sm:text-[48px] md:text-[62px] font-bold font-outfit text-dark leading-[1.05] mt-7">
                  {section.title} Projects
                </h2>
              </div>

              <p className="paragraph max-w-2xl">{section.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {section.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  icon={section.icon}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-[#071120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-primary/20 blur-[110px]" />
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#22C55E]/10 blur-[110px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-tight">
              Ready To Build Your
              <span className="text-primary"> Next Project?</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mt-7 leading-relaxed">
              Let us create digital experiences that grow your brand, improve
              conversions and scale your business online.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact" className="gradient-btn justify-center">
                Start Your Project
                <HiArrowRight />
              </Link>

              <Link
                to="/contact"
                className="outline-btn border-white text-white hover:bg-white hover:text-dark text-center"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Portfolio;
