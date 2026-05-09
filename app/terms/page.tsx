import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service" updated="Editable placeholder for Guidora.">
      <p>
        These terms are a placeholder for Guidora and should be reviewed before the store launches.
        The website is currently a professional store base for future digital resources.
      </p>
      <p>
        By using this website, visitors agree to use it lawfully and avoid interfering with site
        functionality, forms, or future commerce features.
      </p>
      <p>
        Content, branding, designs, copy, and future resources belong to Guidora unless otherwise
        stated. Future product terms, license details, and usage rights should be added before any
        digital release goes live.
      </p>
      <p>
        These terms may be updated as the website evolves, especially when email systems, Shopify,
        customer accounts, payment processing, or downloadable resources are connected.
      </p>
    </PolicyLayout>
  );
}
