"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { AboutSection } from "@/components/guzellik/about-section";
import { ContactSection } from "@/components/guzellik/contact-section";
import { FAQSection } from "@/components/guzellik/faq-section";
import { FloatingWhatsApp } from "@/components/guzellik/floating-whatsapp";
import { Hero } from "@/components/guzellik/hero";
import { LaserAssistant } from "@/components/guzellik/laser-assistant";
import { Navbar } from "@/components/guzellik/navbar";
import { ProcessSection } from "@/components/guzellik/process-section";
import { ServiceAreasSection } from "@/components/guzellik/service-areas-section";
import { ServicesSection } from "@/components/guzellik/services-section";
import { TestimonialsSection } from "@/components/guzellik/testimonials-section";

export default function Home() {
  const params = useParams<{ lang: string }>();
  const lang = params.lang;
  const [assistantOpen, setAssistantOpen] = useState(false);

  const whatsappHref =
    "https://wa.me/905301159374?text=" +
    encodeURIComponent(
      "Merhaba, GRGN Güzellik demo siteniz üzerinden geliyorum. Bu siteyi kullanmak istiyorum."
    );

  return (
    <main className="relative overflow-hidden">
      <div className="sticky top-0 z-[1000] border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link
            href={`/${lang}/projeler`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-black/20 hover:bg-zinc-50"
          >
            <span>←</span>
            <span>Projelere Geri Dön</span>
          </Link>

          <div className="hidden text-center md:block">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Demo Görünüm
            </p>
            <p className="mt-1 text-sm text-zinc-700">
              Bu sayfa GRGN Creative tarafından hazırlanmış satışa uygun demo web konseptidir.
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-100"
          >
            <span>WhatsApp</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="absolute left-1/2 top-32 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#d8c9e6]/40 blur-[160px] [.guzellik-theme.dark_&]:bg-[#755f8e]/25" />
      <div className="absolute left-0 top-[34rem] h-80 w-80 rounded-full bg-[#efd5d8]/35 blur-[140px] [.guzellik-theme.dark_&]:bg-[#8d5d68]/20" />
      <div className="absolute right-0 top-[28rem] h-80 w-80 rounded-full bg-[#dbe6f8]/40 blur-[140px] [.guzellik-theme.dark_&]:bg-[#647598]/18" />

      <Navbar onOpenAssistant={() => setAssistantOpen(true)} />
      <Hero onOpenAssistant={() => setAssistantOpen(true)} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <ProcessSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />

      <FloatingWhatsApp onOpenAssistant={() => setAssistantOpen(true)} />

      <LaserAssistant
        open={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />
    </main>
  );
}
