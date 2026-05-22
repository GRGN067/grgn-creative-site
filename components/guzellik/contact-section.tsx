import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionShell } from "@/components/section-shell";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { brandName, contactCards, demoWhatsAppMessage, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";

export function ContactSection() {
  return (
    <SectionShell
      id="iletisim"
      eyebrow="İletişim"
      title="Bu yapıyı kendi markanıza uyarlamak için bizimle iletişime geçin."
      description="Premium bir güzellik kliniği sitesi için hazır kurguyu inceleyin, WhatsApp üzerinden hızlıca bağlantı kurun."
      className="pb-12"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <AnimatedReveal>
          <div className="glass-panel rounded-[2rem] p-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.6rem] border border-[#efe5e1] bg-[#fffaf8] p-5 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2a2429]">
                    <div className="mb-4 inline-flex rounded-2xl border border-[#efe5e1] bg-white p-3 text-[#c79fae] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#31292f] [.guzellik-theme.dark_&]:text-[#d4aeb8]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="eyebrow-text text-xs">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-[#766661] [.guzellik-theme.dark_&]:text-[#c9bbb5]">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08}>
          <div className="glass-panel rounded-[2rem] p-7 shadow-glow [.guzellik-theme.dark_&]:shadow-[0_18px_60px_rgba(95,78,117,0.18)]">
            <p className="eyebrow-text text-xs">Hızlı iletişim</p>
            <h3 className="card-title mt-4 text-[2.25rem]">WhatsApp'tan yazın, kurulum sürecini birlikte netleştirelim.</h3>
            <p className="body-copy mt-4">
              Kısa bir mesajla demo yapıyı kendi markanıza nasıl uyarlayabileceğinizi paylaşın, size uygun kurulum
              süreci hakkında hızlı bilgi verelim.
            </p>
            <a
              href={createWhatsAppUrl(whatsappNumber, demoWhatsAppMessage)}
              target="_blank"
              rel="noreferrer"
              className="cta-primary mt-8 w-full gap-2"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              WhatsApp'tan ulaşın
            </a>
          </div>
        </AnimatedReveal>
      </div>

      <footer className="container-shell mt-14 border-t border-[#efe5e1] pt-8 text-sm text-[#9b8b86] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:text-[#a89993]">
        {brandName}. Premium güzellik kliniği sunumu için hazırlanmış zarif demo yapı.
      </footer>
    </SectionShell>
  );
}
