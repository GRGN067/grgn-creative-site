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
      ? "GRGN Creative | Creative Digital Solutions"
      : "GRGN Creative | Kreatif Dijital Çözümler",
    description: isEn
      ? "GRGN Creative offers modern web design, social media design and brand identity solutions."
      : "GRGN Creative, modern web tasarım, sosyal medya tasarımı ve kurumsal kimlik çözümleri sunar.",
    alternates: {
      canonical: `https://grgncreative.com/${lang}`,
      languages: {
        tr: "https://grgncreative.com/tr",
        en: "https://grgncreative.com/en",
      },
    },
  };
}

export default async function LangLayout({
  children,
}: Props) {
  return <>{children}</>;
}