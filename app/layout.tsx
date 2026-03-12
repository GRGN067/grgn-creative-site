import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRGN Creative",
  description: "Premium Creative Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen overflow-x-hidden bg-black">
        {children}
      </body>
    </html>
  );
}