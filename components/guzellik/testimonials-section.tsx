import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionShell } from "@/components/section-shell";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Danışan yorumları"
      title="Danışanlarımız ne diyor?"
      description="Danışanlarımızın paylaştığı sıcak ve gerçek yorumlar, ilk adımı atarken içinizi rahatlatır. Buradaki her yorum güven, konfor ve memnuniyet hissini öne çıkarır."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <AnimatedReveal key={item.name} delay={index * 0.08}>
            <article className="glass-panel h-full rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(169,138,143,0.14)] [.guzellik-theme.dark_&]:hover:shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#eadfdb] bg-[linear-gradient(145deg,#fbf0ec_0%,#f6eef6_55%,#edf3fb_100%)] text-sm font-semibold text-[#8f7472] shadow-[0_10px_25px_rgba(214,186,181,0.15)] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[linear-gradient(145deg,#2b2328_0%,#2d2530_55%,#242a33_100%)] [.guzellik-theme.dark_&]:text-[#e4c6cf]">
                  {item.initials}
                </div>
                <div>
                  <h3 className="card-title text-[1.2rem]">{item.name}</h3>
                  <div className="mt-2 flex items-center gap-1 text-[#d5a85f] [.guzellik-theme.dark_&]:text-[#e2bd77]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="body-copy mt-6 text-[#6f605b] [.guzellik-theme.dark_&]:text-[#d0c2bc]">"{item.comment}"</p>
            </article>
          </AnimatedReveal>
        ))}
      </div>
    </SectionShell>
  );
}
