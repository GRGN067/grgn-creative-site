import { CheckoutPageContent } from "../checkout-page-content";
import { StoreShell } from "../store-ui";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function OdemePage({ params }: PageProps) {
  const { lang } = await params;
  return (
    <StoreShell lang={lang}>
      <CheckoutPageContent lang={lang} />
    </StoreShell>
  );
}
