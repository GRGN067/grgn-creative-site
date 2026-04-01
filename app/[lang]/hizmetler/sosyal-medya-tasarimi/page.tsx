import type { Metadata } from "next";
import SosyalMedyaPageClient from "./SosyalMedyaPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    title: isEn
      ? "Social Media Design Service | GRGN Creative"
      : "Sosyal Medya Tasarımı Hizmeti | GRGN Creative",

    description: isEn
      ? "Professional social media design service for brands. We build a consistent, premium and recognizable visual language for social media."
      : "GRGN Creative olarak markalar için profesyonel sosyal medya tasarımı hizmeti sunuyoruz. Tutarlı, premium ve tanınabilir bir sosyal medya görsel dili kuruyoruz.",

    keywords: [
      "sosyal medya tasarımı",
      "instagram tasarımı",
      "sosyal medya tasarım ajansı",
      "marka sosyal medya tasarımı",
      "dijital ajans",
      "grgn creative",
    ],

    alternates: {
      canonical: `https://grgncreative.com/${lang}/hizmetler/sosyal-medya-tasarimi`,
    },

    openGraph: {
      title: isEn
        ? "Social Media Design Service | GRGN Creative"
        : "Sosyal Medya Tasarımı Hizmeti | GRGN Creative",
      description: isEn
        ? "Premium social media design solutions for brands."
        : "Markalar için premium sosyal medya tasarımı çözümleri.",
      url: `https://grgncreative.com/${lang}/hizmetler/sosyal-medya-tasarimi`,
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
  return <SosyalMedyaPageClient params={params} />;
}