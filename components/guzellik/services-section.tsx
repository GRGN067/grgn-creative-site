"use client";

import { getBeautyServicesPath } from "@/components/guzellik/navigation";
import { SectionShell } from "@/components/section-shell";
import { ServicesGrid } from "@/components/guzellik/services-grid";
import { featuredServices } from "@/lib/data";

type ServicesSectionProps = {
  lang: string;
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  return (
    <SectionShell
      id="services"
      eyebrow="Hizmetler"
      title="Seçili hizmetleri kısa ve net şekilde inceleyin."
      description="Ana sayfada en çok ilgi gören uygulamaları öne çıkardık. Tüm hizmetlerimizi ayrı sayfada daha geniş şekilde inceleyebilirsiniz."
    >
      <ServicesGrid
        services={featuredServices}
        showAllLink
        showAllHref={getBeautyServicesPath(lang)}
      />
    </SectionShell>
  );
}
