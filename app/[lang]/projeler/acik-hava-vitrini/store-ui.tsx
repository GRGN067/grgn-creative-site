"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStoreCart } from "./store-context";
import {
  formatPrice,
  getCategoryLabel,
  type StoreCategory,
  type StoreProduct,
} from "./store-data";
import {
  getStoreBasePath,
  getStoreCartPath,
  getStoreCheckoutPath,
  getStoreProductPath,
  getStoreProductsPath,
} from "./store-routes";

export const primaryButtonClass =
  "inline-flex items-center justify-center rounded-none border border-white bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] !text-[#080808] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-200 hover:bg-[#e8e8e8] hover:border-[#e8e8e8] hover:!text-[#080808] [&_*]:!text-[#080808]";

export const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-none border border-white/[0.22] bg-transparent px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-[#c8c4c0] transition-all duration-200 hover:bg-white/[0.06] hover:border-white/40 hover:text-white";

const availableProductImages = new Set([
  "/store/products/meridian-lounge-chair-v2.png",
  "/store/products/linea-console-v2.png",
  "/store/products/atlas-dining-set-v2.png",
  "/store/products/solis-floor-lamp-v2.png",
  "/store/products/noma-side-table-v2.png",
  "/store/products/terra-modular-sofa-v2.png",
  "/store/products/aura-wall-sconce-v2.png",
  "/store/products/harbor-daybed-v2.png",
]);

function DemoSitePill({ lang }: { lang: string }) {
  const pathname = usePathname();
  const sites = [
    { key: "beauty", label: "Guzellik", href: `/${lang}/projeler/guzellik-vitrini` },
    { key: "outdoor", label: "Acik Hava", href: `/${lang}/projeler/acik-hava-vitrini` },
    { key: "coffee", label: "Kahve", href: `/${lang}/projeler/kahve-vitrini` },
    { key: "showroom", label: "Showroom", href: `/${lang}/projeler/showroom-vitrini` },
  ];

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/[0.15] bg-white/[0.06] p-1.5 backdrop-blur-xl">
      <span className="px-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white">
        Ornek
      </span>
      <div className="flex items-center gap-1">
        {sites.map((site, index) => {
          const isActive =
            pathname === site.href || pathname.startsWith(`${site.href}/`);
          return (
            <Link
              key={site.key}
              href={site.href}
              title={site.label}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition ${
                isActive
                  ? "bg-white !text-[#080808] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
                  : "text-white/60 hover:bg-white/10"
              }`}
            >
              {index + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function StoreShell({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[var(--store-page-bg)] text-[var(--store-text)]">
      <div className="mx-auto max-w-[1600px]">
        <StoreHeader lang={lang} />
        {children}
        <StoreFooter lang={lang} />
      </div>
    </main>
  );
}

export function StoreHeader({ lang }: { lang: string }) {
  const pathname = usePathname();
  const { itemCount } = useStoreCart();
  const basePath = getStoreBasePath(lang);
  const navItems = [
    { label: "Ana Sayfa", href: basePath },
    { label: "Urunler", href: getStoreProductsPath(lang) },
    { label: "Marka", href: `${basePath}#hikaye` },
    { label: "Destek", href: `${basePath}#destek` },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(8,8,8,0.92)] backdrop-blur-xl"
      style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
    >
      <div className="px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Back & Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href={`/${lang}/projeler`}
              className="inline-flex items-center justify-center border border-white/10 bg-white/[0.04] p-2 text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white md:px-4 md:py-2 md:gap-2"
              title="Projeler"
            >
              <span>←</span>
              <span className="hidden text-xs uppercase tracking-[0.16em] md:inline">Projeler</span>
            </Link>
            <Link
              href={basePath}
              className="text-xl tracking-[0.32em] text-white md:text-2xl"
              style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
            >
              GRGN
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const isActive = !item.href.includes("#") && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "bg-white !text-[#080808] font-bold shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
                      : "text-white/50 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <DemoSitePill lang={lang} />
            </div>
            <Link
              href={getStoreCartPath(lang)}
              className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-white/70 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white md:px-4 md:text-xs"
            >
              <span className="hidden sm:inline">Sepet</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:hidden"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span className="inline-flex h-4 min-w-4 items-center justify-center bg-white px-1 text-[0.55rem] font-bold text-[#080808] md:h-5 md:min-w-5 md:px-1.5 md:text-[0.6rem]">
                {itemCount}
              </span>
            </Link>
            <Link href={getStoreCheckoutPath(lang)} className={`${primaryButtonClass} hidden !px-5 !py-2 !text-[0.65rem] sm:inline-flex md:!px-7 md:!py-3.5 md:!text-sm`}>
              <span className="!text-[#080808]">Demo Satin Al</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="mt-3 flex items-center justify-between gap-4 overflow-x-auto pb-1 xl:hidden [&::-webkit-scrollbar]:hidden">
          <nav className="flex shrink-0 items-center gap-1">
            {navItems.map((item) => {
              const isActive = !item.href.includes("#") && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "bg-white !text-[#080808] font-bold shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
                      : "text-white/50 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="shrink-0 md:hidden">
            <DemoSitePill lang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
}

export function StoreFooter({ lang }: { lang: string }) {
  return (
    <footer
      className="border-t border-white/[0.06] px-4 py-14 md:px-6 lg:px-8"
      style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
    >
      <div className="relative overflow-hidden border border-white/[0.06] bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)",
          }}
        />

        <div className="relative p-8 md:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,1.85fr] lg:items-start">
            <div className="max-w-sm">
            <p
              className="text-3xl tracking-[0.28em] text-white"
              style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
            >
              GRGN
            </p>
            <p className="mt-5 text-sm leading-8 text-white/45">
              Premium acik hava magaza deneyimi. Sunuma hazir e-ticaret demosu,
              guclu urun dili ve temiz satin alma akisi ile birlikte tasarlandi.
            </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["8", "Urun"],
                  ["4", "Kategori"],
                  ["1", "Guclu Akis"],
                ].map(([value, label]) => (
                  <div key={label} className="border border-white/[0.08] bg-black/20 p-4">
                    <p
                      className="text-2xl text-white"
                      style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                    >
                      {value}
                    </p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/30">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <FooterLinkGroup
                title="Kesfet"
                links={[
                  { label: "Ana Sayfa", href: getStoreBasePath(lang) },
                  { label: "Urunler", href: getStoreProductsPath(lang) },
                  { label: "Sepet", href: getStoreCartPath(lang) },
                  { label: "Odeme", href: getStoreCheckoutPath(lang) },
                ]}
              />

              <FooterLinkGroup
                title="Destek"
                links={[
                  { label: "Teslimat", href: `${getStoreBasePath(lang)}#destek` },
                  { label: "Iade", href: `${getStoreBasePath(lang)}#destek` },
                  { label: "SSS", href: `${getStoreBasePath(lang)}#sss` },
                  { label: "Iletisim", href: `${getStoreBasePath(lang)}#destek` },
                ]}
              />

              <div className="border border-white/[0.08] bg-black/20 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/30">Demo Notu</p>
                <p className="mt-4 text-sm leading-8 text-white/42">
                  Bu akis gercek odeme almaz. Demo, musteri sunumu icin etkilesimli
                  sekilde hazirlanmistir ve marka vitrini gibi davranacak sekilde
                  kurgulanmistir.
                </p>

                <div className="mt-8 border-t border-white/[0.08] pt-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/25">
                    Hizli Yonlendirme
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      href={getStoreProductsPath(lang)}
                      className="text-sm text-white/55 transition hover:text-white"
                    >
                      Koleksiyonu ac
                    </Link>
                    <Link
                      href={getStoreCheckoutPath(lang)}
                      className="text-sm text-white/55 transition hover:text-white"
                    >
                      Demo satin alma akisina git
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-white/[0.06] pt-8 text-xs uppercase tracking-[0.14em] text-white/20">
        <span>© 2025 GRGN Creative</span>
        <span>Acik Hava Icin Tasarlandi</span>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="pt-1">
      <p className="text-xs uppercase tracking-[0.18em] text-white/30">{title}</p>
      <div className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className="text-sm text-white/55 transition hover:translate-x-1 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-[var(--store-border)] bg-[var(--store-surface)] ${className}`}
    >
      {children}
    </div>
  );
}

export function PlaceholderMedia({
  label,
  src,
  className = "",
  imageClassName = "object-cover",
}: {
  label: string;
  src?: string;
  className?: string;
  imageClassName?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden border border-white/[0.06] bg-[#111111] ${className}`}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={imageClassName}
        />
        <div className="pointer-events-none absolute inset-0 border border-white/[0.04]" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-white/[0.06] bg-[#111111] ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[0.58rem] uppercase tracking-[0.22em] text-white/20">
        <span>Medya</span>
        <span>Gorsel Alani</span>
      </div>
      <div className="absolute inset-5 border border-dashed border-white/10" />
      <div className="absolute bottom-5 left-5 border border-white/10 bg-black/60 px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.2em] text-white/30 backdrop-blur-sm">
        {label}
      </div>
    </div>
  );
}

export function ProductCard({
  lang,
  product,
}: {
  lang: string;
  product: StoreProduct;
}) {
  const hasImage = availableProductImages.has(product.img);

  return (
    <Link
      href={getStoreProductPath(lang, product.slug)}
      className="group flex h-full flex-col overflow-hidden border border-[var(--store-border)] bg-[var(--store-surface)] transition-all duration-300 hover:border-white/20 hover:bg-[var(--store-surface-strong)]"
    >
      <div className="relative">
        <PlaceholderMedia
          label={product.name}
          src={hasImage ? product.img : undefined}
          className="aspect-[4/4.6]"
          imageClassName="object-contain object-center p-4"
        />
        {product.badge && (
          <div className="absolute left-4 top-4">
            <span className="border border-white/20 bg-[#080808]/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">
              {product.badge}
            </span>
          </div>
        )}
        <div className="absolute right-4 top-4 translate-x-2 border border-white/10 bg-black/80 p-2 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L11 1M11 1H3M11 1V9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
          {getCategoryLabel(product.category)}
        </p>
        <h3
          className="mt-3 text-2xl text-white"
          style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-white/40">{product.subtitle}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/30">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="border border-white/10 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.14em] text-white/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-lg font-semibold text-white">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-white/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white/60">
            Incele →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CategoryCard({
  category,
  index,
  lang,
}: {
  category: StoreCategory;
  index: number;
  lang: string;
}) {
  return (
    <Link
      href={`${getStoreProductsPath(lang)}?category=${category.slug}`}
      className="group relative overflow-hidden border border-[var(--store-border)] bg-[var(--store-surface)] p-8 transition-all duration-300 hover:border-white/20 hover:bg-[var(--store-surface-strong)]"
    >
      <p
        className="text-5xl text-white/[0.06] transition-all duration-300 group-hover:text-white/10"
        style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
      >
        0{index + 1}
      </p>
      <h3
        className="mt-4 text-3xl text-white"
        style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
      >
        {category.name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/40">{category.description}</p>
      <div className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/30 transition-all duration-200 group-hover:text-white/70">
        <span>Kategoriyi Ac</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

export function QuantityStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="inline-flex items-center border border-[var(--store-border)]">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="h-10 w-10 text-white/40 transition hover:bg-white/[0.06] hover:text-white"
      >
        -
      </button>
      <span className="inline-flex min-w-10 justify-center text-sm text-white">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="h-10 w-10 text-white/40 transition hover:bg-white/[0.06] hover:text-white"
      >
        +
      </button>
    </div>
  );
}
