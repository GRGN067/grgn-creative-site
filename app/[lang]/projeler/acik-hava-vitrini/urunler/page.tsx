import { Suspense } from "react";
import { StoreShell } from "../store-ui";
import { ProductsExplorer } from "../products-explorer";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ProductsPage({ params }: PageProps) {
  const { lang } = await params;

  return (
    <StoreShell lang={lang}>
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center">
            <p className="text-sm text-white/30">Yükleniyor...</p>
          </div>
        }
      >
        <ProductsExplorer lang={lang} />
      </Suspense>
    </StoreShell>
  );
}
