import Link from "next/link";

export default function TorkoopProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040b_0%,#030611_45%,#010208_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(55,90,210,0.10),transparent_24%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_70%_78%,rgba(45,80,200,0.08),transparent_28%)]" />

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
                Kurumsal Kimlik / Etiket Tasarımı
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Torkoop
              </h1>

              <p className="mt-4 text-lg text-white/60 md:text-2xl">
                Torbalı Kooperatifi
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-[22px] md:leading-9">
                Torbalı merkezli üretim yapan kooperatif için kurumsal logo ve
                ürün etiketleri tasarlanarak markanın rafta daha güçlü görünmesi
                sağlandı.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Tag>Logo Tasarımı</Tag>
                <Tag>Etiket Tasarımı</Tag>
                <Tag>Marka Kimliği</Tag>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
              <img
                src="/torkoop-project.png"
                alt="Torkoop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InfoCard title="Proje Kapsamı">
            Kurumsal logo çalışması ve ürün ailesine ait etiket tasarımları
            geliştirildi.
          </InfoCard>

          <InfoCard title="Amaç">
            Markanın üretim gücünü ve kurumsal yapısını daha net hissettiren,
            raf üzerinde düzenli ve güven veren bir görünüm oluşturmak.
          </InfoCard>

          <InfoCard title="Rolümüz">
            Kurumsal kimlik tasarımı, logo geliştirme ve ürün etiket sisteminin
            görsel olarak kurgulanması.
          </InfoCard>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            Proje Hikayesi
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Kurumsal görünümden raf etkisine
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              Torkoop için yapılan çalışma, yalnızca estetik bir logo tasarımı
              değil; markanın üretim kimliğini destekleyen tutarlı bir görsel
              sistem oluşturma hedefi taşıyordu. Kurumsal duruş ile ürün sunumu
              arasında bütünlük sağlandı.
            </p>

            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              Ürün etiketleri tarafında ise markanın raf üzerindeki algısını
              güçlendiren, daha düzenli ve daha dikkat çekici bir yapı kuruldu.
              Böylece hem kimlik hem de ürün yüzeyi aynı dil içinde birleşti.
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