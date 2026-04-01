import type { Metadata } from "next";
import KurumsalKimlikPageClient from "./KurumsalKimlikPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    title: isEn
      ? "Brand Identity Service | GRGN Creative"
      : "Kurumsal Kimlik Hizmeti | GRGN Creative",

    description: isEn
      ? "Professional brand identity service for modern brands. We build a strong, consistent and recognizable visual identity system."
      : "GRGN Creative olarak markalar için profesyonel kurumsal kimlik hizmeti sunuyoruz. Güçlü, tutarlı ve tanınabilir bir görsel kimlik sistemi kuruyoruz.",

    keywords: [
      "kurumsal kimlik",
      "marka kimliği",
      "logo tasarımı",
      "kurumsal kimlik tasarımı",
      "dijital ajans",
      "grgn creative kurumsal kimlik",
    ],

    alternates: {
      canonical: `https://grgncreative.com/${lang}/hizmetler/kurumsal-kimlik`,
    },

    openGraph: {
      title: isEn
        ? "Brand Identity Service | GRGN Creative"
        : "Kurumsal Kimlik Hizmeti | GRGN Creative",
      description: isEn
        ? "Premium brand identity solutions for brands."
        : "Markalar için premium kurumsal kimlik çözümleri.",
      url: `https://grgncreative.com/${lang}/hizmetler/kurumsal-kimlik`,
      siteName: "GRGN Creative",
      locale: isEn ? "en_US" : "tr_TR",
      type: "website",
    },
  };
}

export default function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return <KurumsalKimlikPageClient params={params} />;
}