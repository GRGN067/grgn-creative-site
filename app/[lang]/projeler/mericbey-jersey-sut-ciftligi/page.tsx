import type { Metadata } from "next";
import Link from "next/link";

const content = {
  tr: {
    back: "Ana Sayfaya Dön",
    category: "Marka Stratejisi / İçerik Sistemi",
    title: "Meriçbey Jersey Süt Çiftliği",
    desc: "Premium konumlandırma, güven odaklı iletişim ve Instagram üzerinden ilerleyen satış sistemini destekleyen marka kurgusu.",
    tags: [
      "Premium Konumlandırma",
      "Güven Öncelikli İletişim",
      "Instagram Satış Akışı",
      "İçerik Stratejisi",
    ],
    scopeTitle: "Proje Kapsamı",
    scopeText:
      "Marka konumlandırması, iletişim yapısı ve güven temelli içerik sistemi oluşturuldu.",
    goalTitle: "Amaç",
    goalText:
      "Ürünün değerini premium seviyede konumlandırmak ve satış sürecini güven veren bir marka diliyle desteklemek.",
    roleTitle: "Rolümüz",
    roleText:
      "Stratejik kurgu, içerik yaklaşımı, marka dili ve dijital yapı geliştirme süreçleri.",
    storyLabel: "Proje Hikayesi",
    storyTitle: "Güven üzerinden büyüyen bir marka yapısı",
    storyText1:
      "Meriçbey için kurulan yapı, yalnızca ürün tanıtımı değil; güven, kalite algısı ve satış sistemi üzerine oturtulmuş bütüncül bir marka yaklaşımıdır. Premium konumlandırma, içerik düzeni ve satış akışı aynı çatı altında ele alındı.",
    storyText2:
      "Amaç; markanın yalnızca iyi görünmesi değil, aynı zamanda tüketicide güven oluşturması ve bu güveni satışa dönüştürebilen sürdürülebilir bir iletişim sistemine sahip olmasıydı.",
  },
  en: {
    back: "Back to Home",
    category: "Brand Strategy / Content System",
    title: "Meriçbey Jersey Dairy Farm",
    desc: "A brand structure supporting premium positioning, trust-focused communication and an Instagram-based sales system.",
    tags: [
      "Premium Positioning",
      "Trust-First Communication",
      "Instagram Sales Flow",
      "Content Strategy",
    ],
    scopeTitle: "Project Scope",
    scopeText:
      "Brand positioning, communication structure and a trust-based content system were developed.",
    goalTitle: "Goal",
    goalText:
      "To position the product at a premium level and support the sales process with a trustworthy brand language.",
    roleTitle: "Our Role",
    roleText:
      "Strategic framework, content approach, brand language and digital structure development processes.",
    storyLabel: "Project Story",
    storyTitle: "A brand system growing through trust",
    storyText1:
      "The structure built for Meriçbey was not only about product promotion; it was a holistic brand approach built on trust, perceived quality and a sales system. Premium positioning, content order and sales flow were handled under one roof.",
    storyText2:
      "The goal was not only to make the brand look good, but also to build trust in the consumer and establish a sustainable communication system capable of converting that trust into sales.",
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
      ? "Meriçbey Project | GRGN Creative"
      : "Meriçbey Jersey Süt Çiftliği Projesi | GRGN Creative",

    description: isEn
      ? "Brand strategy, content system and digital positioning project created by GRGN Creative for Meriçbey Jersey Dairy Farm."
      : "GRGN Creative tarafından Meriçbey Jersey Süt Çiftliği için hazırlanan marka stratejisi, içerik sistemi ve dijital konumlandırma projesi.",

    keywords: [
      "meriçbey",
      "meriçbey jersey süt çiftliği",
      "marka stratejisi",
      "içerik sistemi",
      "çiftlik marka çalışması",
      "grgn creative proje",
    ],

    alternates: {
      canonical: `https://grgncreative.com/${lang}/projeler/mericbey-jersey-sut-ciftligi`,
    },

    openGraph: {
      title: isEn
        ? "Meriçbey Project | GRGN Creative"
        : "Meriçbey Jersey Süt Çiftliği Projesi | GRGN Creative",
      description: isEn
        ? "Digital brand project by GRGN Creative for Meriçbey."
        : "GRGN Creative tarafından Meriçbey için yapılan dijital marka projesi.",
      url: `https://grgncreative.com/${lang}/projeler/mericbey-jersey-sut-ciftligi`,
      siteName: "GRGN Creative",
      locale: isEn ? "en_US" : "tr_TR",
      type: "website",
    },
  };
}

export default async function MericbeyProjectPage({
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
                src="/mericbey-project.png"
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