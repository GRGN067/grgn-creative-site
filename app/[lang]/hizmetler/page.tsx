import Link from "next/link";

const content = {
  tr: {
    label: "Hizmetler",
    title: "Markanı büyüten yaratıcı hizmetler.",
    desc: "GRGN Creative olarak markalar için kimlik, sosyal medya, ambalaj ve web tasarım alanlarında güçlü, modern ve premium çözümler üretiyoruz.",
    cta: "Detayları İncele",
    items: [
      {
        title: "Kurumsal Kimlik",
        desc: "Markanın tanınabilirliğini, güven algısını ve profesyonel görünümünü güçlendiren tutarlı görsel sistemler.",
        href: "/tr/hizmetler/kurumsal-kimlik",
        img: "/hizmet-marka.png",
      },
      {
        title: "Sosyal Medya Tasarımı",
        desc: "Markanın dijitalde daha güçlü, düzenli ve premium görünmesini sağlayan içerik ve görsel sistem tasarımı.",
        href: "/tr/hizmetler/sosyal-medya-tasarimi",
        img: "/hizmet-sosyal-medya.png",
      },
      {
        title: "Ambalaj Tasarımı",
        desc: "Ürünün rafta daha görünür, daha ayırt edilebilir ve daha güçlü algılanmasını sağlayan ambalaj çözümleri.",
        href: "/tr/hizmetler/ambalaj-tasarimi",
        img: "/hizmet-ambalaj.png",
      },
      {
        title: "Web Tasarım",
        desc: "Markayı net anlatan, güven veren ve kullanıcıyı doğru aksiyona yönlendiren modern web deneyimleri.",
        href: "/tr/hizmetler/web-tasarim",
        img: "/hizmet-web.png",
      },
    ],
  },
  en: {
    label: "Services",
    title: "Creative services that grow your brand.",
    desc: "At GRGN Creative, we provide strong, modern and premium solutions in brand identity, social media, packaging and web design.",
    cta: "View Details",
    items: [
      {
        title: "Brand Identity",
        desc: "Consistent visual systems that strengthen recognition, trust perception and the professional appearance of the brand.",
        href: "/en/hizmetler/kurumsal-kimlik",
        img: "/hizmet-marka.png",
      },
      {
        title: "Social Media Design",
        desc: "Content and visual systems that help the brand appear stronger, more organized and more premium in digital.",
        href: "/en/hizmetler/sosyal-medya-tasarimi",
        img: "/hizmet-sosyal-medya.png",
      },
      {
        title: "Packaging Design",
        desc: "Packaging solutions that make the product more visible, more distinctive and stronger in shelf perception.",
        href: "/en/hizmetler/ambalaj-tasarimi",
        img: "/hizmet-ambalaj.png",
      },
      {
        title: "Web Design",
        desc: "Modern web experiences that clearly explain the brand, build trust and guide users toward the right action.",
        href: "/en/hizmetler/web-tasarim",
        img: "/hizmet-web.png",
      },
    ],
  },
} as const;

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = lang === "en" ? content.en : content.tr;

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
            ← {lang === "en" ? "Back to Home" : "Ana Sayfaya Dön"}
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
              {t.label}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-[22px] md:leading-9">
              {t.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {t.items.map((item) => (
              <Link key={item.href} href={item.href} className="group block">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/35" />
                  </div>

                  <div className="p-6 sm:p-7">
                    <h2 className="text-2xl font-medium text-white sm:text-3xl">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-sm text-white/55">{t.cta}</span>
                      <span className="text-white/45 transition duration-300 group-hover:translate-x-1 group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}