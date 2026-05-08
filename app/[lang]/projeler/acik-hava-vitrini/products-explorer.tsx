"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "./store-ui";
import {
  storeCategories,
  storeProducts,
  type StoreProduct,
} from "./store-data";

type SortOption = "default" | "price-asc" | "price-desc" | "name";

export function ProductsExplorer({ lang }: { lang: string }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const filteredProducts = useMemo(() => {
    let result: StoreProduct[] = [...storeProducts];

    /* Category filter */
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    /* Search filter */
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    /* Sort */
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div
      className="px-4 py-16 md:px-8 lg:px-12"
      style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
    >
      {/* ── Filters bar ── */}
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/25">
            Ürün Kataloğu
          </p>
          <h1
            className="mt-4 text-5xl text-white md:text-6xl"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            Tüm Ürünler
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-52 border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/25 focus:border-white/30"
          />

          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-10 border border-white/10 bg-[#0e0e0e] px-4 pr-8 text-sm text-white/70"
          >
            <option value="">Tüm Kategoriler</option>
            {storeCategories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="h-10 border border-white/10 bg-[#0e0e0e] px-4 pr-8 text-sm text-white/70"
          >
            <option value="default">Sıralama</option>
            <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
            <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            <option value="name">İsim: A–Z</option>
          </select>
        </div>
      </div>

      {/* ── Category pills ── */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory("")}
          className={`border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
            selectedCategory === ""
              ? "border-white bg-white text-[#080808]"
              : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
          }`}
        >
          Tümü ({storeProducts.length})
        </button>
        {storeCategories.map((cat) => {
          const count = storeProducts.filter(
            (p) => p.category === cat.slug
          ).length;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === cat.slug ? "" : cat.slug
                )
              }
              className={`border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                selectedCategory === cat.slug
                  ? "border-white bg-white text-[#080808]"
                  : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* ── Results count ── */}
      <p className="mb-6 text-xs uppercase tracking-[0.14em] text-white/30">
        {filteredProducts.length} ürün gösteriliyor
      </p>

      {/* ── Product grid ── */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-px bg-white/[0.06] md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              lang={lang}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <p
            className="text-3xl text-white/20"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            }}
          >
            Sonuç Bulunamadı
          </p>
          <p className="mt-3 text-sm text-white/30">
            Arama veya filtre kriterlerinizi değiştirmeyi deneyin.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("");
              setSearchQuery("");
              setSortBy("default");
            }}
            className="mt-6 border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.14em] text-white/50 transition hover:bg-white/[0.06] hover:text-white"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
}
