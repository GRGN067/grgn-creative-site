import { AnimatedReveal } from "@/components/animated-reveal";
import { getBeautyAboutPath } from "@/components/guzellik/navigation";
import { SectionShell } from "@/components/section-shell";
import { aboutPoints } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type AboutSectionProps = {
  lang: string;
};

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <SectionShell
      id="hakkimizda"
      eyebrow="Neden Biz"
      title="Yüksek konfor, özenli ilgi ve güven veren uzmanlık."
      description="Burada yalnızca bir uygulama değil, premium güzellik klinikleri için güçlü bir dijital deneyim yapısı sunuluyor. Her detay, güven oluşturmak ve karar vermeyi kolaylaştırmak için düşünülmüş durumda."
    >
      <AnimatedReveal>
        <div className="relative mb-8 min-h-[360px] overflow-hidden rounded-[2.2rem] border border-[#efe5e1] shadow-[0_24px_70px_rgba(137,110,104,0.08)] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
          <Image
            src="/home-about-preview.png"
            alt="GRGN Güzellik klinik ön izleme"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(47,34,32,0.08))] [.guzellik-theme.dark_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.2))]" />
        </div>
      </AnimatedReveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {aboutPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <AnimatedReveal key={point.title} delay={index * 0.08}>
              <div className="glass-panel h-full rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e8d6d2] hover:bg-[#fffaf8] [.guzellik-theme.dark_&]:hover:border-white/16 [.guzellik-theme.dark_&]:hover:bg-[#2b2328]">
                <div className="mb-6 inline-flex rounded-2xl border border-[#efe5e1] bg-[#fff8f6] p-3 text-[#c79fae] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2d252b] [.guzellik-theme.dark_&]:text-[#d7afba]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="card-title text-[1.9rem]">{point.title}</h3>
                <p className="body-copy mt-4">{point.description}</p>
              </div>
            </AnimatedReveal>
          );
        })}
      </div>

      <AnimatedReveal delay={0.18}>
        <div className="mt-10 flex justify-center lg:justify-start">
          <Link href={getBeautyAboutPath(lang)} className="cta-secondary">
            Hakkımızda Sayfasını İncele
          </Link>
        </div>
      </AnimatedReveal>
    </SectionShell>
  );
}
