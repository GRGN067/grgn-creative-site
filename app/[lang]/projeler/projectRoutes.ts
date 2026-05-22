export const PROJECT_ROUTE_SLUGS = {
  outdoor: "acik-hava-vitrini",
  beauty: "guzellik-vitrini",
  mericbey: "mericbey-jersey-sut-ciftligi",
  ortbas: "ortbas",
  torkoop: "torkoop",
} as const;

export function getProjectHref(
  lang: string,
  slug: (typeof PROJECT_ROUTE_SLUGS)[keyof typeof PROJECT_ROUTE_SLUGS]
) {
  return `/${lang}/projeler/${slug}`;
}
