"use client";

import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionShell } from "@/components/section-shell";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { demoWhatsAppMessage, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type FAQCategory = "Lazer Epilasyon" | "Cilt Bakımı" | "Ev Tipi Lazer";

type FAQItem = {
  category: FAQCategory;
  question: string;
  answer: string;
};

const categories: FAQCategory[] = ["Lazer Epilasyon", "Cilt Bakımı", "Ev Tipi Lazer"];

const faqItems: FAQItem[] = [
  {
    category: "Lazer Epilasyon",
    question: "Lazer epilasyon kaç seans sürer?",
    answer:
      "Seans sayısı cilt yapısı, tüy yoğunluğu ve uygulama bölgesine göre değişir. İlk değerlendirmede size uygun seans planı netleştirilir ve süreç sade şekilde paylaşılır.",
  },
  {
    category: "Lazer Epilasyon",
    question: "Acı hissedilir mi?",
    answer:
      "Hissedilen duyum kişiden kişiye değişebilir; ancak doğru cihaz ayarı ve kontrollü uygulama ile sürecin mümkün olduğunca konforlu ilerlemesi hedeflenir.",
  },
  {
    category: "Lazer Epilasyon",
    question: "Erkek lazer epilasyon yapılır mı?",
    answer:
      "Evet. Erkek danışanlar için bölge, tüy yapısı ve beklentiye göre kişiye özel bir uygulama planı hazırlanabilir.",
  },
  {
    category: "Lazer Epilasyon",
    question: "Seans öncesinde nelere dikkat etmek gerekir?",
    answer:
      "Uygulama öncesinde cildin temiz olması ve size özel paylaşılan hazırlık adımlarına uyulması yeterlidir. Tüm detaylar ön görüşmede açık şekilde aktarılır.",
  },
  {
    category: "Lazer Epilasyon",
    question: "Yaz döneminde lazer epilasyon yapılabilir mi?",
    answer:
      "Cilt durumu ve güneş teması birlikte değerlendirilerek uygun planlama yapılabilir. Size en doğru zamanlama ön görüşmede netleştirilir.",
  },
  {
    category: "Cilt Bakımı",
    question: "Cilt bakımı kaç seans yapılmalı?",
    answer:
      'Bu tamamen cildin ihtiyacına göre belirlenir. Bazı ciltlerde tek seans ferahlık sağlarken, daha dengeli ve kalıcı görünüm için düzenli bakım planı önerilebilir.',
  },
  {
    category: "Cilt Bakımı",
    question: "Sonuçlar ne zaman görülür?",
    answer:
      "Bazı etkiler ilk uygulamadan sonra fark edilebilir. Daha belirgin ve dengeli sonuçlar ise düzenli bakım süreciyle birlikte netleşir.",
  },
  {
    category: "Cilt Bakımı",
    question: "Cilt bakımı hassas ciltler için uygun mudur?",
    answer:
      "Hassas ciltlerde de uygun yöntem ve ürün seçimiyle kontrollü bir bakım süreci planlanabilir. Ön değerlendirme bu noktada çok önemlidir.",
  },
  {
    category: "Cilt Bakımı",
    question: "Bakım sonrası günlük hayata hemen dönülebilir mi?",
    answer:
      "Çoğu bakım sonrası günlük akışa rahat şekilde devam edilebilir. Uygulamaya göre küçük öneriler paylaşılır ve süreç daha konforlu hale getirilir.",
  },
  {
    category: "Ev Tipi Lazer",
    question: "Ev tipi lazer cihazları profesyonel uygulamanın yerini tutar mı?",
    answer:
      "Ev tipi cihazlar ile profesyonel uygulamalar aynı planlama ve etki düzeyinde değildir. Daha öngörülebilir ve güvenli sonuç için profesyonel değerlendirme önem taşır.",
  },
  {
    category: "Ev Tipi Lazer",
    question: "Ev tipi lazer sonrası profesyonel seansa başlanabilir mi?",
    answer:
      "Evet, başlanabilir. Ancak cildin mevcut durumu ve önceki uygulama geçmişi değerlendirilerek size uygun başlangıç zamanı belirlenmelidir.",
  },
  {
    category: "Ev Tipi Lazer",
    question: "Ev tipi cihaz kullanımı cildi hassaslaştırır mı?",
    answer:
      "Yanlış kullanım veya cilde uygun olmayan sıklık hassasiyet oluşturabilir. Bu nedenle profesyonel değerlendirme ile daha güvenli bir planlama yapılması önemlidir.",
  },
  {
    category: "Ev Tipi Lazer",
    question: "Hangi durumda profesyonel destek almak gerekir?",
    answer:
      "Ciltte hassasiyet, düzensiz sonuç veya kararsızlık varsa profesyonel destek almak daha güvenli ilerlemenizi sağlar. Cilt ve tüy yapısına göre uygun yol haritası belirlenebilir.",
  },
];

const welcomeMessage =
  "Merhaba, size en çok merak edilen konularda hızlı bilgi sunabilirim. Soldan bir soru seçerek bakım süreci hakkında kısa ve net bilgi alabilirsiniz.";

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("Lazer Epilasyon");
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<FAQCategory, boolean>>({
    "Lazer Epilasyon": false,
    "Cilt Bakımı": false,
    "Ev Tipi Lazer": false,
  });

  const activeCategoryItems = useMemo(
    () => faqItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const visibleQuestions = expandedCategories[activeCategory]
    ? activeCategoryItems
    : activeCategoryItems.slice(0, 4);

  const activeItem = faqItems.find((item) => item.question === selectedQuestion) ?? null;

  const whatsappHref = createWhatsAppUrl(
    whatsappNumber,
    demoWhatsAppMessage,
  );

  return (
    <SectionShell
      id="sss"
      eyebrow="Sık sorulanlar"
      title="Merak edilen konuları sade ve hızlı şekilde inceleyin."
      description="Danışanlarımızın en sık sorduğu başlıkları daha rahat inceleyebilmeniz için bu alanı sade, düzenli ve yönlendirici bir yapı ile sunuyoruz."
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <AnimatedReveal>
          <div className="glass-panel rounded-[2.2rem] p-4 sm:p-5">
            <div className="mb-4 px-2">
              <p className="eyebrow-text text-xs">Soru Başlıkları</p>
            </div>

            <div className="mb-5 flex flex-wrap gap-2 px-1">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "border-[#dcc6c8] bg-[#fff8f6] text-[#3b2d2a] shadow-[0_12px_30px_rgba(155,127,122,0.08)] [.guzellik-theme.dark_&]:border-white/14 [.guzellik-theme.dark_&]:bg-[#2b252a] [.guzellik-theme.dark_&]:text-[#f4ebe7]"
                        : "border-[#efe5e1] bg-white/70 text-[#7f6d68] hover:border-[#e4d4cf] hover:bg-[#fffaf8] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#231f22] [.guzellik-theme.dark_&]:text-[#cdbeb8] [.guzellik-theme.dark_&]:hover:border-white/14 [.guzellik-theme.dark_&]:hover:bg-[#2a2429]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + String(expandedCategories[activeCategory])}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="space-y-2"
                >
                  {visibleQuestions.map((item) => {
                    const isActive = selectedQuestion === item.question;

                    return (
                      <button
                        key={item.question}
                        type="button"
                        onClick={() => setSelectedQuestion(item.question)}
                        className={`w-full rounded-[1.5rem] border px-4 py-4 text-left transition duration-300 sm:px-5 ${
                          isActive
                            ? "border-[#dcc6c8] bg-[#fff8f6] shadow-[0_18px_40px_rgba(155,127,122,0.08)] [.guzellik-theme.dark_&]:border-white/14 [.guzellik-theme.dark_&]:bg-[#2b252a]"
                            : "border-[#efe5e1] bg-white/70 hover:border-[#e4d4cf] hover:bg-[#fffaf8] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#231f22] [.guzellik-theme.dark_&]:hover:border-white/14 [.guzellik-theme.dark_&]:hover:bg-[#2a2429]"
                        }`}
                      >
                        <span className="text-[1rem] font-medium leading-7 text-[#342725] [.guzellik-theme.dark_&]:text-[#f4ebe7]">
                          {item.question}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {activeCategoryItems.length > 4 ? (
              <div className="mt-4 px-1">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedCategories((prev) => ({
                      ...prev,
                      [activeCategory]: !prev[activeCategory],
                    }))
                  }
                  className="cta-secondary text-sm"
                >
                  {expandedCategories[activeCategory] ? "Daha az soru göster" : "Diğer soruları göster"}
                </button>
              </div>
            ) : null}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08}>
          <div className="glass-panel rounded-[2.4rem] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex rounded-2xl border border-[#efe5e1] bg-white p-3 text-[#c79fae] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2c252b] [.guzellik-theme.dark_&]:text-[#d8b4be]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow-text text-xs">Bilgi Asistanı</p>
                <p className="mt-1 text-sm leading-6 text-[#887773] [.guzellik-theme.dark_&]:text-[#c6b8b1]">
                  Kısa, net ve karar vermeyi kolaylaştıran bilgiler
                </p>
              </div>
            </div>

            <div className="min-h-[18rem] rounded-[2rem] border border-[#efe5e1] bg-[#fffaf8] p-6 shadow-[0_20px_60px_rgba(140,112,107,0.06)] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#262126] [.guzellik-theme.dark_&]:shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:min-h-[20rem] sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem?.question ?? "welcome"}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="flex h-full flex-col"
                >
                  {activeItem ? (
                    <>
                      <p className="eyebrow-text text-xs">{activeItem.category}</p>
                      <h3 className="mt-4 text-[1.8rem] font-medium leading-[1.15] tracking-[-0.03em] text-[#2f2220] [.guzellik-theme.dark_&]:text-[#f7eeea] sm:text-[2.1rem]">
                        {activeItem.question}
                      </h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.08, duration: 0.35 }}
                        className="body-copy mt-5 max-w-2xl"
                      >
                        {activeItem.answer}
                      </motion.p>
                    </>
                  ) : (
                    <>
                      <p className="eyebrow-text text-xs">Hoş geldiniz</p>
                      <h3 className="mt-4 text-[1.8rem] font-medium leading-[1.15] tracking-[-0.03em] text-[#2f2220] [.guzellik-theme.dark_&]:text-[#f7eeea] sm:text-[2.1rem]">
                        Kısa ve net bilgi için bir soru seçin.
                      </h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.08, duration: 0.35 }}
                        className="body-copy mt-5 max-w-2xl"
                      >
                        {welcomeMessage}
                      </motion.p>
                    </>
                  )}

                  <div className="mt-auto pt-8">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-secondary inline-flex gap-2"
                    >
                      <WhatsAppIcon className="h-5 w-5 shrink-0" />
                      WhatsApp’tan detaylı bilgi alın
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}
