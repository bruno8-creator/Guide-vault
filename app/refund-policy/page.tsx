import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund Policy" updated="Editable placeholder for Guide Market.">
      <p>
        Products are not currently available for purchase. Refund terms will be updated when
        digital products are released.
      </p>
      <p>
        Guide Market is being prepared as a future digital product store. Before launch, this page should
        define clear refund eligibility, delivery expectations, support steps, and any exceptions
        that apply to downloadable or access-based resources.
      </p>
      <p>
        Until purchasing is enabled, no checkout, payment, or refund workflow is active on this
        website.
      </p>
    </PolicyLayout>
  );
}
