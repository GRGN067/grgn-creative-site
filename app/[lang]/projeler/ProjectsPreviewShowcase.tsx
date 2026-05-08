"use client";

import Link from "next/link";
import { useRef } from "react";
import { PROJECT_ROUTE_SLUGS, getProjectHref } from "./projectRoutes";

const previewProjects = (lang: string) => [
  {
    nav: "01",
    title: "GRGN Güzellik",
    category: "Stüdyo Konsepti",
    desc: "Premium güzellik ve klinik markaları için hazırlanmış, sunuma ve satışa uygun canlı web konsepti.",
    href: getProjectHref(lang, PROJECT_ROUTE_SLUGS.beauty),
    img: "/beauty-preview.png",
    badge: "Vitrin",
  },
  {
    nav: "02",
    title: "GRGN Store",
    category: "Ecommerce Konsepti",
    desc: "Ürün keşfi, sepet ve demo checkout akışıyla tamamlanmış premium mağaza deneyimi.",
    href: getProjectHref(lang, PROJECT_ROUTE_SLUGS.outdoor),
    img: "/store-preview.png",
    badge: "Canlı Demo",
  },
];

export default function ProjectsPreviewShowcase({
  lang,
}: {
  lang: string;
}) {
  const previews = previewProjects(lang);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector("[data-preview-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : 600;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 pb-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/40">
              Canlı Ön İzlemeler
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Web Konseptleri
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Hazır web arayüzlerimizi tek alanda inceleyin ve istediğiniz konsepte doğrudan geçin.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55 md:block">
              Canlı Vitrin
            </div>

            <button
              type="button"
              onClick={() => scrollSlider("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              aria-label="Sola kaydır"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              aria-label="Sağa kaydır"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {previews.map((project) => (
            <PreviewShowcaseCard key={project.nav} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewShowcaseCard({
  nav,
  img,
  title,
  category,
  desc,
  href,
  badge,
}: {
  nav: string;
  img: string;
  title: string;
  category: string;
  desc: string;
  href: string;
  badge: string;
}) {
  return (
    <article data-preview-card className="snap-center shrink-0 basis-full">
      <Link href={href} className="group block">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
          <div className="absolute left-5 top-5 z-20 rounded-full border border-white/15 bg-black/30 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl">
            {badge}
          </div>

          <div className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-white/70 backdrop-blur-xl">
            {nav}
          </div>

          <img
            src={img}
            alt={title}
            className="h-[340px] w-full object-cover md:h-[460px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              {category}
            </p>

            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white md:text-4xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 md:text-lg">
                  {desc}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm text-white/90 backdrop-blur-xl transition group-hover:border-white/20 group-hover:bg-white/[0.08]">
                <span>Ön İzlemeyi Aç</span>
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
