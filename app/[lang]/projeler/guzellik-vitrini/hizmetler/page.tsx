"use client";

import { FloatingWhatsApp } from "@/components/guzellik/floating-whatsapp";
import { LaserAssistant } from "@/components/guzellik/laser-assistant";
import { Navbar } from "@/components/guzellik/navbar";
import { ServicesGrid } from "@/components/guzellik/services-grid";
import { allServices } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ServicesPage() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute left-1/2 top-20 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#d8c9e6]/35 blur-[150px] [.guzellik-theme.dark_&]:bg-[#755f8e]/20" />
      <div className="absolute left-0 top-[18rem] h-72 w-72 rounded-full bg-[#efd5d8]/30 blur-[140px] [.guzellik-theme.dark_&]:bg-[#8d5d68]/18" />
      <div className="absolute right-0 top-[14rem] h-72 w-72 rounded-full bg-[#dbe6f8]/30 blur-[140px] [.guzellik-theme.dark_&]:bg-[#647598]/16" />

      <Navbar onOpenAssistant={() => setAssistantOpen(true)} />

      <section className="relative overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="eyebrow-text">Hizmetlerimiz</p>
            <h1 className="section-title mt-5">İhtiyacınıza uygun bakım ve uygulamaları keşfedin.</h1>
            <p className="section-copy mx-auto mt-5">
              Lazer epilasyondan cilt bakımına, kalıcı güzellik uygulamalarından vücut şekillendirme
              çözümlerine kadar tüm hizmetlerimizi sade ve premium bir sunumla bir araya getirdik.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-24">
        <div className="container-shell">
          <ServicesGrid services={allServices} />
        </div>
      </section>

      <FloatingWhatsApp onOpenAssistant={() => setAssistantOpen(true)} />
      <LaserAssistant open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </main>
  );
}

