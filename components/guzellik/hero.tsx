"use client";

import { AnimatedReveal } from "@/components/animated-reveal";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { brandName, demoWhatsAppMessage, stats, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  onOpenAssistant: () => void;
};

export function Hero({ onOpenAssistant }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-20">
      <div className="absolute inset-0 bg-hero-radial opacity-100 [.guzellik-theme.dark_&]:opacity-70" />
      <div className="container-shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="max-w-3xl">
            <AnimatedReveal>
              <div className="eyebrow-text mb-8 inline-flex items-center rounded-full border border-[#eadfdb] bg-white/80 px-5 py-2.5 text-[#8f7472] shadow-[0_10px_30px_rgba(210,176,181,0.15)] [.guzellik-theme.dark_&]:border-white/12 [.guzellik-theme.dark_&]:bg-[#262026]/80 [.guzellik-theme.dark_&]:text-[#d1adb8]">
                <Sparkles className="mr-2 h-4 w-4 text-[#c79fae]" />
                {brandName}
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <h1 className="max-w-4xl text-[3.1rem] font-medium leading-[1] tracking-[-0.04em] text-[#2f2220] [.guzellik-theme.dark_&]:text-[#f7eeea] sm:text-[4rem] lg:text-[4.7rem]">
                Güzelliğe özenli, sakin ve güven veren bir dokunuş.
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.14}>
              <p className="body-copy mt-8 max-w-2xl text-[#6f605b] [.guzellik-theme.dark_&]:text-[#cabcb5] sm:text-[1.08rem]">
                Premium güzellik klinikleri için kurgulanmış bu demo yapı; güçlü ilk izlenim, sade hizmet sunumu ve
                yüksek dönüşüm odaklı WhatsApp akışıyla presentation-ready bir deneyim sunar.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href={createWhatsAppUrl(whatsappNumber, demoWhatsAppMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary min-w-[13.5rem] gap-2"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  WhatsApp'tan iletişime geç
                </a>

                <button
                  type="button"
                  onClick={onOpenAssistant}
                  className="cta-secondary min-w-[13.5rem]"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Lazer Rehberi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.26}>
              <div className="mt-16 grid gap-5 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-panel rounded-[2rem] p-7 [.guzellik-theme.dark_&]:bg-[#241f23]/86"
                  >
                    <p className="card-title text-3xl">{stat.value}</p>
                    <p className="mt-3 text-[0.92rem] font-normal leading-[1.65] tracking-[0.002em] text-[#7c6d67] [.guzellik-theme.dark_&]:text-[#bbaca6]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={0.18}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="relative"
            >
              <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-[#efd5d8]/55 blur-3xl [.guzellik-theme.dark_&]:bg-[#7f5762]/30" />
              <div className="absolute -right-8 bottom-6 h-44 w-44 rounded-full bg-[#ddd3ef]/65 blur-3xl [.guzellik-theme.dark_&]:bg-[#62567f]/28" />

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2.8rem] shadow-[0_35px_90px_rgba(143,113,118,0.16)] [.guzellik-theme.dark_&]:shadow-[0_40px_90px_rgba(0,0,0,0.34)]"
              >
                <div className="relative min-h-[560px] overflow-hidden rounded-[2.8rem]">
                  <Image
                    src="/hero-clinic-care.png"
                    alt="Güzellik kliniği demo görseli"
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f2220]/40 via-[#2f2220]/10 to-white/10 [.guzellik-theme.dark_&]:from-black/55 [.guzellik-theme.dark_&]:via-black/20 [.guzellik-theme.dark_&]:to-white/5" />

                  <div className="absolute -left-6 top-16 h-64 w-64 rounded-full bg-[#f1d8dc]/35 blur-3xl [.guzellik-theme.dark_&]:bg-[#7f5762]/20" />
                  <div className="absolute right-[-2rem] top-24 h-72 w-72 rounded-full bg-[#ddd5ef]/35 blur-3xl [.guzellik-theme.dark_&]:bg-[#62567f]/20" />
                  <div className="absolute bottom-[-4rem] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/20 blur-3xl [.guzellik-theme.dark_&]:bg-white/5" />
                </div>

                <div className="pointer-events-none absolute bottom-8 left-8 max-w-sm">
                  <div className="rounded-[1.7rem] border border-white/30 bg-[rgba(255,250,248,0.22)] px-6 py-5 backdrop-blur-md [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[rgba(34,28,33,0.42)]">
                    <p className="text-[1.9rem] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[2.2rem]">
                      Premium sunum, rafine sonuçlar.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
