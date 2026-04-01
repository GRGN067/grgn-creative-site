import type { Metadata } from "next";
import Link from "next/link";

const content = {
  tr: {
    back: "Ana Sayfaya Dön",
    category: "Yaratıcı Yönetmenlik / Kısa Film",
    title: "Örtbas",
    subtitle: "Gölgelerden kaçamazsın.",
    desc: "Yönetmenlik, oyunculuk, kurgu ve hikaye geliştirme süreçlerinin tarafımdan yürütüldüğü kısa film projesi.",
    tags: ["Yönetmenlik", "Kurgu", "Oyunculuk", "Hikaye"],
    scopeTitle: "Proje Kapsamı",
    scopeText:
      "Kısa filmin yaratıcı yönetimi, hikaye kurgusu, oyunculuk ve kurgu süreçleri tarafımdan yürütüldü.",
    goalTitle: "Amaç",
    goalText:
      "Sinematik atmosfer, hikaye yoğunluğu ve görsel anlatım gücü yüksek bir kısa film üretmek.",
    roleTitle: "Rolümüz",
    roleText:
      "Yönetmen, oyuncu, editor ve hikaye geliştirici olarak projenin ana yaratıcı süreçlerinde yer aldım.",
    filmLabel: "Film",
    filmTitle: "Projeyi izleyin",
    storyLabel: "Proje Hikayesi",
    storyTitle: "Karanlık atmosferli kişisel bir üretim",
    storyText1:
      "Örtbas, yalnızca teknik olarak üretilmiş bir kısa film değil; aynı zamanda kişisel yaratıcı dilimi taşıyan bir anlatı projesi. Yönetmenlik, oyunculuk ve kurgu süreçlerinin aynı eksende buluşması, projeye daha kişisel ve yoğun bir yapı kazandırdı.",
    storyText2:
      "Bu proje üzerinden görsel anlatım, ritim, atmosfer kurma ve hikayeyi sahne diliyle taşıma becerilerimizi görünür hale getirmiş bulunmaktayız.",
  },
  en: {
    back: "Back to Home",
    category: "Creative Direction / Short Film",
    title: "Örtbas",
    subtitle: "You can't escape the shadows.",
    desc: "A short film project in which directing, acting, editing and story development were carried out by me.",
    tags: ["Directing", "Editing", "Acting", "Story"],
    scopeTitle: "Project Scope",
    scopeText:
      "The creative direction, story structure, acting and editing processes of the short film were handled by me.",
    goalTitle: "Goal",
    goalText:
      "To produce a short film with a strong cinematic atmosphere, narrative intensity and visual storytelling power.",
    roleTitle: "Our Role",
    roleText:
      "I took part in the project’s main creative processes as director, actor, editor and story developer.",
    filmLabel: "Film",
    filmTitle: "Watch the project",
    storyLabel: "Project Story",
    storyTitle: "A personal production with a dark atmosphere",
    storyText1:
      "Örtbas is not only a technically produced short film; it is also a narrative project carrying my personal creative language. The convergence of directing, acting and editing on the same axis gave the project a more personal and intense structure.",
    storyText2:
      "Through this project, we made visible our abilities in visual storytelling, rhythm, atmosphere building and carrying the story through scene language.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    title: isEn
      ? "Ortbas Short Film Project | GRGN Creative"
      : "Örtbas Kısa Film Projesi | GRGN Creative",

    description: isEn
      ? "A short film project directed, acted and edited by GRGN Creative. A cinematic storytelling work focused on atmosphere and narrative depth."
      : "GRGN Creative tarafından yönetilen, oynanan ve kurgulanan kısa film projesi. Atmosfer ve hikaye yoğunluğu odaklı sinematik bir çalışma.",

    keywords: [
      "örtbas kısa film",
      "kısa film projesi",
      "yönetmenlik projesi",
      "kısa film örneği",
      "film prodüksiyon",
      "grgn creative proje",
    ],

    alternates: {
      canonical: `https://grgncreative.com/${lang}/projeler/ortbas`,
    },

    openGraph: {
      title: isEn
        ? "Ortbas Short Film | GRGN Creative"
        : "Örtbas Kısa Film | GRGN Creative",
      description: isEn
        ? "Cinematic short film project by GRGN Creative."
        : "GRGN Creative tarafından yapılan sinematik kısa film projesi.",
      url: `https://grgncreative.com/${lang}/projeler/ortbas`,
      siteName: "GRGN Creative",
      locale: isEn ? "en_US" : "tr_TR",
      type: "video.movie",
    },
  };
}

export default async function OrtbasProjectPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageContent = lang === "en" ? content.en : content.tr;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040b_0%,#030611_45%,#010208_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(55,90,210,0.10),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_72%_80%,rgba(45,80,200,0.08),transparent_28%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href={`/${lang}`}
            className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm text-white/90 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            ← {pageContent.back}
          </Link>

          <div className="mt-10 grid gap-14 md:grid-cols-[1fr_1.05fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                {pageContent.category}
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {pageContent.title}
              </h1>

              <p className="mt-4 text-xl italic text-white/60 md:text-3xl">
                {pageContent.subtitle}
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-[22px] md:leading-9">
                {pageContent.desc}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {pageContent.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
              <img
                src="/ortbas-project.png"
                alt={pageContent.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InfoCard title={pageContent.scopeTitle}>
            {pageContent.scopeText}
          </InfoCard>

          <InfoCard title={pageContent.goalTitle}>
            {pageContent.goalText}
          </InfoCard>

          <InfoCard title={pageContent.roleTitle}>
            {pageContent.roleText}
          </InfoCard>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            {pageContent.filmLabel}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {pageContent.filmTitle}
          </h2>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/3dSelphCCL4"
                title={pageContent.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            {pageContent.storyLabel}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {pageContent.storyTitle}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              {pageContent.storyText1}
            </p>

            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              {pageContent.storyText2}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/75">
      {children}
    </span>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm uppercase tracking-[0.18em] text-white/40">
        {title}
      </p>
      <p className="mt-4 text-base leading-7 text-zinc-400">{children}</p>
    </div>
  );
}