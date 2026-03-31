import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRGN Creative | Dijital Ajans, Web Tasarım & Marka Kurucu",
  description:
    "GRGN Creative; web tasarım, kurumsal kimlik, sosyal medya yönetimi, içerik üretimi ve dijital çözümler sunan profesyonel dijital ajanstır.",
  keywords: [
    "GRGN Creative",
    "grgn creative",
    "grgncreative",
    "dijital ajans",
    "web tasarım",
    "kurumsal kimlik",
    "sosyal medya yönetimi",
    "içerik üretimi",
    "marka kurucu",
  ],
  authors: [{ name: "GRGN Creative" }],
  creator: "GRGN Creative",
  publisher: "GRGN Creative",
  metadataBase: new URL("https://grgncreative.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GRGN Creative | Dijital Ajans, Web Tasarım & Marka Kurucu",
    description:
      "Web tasarım, kurumsal kimlik, sosyal medya yönetimi ve içerik üretimi alanlarında uçtan uca dijital ajans çözümleri.",
    url: "https://grgncreative.com",
    siteName: "GRGN Creative",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRGN Creative | Dijital Ajans, Web Tasarım & Marka Kurucu",
    description:
      "Web tasarım, kurumsal kimlik, sosyal medya yönetimi ve içerik üretimi alanlarında uçtan uca dijital ajans çözümleri.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GRGN Creative",
  alternateName: ["grgn creative", "grgncreative"],
  url: "https://grgncreative.com",
  logo: "https://grgncreative.com/favicon.ico",
  description:
    "GRGN Creative; web tasarım, kurumsal kimlik, sosyal medya yönetimi, içerik üretimi ve dijital çözümler sunan profesyonel dijital ajanstır.",
  sameAs: [
    "https://www.instagram.com/grgncreative",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen overflow-x-hidden bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}