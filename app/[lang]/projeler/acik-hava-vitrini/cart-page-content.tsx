"use client";

import Link from "next/link";
import { useStoreCart } from "./store-context";
import {
  QuantityStepper,
  SectionCard,
  primaryButtonClass,
  secondaryButtonClass,
} from "./store-ui";
import { formatPrice } from "./store-data";
import { getStoreCheckoutPath, getStoreProductsPath } from "./store-routes";

export function CartPageContent({ lang }: { lang: string }) {
  const { items, itemCount, subtotal, removeItem, updateQuantity, clearCart } =
    useStoreCart();

  const shipping = subtotal > 20000 ? 0 : 990;
  const total = subtotal + shipping;

  return (
    <div
      className="px-4 py-12 md:px-8 lg:px-12"
      style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
    >
      {/* Header */}
      <div className="mb-12">
        <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25">
          Sepetiniz
        </p>
        <h1
          className="mt-4 text-5xl text-white md:text-6xl"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            letterSpacing: "0.03em",
          }}
        >
          Alışveriş Sepeti
        </h1>
      </div>

      {items.length === 0 ? (
        /* ── Empty state ── */
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <p
            className="text-4xl text-white/20"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            }}
          >
            Sepetiniz Boş
          </p>
          <p className="mt-3 text-sm text-white/30">
            Ürünlere göz atarak sepetinize ekleme yapabilirsiniz.
          </p>
          <Link
            href={getStoreProductsPath(lang)}
            className={`mt-8 ${primaryButtonClass}`}
          >
            Ürünlere Göz At
          </Link>
        </div>
      ) : (
        /* ── Cart content ── */
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          {/* Left: items */}
          <div>
            {/* Column header */}
            <div className="mb-4 hidden border-b border-white/10 pb-4 text-xs uppercase tracking-[0.14em] text-white/25 md:grid md:grid-cols-[1fr,120px,120px,80px]">
              <span>Ürün</span>
              <span className="text-center">Adet</span>
              <span className="text-right">Toplam</span>
              <span />
            </div>

            {/* Items list */}
            <div className="space-y-3">
              {items.map((item) => (
                <SectionCard key={item.slug} className="p-5">
                  <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,120px,120px,80px] md:items-center">
                    {/* Product info */}
                    <div>
                      <p
                        className="text-xl text-white"
                        style={{
                          fontFamily:
                            "var(--font-bebas), 'Bebas Neue', sans-serif",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-white/40">
                        {formatPrice(item.price)}
                        {item.color && (
                          <span className="ml-2 text-white/25">
                            · {item.color}
                          </span>
                        )}
                        {item.size && (
                          <span className="ml-2 text-white/25">
                            · {item.size}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex justify-start md:justify-center">
                      <QuantityStepper
                        value={item.quantity}
                        onChange={(v) => updateQuantity(item.slug, v)}
                      />
                    </div>

                    {/* Subtotal */}
                    <p className="text-right text-sm font-semibold text-white">
                      {formatPrice(item.price * item.quantity)}
                    </p>

                    {/* Remove */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        className="text-xs uppercase tracking-[0.14em] text-white/30 transition hover:text-red-400"
                      >
                        Kaldır
                      </button>
                    </div>
                  </div>
                </SectionCard>
              ))}
            </div>

            {/* Clear cart */}
            <div className="mt-6 flex items-center justify-between">
              <Link
                href={getStoreProductsPath(lang)}
                className="text-xs uppercase tracking-[0.14em] text-white/30 transition hover:text-white"
              >
                ← Alışverişe Devam
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="text-xs uppercase tracking-[0.14em] text-white/30 transition hover:text-red-400"
              >
                Sepeti Temizle
              </button>
            </div>
          </div>

          {/* Right: order summary */}
          <div>
            <SectionCard className="p-8">
              <p
                className="text-2xl text-white"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Sipariş Özeti
              </p>

              <div className="mt-6 space-y-4 border-t border-white/[0.06] pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">
                    Ara Toplam ({itemCount} ürün)
                  </span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">Kargo</span>
                  <span className="text-white">
                    {shipping === 0 ? "Ücretsiz" : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-white/25">
                    ₺20.000 üzeri siparişlerde kargo ücretsiz.
                  </p>
                )}
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

              <Link
                href={getStoreCheckoutPath(lang)}
                className={`mt-8 w-full ${primaryButtonClass}`}
              >
                Ödeme
              </Link>
              <Link
                href={getStoreProductsPath(lang)}
                className={`mt-3 w-full ${secondaryButtonClass}`}
              >
                Alışverişe Devam
              </Link>
            </SectionCard>

            {/* Demo note */}
            <div className="mt-4 border border-white/[0.06] p-5">
              <p className="text-[0.6rem] uppercase tracking-[0.14em] text-white/25">
                Demo Notu
              </p>
              <p className="mt-2 text-xs leading-5 text-white/30">
                Bu bir demo sepettir. Gerçek ödeme altyapısı bağlı değildir.
                Tüm akış sunum amacıyla hazırlanmıştır.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
