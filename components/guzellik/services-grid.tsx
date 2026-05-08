"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatedReveal } from "@/components/animated-reveal";
import { getBeautyServicesPath } from "@/components/guzellik/navigation";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { createWhatsAppUrl } from "@/lib/utils";
import { ServiceItem, demoWhatsAppMessage, whatsappNumber } from "@/lib/data";

type ServicesGridProps = {
  services: ServiceItem[];
  showAllLink?: boolean;
  showAllHref?: string;
};

const serviceImageMap: Record<string, string> = {
  "Lazer Epilasyon": "/service-laser.png",
  "Erkek Lazer Epilasyon": "/service-male-laser.png",
  "Cilt Bakımı": "/service-skincare.png",
  "Altın Oran Kaş Alımı": "/service-eyebrow-design.png",
  Dermapen: "/service-dermapen.png",
  "Protez Tırnak": "/service-prosthetic-nails.png",
  Microblading: "/service-microblading.png",
  "Kalıcı Makyaj": "/service-permanent-makeup.png",
  EMS: "/service-ems.png",
  "Bölgesel İncelme": "/service-body-contouring.png",
  "Ücretsiz Cilt Analizi": "/service-skin-analysis.png",
};

export function ServicesGrid({
  services,
  showAllLink = false,
  showAllHref,
}: ServicesGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeService = useMemo(
    () => (activeIndex === null ? null : services[activeIndex]),
    [activeIndex, services],
  );

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-3">
        {services.map((service, index) => {
          const isFeatured = Boolean(service.featured);
          const imageSrc = serviceImageMap[service.title];

          return (
            <AnimatedReveal key={service.title} delay={index * 0.06}>
              <article
                onClick={() => setActiveIndex(index)}
                className={`group relative flex h-full cursor-pointer flex-col rounded-[2.4rem] border bg-white p-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_40px_110px_rgba(165,132,137,0.16)] [.guzellik-theme.dark_&]:bg-[#241f23] [.guzellik-theme.dark_&]:hover:shadow-[0_40px_110px_rgba(0,0,0,0.28)] ${
                  isFeatured
                    ? "border-[#dcbfc5] shadow-[0_28px_90px_rgba(182,141,149,0.18)] lg:-translate-y-3 [.guzellik-theme.dark_&]:border-[#6f5461]"
                    : "border-[#efe5e1] shadow-[0_24px_70px_rgba(137,110,104,0.08)] [.guzellik-theme.dark_&]:border-white/10"
                }`}
              >
                <div className="relative min-h-[220px] overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(167,138,142,0.12)] transition duration-500 group-hover:shadow-[0_30px_80px_rgba(167,138,142,0.18)] [.guzellik-theme.dark_&]:shadow-[0_22px_60px_rgba(0,0,0,0.24)] [.guzellik-theme.dark_&]:group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                  {imageSrc ? (
                    <>
                      <Image
                        src={imageSrc}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(47,34,32,0.12))] [.guzellik-theme.dark_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.18))]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.18),transparent_16%)] [.guzellik-theme.dark_&]:bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.05),transparent_16%)]" />
                    </>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3 pt-7">
                  <h3 className="card-title text-[1.8rem]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 tracking-[0.002em] text-[#766661] [.guzellik-theme.dark_&]:text-[#c9bbb5]">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveIndex(index);
                      }}
                      className={`w-full rounded-full border px-6 py-3.5 text-sm font-medium transition duration-300 ${
                        isFeatured
                          ? "border-[#d4a8af] bg-[#cfa2a8] text-white shadow-[0_18px_38px_rgba(207,162,168,0.24)] group-hover:bg-[#c79299] group-hover:shadow-[0_22px_48px_rgba(207,162,168,0.32)] [.guzellik-theme.dark_&]:border-[#c89baa] [.guzellik-theme.dark_&]:bg-[#c496a4] [.guzellik-theme.dark_&]:hover:bg-[#d0a0af]"
                          : "border-[#eadfdb] bg-[#fffaf8] text-[#594947] group-hover:border-[#dcc7c4] group-hover:bg-white group-hover:shadow-[0_18px_40px_rgba(214,186,181,0.18)] [.guzellik-theme.dark_&]:border-white/12 [.guzellik-theme.dark_&]:bg-[#2a2429] [.guzellik-theme.dark_&]:text-[#f2e8e4] [.guzellik-theme.dark_&]:hover:border-white/18 [.guzellik-theme.dark_&]:hover:bg-[#312a30]"
                      }`}
                    >
                      {service.modalCta}
                    </button>
                  </div>
                </div>
              </article>
            </AnimatedReveal>
          );
        })}
      </div>

      {showAllLink ? (
        <AnimatedReveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <Link href={showAllHref ?? getBeautyServicesPath("tr")} className="cta-secondary">
              Tüm Hizmetleri İncele
            </Link>
          </div>
        </AnimatedReveal>
      ) : null}

      <AnimatePresence>
        {activeService ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(59,40,44,0.25)] px-4 py-8 backdrop-blur-sm [.guzellik-theme.dark_&]:bg-[rgba(12,10,12,0.58)]"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[#eee2de] bg-[#fffdfb] shadow-[0_40px_120px_rgba(108,85,82,0.16)] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#211c20] [.guzellik-theme.dark_&]:shadow-[0_40px_120px_rgba(0,0,0,0.36)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative overflow-hidden border-b border-[#f1e7e3] bg-[linear-gradient(145deg,#fbf0ec_0%,#f8f3f9_54%,#eef4fb_100%)] px-8 py-8 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[linear-gradient(145deg,#2b2328_0%,#302831_54%,#242c36_100%)]">
                <div className="absolute left-8 top-4 h-24 w-24 rounded-full bg-[#f1d7db]/70 blur-2xl [.guzellik-theme.dark_&]:bg-[#8c6672]/26" />
                <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-[#ddd4f0]/60 blur-2xl [.guzellik-theme.dark_&]:bg-[#675e86]/24" />
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute right-5 top-5 inline-flex rounded-full border border-[#eadfdb] bg-white/85 p-2 text-[#7f6b66] transition hover:bg-white [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2d262b] [.guzellik-theme.dark_&]:text-[#d3c6c0] [.guzellik-theme.dark_&]:hover:bg-[#352d33]"
                  aria-label="Hizmet detayını kapat"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="relative max-w-xl">
                  <p className="eyebrow-text text-xs">Hizmet detayı</p>
                  <h3 className="card-title mt-4 text-[2.2rem]">{activeService.title}</h3>
                  <p className="body-copy mt-4">{activeService.detail}</p>
                </div>
              </div>

              <div className="px-8 py-8">
                <p className="eyebrow-text text-xs">Avantajlar</p>
                <div className="mt-5 space-y-3">
                  {activeService.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 rounded-[1.4rem] border border-[#efe5e1] bg-[#fffaf8] px-5 py-4 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2a2429]"
                    >
                      <span className="mt-1 inline-flex rounded-full bg-[#eff8f1] p-1 text-[#688171] [.guzellik-theme.dark_&]:bg-[#26372b] [.guzellik-theme.dark_&]:text-[#98c1a0]">
                        <Check className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-7 text-[#6f605b] [.guzellik-theme.dark_&]:text-[#c9bbb5]">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={createWhatsAppUrl(
                      whatsappNumber,
                      demoWhatsAppMessage,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-primary gap-2"
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                    {activeService.whatsappCta}
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="cta-secondary"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
