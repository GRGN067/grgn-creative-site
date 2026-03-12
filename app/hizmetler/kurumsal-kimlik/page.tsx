"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(36px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function KurumsalKimlikPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040b_0%,#030611_35%,#010208_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(55,90,210,0.12),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.05),transparent_16%),radial-gradient(circle_at_75%_78%,rgba(45,80,200,0.10),transparent_28%),radial-gradient(circle_at_30%_90%,rgba(255,255,255,0.03),transparent_18%)]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.45px,transparent_0.45px)] [background-size:4px_4px]" />

        <div className="absolute left-[-10%] top-[8%] h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <header className="relative z-50 px-5 pt-4 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between lg:hidden">
            <Link href="/" className="block w-[132px] shrink-0 sm:w-[150px]">
              <img
                src="/kucuk-logo.png"
                alt="GRGN Creative"
                className="mt-1 w-full object-contain"
              />
            </Link>

            <Link
              href="/#services"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/85 backdrop-blur-xl transition hover:bg-white/[0.08]"
            >
              Hizmetler
            </Link>
          </div>

          <div className="hidden justify-center lg:flex">
            <div className="h-[80px] w-full max-w-[900px] rounded-full border border-white/20 bg-white/[0.04] px-8 shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-xl">
              <div className="flex h-full items-center justify-between">
                <Link href="/" className="block w-[150px] shrink-0">
                  <img
                    src="/kucuk-logo.png"
                    alt="GRGN Creative"
                    className="mt-2 w-full object-contain"
                  />
                </Link>

                <div className="flex items-center gap-3">
                  <Link
                    href="/#services"
                    className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    Hizmetlere Dön
                  </Link>

                  <a
                    href="https://wa.me/905301159374?text=Merhaba%2C%20kurumsal%20kimlik%20hizmetiniz%20i%C3%A7in%20ula%C5%9F%C4%B1yorum."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 transition hover:scale-[1.02] hover:bg-white/90"
                  >
                    <span className="text-sm font-semibold text-black">
                      Proje Başlat
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10">
        <section className="px-5 pb-14 pt-14 sm:px-6 sm:pt-16 md:px-10 md:pb-14 md:pt-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.26em] text-white/40">
                Hizmetler
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
                Kurumsal Kimlik
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8 md:mt-8 md:text-[23px] md:leading-10">
                GRGN Creative olarak markaların yalnızca güzel görünmesini değil,
                tanınabilir, güven veren ve tutarlı bir kimliğe sahip olmasını
                sağlıyoruz. Kurumsal kimlik; bir markanın nasıl göründüğünü,
                nasıl algılandığını ve nasıl hatırlandığını belirleyen temel
                yapıdır.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="https://wa.me/905301159374?text=Merhaba%2C%20kurumsal%20kimlik%20hizmetiniz%20i%C3%A7in%20ula%C5%9F%C4%B1yorum."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 transition hover:scale-[1.02] hover:bg-white/90"
                >
                  <span className="text-sm font-semibold text-black">
                    Proje Başlat
                  </span>
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3 text-white transition hover:bg-white/5"
                >
                  İletişime Geç
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-6 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            <Reveal>
              <ContentCard
                title="Markanın temel görsel dili"
                text="Kurumsal kimlik; logo, tipografi, renk sistemi, oranlar ve genel görsel yaklaşımın tek bir çizgide toplanmasıdır. Bu yapı sayesinde marka dağınık değil, tutarlı ve profesyonel görünür."
              />
            </Reveal>

            <Reveal delay={120}>
              <ContentCard
                title="Ne sağlıyoruz?"
                text="Markanın sektörüne, hedef kitlesine ve konumuna uygun bir görsel sistem kuruyoruz. Böylece marka her temas noktasında aynı hissi verir ve daha güçlü bir algı oluşturur."
              />
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-6 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                  Temel Çıktılar
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
                  Güçlü, net ve tanınabilir bir marka görünümü.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={0}>
                <InfoCard
                  title="Tutarlı marka algısı"
                  text="Her platformda aynı dili konuşan, güven veren bir marka görünümü oluşur."
                />
              </Reveal>

              <Reveal delay={120}>
                <InfoCard
                  title="Daha profesyonel duruş"
                  text="Marka daha kurumsal, daha güçlü ve daha sistemli algılanır."
                />
              </Reveal>

              <Reveal delay={240}>
                <InfoCard
                  title="Daha kolay hatırlanma"
                  text="Görsel tekrar ve tutarlılık sayesinde marka daha akılda kalıcı hale gelir."
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-6 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="rounded-[34px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-8 md:p-12">
                <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                  Kimlik Yapısı
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  Kurumsal kimlikte neyi oluşturuyoruz?
                </h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                  <ProcessItem
                    number="01"
                    title="Logo Sistemi"
                    text="Markanın temel görsel imzası ve kullanım yapısı kurgulanır."
                  />
                  <ProcessItem
                    number="02"
                    title="Renk Dili"
                    text="Markanın hissini taşıyan ana ve yardımcı renk sistemi oluşturulur."
                  />
                  <ProcessItem
                    number="03"
                    title="Tipografi"
                    text="Güçlü ve uyumlu yazı karakteri sistemi belirlenir."
                  />
                  <ProcessItem
                    number="04"
                    title="Görsel Standart"
                    text="Markanın tüm iletişiminde tutarlı kullanılacak temel görsel kurallar kurulur."
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-10 sm:px-6 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                  Kimler İçin?
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
                  Marka algısını ciddi biçimde güçlendirmek isteyenler için.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal delay={0}>
                <InfoCard
                  title="Yeni markalar"
                  text="Başlangıçtan itibaren güçlü, düzenli ve profesyonel görünmek isteyen markalar için."
                />
              </Reveal>

              <Reveal delay={100}>
                <InfoCard
                  title="Yenilenmek isteyen işletmeler"
                  text="Eskiyen ya da dağınık görsel dili daha net bir sisteme taşımak isteyen işletmeler için."
                />
              </Reveal>

              <Reveal delay={200}>
                <InfoCard
                  title="Premium konumlanmak isteyenler"
                  text="Daha kaliteli, daha güven veren ve daha üst segment görünmek isteyen markalar için."
                />
              </Reveal>

              <Reveal delay={300}>
                <InfoCard
                  title="Uzun vadeli büyümeyi hedefleyenler"
                  text="Markasını yalnızca bugün için değil, gelecekte de güçlü taşımak isteyenler için."
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 pt-12 sm:px-6 md:px-10 md:pb-28 md:pt-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-10 md:p-14">
                <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                  Proje Başlat
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
                  Markan için daha güçlü bir kurumsal kimlik oluşturalım.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                  Eğer markanın daha net, daha güvenilir ve daha profesyonel
                  görünmesini istiyorsan bizimle iletişime geçebilirsin.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="https://wa.me/905301159374?text=Merhaba%2C%20kurumsal%20kimlik%20hizmetiniz%20i%C3%A7in%20ula%C5%9F%C4%B1yorum."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 transition hover:scale-[1.02] hover:bg-white/90"
                  >
                    <span className="text-sm font-semibold text-black">
                      WhatsApp ile Başla
                    </span>
                  </a>

                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3 text-white transition hover:bg-white/5"
                  >
                    Tüm Hizmetlere Dön
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <a
        href="https://wa.me/905301159374?text=Merhaba%2C%20kurumsal%20kimlik%20hizmetiniz%20i%C3%A7in%20ula%C5%9F%C4%B1yorum."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-[999] group flex items-center gap-3 rounded-full border border-white/12 bg-black/45 px-3 py-2.5 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.06] sm:bottom-8 sm:right-8 sm:px-4 sm:py-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white shadow-inner sm:h-10 sm:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.65a11.84 11.84 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44ZM12.07 21.8h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.74.98 1-3.64-.24-.38a9.8 9.8 0 0 1-1.5-5.27c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.95 2.88a9.78 9.78 0 0 1 2.88 6.96c0 5.44-4.42 9.86-9.84 9.86Zm5.4-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.31.18-1.43-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-[11px]">
            Hızlı İletişim
          </span>
          <span className="text-[13px] font-medium text-white/90 sm:text-sm">
            WhatsApp
          </span>
        </div>
      </a>
    </main>
  );
}

function ContentCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="h-full rounded-[30px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-8 md:p-10">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-8">
        {text}
      </p>
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-8">
      <div className="flex h-full flex-col">
        <h3 className="text-xl font-medium text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          {text}
        </p>
      </div>
    </div>
  );
}

function ProcessItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-sm text-white/40">{number}</p>
      <h3 className="mt-3 text-xl font-medium text-white sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
        {text}
      </p>
    </div>
  );
}