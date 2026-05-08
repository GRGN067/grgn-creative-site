import Link from "next/link";
import {
  StoreShell,
  CategoryCard,
  PlaceholderMedia,
  ProductCard,
  SectionCard,
  primaryButtonClass,
  secondaryButtonClass,
} from "./store-ui";
import {
  formatPrice,
  storeCategories,
  storeFaqItems,
  storeProducts,
} from "./store-data";
import {
  getStoreCartPath,
  getStoreCheckoutPath,
  getStoreProductsPath,
} from "./store-routes";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const supportBlocks = [
  [
    "Teslimat Planlamasi",
    "Randevulu teslimat, kurulum notlari ve proje uyumu icin yapi hazir.",
  ],
  [
    "Iade ve Degisim",
    "Iade kurgusu, bilgi bloklari ve guven mesajlari demo icinde tamamlandi.",
  ],
  [
    "Canli Destek Dili",
    "WhatsApp, danisman veya form yonlendirmeleri rahatca eklenebilir.",
  ],
  [
    "Kurumsal Guvence",
    "B2B teklif, proje bazli satin alma veya showroom rezervasyonu akisina uyarlanabilir.",
  ],
] as const;

const statBlocks = [
  { value: "8", label: "Urun" },
  { value: "4", label: "Kategori" },
  { value: "100%", label: "Demo Guvenli" },
  { value: "∞", label: "Ozellestirme" },
] as const;

export default async function OutdoorStoreHome({ params }: PageProps) {
  const { lang } = await params;
  const featuredProducts = storeProducts.slice(0, 4);
  const curatedProducts = storeProducts.slice(4, 8);
  const heroProduct = storeProducts[0];

  return (
    <StoreShell lang={lang}>
      <section
        className="store-hero-grain relative flex min-h-[92vh] flex-col justify-end overflow-hidden px-4 pb-16 pt-0 md:px-8 lg:px-12"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.58) 45%, rgba(8,8,8,0.82) 100%), url('/store/hero/outdoor-hero-v2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)",
          }}
        />

        <div className="relative z-10">
          <p
            className="mb-8 text-[0.65rem] uppercase tracking-[0.38em] text-white/30"
            style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
          >
            Premium Acik Hava · E-Ticaret Demosu
          </p>

          <h1
            className="max-w-5xl text-[13vw] leading-[0.9] text-white sm:text-[10vw] lg:text-[8.5vw] xl:text-[7.5vw]"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            ACIK HAVA
            <br />
            <span className="text-white/20">ICIN</span>{" "}
            URETILDI
          </h1>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className="max-w-md text-lg leading-8 text-white/50"
                style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
              >
                Premium acik hava ekipmanlari.
                <br />
                Zorlu kosullar icin tasarlandi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={getStoreProductsPath(lang)} className={primaryButtonClass}>
                  Koleksiyonu Kesfet
                </Link>
                <Link href={getStoreCheckoutPath(lang)} className={secondaryButtonClass}>
                  Demo Satin Al
                </Link>
              </div>
            </div>

            <div
              className="flex gap-8 lg:gap-12"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              {statBlocks.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-6xl text-white drop-shadow-md"
                    style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/50 drop-shadow-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-20">
          <span
            className="text-[0.58rem] uppercase tracking-[0.3em] text-white"
            style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
          >
            Kaydir
          </span>
          <div className="h-8 w-px bg-white" />
        </div>
      </section>

      <section className="grid gap-px border-y border-white/[0.06] bg-white/[0.06] lg:grid-cols-2">
        <div className="bg-[#080808]">
          <PlaceholderMedia
            label="One Cikan Koleksiyon"
            src={heroProduct?.img}
            className="aspect-[4/3] w-full border-0"
            imageClassName="object-contain object-center"
          />
        </div>

        <div
          className="flex flex-col justify-between bg-[#080808] p-10 lg:p-14"
          style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
        >
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25">
              Bu Haftanin Odagi
            </p>
            <h2
              className="mt-6 text-5xl text-white lg:text-6xl"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              {heroProduct?.name}
            </h2>
            <p className="mt-2 text-base text-white/40">{heroProduct?.subtitle}</p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              {heroProduct?.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroProduct?.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.18em] text-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/25">Fiyat</p>
              <p
                className="mt-1 text-4xl text-white"
                style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
              >
                {formatPrice(heroProduct?.price ?? 0)}
              </p>
            </div>
            <Link href={getStoreProductsPath(lang)} className={primaryButtonClass}>
              Incele
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p
              className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              Kategoriler
            </p>
            <h2
              className="mt-4 text-5xl text-white md:text-6xl"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Koleksiyonu Kesfet
            </h2>
          </div>
          <Link
            href={getStoreProductsPath(lang)}
            className="hidden text-xs uppercase tracking-[0.18em] text-white/30 transition hover:text-white md:block"
            style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
          >
            Tum urunler →
          </Link>
        </div>

        <div className="grid gap-px bg-white/[0.06] md:grid-cols-2 xl:grid-cols-4">
          {storeCategories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} lang={lang} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06] px-4 py-20 md:px-8 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p
              className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              One Cikanlar
            </p>
            <h2
              className="mt-4 text-5xl text-white md:text-6xl"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Premium Secki
            </h2>
          </div>
        </div>

        <div className="grid gap-px bg-white/[0.06] md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} lang={lang} product={product} />
          ))}
        </div>
      </section>

      <section
        id="hikaye"
        className="border-t border-white/[0.06] px-4 py-20 md:px-8 lg:px-12"
      >
        <div className="relative overflow-hidden border border-white/[0.06] bg-[#050505]">
          <div className="absolute inset-0">
            <PlaceholderMedia
              label="Marka Hikayesi"
              src="/store/brand/brand-story-hero-v3.png"
              className="h-full min-h-[620px] w-full border-0"
              imageClassName="object-cover object-right"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.88) 28%, rgba(5,5,5,0.55) 52%, rgba(5,5,5,0.18) 74%, rgba(5,5,5,0.06) 100%)",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 72px)",
            }}
          />

          <div
            className="relative z-10 flex min-h-[620px] flex-col justify-between p-8 md:p-10 lg:p-14"
            style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
          >
            <div className="max-w-xl">
              <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/30">
                Marka Hikayesi
              </p>
              <h2
                className="mt-6 max-w-lg text-5xl text-white md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  letterSpacing: "0.03em",
                }}
              >
                Gercek Alan,
                <br />
                Gercek Ekipman
              </h2>
              <p className="mt-6 max-w-md text-sm leading-8 text-white/55 md:text-base">
                GRGN Magaza, acik hava yasamini sadece urun satarak degil, guclu
                atmosfer kurarak anlatir. Her parca; saha hissi, dayaniklilik ve
                premium sunum diliyle birlikte okunur.
              </p>
            </div>

            <div className="grid gap-3 md:max-w-3xl md:grid-cols-3">
              <div className="border border-white/[0.08] bg-black/30 p-5 backdrop-blur-sm">
                <p
                  className="text-lg text-white"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  Dogadan Ilham
                </p>
                <p className="mt-3 text-sm leading-7 text-white/40">
                  Renkler, dokular ve kadraj duygusu acik hava kosullarindan beslenir.
                </p>
              </div>
              <div className="border border-white/[0.08] bg-black/30 p-5 backdrop-blur-sm">
                <p
                  className="text-lg text-white"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  Ust Duzey Kalite
                </p>
                <p className="mt-3 text-sm leading-7 text-white/40">
                  Malzeme, isik ve sunum dili birlikte premium ekipman hissi verir.
                </p>
              </div>
              <div className="border border-white/[0.08] bg-black/30 p-5 backdrop-blur-sm">
                <p
                  className="text-lg text-white"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  Sunuma Hazir
                </p>
                <p className="mt-3 text-sm leading-7 text-white/40">
                  Marka hikayesi, urun listesi ve satin alma akisi tek bir dilde calisir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] px-4 py-20 md:px-8 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p
              className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              Yeni Sezon
            </p>
            <h2
              className="mt-4 text-5xl text-white md:text-6xl"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Secilmis Parcalar
            </h2>
          </div>
          <Link
            href={getStoreProductsPath(lang)}
            className="hidden text-xs uppercase tracking-[0.18em] text-white/30 transition hover:text-white md:block"
            style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
          >
            Tumu →
          </Link>
        </div>

        <div className="grid gap-px bg-white/[0.06] md:grid-cols-2 xl:grid-cols-4">
          {curatedProducts.map((product) => (
            <ProductCard key={product.slug} lang={lang} product={product} />
          ))}
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-[0.85fr,1.15fr]">
          <div>
            <p
              className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              Destek
            </p>
            <h2
              className="mt-4 text-5xl text-white"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Teslimat ve Guven
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {supportBlocks.map(([title, text]) => (
                <div
                  key={title}
                  className="border border-[var(--store-border)] p-5"
                  style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
                >
                  <p
                    className="text-base text-white"
                    style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                  >
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/35">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="sss">
            <p
              className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              SSS
            </p>
            <h2
              className="mt-4 text-5xl text-white"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Sikca Sorulanlar
            </h2>
            <div className="mt-10 space-y-3">
              {storeFaqItems.map((item) => (
                <SectionCard key={item.question} className="p-6">
                  <p
                    className="text-base text-white"
                    style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                  >
                    {item.question}
                  </p>
                  <p
                    className="mt-3 text-sm leading-7 text-white/40"
                    style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
                  >
                    {item.answer}
                  </p>
                </SectionCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="destek"
        className="border-t border-white/[0.06] px-4 pb-24 pt-20 md:px-8 lg:px-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <SectionCard className="p-10 lg:p-14">
            <p
              className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              Iletisim
            </p>
            <h2
              className="mt-5 text-5xl text-white"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Proje Sunumu Icin Hazir Magaza
            </h2>
            <p
              className="mt-5 max-w-lg text-base leading-8 text-white/40"
              style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
            >
              Bu demo, gercek gorseller eklendiginde dogrudan marka sunumuna tasinabilecek sekilde kurgulandi.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={getStoreProductsPath(lang)} className={primaryButtonClass}>
                Urunleri Ac
              </Link>
              <Link href={getStoreCheckoutPath(lang)} className={secondaryButtonClass}>
                Demo Satin Al
              </Link>
            </div>
          </SectionCard>

          <div
            className="flex flex-col gap-3"
            style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
          >
            {[
              ["Yeni Gelenler", "Seckiye hizli erisim", getStoreProductsPath(lang)],
              ["Sepet", "Secimleri ve fiyat ozetini gor", getStoreCartPath(lang)],
              ["Demo Satin Al", "Odeme kurgusunu canli goster", getStoreCheckoutPath(lang)],
            ].map(([title, text, href]) => (
              <Link
                key={title}
                href={href}
                className="group border border-[var(--store-border)] p-6 transition-all duration-200 hover:border-white/20 hover:bg-[var(--store-surface)]"
              >
                <div className="flex items-center justify-between">
                  <p
                    className="text-xl text-white"
                    style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                  >
                    {title}
                  </p>
                  <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-white/60">→</span>
                </div>
                <p className="mt-2 text-sm text-white/35">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </StoreShell>
  );
}
