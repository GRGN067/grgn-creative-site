"use client";

import { DemoSiteSwitcher } from "@/components/guzellik/demo-site-switcher";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { demoWhatsAppMessage, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type FloatingWhatsAppProps = {
  onOpenAssistant: () => void;
};

export function FloatingWhatsApp({ onOpenAssistant }: FloatingWhatsAppProps) {
  const templateHref =
    "https://wa.me/905301159374?text=" +
    encodeURIComponent(
      "Merhaba, GRGN Güzellik demo siteniz üzerinden geliyorum. Bu taslağı kendi markam için istiyorum."
    );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-3 sm:max-w-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.26, duration: 0.32 }}
        className="w-full sm:w-auto"
      >
        <DemoSiteSwitcher />
      </motion.div>

      <motion.a
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.35 }}
        href={templateHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#eadfdb] bg-white/95 px-4 py-3 text-sm font-medium text-[#594947] shadow-[0_16px_36px_rgba(173,145,140,0.16)] transition hover:-translate-y-1 hover:bg-white sm:w-auto [.guzellik-theme.dark_&]:border-white/12 [.guzellik-theme.dark_&]:bg-[#261f24]/95 [.guzellik-theme.dark_&]:text-[#efe2dc] [.guzellik-theme.dark_&]:shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eff8f1] text-[#4b6a54] [.guzellik-theme.dark_&]:bg-[#213126] [.guzellik-theme.dark_&]:text-[#d9f0df]">
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
        </span>
        Bu taslağı istiyorum
      </motion.a>

      <motion.button
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.35 }}
        type="button"
        onClick={onOpenAssistant}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#eadfdb] bg-white/95 px-4 py-2.5 text-sm font-medium text-[#6e5b57] shadow-[0_16px_36px_rgba(173,145,140,0.14)] transition hover:-translate-y-1 hover:bg-[#fffaf8] sm:w-auto [.guzellik-theme.dark_&]:border-white/12 [.guzellik-theme.dark_&]:bg-[#261f24]/95 [.guzellik-theme.dark_&]:text-[#e8dbd5] [.guzellik-theme.dark_&]:shadow-[0_18px_40px_rgba(0,0,0,0.28)] [.guzellik-theme.dark_&]:hover:bg-[#30272d]"
      >
        <Sparkles className="h-4 w-4 text-[#c79fae]" />
        Lazer Rehberi
      </motion.button>

      <motion.a
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        href={createWhatsAppUrl(whatsappNumber, demoWhatsAppMessage)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#cfe3d4] bg-[#f4fbf5] px-5 py-3 text-sm font-medium text-[#4b6a54] shadow-[0_18px_40px_rgba(145,180,154,0.22)] transition hover:-translate-y-1 sm:w-auto [.guzellik-theme.dark_&]:border-[#4c6d56] [.guzellik-theme.dark_&]:bg-[#213126] [.guzellik-theme.dark_&]:text-[#d9f0df] [.guzellik-theme.dark_&]:shadow-[0_20px_44px_rgba(0,0,0,0.26)]"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        WhatsApp
      </motion.a>
    </div>
  );
}
