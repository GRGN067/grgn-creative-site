import Link from "next/link";

export default function MericbeyProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040b_0%,#030611_45%,#010208_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(55,90,210,0.10),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_72%_80%,rgba(45,80,200,0.08),transparent_28%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm text-white/90 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            ← Ana Sayfaya Dön
          </Link>

          <div className="mt-10 grid gap-14 md:grid-cols-[1fr_1.05fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                Marka Stratejisi / İçerik Sistemi
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Meriçbey Jersey Süt Çiftliği
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-[22px] md:leading-9">
                Premium konumlandırma, güven odaklı iletişim ve Instagram
                üzerinden ilerleyen satış sistemini destekleyen marka kurgusu.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Tag>Premium Konumlandırma</Tag>
                <Tag>Güven Öncelikli İletişim</Tag>
                <Tag>Instagram Satış Akışı</Tag>
                <Tag>İçerik Stratejisi</Tag>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
              <img
                src="/mericbey-project.png"
                alt="Meriçbey Jersey Süt Çiftliği"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InfoCard title="Proje Kapsamı">
            Marka konumlandırması, iletişim yapısı ve güven temelli içerik
            sistemi oluşturuldu.
          </InfoCard>

          <InfoCard title="Amaç">
            Ürünün değerini premium seviyede konumlandırmak ve satış sürecini
            güven veren bir marka diliyle desteklemek.
          </InfoCard>

          <InfoCard title="Rolümüz">
            Stratejik kurgu, içerik yaklaşımı, marka dili ve dijital yapı
            geliştirme süreçleri.
          </InfoCard>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            Proje Hikayesi
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Güven üzerinden büyüyen bir marka yapısı
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              Meriçbey için kurulan yapı, yalnızca ürün tanıtımı değil; güven,
              kalite algısı ve satış sistemi üzerine oturtulmuş bütüncül bir
              marka yaklaşımıdır. Premium konumlandırma, içerik düzeni ve satış
              akışı aynı çatı altında ele alındı.
            </p>

            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              Amaç; markanın yalnızca iyi görünmesi değil, aynı zamanda
              tüketicide güven oluşturması ve bu güveni satışa dönüştürebilen
              sürdürülebilir bir iletişim sistemine sahip olmasıydı.
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