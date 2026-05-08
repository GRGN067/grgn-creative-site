"use client";

import { cn } from "@/components/guzellik/utils";
import { WhatsAppIcon } from "@/components/guzellik/whatsapp-icon";
import { demoWhatsAppMessage, whatsappNumber } from "@/lib/data";
import { createWhatsAppUrl } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const steps = [
  {
    key: "skinTone",
    label: "Cilt tonunuzu en iyi hangisi anlatır?",
    options: ["Açık", "Buğday", "Esmer", "Koyu"],
  },
  {
    key: "hairThickness",
    label: "Tüy yapınız nasıl görünüyor?",
    options: ["İnce", "Orta", "Kalın", "Karışık"],
  },
  {
    key: "tanningStatus",
    label: "Son dönemde bronzlaşma oldu mu?",
    options: ["Hayır", "Hafif", "Belirgin"],
  },
  {
    key: "treatmentArea",
    label: "Hangi bölge için bilgi almak istersiniz?",
    options: ["Tüm vücut", "Yüz", "Koltuk altı", "Bikini", "Bacak", "Diğer"],
  },
] as const;

type Answers = Record<(typeof steps)[number]["key"], string>;

type LaserAssistantProps = {
  open: boolean;
  onClose: () => void;
};

export function LaserAssistant({ open, onClose }: LaserAssistantProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});

  useEffect(() => {
    if (!open) {
      setCurrentStep(0);
      setAnswers({});
    }
  }, [open]);

  const step = steps[currentStep];
  const isComplete = steps.every((item) => answers[item.key]);
  const progress = ((currentStep + 1) / steps.length) * 100;
  const isSummaryStep = currentStep === steps.length - 1 && Boolean(answers[step.key]);

  const summary = useMemo(
    () => [
      { label: "Cilt tonu", value: answers.skinTone ?? "-" },
      { label: "Tüy yapısı", value: answers.hairThickness ?? "-" },
      { label: "Bronzluk durumu", value: answers.tanningStatus ?? "-" },
      { label: "İlgilendiğiniz bölge", value: answers.treatmentArea ?? "-" },
    ],
    [answers],
  );

  const whatsappMessage = useMemo(() => {
    return [
      demoWhatsAppMessage,
      "",
      "Ayrıca demoda bıraktığım kısa notlar:",
      `Cilt tonu: ${answers.skinTone ?? "-"}`,
      `Tüy yapısı: ${answers.hairThickness ?? "-"}`,
      `Bronzluk durumu: ${answers.tanningStatus ?? "-"}`,
      `İlgilenilen bölge: ${answers.treatmentArea ?? "-"}`,
    ].join("\n");
  }, [answers]);

  const selectAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [step.key]: value }));
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-[rgba(61,43,46,0.18)] backdrop-blur-sm [.guzellik-theme.dark_&]:bg-[rgba(8,7,9,0.58)]"
          onClick={onClose}
        >
          <motion.aside
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 36 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-full max-w-2xl overflow-hidden border-l border-[#efe5e1] bg-[#fffdfb] shadow-[0_28px_90px_rgba(121,93,90,0.16)] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#1f1a1e] [.guzellik-theme.dark_&]:shadow-[0_28px_90px_rgba(0,0,0,0.38)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-full flex-col">
              <div className="relative border-b border-[#f1e7e3] bg-[linear-gradient(145deg,#fbf0ec_0%,#f8f3f9_54%,#eef4fb_100%)] px-6 py-6 sm:px-8 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[linear-gradient(145deg,#2b2328_0%,#312832_54%,#252e38_100%)]">
                <div className="absolute left-8 top-5 h-24 w-24 rounded-full bg-[#f1d7db]/70 blur-2xl [.guzellik-theme.dark_&]:bg-[#8c6672]/26" />
                <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-[#ddd4f0]/60 blur-2xl [.guzellik-theme.dark_&]:bg-[#675e86]/24" />
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-5 top-5 inline-flex rounded-full border border-[#eadfdb] bg-white/85 p-2 text-[#7f6b66] transition hover:bg-white [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2d262b] [.guzellik-theme.dark_&]:text-[#d3c6c0] [.guzellik-theme.dark_&]:hover:bg-[#352d33]"
                  aria-label="Lazer Rehberi kapat"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="relative max-w-lg">
                  <div className="inline-flex items-center rounded-full border border-[#eadfdb] bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#9c7c80] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#282127]/78 [.guzellik-theme.dark_&]:text-[#d2abb6]">
                    <Sparkles className="mr-2 h-4 w-4 text-[#c79fae]" />
                    Lazer Rehberi
                  </div>
                  <h2 className="mt-5 text-[2.4rem] font-medium leading-[1.02] tracking-[-0.035em] text-[#2f2220] [.guzellik-theme.dark_&]:text-[#f7eeea] sm:text-[2.9rem]">
                    Size uygun süreci birlikte netleştirelim.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[#766661] [.guzellik-theme.dark_&]:text-[#c9bbb5]">
                    Kısa sorularla ihtiyacınızı anlamamıza yardımcı olun. Son adımda, seçimlerinizi
                    içeren özenli bir özetle WhatsApp üzerinden kolayca bilgi alabilirsiniz.
                  </p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#b18e92] [.guzellik-theme.dark_&]:text-[#c8a7b2]">
                      Adım {Math.min(currentStep + 1, steps.length)} / {steps.length}
                    </p>
                    <h3 className="mt-3 text-2xl font-medium leading-[1.1] tracking-[-0.03em] text-[#2f2220] [.guzellik-theme.dark_&]:text-[#f7eeea]">
                      {isSummaryStep ? "Kısa özetiniz hazır" : step.label}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[#efe5e1] bg-[#fffaf8] px-3 py-2 text-sm text-[#8b7a75] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2b2429] [.guzellik-theme.dark_&]:text-[#c9b9b3]">
                    %{Math.round(progress)}
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#f0e7e3] [.guzellik-theme.dark_&]:bg-[#352d33]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#d7a5ab] via-[#cfbedf] to-[#c6d7f4] transition-all duration-300 [.guzellik-theme.dark_&]:from-[#bb7f8c] [.guzellik-theme.dark_&]:via-[#8d79aa] [.guzellik-theme.dark_&]:to-[#7186ac]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {!isSummaryStep ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {step.options.map((option) => {
                      const selected = answers[step.key] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => selectAnswer(option)}
                          className={cn(
                            "rounded-[1.4rem] border px-5 py-5 text-left text-sm leading-7 transition duration-300",
                            selected
                              ? "border-[#d8b6bb] bg-[#fff5f3] text-[#43312e] [.guzellik-theme.dark_&]:border-[#bb8a99] [.guzellik-theme.dark_&]:bg-[#372c33] [.guzellik-theme.dark_&]:text-[#f4e9e5]"
                              : "border-[#efe5e1] bg-white text-[#6f605b] hover:border-[#e1d2ce] hover:bg-[#fffaf8] [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#241f23] [.guzellik-theme.dark_&]:text-[#d1c2bc] [.guzellik-theme.dark_&]:hover:border-white/16 [.guzellik-theme.dark_&]:hover:bg-[#2a2429]",
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-8 space-y-4">
                    <div className="rounded-[1.6rem] border border-[#efe5e1] bg-[#fffaf8] p-5 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#2a2429]">
                      <p className="text-base leading-8 text-[#766661] [.guzellik-theme.dark_&]:text-[#c9bbb5]">
                        Verdiğiniz bilgilere göre sizin için en uygun süreci birlikte netleştirebiliriz.
                        Dilerseniz bu özeti WhatsApp üzerinden bizimle paylaşarak size özel yönlendirme
                        alabilirsiniz.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {summary.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[1.4rem] border border-[#efe5e1] bg-white px-5 py-4 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#241f23]"
                        >
                          <p className="text-xs uppercase tracking-[0.24em] text-[#b18e92] [.guzellik-theme.dark_&]:text-[#c8a7b2]">{item.label}</p>
                          <p className="mt-2 text-base text-[#4f403c] [.guzellik-theme.dark_&]:text-[#f0e6e1]">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-[#f1e7e3] bg-white px-6 py-5 [.guzellik-theme.dark_&]:border-white/10 [.guzellik-theme.dark_&]:bg-[#1f1a1e] sm:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep((value) => Math.max(0, value - 1))}
                    disabled={currentStep === 0}
                    className="cta-secondary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Önceki adım
                  </button>

                  {!isSummaryStep ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((value) => Math.min(steps.length - 1, value + 1))}
                      disabled={!answers[step.key]}
                      className="cta-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Devam et
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={createWhatsAppUrl(whatsappNumber, whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className={cn("cta-primary gap-2", !isComplete && "pointer-events-none opacity-40")}
                    >
                      <WhatsAppIcon className="h-5 w-5 shrink-0" />
                      Sonucumu WhatsApp'ta paylaş
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
