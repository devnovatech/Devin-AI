import IndustryClient from "./IndustryClient";

// Pre-render one static HTML page per industry for `output: export`.
// Keep this list in sync with the keys of `allIndustryTitles` in IndustryClient.tsx.
export function generateStaticParams() {
  return [
    { slug: "healthcare" },
    { slug: "fintech" },
    { slug: "ecommerce-retail" },
    { slug: "logistics" },
    { slug: "education" },
    { slug: "travel-hospitality" },
    { slug: "saas-startups" },
  ];
}

export default function Page() {
  return <IndustryClient />;
}
