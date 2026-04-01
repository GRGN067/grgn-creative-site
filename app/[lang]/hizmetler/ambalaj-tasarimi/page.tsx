import type { Metadata } from "next";
import AmbalajTasarimiPageClient from "./AmbalajTasarimiPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    title: isEn
      ? "Packaging Design Service | GRGN Creative"
      : "Ambalaj Tasarımı Hizmeti | GRGN Creative",

    description: isEn
      ? "Professional packaging design service for brands and products. We create packaging that attracts attention, builds trust and strengthens shelf visibility."
      : "GRGN Creative olarak markalar ve ürünler için profesyonel ambalaj tasarımı hizmeti sunuyoruz. Dikkat çeken, güven veren ve raf görünürlüğünü güçlendiren ambalajlar tasarlıyoruz.",

    keywords: [
      "ambalaj tasarımı",
      "ürün ambalaj tasarımı",
      "paket tasarımı",
      "raf görünürlüğü",
      "dijital ajans",
      "grgn creative ambalaj tasarımı",
    ],

    alternates: {
      canonical: `https://grgncreative.com/${lang}/hizmetler/ambalaj-tasarimi`,
    },

    openGraph: {
      title: isEn
        ? "Packaging Design Service | GRGN Creative"
        : "Ambalaj Tasarımı Hizmeti | GRGN Creative",
      description: isEn
        ? "Premium packaging design solutions for brands and products."
        : "Markalar ve ürünler için premium ambalaj tasarımı çözümleri.",
      url: `https://grgncreative.com/${lang}/hizmetler/ambalaj-tasarimi`,
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
  return <AmbalajTasarimiPageClient params={params} />;
}