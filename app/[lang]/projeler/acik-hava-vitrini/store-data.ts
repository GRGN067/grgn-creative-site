/* Store data: products, categories, FAQ */

export type StoreProduct = {
  slug: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  details: string;
  price: number;
  badge?: string;
  tags: string[];
  features: string[];
  colors: string[];
  sizes: string[];
  materials: string[];
  leadTime: string;
  shipping: string;
  img: string;
};

export type StoreCategory = {
  slug: string;
  name: string;
  description: string;
};

export type StoreFaqItem = {
  question: string;
  answer: string;
};

export const storeCategories: StoreCategory[] = [
  {
    slug: "oturma",
    name: "Oturma",
    description:
      "Kamp sandalyesi, tasinabilir oturma cozumleri ve uzun kullanim icin tasarlanmis saha ekipmanlari.",
  },
  {
    slug: "kamp-mutfagi",
    name: "Kamp Mutfagi",
    description:
      "Katlanir masa, pisirme istasyonu ve duzenli saha kurulumlari icin kompakt ekipmanlar.",
  },
  {
    slug: "aydinlatma",
    name: "Aydinlatma",
    description:
      "Fener, kafa lambasi ve dusuk tuketimli saha aydinlatmalari. Gece kullanimi icin guvenli cozumler.",
  },
  {
    slug: "barinma-ve-yardimci",
    name: "Barinma ve Yardimci",
    description:
      "Cadir, sogutucu ve acik hava operasyonunu tamamlayan yardimci tasima ve konaklama urunleri.",
  },
];

export const storeProducts: StoreProduct[] = [
  {
    slug: "meridian-camp-chair",
    name: "Meridian Kamp Sandalyesi",
    category: "oturma",
    subtitle: "Uzun kamp saatleri icin ust duzey saha konforu",
    description:
      "Katlanir govdesi, destekli sirt yapisi ve zorlu yuzeylere uygun ayak geometrisiyle Meridian, kamp kullaniminda guven veren bir oturum deneyimi sunar.",
    details:
      "Katlanir tasima mekanizmasi, guclendirilmis tasima cantasi ve kaymaz zemin ayaklari ile gelir.",
    price: 24950,
    badge: "Cok Tercih Edilen",
    tags: ["Katlanir", "Saha Konforu", "Tasima Cantali"],
    features: [
      "600D ripstop kumas oturum",
      "Toz boya aluminyum sase",
      "Kaymaz ayak yapisi",
      "Hizli acilir kapanir iskelet",
    ],
    colors: ["Komur Siyah", "Tas Gri", "Zeytin"],
    sizes: ["Standart", "Genis"],
    materials: ["Aluminyum", "Ripstop Kumas"],
    leadTime: "2-4 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/meridian-lounge-chair-v2.png",
  },
  {
    slug: "linea-field-table",
    name: "Linea Saha Masasi",
    category: "kamp-mutfagi",
    subtitle: "Kamp mutfagi ve saha hazirligi icin kompakt istasyon",
    description:
      "Katlanir yapisi ve dayanikli tabla yuzeyiyle Linea, kamp alaninda hazirlik, pisirme ve ekipman dizilimi icin dengeli bir calisma alani sunar.",
    details:
      "Katlanir ayak sistemi, hafif govde ve tasima kilidi ile hizli kurulum saglar.",
    price: 18900,
    tags: ["Katlanir", "Hazirlik Alani", "Kompakt"],
    features: [
      "Isiya dayanikli yuzey",
      "Katlanabilir aluminyum ayaklar",
      "Tasima icin kilitli kapanis",
      "Kolay silinebilir tabla",
    ],
    colors: ["Mat Siyah", "Kum Gri"],
    sizes: ["120 cm", "160 cm"],
    materials: ["Aluminyum", "Kompozit Tabla"],
    leadTime: "3-5 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/linea-console-v2.png",
  },
  {
    slug: "atlas-cook-station",
    name: "Atlas Pisirme Istasyonu",
    category: "kamp-mutfagi",
    subtitle: "Kamp pisirme duzenini tek merkezde toplayan istasyon",
    description:
      "Atlas, ocak, hazirlik alani ve yardimci ekipman yerlesimini ayni govdede toplayan moduler saha mutfagi cozumudur.",
    details:
      "Yan raflar, ruzgar kirici panel ve ekipman aski noktalari ile desteklenir.",
    price: 46900,
    badge: "Yeni",
    tags: ["Moduler", "Pisirme", "Rafli Sistem"],
    features: [
      "Cift yuzeyli hazirlik alani",
      "Moduler yan raf yapisi",
      "Ruzgar kirici panel",
      "Aksesuar aski rayi",
    ],
    colors: ["Antrasit", "Kum"],
    sizes: ["Standart", "Buyuk"],
    materials: ["Aluminyum", "Celik", "Kompozit Tabla"],
    leadTime: "4-6 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/atlas-dining-set-v2.png",
  },
  {
    slug: "solis-lantern",
    name: "Solis Kamp Feneri",
    category: "aydinlatma",
    subtitle: "Gece kampi icin guclu ve kontrollu isik",
    description:
      "Solis, IP65 koruma sinifi, ayarlanabilir isik seviyesi ve uzun pil omruyle kamp alani aydinlatmasinda guvenilir bir merkez isik kaynagi sunar.",
    details:
      "USB-C sarj, aski halkasi ve sicak soguk isik modu icerir.",
    price: 12900,
    tags: ["IP65", "Sarjli", "LED"],
    features: [
      "IP65 su ve toz korumasi",
      "Ayarlanabilir isik siddeti",
      "USB-C hizli sarj",
      "12 saate kadar kullanim",
    ],
    colors: ["Siyah", "Kum", "Bronz"],
    sizes: ["Standart", "Buyuk"],
    materials: ["Aluminyum", "Polikarbon"],
    leadTime: "1-3 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/solis-floor-lamp-v2.png",
  },
  {
    slug: "noma-cooler-box",
    name: "Noma Sogutucu Kutu",
    category: "barinma-ve-yardimci",
    subtitle: "Uzun gunler icin soguk zinciri koruyan saha kutusu",
    description:
      "Noma, yuksek yalitimli govdesi ve tasinabilir formuyla icecek, gida ve hassas kamp malzemelerini gun boyu serin tutmak icin tasarlandi.",
    details:
      "Kalin izolasyon duvarlari, sizdirmaz kapak ve tasima kulplariyla gelir.",
    price: 8450,
    tags: ["Yalitimli", "Tasinabilir", "Sizdirmaz"],
    features: [
      "Yuksek yogunluklu izolasyon govdesi",
      "Sizdirmaz kapak sistemi",
      "Guclendirilmis yan kulplar",
      "Kolay temizlenen ic hacim",
    ],
    colors: ["Antrasit", "Kum", "Buz Gri"],
    sizes: ["24L", "42L"],
    materials: ["Polipropilen", "PU Izolasyon"],
    leadTime: "1-3 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/noma-side-table-v2.png",
  },
  {
    slug: "terra-expedition-tent",
    name: "Terra Kesif Cadiri",
    category: "barinma-ve-yardimci",
    subtitle: "Dort mevsim saha kullanimi icin korumali cadir sistemi",
    description:
      "Terra, sert hava kosullarinda stabil kalmak uzere tasarlanmis guclu govdesi ve genis ic hacmiyle premium kamp barinma cozumudur.",
    details:
      "Cift katmanli yapi, hizli kurulum iskeleti ve havalandirma panelleri icerir.",
    price: 58900,
    badge: "Ust Seri",
    tags: ["4 Mevsim", "Cift Katman", "Hizli Kurulum"],
    features: [
      "Su gecirmez dis tente",
      "Aluminyum pole sistemi",
      "Cift katmanli koruma",
      "Ekipman depolama apsisi",
    ],
    colors: ["Grafit", "Toprak", "Zeytin"],
    sizes: ["2 Kisilik", "3 Kisilik"],
    materials: ["Ripstop Kumas", "Aluminyum Pole"],
    leadTime: "5-7 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/terra-modular-sofa-v2.png",
  },
  {
    slug: "aura-headlamp",
    name: "Aura Kafa Lambasi",
    category: "aydinlatma",
    subtitle: "Hareket halinde eller serbest aydinlatma",
    description:
      "Aura, yuruyus, kurulum ve gece saha operasyonlarinda hafif yapisi ve odakli isik gucuyle eller serbest kullanim sunar.",
    details:
      "Ayarlanabilir kafa bandi, kirmizi guvenlik modu ve USB sarj destegi bulunur.",
    price: 4950,
    tags: ["Kafa Lambasi", "USB Sarj", "Hafif"],
    features: [
      "Ayarlanabilir isik acisi",
      "Kirmizi gece gorus modu",
      "Dusuk agirlikli govde",
      "USB ile sarj edilebilir batarya",
    ],
    colors: ["Antrasit", "Kum", "Turuncu"],
    sizes: ["Tek Beden"],
    materials: ["ABS Govde", "Elastik Bant"],
    leadTime: "1-3 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/aura-wall-sconce-v2.png",
  },
  {
    slug: "harbor-sleep-system",
    name: "Harbor Uyku Sistemi",
    category: "barinma-ve-yardimci",
    subtitle: "Gece konforunu tek pakette sunan uyku cozumu",
    description:
      "Harbor, uyku pedi, izolasyon katmani ve dis kilifi bir araya getiren premium saha uyku sistemidir.",
    details:
      "Katlanabilir paket, su itici dis yuzey ve dort mevsim uyumlu ic yapi sunar.",
    price: 52900,
    badge: "Kesif Serisi",
    tags: ["Uyku Sistemi", "4 Mevsim", "Kompakt Paket"],
    features: [
      "Yalitimli zemin pedi",
      "Su itici dis kaplama",
      "Sikistirilabilir tasima formu",
      "Genis omuz yapisi",
    ],
    colors: ["Kum", "Antrasit"],
    sizes: ["Standart", "Uzun"],
    materials: ["Ripstop Dis Yuzey", "Sentetik Dolgu"],
    leadTime: "4-6 is gunu",
    shipping: "Ucretsiz kargo",
    img: "/store/products/harbor-daybed-v2.png",
  },
];

export const storeFaqItems: StoreFaqItem[] = [
  {
    question: "Bu gercek bir magaza mi?",
    answer:
      "Hayir. Bu, GRGN Creative tarafindan hazirlanmis bir demo e-ticaret deneyimidir. Urunler, fiyatlar ve sepet akisi tamamen kurgulanmistir.",
  },
  {
    question: "Odeme yapabilir miyim?",
    answer:
      "Hayir, gercek odeme altyapisi bagli degildir. Checkout sayfasi yalnizca demo amaclidir ve akisi gostermek icin tasarlanmistir.",
  },
  {
    question: "Urun gorselleri neden eksik olabilir?",
    answer:
      "Demo yapi gercek gorseller ve placeholder alanlarla birlikte calisir. Urun fotograflari eklendikce kartlar ve detay sayfalari dogrudan guncellenebilir.",
  },
  {
    question: "Bu siteyi kendi markam icin kullanabilir miyim?",
    answer:
      "Evet. GRGN Creative ile iletisime gecerek bu yapiyi markaniza, sektorunuze ve urun gaminiza ozel olarak uyarlatabilirsiniz.",
  },
  {
    question: "Mobil uyumlu mu?",
    answer:
      "Evet. Tum sayfalar responsive tasarima sahiptir ve mobil, tablet ve masaustu cihazlarda sorunsuz calisir.",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getCategoryLabel(slug: string): string {
  const cat = storeCategories.find((c) => c.slug === slug);
  return cat?.name ?? slug;
}

export function getStoreProduct(slug: string): StoreProduct | undefined {
  return storeProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, category: string): StoreProduct[] {
  return storeProducts
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, 3);
}

export function getProductsByCategory(category: string): StoreProduct[] {
  return storeProducts.filter((p) => p.category === category);
}
