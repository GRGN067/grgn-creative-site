import { PROJECT_ROUTE_SLUGS, getProjectHref } from "@/app/[lang]/projeler/projectRoutes";

export type BeautyNavItem =
  | { label: string; href: string; type: "link" }
  | { label: string; href: "#assistant"; type: "assistant" };

export type DemoSiteItem = {
  key: "beauty" | "outdoor";
  label: string;
  description: string;
  href: string;
};

function withLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getBeautyBasePath(lang: string) {
  return getProjectHref(lang, PROJECT_ROUTE_SLUGS.beauty);
}

export function getBeautyHomePath(lang: string) {
  return getBeautyBasePath(lang);
}

export function getBeautyAboutPath(lang: string) {
  return `${getBeautyBasePath(lang)}/hakkimizda`;
}

export function getBeautyServicesPath(lang: string) {
  return `${getBeautyBasePath(lang)}/hizmetler`;
}

export function getOutdoorDemoPath(lang: string) {
  return getProjectHref(lang, PROJECT_ROUTE_SLUGS.outdoor);
}



export function getBeautySectionPath(lang: string, sectionId: string) {
  return `${getBeautyHomePath(lang)}#${sectionId}`;
}

export function getBeautyNavItems(lang: string): BeautyNavItem[] {
  return [
    { label: "Hakkımızda", href: getBeautyAboutPath(lang), type: "link" },
    { label: "Hizmetler", href: getBeautyServicesPath(lang), type: "link" },
    { label: "Lazer Rehberi", href: "#assistant", type: "assistant" },
    { label: "Süreç", href: getBeautySectionPath(lang, "surec"), type: "link" },
    { label: "SSS", href: getBeautySectionPath(lang, "sss"), type: "link" },
    { label: "İletişim", href: getBeautySectionPath(lang, "iletisim"), type: "link" },
  ];
}

export function getDemoSiteItems(lang: string): DemoSiteItem[] {
  return [
    {
      key: "beauty",
      label: "Güzellik",
      description: "Aktif demo",
      href: getBeautyHomePath(lang),
    },
    {
      key: "outdoor",
      label: "Store",
      description: "Aktif demo",
      href: getOutdoorDemoPath(lang),
    },
  ];
}

export function normalizeBeautyHref(href: string) {
  if (href.startsWith("#")) {
    return href;
  }

  return withLeadingSlash(href);
}
