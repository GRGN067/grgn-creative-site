"use client";

import { useState } from "react";
import Link from "next/link";
import { useStoreCart } from "./store-context";
import { SectionCard, primaryButtonClass } from "./store-ui";
import { formatPrice } from "./store-data";
import { getStoreBasePath, getStoreProductsPath } from "./store-routes";

type PaymentMethod = "card" | "transfer" | "door";

export function CheckoutPageContent({ lang }: { lang: string }) {
  const { items, itemCount, subtotal, clearCart } = useStoreCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [submitted, setSubmitted] = useState(false);

  const shipping = subtotal > 20000 ? 0 : 990;
  const total = subtotal + shipping;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div
        className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center"
        style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center border border-white/20 text-3xl text-white">
          ✓
        </div>
        <h1
          className="text-5xl text-white"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            letterSpacing: "0.03em",
          }}
        >
          Demo Sipariş Alındı
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
          Bu bir demo siparişidir. Gerçek ödeme işlemi yapılmamıştır. Sipariş
          numaranız: <strong className="text-white/60">GRGN-DEMO-{Math.random().toString(36).substring(2, 8).toUpperCase()}</strong>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={getStoreBasePath(lang)} className={primaryButtonClass}>
            Ana Sayfaya Dön
          </Link>
          <Link
            href={getStoreProductsPath(lang)}
            className="inline-flex items-center justify-center border border-white/[0.22] bg-transparent px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-[#c8c4c0] transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
          >
            Ürünlere Göz At
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="px-4 py-12 md:px-8 lg:px-12"
      style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
    >
      {/* Header */}
      <div className="mb-12">
        <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25">
          Ödeme
        </p>
        <h1
          className="mt-4 text-5xl text-white md:text-6xl"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            letterSpacing: "0.03em",
          }}
        >
          Demo Satın Al
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          {/* Left: form */}
          <div className="space-y-8">
            {/* ── Contact ── */}
            <SectionCard className="p-8">
              <p
                className="mb-6 text-xl text-white"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                İletişim Bilgileri
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                    Ad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="h-11 w-full px-4 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                    Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Soyadınız"
                    className="h-11 w-full px-4 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="h-11 w-full px-4 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+90 5XX XXX XX XX"
                    className="h-11 w-full px-4 text-sm"
                    required
                  />
                </div>
              </div>
            </SectionCard>

            {/* ── Shipping address ── */}
            <SectionCard className="p-8">
              <p
                className="mb-6 text-xl text-white"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Teslimat Adresi
              </p>
              <div className="grid gap-4">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                    Adres
                  </label>
                  <input
                    type="text"
                    placeholder="Sokak, mahalle, bina no"
                    className="h-11 w-full px-4 text-sm"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                      İl
                    </label>
                    <input
                      type="text"
                      placeholder="İstanbul"
                      className="h-11 w-full px-4 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                      İlçe
                    </label>
                    <input
                      type="text"
                      placeholder="Kadıköy"
                      className="h-11 w-full px-4 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                      Posta Kodu
                    </label>
                    <input
                      type="text"
                      placeholder="34000"
                      className="h-11 w-full px-4 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* ── Payment method ── */}
            <SectionCard className="p-8">
              <p
                className="mb-6 text-xl text-white"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Ödeme Yöntemi
              </p>
              <div className="space-y-3">
                {(
                  [
                    {
                      key: "card" as PaymentMethod,
                      label: "Kredi / Banka Kartı",
                      desc: "Visa, Mastercard, Troy",
                    },
                    {
                      key: "transfer" as PaymentMethod,
                      label: "Havale / EFT",
                      desc: "Banka havalesi ile ödeme",
                    },
                    {
                      key: "door" as PaymentMethod,
                      label: "Kapıda Ödeme",
                      desc: "Teslimat sırasında nakit veya kart",
                    },
                  ] as const
                ).map((method) => (
                  <label
                    key={method.key}
                    className={`flex cursor-pointer items-center gap-4 border p-4 transition ${
                      paymentMethod === method.key
                        ? "border-white/30 bg-white/[0.04]"
                        : "border-white/[0.06] hover:border-white/15"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.key}
                      checked={paymentMethod === method.key}
                      onChange={() => setPaymentMethod(method.key)}
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {method.label}
                      </p>
                      <p className="mt-0.5 text-xs text-white/30">
                        {method.desc}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Card fields (shown only for card payment) */}
              {paymentMethod === "card" && (
                <div className="mt-6 grid gap-4">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                      Kart Numarası
                    </label>
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="h-11 w-full px-4 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                        Son Kullanma
                      </label>
                      <input
                        type="text"
                        placeholder="AA/YY"
                        className="h-11 w-full px-4 text-sm"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-white/30">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="***"
                        className="h-11 w-full px-4 text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </SectionCard>
          </div>

          {/* Right: order summary */}
          <div>
            <SectionCard className="sticky top-28 p-8">
              <p
                className="text-2xl text-white"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Sipariş Özeti
              </p>

              {/* Items */}
              <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div
                      key={item.slug}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-white/50">
                        {item.name}{" "}
                        <span className="text-white/25">×{item.quantity}</span>
                      </span>
                      <span className="text-white/70">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-white/30">
                    Sepetiniz boş. Demo akışını görmek için devam edebilirsiniz.
                  </p>
                )}
              </div>

              {/* Totals */}
              <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">
                    Ara Toplam ({itemCount} ürün)
                  </span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Kargo</span>
                  <span className="text-white">
                    {shipping === 0 ? "Ücretsiz" : formatPrice(shipping)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-6">
                <span className="text-sm uppercase tracking-[0.14em] text-white/50">
                  Toplam
                </span>
                <span
                  className="text-3xl text-white"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  }}
                >
                  {formatPrice(total)}
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`mt-8 w-full ${primaryButtonClass}`}
              >
                Siparişi Tamamla
              </button>

              {/* Demo note */}
              <p className="mt-4 text-center text-[0.6rem] uppercase tracking-[0.12em] text-white/20">
                Bu bir demo ödemesidir · Gerçek işlem yapılmaz
              </p>
            </SectionCard>
          </div>
        </div>
      </form>
    </div>
  );
}
