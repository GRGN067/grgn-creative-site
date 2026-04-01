import type { Metadata } from "next";
import WebTasarimPageClient from "./WebTasarimPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    title: isEn
      ? "Web Design Service | GRGN Creative"
      : "Web Tasarım Hizmeti | GRGN Creative",
    description: isEn
      ? "Professional web design service for modern brands. We build premium, user-centered and conversion-focused websites."
      : "GRGN Creative olarak modern markalar için profesyonel web tasarım hizmeti sunuyoruz. Premium, kullanıcı odaklı ve dönüşüm odaklı web siteleri tasarlıyoruz.",
    keywords: [
      "web tasarım",
      "web tasarım ajansı",
      "kurumsal web sitesi",
      "modern web tasarım",
      "dijital ajans",
      "grgn creative web tasarım",
    ],
    alternates: {
      canonical: `https://grgncreative.com/${lang}/hizmetler/web-tasarim`,
    },
    openGraph: {
      title: isEn
        ? "Web Design Service | GRGN Creative"
        : "Web Tasarım Hizmeti | GRGN Creative",
      description: isEn
        ? "Premium web design solutions for brands."
        : "Markalar için premium web tasarım çözümleri.",
      url: `https://grgncreative.com/${lang}/hizmetler/web-tasarim`,
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
  return <WebTasarimPageClient params={params} />;
}