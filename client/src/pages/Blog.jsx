import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlineSearch,
  HiOutlineTag,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";
import blogs from "../data/blogs";

const categories = [...new Set(blogs.map((post) => post.category))];
const featuredPost = blogs[0];
const recentPosts = blogs.slice(0, 4);
const popularTopics = [
  "SEO Strategy",
  "Web Development",
  "AI Automation",
  "Digital Marketing",
  "Brand Growth",
];

const BlogCard = ({ post }) => {
  return (
    <article className="group bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,194,168,0.16)] transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute top-5 left-5">
          <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <HiOutlineUser />
            <span>{post.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineClock />
            <span>{post.date}</span>
          </div>
        </div>

        <h3 className="text-[28px] font-bold text-dark font-outfit mt-5 leading-snug group-hover:text-primary transition">
          {post.title}
        </h3>

        <p className="paragraph mt-5">{post.description}</p>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-7 flex items-center gap-3 text-primary font-semibold text-lg group-hover:gap-5 transition-all duration-300"
        >
          Read More
          <HiOutlineArrowRight className="text-2xl" />
        </Link>
      </div>
    </article>
  );
};

const SidebarCard = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-[28px] border border-gray-200 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl">
          {icon}
        </div>

        <h3 className="text-[22px] font-bold text-dark">{title}</h3>
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
};

const Blog = () => {
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
                Latest Articles
              </p>
            </div>

            <h1 className="text-[42px] sm:text-[58px] md:text-[76px] font-bold font-outfit text-dark leading-[1.02] mt-8">
              Insights For Smarter Digital Growth
            </h1>

            <p className="paragraph mt-7 text-lg md:text-xl max-w-3xl mx-auto">
              Explore SEO strategies, web development ideas, AI automation,
              branding tips and digital marketing knowledge from our team.
            </p>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center bg-[#F8FAFC] border border-gray-200 rounded-[36px] p-5 md:p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group relative overflow-hidden rounded-[28px] block"
              >
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-[340px] md:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-6 bottom-6">
                  <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Featured Article
                  </span>
                </div>
              </Link>

              <div className="p-2 md:p-6">
                <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                  Editor Pick
                </p>

                <h2 className="text-[34px] sm:text-[46px] md:text-[58px] font-bold font-outfit text-dark leading-[1.05] mt-5">
                  {featuredPost.title}
                </h2>

                <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm mt-6">
                  <div className="flex items-center gap-2">
                    <HiOutlineUser />
                    <span>{featuredPost.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>

                <p className="paragraph mt-6 text-[17px]">
                  {featuredPost.description}
                </p>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="gradient-btn mt-8"
                >
                  Read Featured Post
                  <HiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                Recent Blogs
              </p>

              <h2 className="heading-lg mt-4">
                Latest Insights & Articles
              </h2>
            </div>

            <p className="paragraph max-w-2xl">
              Stay updated with modern digital trends, marketing strategies,
              AI tools, branding tips and business growth solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-10 items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 space-y-7">
              <SidebarCard title="Search" icon={<HiOutlineSearch />}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles"
                    className="w-full h-[56px] rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 pr-12 outline-none focus:border-primary"
                  />

                  <HiOutlineSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-primary text-xl" />
                </div>
              </SidebarCard>

              <SidebarCard title="Categories" icon={<HiOutlineTag />}>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 px-5 py-4"
                    >
                      <span className="text-[#071120] font-semibold">
                        {category}
                      </span>

                      <span className="text-primary font-bold">
                        {
                          blogs.filter((post) => post.category === category)
                            .length
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </SidebarCard>

              <SidebarCard title="Popular Posts" icon={<HiOutlineTrendingUp />}>
                <div className="space-y-5">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group flex gap-4"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-20 rounded-2xl object-cover shrink-0"
                      />

                      <div>
                        <h4 className="text-[#071120] font-bold leading-snug group-hover:text-primary transition">
                          {post.title}
                        </h4>

                        <p className="text-gray-500 text-sm mt-2">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </SidebarCard>

              <SidebarCard title="Topics" icon={<HiOutlineBookOpen />}>
                <div className="flex flex-wrap gap-3">
                  {popularTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </SidebarCard>

              <div className="relative overflow-hidden rounded-[30px] bg-[#071120] p-7">
                <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-primary/20 blur-[80px]" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center text-2xl">
                    <HiOutlineMail />
                  </div>

                  <h3 className="text-white text-[26px] font-bold mt-6">
                    Need Growth Ideas?
                  </h3>

                  <p className="text-white/70 leading-[1.8] mt-4">
                    Talk to our team for SEO, websites, automation and
                    marketing strategy.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-7 h-[52px] px-6 rounded-full bg-white text-[#071120] font-semibold inline-flex items-center gap-3"
                  >
                    Contact Us
                    <HiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#071120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-primary/20 blur-[110px]" />
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#22C55E]/10 blur-[110px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-tight">
              Want To Grow Your
              <span className="text-primary"> Business Online?</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mt-7 leading-relaxed">
              Let us create powerful digital strategies, SEO systems and
              high-converting websites for your brand.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact" className="gradient-btn justify-center">
                Start Your Project
                <HiOutlineArrowRight />
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

export default Blog;
