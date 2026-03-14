import Link from "next/link";

const content = {
  tr: {
    back: "Ana Sayfaya Dön",
    category: "Kurumsal Kimlik / Etiket Tasarımı",
    title: "Torkoop",
    subtitle: "Torbalı Kooperatifi",
    desc: "Torbalı merkezli üretim yapan kooperatif için kurumsal logo ve ürün etiketleri tasarlanarak markanın rafta daha güçlü görünmesi sağlandı.",
    tags: ["Logo Tasarımı", "Etiket Tasarımı", "Marka Kimliği"],
    scopeTitle: "Proje Kapsamı",
    scopeText:
      "Kurumsal logo çalışması ve ürün ailesine ait etiket tasarımları geliştirildi.",
    goalTitle: "Amaç",
    goalText:
      "Markanın üretim gücünü ve kurumsal yapısını daha net hissettiren, raf üzerinde düzenli ve güven veren bir görünüm oluşturmak.",
    roleTitle: "Rolümüz",
    roleText:
      "Kurumsal kimlik tasarımı, logo geliştirme ve ürün etiket sisteminin görsel olarak kurgulanması.",
    storyLabel: "Proje Hikayesi",
    storyTitle: "Kurumsal görünümden raf etkisine",
    storyText1:
      "Torkoop için yapılan çalışma, yalnızca estetik bir logo tasarımı değil; markanın üretim kimliğini destekleyen tutarlı bir görsel sistem oluşturma hedefi taşıyordu. Kurumsal duruş ile ürün sunumu arasında bütünlük sağlandı.",
    storyText2:
      "Ürün etiketleri tarafında ise markanın raf üzerindeki algısını güçlendiren, daha düzenli ve daha dikkat çekici bir yapı kuruldu. Böylece hem kimlik hem de ürün yüzeyi aynı dil içinde birleşti.",
  },
  en: {
    back: "Back to Home",
    category: "Brand Identity / Label Design",
    title: "Torkoop",
    subtitle: "Torbalı Cooperative",
    desc: "A corporate logo and product label system were designed for the Torbalı-based cooperative, helping the brand achieve a stronger shelf presence.",
    tags: ["Logo Design", "Label Design", "Brand Identity"],
    scopeTitle: "Project Scope",
    scopeText:
      "A corporate logo study and label designs for the product family were developed.",
    goalTitle: "Goal",
    goalText:
      "To create a more organized and trustworthy visual presence that reflects the brand’s production strength and institutional structure more clearly on the shelf.",
    roleTitle: "Our Role",
    roleText:
      "Brand identity design, logo development and visual structuring of the product label system.",
    storyLabel: "Project Story",
    storyTitle: "From corporate appearance to shelf impact",
    storyText1:
      "The work created for Torkoop was not only an aesthetic logo design; it aimed to build a consistent visual system that supported the brand’s production identity. A sense of unity was established between corporate stance and product presentation.",
    storyText2:
      "On the label side, a more organized and more attention-grabbing structure was built to strengthen the brand’s perception on the shelf. As a result, both identity and product surface came together under the same visual language.",
  },
} as const;

export default async function TorkoopProjectPage({
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(55,90,210,0.10),transparent_24%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_70%_78%,rgba(45,80,200,0.08),transparent_28%)]" />

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

              <p className="mt-4 text-lg text-white/60 md:text-2xl">
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
                src="/torkoop-project.png"
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