import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionShell } from "@/components/section-shell";
import { benefits, processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <SectionShell
      id="surec"
      eyebrow="Süreç ve avantajlar"
      title="Başından sonuna kadar sade ve güven veren bir süreç."
      description="İlk iletişimden seans planına kadar her adımı açık ve özenli bir akışla ilerletiyoruz. Böylece sürecin nasıl ilerleyeceğini en başından rahatça görebilirsiniz."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal key={item.title} delay={index * 0.08}>
                <div className="glass-panel h-full rounded-[1.8rem] p-7">
                  <div className="mb-6 inline-flex rounded-2xl border border-[#e7eef8] bg-[#f8fbff] p-3 text-[#97a8c9] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#26232a] [.guzellik-theme.dark_&]:text-[#b6bfd7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="card-title text-[1.65rem]">{item.title}</h3>
                  <p className="body-copy mt-4">{item.description}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        <AnimatedReveal delay={0.16}>
          <div className="glass-panel rounded-[2rem] p-7">
            <p className="eyebrow-text text-xs">Avantajlar</p>
            <h3 className="card-title mt-4 text-[2.2rem]">İçinizi rahatlatan ayrıntılar</h3>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[1.4rem] border border-[#efe5e1] bg-[#fffaf8] px-5 py-4 text-sm text-[#766661] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2a2429] [.guzellik-theme.dark_&]:text-[#c9bbb5]"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}
