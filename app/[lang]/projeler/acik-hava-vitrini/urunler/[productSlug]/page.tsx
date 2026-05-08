import { notFound } from "next/navigation";
import { StoreShell } from "../../store-ui";
import { ProductDetailPanel } from "../../product-detail-panel";
import { storeProducts } from "../../store-data";

type PageProps = {
  params: Promise<{ lang: string; productSlug: string }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { lang, productSlug } = await params;
  const product = storeProducts.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  return (
    <StoreShell lang={lang}>
      <ProductDetailPanel product={product} lang={lang} />
    </StoreShell>
  );
}

export async function generateStaticParams() {
  return storeProducts.map((product) => ({
    productSlug: product.slug,
  }));
}
