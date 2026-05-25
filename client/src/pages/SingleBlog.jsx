import { useParams, Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import blogs from "../data/blogs";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineTag,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";

const categories = [...new Set(blogs.map((blog) => blog.category))];
const topics = [
  "Digital Marketing",
  "SEO",
  "Web Development",
  "AI Automation",
  "Brand Growth",
];

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

const SingleBlog = () => {
  const { slug } = useParams();

  const post = blogs.find((blog) => blog.slug === slug);
  const recentPosts = blogs.slice(0, 4);
  const relatedPosts = blogs
    .filter((blog) => blog.slug !== slug)
    .slice(0, 3);

  if (!post) {
    return (
      <MainLayout>
        <section className="relative overflow-hidden bg-[#F8FAFC] py-28">
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="container-custom relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mx-auto">
                <HiOutlineDocumentText />
              </div>

              <h1 className="text-[42px] md:text-[64px] font-bold font-outfit text-dark mt-8">
                Blog Not Found
              </h1>

              <p className="paragraph mt-5">
                The article you are looking for may have been moved or removed.
              </p>

              <Link to="/blog" className="gradient-btn mt-8">
                Back To Blog
                <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#071120_1px,transparent_1px),linear-gradient(to_bottom,#071120_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#22C55E]/10 blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 text-primary font-semibold"
            >
              <HiOutlineArrowLeft />
              Back To Blog
            </Link>

            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                {post.category}
              </p>
            </div>

            <h1 className="text-[40px] sm:text-[56px] md:text-[76px] font-bold font-outfit text-dark leading-[1.02] mt-8">
              {post.title}
            </h1>

            <p className="paragraph mt-7 text-lg md:text-xl max-w-3xl">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-8 text-gray-500">
              <div className="flex items-center gap-2">
                <HiOutlineUser className="text-primary text-xl" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineCalendar className="text-primary text-xl" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineClock className="text-primary text-xl" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 items-start">
            <article>
              <div className="overflow-hidden rounded-[36px] shadow-[0_25px_80px_rgba(15,23,42,0.12)] border border-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[320px] md:h-[560px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="mt-10 bg-[#F8FAFC] border border-gray-200 rounded-[34px] p-7 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
                    <HiOutlineBookOpen />
                  </div>

                  <p className="text-primary font-semibold uppercase tracking-[3px] text-xs">
                    Article
                  </p>
                </div>

                <div className="text-lg leading-[2] text-gray-700 whitespace-pre-line">
                  {post.content}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                {topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 bg-white border border-gray-200 rounded-[28px] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
                <div>
                  <p className="text-primary font-semibold uppercase tracking-[3px] text-xs">
                    Share Article
                  </p>

                  <h3 className="text-[24px] font-bold text-dark mt-2">
                    Useful insight for your team?
                  </h3>
                </div>

                <button className="h-[52px] px-6 rounded-full bg-primary text-white font-semibold inline-flex items-center justify-center gap-3">
                  <HiOutlineShare />
                  Share
                </button>
              </div>

              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <div className="flex items-end justify-between gap-6 mb-8">
                    <div>
                      <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                        Keep Reading
                      </p>

                      <h2 className="text-[34px] md:text-[46px] font-bold font-outfit text-dark mt-3">
                        Related Articles
                      </h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-7">
                    {relatedPosts.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/blog/${item.slug}`}
                        className="group bg-[#F8FAFC] border border-gray-200 rounded-[28px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[220px] object-cover"
                        />

                        <div className="p-6">
                          <p className="text-primary font-semibold text-sm">
                            {item.category}
                          </p>

                          <h3 className="text-[24px] font-bold text-dark mt-3 group-hover:text-primary transition">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <aside className="lg:sticky lg:top-28 space-y-7">
              <SidebarCard title="Search" icon={<HiOutlineSearch />}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search article..."
                    className="w-full h-[56px] rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 pr-12 outline-none focus:border-primary"
                  />

                  <HiOutlineSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-primary text-xl" />
                </div>
              </SidebarCard>

              <SidebarCard title="Recent Posts" icon={<HiOutlineTrendingUp />}>
                <div className="space-y-5">
                  {recentPosts.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog/${item.slug}`}
                      className="flex gap-4 group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-2xl object-cover shrink-0"
                      />

                      <div>
                        <h4 className="font-bold text-dark leading-snug group-hover:text-primary transition">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-500 mt-2">
                          {item.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </SidebarCard>

              <SidebarCard title="Categories" icon={<HiOutlineTag />}>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 px-5 py-4"
                    >
                      <span className="font-semibold text-gray-700">
                        {category}
                      </span>

                      <span className="text-primary font-bold">
                        {
                          blogs.filter((blog) => blog.category === category)
                            .length
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </SidebarCard>

              <SidebarCard title="Topics" icon={<HiOutlineBookOpen />}>
                <div className="flex flex-wrap gap-3">
                  {topics.map((topic) => (
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
                    Need Help Growing Your Business?
                  </h3>

                  <p className="text-white/70 leading-[1.8] mt-4">
                    Let us create high-converting digital experiences together.
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
    </MainLayout>
  );
};

export default SingleBlog;
