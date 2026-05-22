"use client";

import { useState } from "react";
import Link from "next/link";
import { useStoreCart } from "./store-context";
import {
  PlaceholderMedia,
  QuantityStepper,
  primaryButtonClass,
  secondaryButtonClass,
} from "./store-ui";
import {
  formatPrice,
  getCategoryLabel,
  storeProducts,
  type StoreProduct,
} from "./store-data";
import { getStoreCartPath, getStoreProductsPath } from "./store-routes";

const availableProductImages = new Set([
  "/store/products/meridian-lounge-chair-v2.png",
  "/store/products/linea-console-v2.png",
  "/store/products/atlas-dining-set-v2.png",
  "/store/products/solis-floor-lamp-v2.png",
  "/store/products/noma-side-table-v2.png",
  "/store/products/terra-modular-sofa-v2.png",
  "/store/products/aura-wall-sconce-v2.png",
  "/store/products/harbor-daybed-v2.png",
]);

export function ProductDetailPanel({
  product,
  lang,
}: {
  product: StoreProduct;
  lang: string;
}) {
  const { addItem } = useStoreCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity,
      color: selectedColor,
      size: selectedSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  /* Related products (same category, excluding current) */
  const related = storeProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div
      className="px-4 py-12 md:px-8 lg:px-12"
      style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
    >
      {/* Breadcrumb */}
      <nav className="mb-10 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/30">
        <Link
          href={getStoreProductsPath(lang)}
          className="transition hover:text-white"
        >
          Ürünler
        </Link>
        <span>/</span>
        <span className="text-white/50">
          {getCategoryLabel(product.category)}
        </span>
        <span>/</span>
        <span className="text-white/60">{product.name}</span>
      </nav>

      {/* ── Main grid ── */}
      <div className="grid gap-6 lg:grid-cols-[minmax(320px,0.78fr)_minmax(420px,1.22fr)] lg:items-start">
        {/* Left: media */}
        <div className="border border-white/[0.06] bg-[#080808] p-4 lg:sticky lg:top-28 lg:p-5">
          <PlaceholderMedia
            label={product.name}
            src={
              availableProductImages.has(product.img) ? product.img : undefined
            }
            className="aspect-[4/3.25] w-full border-0"
            imageClassName="object-contain object-center p-3 lg:p-4"
          />
        </div>

        {/* Right: details */}
        <div className="flex flex-col border border-white/[0.06] bg-[#080808] p-8 lg:p-10">
          {/* Badge */}
          {product.badge && (
            <span className="mb-4 inline-block self-start border border-white/20 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-white/60">
              {product.badge}
            </span>
          )}

          {/* Category */}
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
            {getCategoryLabel(product.category)}
          </p>

          {/* Name */}
          <h1
            className="mt-3 text-5xl text-white lg:text-6xl"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            {product.name}
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-base text-white/50">{product.subtitle}</p>

          {/* Price */}
          <p
            className="mt-6 text-4xl text-white"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            }}
          >
            {formatPrice(product.price)}
          </p>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
            {product.description}
          </p>

          {/* ── Color selector ── */}
          {product.colors.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-white/30">
                Renk
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`border px-4 py-2 text-xs uppercase tracking-[0.1em] transition ${
                      selectedColor === color
                        ? "border-white bg-white text-[#080808]"
                        : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Size selector ── */}
          {product.sizes.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-white/30">
                Boyut
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 text-xs uppercase tracking-[0.1em] transition ${
                      selectedSize === size
                        ? "border-white bg-white text-[#080808]"
                        : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Quantity + Add to cart ── */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper value={quantity} onChange={setQuantity} />
            <button
              type="button"
              onClick={handleAddToCart}
              className={primaryButtonClass}
            >
              {added ? "✓ Eklendi" : "Sepete Ekle"}
            </button>
          </div>

          {/* ── Cart link ── */}
          <div className="mt-3">
            <Link
              href={getStoreCartPath(lang)}
              className={secondaryButtonClass}
            >
              Sepeti Gör
            </Link>
          </div>

          {/* ── Features ── */}
          {product.features.length > 0 && (
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.14em] text-white/30">
                Özellikler
              </p>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-white/40"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-white/30" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Info grid ── */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="border border-white/[0.06] p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.14em] text-white/25">
                Malzeme
              </p>
              <p className="mt-1 text-sm text-white/50">
                {product.materials.join(", ")}
              </p>
            </div>
            <div className="border border-white/[0.06] p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.14em] text-white/25">
                Teslimat
              </p>
              <p className="mt-1 text-sm text-white/50">{product.leadTime}</p>
            </div>
            <div className="border border-white/[0.06] p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.14em] text-white/25">
                Kargo
              </p>
              <p className="mt-1 text-sm text-white/50">{product.shipping}</p>
            </div>
            <div className="border border-white/[0.06] p-4">
              <p className="text-[0.6rem] uppercase tracking-[0.14em] text-white/25">
                Detay
              </p>
              <p className="mt-1 text-sm text-white/50">{product.details}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <div className="mt-20">
          <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25">
            Benzer Ürünler
          </p>
          <h2
            className="mt-4 text-4xl text-white"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            Beğenebileceğiniz
          </h2>
          <div className="mt-8 grid gap-px bg-white/[0.06] md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`${getStoreProductsPath(lang)}/${p.slug}`}
                className="group flex flex-col border border-[var(--store-border)] bg-[var(--store-surface)] transition-all duration-300 hover:border-white/20 hover:bg-[var(--store-surface-strong)]"
              >
                <PlaceholderMedia
                  label={p.name}
                  src={availableProductImages.has(p.img) ? p.img : undefined}
                  className="aspect-[4/3]"
                />
                <div className="p-5">
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
                    {getCategoryLabel(p.category)}
                  </p>
                  <p
                    className="mt-2 text-xl text-white"
                    style={{
                      fontFamily:
                        "var(--font-bebas), 'Bebas Neue', sans-serif",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.name}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/70">
                    {formatPrice(p.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
