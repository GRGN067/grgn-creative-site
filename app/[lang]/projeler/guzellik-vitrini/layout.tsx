import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../../styles/guzellik.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GRGN Güzellik | Premium Beauty Clinic Demo",
  description:
    "GRGN Creative tarafından sunulan, premium güzellik klinikleri için hazırlanmış zarif ve yüksek dönüşüm odaklı demo web sitesi yapısı.",
  openGraph: {
    title: "GRGN Güzellik | Premium Beauty Clinic Demo",
    description:
      "GRGN Creative tarafından sunulan, premium güzellik klinikleri için hazırlanmış zarif ve yüksek dönüşüm odaklı demo web sitesi yapısı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRGN Güzellik | Premium Beauty Clinic Demo",
    description:
      "GRGN Creative tarafından sunulan, premium güzellik klinikleri için hazırlanmış zarif ve yüksek dönüşüm odaklı demo web sitesi yapısı.",
  },
};

const themeScript = `
  (function () {
    try {
      var root = document.currentScript && document.currentScript.parentElement;
      if (!root) {
        return;
      }

      var storedTheme = localStorage.getItem("guzellik-theme");
      var theme = storedTheme === "dark" ? "dark" : "light";

      root.dataset.guzellikTheme = theme;
      root.classList.toggle("dark", theme === "dark");
    } catch (error) {}
  })();
`;

export default function GuzellikVitriniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      id="guzellik-theme-root"
      data-guzellik-theme="light"
      suppressHydrationWarning
      className={`${inter.className} guzellik-theme antialiased`}
    >
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      {children}
    </div>
  );
}
