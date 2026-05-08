import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import { StoreProvider } from "./store-context";
import "../../../../styles/store.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-bebas",
});

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "GRGN Magaza | Acik Hava Icin Tasarlandi",
  description:
    "Premium acik hava ekipmanlari. Zorlu kosullar icin tasarlandi. GRGN Magaza - premium e-ticaret demosu.",
};

export default function OutdoorStoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${bebasNeue.variable} ${barlow.variable} grgn-store-theme antialiased`}
      style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
    >
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
