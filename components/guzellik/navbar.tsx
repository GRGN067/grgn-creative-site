"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ThemeToggle } from "@/components/guzellik/theme-toggle";
import { getBeautyHomePath, getBeautyNavItems } from "@/components/guzellik/navigation";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { brandName, demoWhatsAppMessage, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
  onOpenAssistant: () => void;
};

export function Navbar({ onOpenAssistant }: NavbarProps) {
  const params = useParams<{ lang: string }>();
  const lang = params.lang;
  const navItems = getBeautyNavItems(lang);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-[#efe5e1]/90 bg-[#faf7f5]/85 backdrop-blur-xl [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#181518]/84"
    >
      <div className="container-shell flex h-20 items-center justify-between">
        <Link
          href={getBeautyHomePath(lang)}
          className="text-[1.02rem] font-medium tracking-[0.02em] text-[#352725] [.guzellik-theme.dark_&]:text-[#f6ece8]"
        >
          {brandName}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.type === "assistant" ? (
              <button
                key={item.href}
                type="button"
                onClick={onOpenAssistant}
                className="nav-text transition hover:text-[#352725] [.guzellik-theme.dark_&]:hover:text-white"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-text transition hover:text-[#352725] [.guzellik-theme.dark_&]:hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button type="button" onClick={onOpenAssistant} className="cta-secondary px-5">
            <Sparkles className="mr-2 h-4 w-4" />
            Lazer Rehberi
          </button>
          <a
            href={createWhatsAppUrl(whatsappNumber, demoWhatsAppMessage)}
            target="_blank"
            rel="noreferrer"
            className="cta-secondary gap-2"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex rounded-full border border-[#eadfdb] bg-white p-3 text-[#594947] [.guzellik-theme.dark_&]:border-white/12 [.guzellik-theme.dark_&]:bg-[#272126] [.guzellik-theme.dark_&]:text-[#f2e8e4]"
            onClick={() => setOpen((value) => !value)}
            aria-label="Menüyü aç"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#efe5e1] bg-[#fffaf8]/95 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#211c20]/96 lg:hidden">
          <div className="container-shell flex flex-col gap-4 py-5">
            {navItems.map((item) =>
              item.type === "assistant" ? (
                <button
                  key={item.href}
                  type="button"
                  className="nav-text text-left transition hover:text-[#352725] [.guzellik-theme.dark_&]:hover:text-white"
                  onClick={() => {
                    setOpen(false);
                    onOpenAssistant();
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-text transition hover:text-[#352725] [.guzellik-theme.dark_&]:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
