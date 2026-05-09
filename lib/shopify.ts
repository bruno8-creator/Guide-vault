export type ShopifyConfig = {
  storeDomain?: string;
  storefrontAccessToken?: string;
  apiVersion?: string;
};

export const shopifyConfig: ShopifyConfig = {
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  apiVersion: process.env.SHOPIFY_API_VERSION,
};

export function isShopifyConfigured() {
  return Boolean(
    shopifyConfig.storeDomain &&
      shopifyConfig.storefrontAccessToken &&
      shopifyConfig.apiVersion,
  );
}

// Future Shopify setup:
// 1. Add Storefront API credentials to environment variables.
// 2. Create typed product queries in this file.
// 3. Fetch products only after the Guide Market catalog is ready.
// Cart, checkout, pricing, and product rendering are intentionally inactive.
