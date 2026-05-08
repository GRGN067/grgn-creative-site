"use client";

import Image from "next/image";
import { FloatingWhatsApp } from "@/components/guzellik/floating-whatsapp";
import { LaserAssistant } from "@/components/guzellik/laser-assistant";
import { Navbar } from "@/components/guzellik/navbar";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { brandName, demoWhatsAppMessage, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";
import { BadgeCheck, HeartHandshake, ShieldCheck, Sparkles, Stars, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const highlightCards = [
  {
    title: "Kişiye özel planlama",
    text: "Her cilt ve her ihtiyaç farklıdır. Bu yüzden tüm süreçleri size özel planlıyoruz.",
    icon: Sparkles,
  },
  {
    title: "Hijyen ve konfor odaklı süreç",
    text: "Uygulama sürecinin her adımında hijyen ve konforu öncelik haline getiriyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Uzman ve güven veren yaklaşım",
    text: "Alanında deneyimli ekip ile süreçleri kontrollü ve güvenli şekilde ilerletiyoruz.",
    icon: BadgeCheck,
  },
  {
    title: "Sonuç odaklı takip",
    text: "Sadece uygulama değil, sonuç sürecini de birlikte takip ediyoruz.",
    icon: HeartHandshake,
  },
];

const processSteps = [
  {
    title: "Ön görüşme",
    text: "İhtiyacınızı anlamak için kısa ve net bir değerlendirme yapıyoruz.",
    icon: Sparkles,
  },
  {
    title: "Analiz",
    text: "Cilt yapısı, bölge ve beklentiye göre en uygun yöntem belirlenir.",
    icon: Stars,
  },
  {
    title: "Kişiye özel plan",
    text: "Size özel bir uygulama planı oluşturulur.",
    icon: WandSparkles,
  },
  {
    title: "Uygulama ve takip",
    text: "Süreç boyunca düzenli takip ile en iyi sonucu hedefliyoruz.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute left-1/2 top-20 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#d8c9e6]/35 blur-[150px] [.guzellik-theme.dark_&]:bg-[#755f8e]/20" />
      <div className="absolute left-0 top-[18rem] h-72 w-72 rounded-full bg-[#efd5d8]/30 blur-[140px] [.guzellik-theme.dark_&]:bg-[#8d5d68]/18" />
      <div className="absolute right-0 top-[14rem] h-72 w-72 rounded-full bg-[#dbe6f8]/30 blur-[140px] [.guzellik-theme.dark_&]:bg-[#647598]/16" />

      <Navbar onOpenAssistant={() => setAssistantOpen(true)} />

      <section className="relative overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="eyebrow-text">Hakkımızda</p>
              <h1 className="section-title mt-5">Güzelliğe özenli, sakin ve güven veren bir yaklaşım.</h1>
              <p className="section-copy mt-6">
                Güzellik ve bakım süreçlerini yalnızca bir uygulama olarak değil, kişiye özel planlanan bir deneyim
                olarak ele alıyoruz. Her danışanımıza daha konforlu, daha zarif ve daha güven veren bir bakım süreci
                sunmayı hedefliyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#efd5d8]/60 blur-3xl [.guzellik-theme.dark_&]:bg-[#8d5d68]/24" />
              <div className="absolute -right-4 bottom-6 h-40 w-40 rounded-full bg-[#ddd3ef]/65 blur-3xl [.guzellik-theme.dark_&]:bg-[#647598]/20" />
              <div className="relative min-h-[470px] overflow-hidden rounded-[2.6rem] border border-white/60 bg-[linear-gradient(145deg,#fbefea_0%,#f6eef6_54%,#ecf3fc_100%)] shadow-[0_30px_90px_rgba(150,121,126,0.16)] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[linear-gradient(145deg,#2c2328_0%,#312730_54%,#242d38_100%)] [.guzellik-theme.dark_&]:shadow-[0_36px_90px_rgba(0,0,0,0.34)]">
                <Image
                  src="/about-clinic-interior.png"
                  alt="GRGN Güzellik klinik iç mekân görünümü"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(47,34,32,0.08))] [.guzellik-theme.dark_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.18))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.42),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.22),transparent_18%)] [.guzellik-theme.dark_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.05),transparent_18%)]" />
                <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/45 blur-3xl [.guzellik-theme.dark_&]:bg-white/8" />
                <div className="absolute right-8 top-16 h-40 w-40 rounded-full bg-[#f2d7db]/60 blur-3xl [.guzellik-theme.dark_&]:bg-[#8c6672]/22" />
                <div className="absolute inset-6 rounded-[2.1rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative pb-8 sm:pb-10">
        <div className="container-shell">
          <div className="glass-panel rounded-[2.4rem] px-7 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              <div>
                <p className="eyebrow-text">Marka Hikâyesi</p>
                <h2 className="card-title mt-4 text-[2.3rem]">Biz kimiz?</h2>
              </div>
              <div className="space-y-5">
                <p className="body-copy">
                  {brandName} olarak, premium güzellik klinikleri için güçlü bir dijital ilk izlenim oluşturan
                  zarif, anlaşılır ve güven veren bir web sitesi yapısı sunuyoruz.
                </p>
                <p className="body-copy">
                  Bu demo yapı; hizmet sunumu, güven oluşturan içerik akışı ve WhatsApp dönüşüm kurgusunu tek bir
                  premium deneyimde birleştirir. Amaç, güzellik markalarının kendi kimliğiyle hızla yayına alabileceği
                  güçlü bir temel sunmaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-18">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow-text">Neden Biz</p>
            <h2 className="section-title mt-5">Özenli ve güven veren bir bakım anlayışı.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlightCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e7d6d1] hover:bg-[#fffaf8] [.guzellik-theme.dark_&]:hover:border-white/14 [.guzellik-theme.dark_&]:hover:bg-[#2a2328]"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-[#efe5e1] bg-[#fff8f6] p-3 text-[#c79fae] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2d252b] [.guzellik-theme.dark_&]:text-[#d7afba]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="card-title text-[1.45rem]">{item.title}</h3>
                  <p className="body-copy mt-4 text-[0.97rem]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-18">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow-text">Yaklaşımımız</p>
            <h2 className="section-title mt-5">Bakım sürecini sizin için sadeleştiriyoruz</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-panel rounded-[2rem] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-[#e7eef8] bg-[#f8fbff] p-3 text-[#97a8c9] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#26232a] [.guzellik-theme.dark_&]:text-[#b6bfd7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="card-title text-[1.45rem]">{step.title}</h3>
                  <p className="body-copy mt-4 text-[0.97rem]">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-6 sm:py-8">
        <div className="container-shell">
          <div className="glass-panel rounded-[2.4rem] px-7 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
              <div>
                <p className="eyebrow-text">Hizmet Felsefemiz</p>
                <h2 className="card-title mt-4 text-[2.3rem]">Her ihtiyaca uygun çözümler</h2>
              </div>
              <div>
                <p className="body-copy">
                  Lazer epilasyondan cilt bakımına, kalıcı güzellik uygulamalarından vücut şekillendirme çözümlerine
                  kadar tüm hizmetlerimizi sade, anlaşılır ve güven veren bir yapı ile sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 pt-10 sm:pb-24">
        <div className="container-shell">
          <div className="glass-panel rounded-[2.6rem] px-7 py-10 text-center sm:px-10 sm:py-12">
            <p className="eyebrow-text">İletişim</p>
            <h2 className="section-title mt-5">Bakım sürecinizi ertelemeyin</h2>
            <p className="section-copy mx-auto mt-5">
              Size en uygun planı birlikte belirleyelim ve süreci güvenle başlatalım.
            </p>
            <div className="mt-8 flex justify-center">
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
                WhatsApp'tan bize yazın
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp onOpenAssistant={() => setAssistantOpen(true)} />
      <LaserAssistant open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </main>
  );
}

