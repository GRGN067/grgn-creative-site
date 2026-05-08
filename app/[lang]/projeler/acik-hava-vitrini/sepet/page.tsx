import { StoreShell } from "../store-ui";
import { CartPageContent } from "../cart-page-content";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function CartPage({ params }: PageProps) {
  const { lang } = await params;

  return (
    <StoreShell lang={lang}>
      <CartPageContent lang={lang} />
    </StoreShell>
  );
}
