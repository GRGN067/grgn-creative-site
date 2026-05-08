"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { getBeautyBasePath, getDemoSiteItems } from "@/components/guzellik/navigation";

export function DemoSiteSwitcher() {
  const params = useParams<{ lang: string }>();
  const pathname = usePathname();
  const lang = params.lang;
  const items = getDemoSiteItems(lang);
  const beautyBasePath = getBeautyBasePath(lang);

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[#eadfdb] bg-white/94 p-1.5 shadow-[0_16px_38px_rgba(173,145,140,0.15)] backdrop-blur-xl [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#261f24]/94 [.guzellik-theme.dark_&]:shadow-[0_18px_40px_rgba(0,0,0,0.3)] [.grgn-store-theme_&]:border-white/15 [.grgn-store-theme_&]:bg-[#1a1a1a] [.grgn-store-theme_&]:shadow-none">
      <span className="px-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#b18e92] [.guzellik-theme.dark_&]:text-[#d0adb7] [.grgn-store-theme_&]:text-white/50">
        Demo
      </span>

      <div className="flex items-center gap-1">
        {items.map((item, index) => {
          const isActive =
            item.key === "beauty"
              ? pathname.startsWith(beautyBasePath)
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.key}
              href={item.href}
              aria-label={`${item.label} demo${item.description ? ` - ${item.description}` : ""}`}
              title={`${item.label} ${item.description}`}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition ${
                isActive
                  ? "bg-[#fff1ee] text-[#3a2b29] shadow-[0_8px_18px_rgba(185,147,152,0.2)] [.guzellik-theme.dark_&]:bg-[#342730] [.guzellik-theme.dark_&]:text-[#f5e9e4] [.grgn-store-theme_&]:bg-white [.grgn-store-theme_&]:text-[#080808] [.grgn-store-theme_&]:shadow-none"
                  : "text-[#6d5d58] hover:bg-[#fff7f4] [.guzellik-theme.dark_&]:text-[#d4c5bf] [.guzellik-theme.dark_&]:hover:bg-[#30272d] [.grgn-store-theme_&]:text-white/60 [.grgn-store-theme_&]:hover:bg-white/10"
              }`}
            >
              {index + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
