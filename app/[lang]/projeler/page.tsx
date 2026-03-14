import Link from "next/link";
import { getDictionary } from "../../../lib/dictionaries";

const featuredProjects = (lang: string, t: ReturnType<typeof getDictionary>) => [
  {
    title: t.project_1_title,
    category: t.project_1_category,
    desc: t.project_1_desc,
    href: `/${lang}/projeler/mericbey-jersey-sut-ciftligi`,
    img: "/mericbey-project.png",
  },
  {
    title: t.project_2_title,
    category: t.project_2_category,
    desc: t.project_2_desc,
    href: `/${lang}/projeler/torkoop`,
    img: "/torkoop-project.png",
  },
  {
    title: t.project_3_title,
    category: t.project_3_category,
    desc: t.project_3_desc,
    href: `/${lang}/projeler/ortbas`,
    img: "/ortbas-project.png",
  },
];

const studioProjects = (t: ReturnType<typeof getDictionary>) => [
  {
    title: t.studio_project_1_title,
    category: t.studio_project_1_category,
    desc: t.studio_project_1_desc,
    img: "/lunera-project.png",
  },
  {
    title: t.studio_project_2_title,
    category: t.studio_project_2_category,
    desc: t.studio_project_2_desc,
    img: "/valeo-project.png",
  },
  {
    title: t.studio_project_3_title,
    category: t.studio_project_3_category,
    desc: t.studio_project_3_desc,
    img: "/northroot-project.png",
  },
];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const featured = featuredProjects(lang, t);
  const studio = studioProjects(t);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040b_0%,#030611_45%,#010208_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(55,90,210,0.10),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_72%_80%,rgba(45,80,200,0.08),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.45px,transparent_0.45px)] [background-size:4px_4px]" />

        <div className="absolute left-[-8%] top-[10%] h-[340px] w-[340px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[8%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href={`/${lang}`}
            className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm text-white/90 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            ← {t.projects_back_home}
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
              {t.projects_label}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {t.projects_title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-[22px] md:leading-9">
              {t.projects_page_desc}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                {t.projects_featured_label}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                {t.projects_featured_title}
              </h2>
            </div>

            <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55 md:block">
              {t.projects_title}
            </div>
          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.href} {...project} cta={t.project_card_cta} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                {t.studio_projects_label}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                {t.studio_projects_title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                {t.studio_projects_desc}
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55">
              {t.studio_projects_badge}
            </div>
          </div>

          <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {studio.map((project, index) => (
              <StudioProjectCard
                key={`${project.title}-${index}`}
                title={project.title}
                category={project.category}
                desc={project.desc}
                img={project.img}
                badge={t.studio_project_badge}
                footer={t.studio_project_footer}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  img,
  title,
  category,
  desc,
  href,
  cta,
}: {
  img: string;
  title: string;
  category: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/35" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-white/40">
            {category}
          </p>

          <h3 className="mt-3 text-2xl font-medium text-white">{title}</h3>

          <p className="mt-4 min-h-[96px] text-base leading-7 text-zinc-400">
            {desc}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-sm text-white/55">{cta}</span>
            <span className="text-white/45 transition duration-300 group-hover:translate-x-1 group-hover:text-white">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function StudioProjectCard({
  img,
  title,
  category,
  desc,
  badge,
  footer,
}: {
  img: string;
  title: string;
  category: string;
  desc: string;
  badge: string;
  footer: string;
}) {
  return (
    <div className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/35" />

          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
            {badge}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-white/40">
            {category}
          </p>

          <h3 className="mt-3 text-2xl font-medium text-white">{title}</h3>

          <p className="mt-4 min-h-[96px] text-base leading-7 text-zinc-400">
            {desc}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-sm text-white/45">{footer}</span>
            <span className="text-white/30">•</span>
          </div>
        </div>
      </div>
    </div>
  );
}