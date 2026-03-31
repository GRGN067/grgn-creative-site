import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    title: isEn
      ? "GRGN Creative | Digital Agency, Web Design & Brand Building"
      : "GRGN Creative | Dijital Ajans, Web Tasarım & Marka Kurucu",
    description: isEn
      ? "GRGN Creative is a digital agency offering web design, brand identity, social media management, content production and creative digital solutions."
      : "GRGN Creative; web tasarım, kurumsal kimlik, sosyal medya yönetimi, içerik üretimi ve yaratıcı dijital çözümler sunan profesyonel dijital ajanstır.",
    alternates: {
      canonical: `https://grgncreative.com/${lang}`,
      languages: {
        tr: "https://grgncreative.com/tr",
        en: "https://grgncreative.com/en",
      },
    },
    openGraph: {
      title: isEn
        ? "GRGN Creative | Digital Agency, Web Design & Brand Building"
        : "GRGN Creative | Dijital Ajans, Web Tasarım & Marka Kurucu",
      description: isEn
        ? "Web design, brand identity, social media management and content production for modern brands."
        : "Web tasarım, kurumsal kimlik, sosyal medya yönetimi ve içerik üretimi ile markalar için bütüncül dijital çözümler.",
      url: `https://grgncreative.com/${lang}`,
      siteName: "GRGN Creative",
      locale: isEn ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isEn
        ? "GRGN Creative | Digital Agency, Web Design & Brand Building"
        : "GRGN Creative | Dijital Ajans, Web Tasarım & Marka Kurucu",
      description: isEn
        ? "Web design, brand identity, social media management and content production for modern brands."
        : "Web tasarım, kurumsal kimlik, sosyal medya yönetimi ve içerik üretimi ile markalar için bütüncül dijital çözümler.",
    },
  };
}

export default async function LangLayout({ children }: Props) {
  return <>{children}</>;
}