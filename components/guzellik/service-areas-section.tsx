import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionShell } from "@/components/section-shell";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { demoWhatsAppMessage, serviceAreas, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";
import { MapPin } from "lucide-react";

export function ServiceAreasSection() {
  return (
    <SectionShell
      id="areas"
      eyebrow="Hizmet bölgeleri"
      title="Hizmet Verdiğimiz Bölgeler"
      description="Bu bölüm, premium güzellik klinikleri için güçlü bir yerel hizmet algısı oluşturan örnek bölge kurgusunu gösterir."
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <AnimatedReveal key={area} delay={index * 0.06}>
              <div className="glass-panel rounded-[2rem] p-7 shadow-[0_22px_70px_rgba(139,111,105,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_34px_100px_rgba(169,138,143,0.16)] [.guzellik-theme.dark_&]:shadow-[0_22px_70px_rgba(0,0,0,0.22)] [.guzellik-theme.dark_&]:hover:shadow-[0_34px_100px_rgba(0,0,0,0.28)]">
                <div className="flex items-center gap-4">
                  <span className="inline-flex rounded-full border border-[#eadfdb] bg-[#fff8f6] p-3 text-[#b18e92] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2c2429] [.guzellik-theme.dark_&]:text-[#d0adb7]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="eyebrow-text text-xs">Yakın bölge</p>
                    <h3 className="card-title mt-2 text-[1.65rem]">{area}</h3>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <a
              href={createWhatsAppUrl(whatsappNumber, demoWhatsAppMessage)}
              target="_blank"
              rel="noreferrer"
              className="cta-primary gap-2"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Bu yapıyı markanıza uyarlamak için yazın
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}
