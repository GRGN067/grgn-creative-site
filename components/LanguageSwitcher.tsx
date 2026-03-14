"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({
  lang,
  mobile = false,
}: {
  lang: string;
  mobile?: boolean;
}) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");

  const trHref = rest ? `/tr/${rest}` : "/tr";
  const enHref = rest ? `/en/${rest}` : "/en";

  return (
    <div
      className={`flex items-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl ${
        mobile ? "h-8 px-1" : "h-10 px-1.5"
      }`}
    >
      <Link
        href={trHref}
        className={`flex items-center justify-center rounded-full px-3 text-[11px] font-medium tracking-[0.08em] transition ${
          lang === "tr"
            ? "text-white border border-white/30 bg-white/[0.08]"
            : "text-white/60 hover:text-white"
        }`}
      >
        TR
      </Link>

      <Link
        href={enHref}
        className={`flex items-center justify-center rounded-full px-3 text-[11px] font-medium tracking-[0.08em] transition ${
          lang === "en"
            ? "text-white border border-white/30 bg-white/[0.08]"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}