import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="Editable placeholder for Guide Market.">
      <p>
        This privacy policy is a placeholder for Guide Market and should be reviewed before launch.
        Guide Market is currently preparing its store base and does not currently process purchases.
      </p>
      <p>
        Future data collection may include contact form submissions, waitlist email addresses,
        analytics data, and order-related information once digital releases are available.
      </p>
      <p>
        Waitlist and contact information should only be used to respond to messages, send requested
        updates, improve the website, and support future customer service needs.
      </p>
      <p>
        When third-party services are connected, such as email platforms, analytics providers, or
        Shopify, this page should be updated with accurate details about data handling, retention,
        and user rights.
      </p>
    </PolicyLayout>
  );
}
