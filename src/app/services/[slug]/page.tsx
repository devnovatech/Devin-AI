import ServiceClient from "./ServiceClient";

// Pre-render one static HTML page per service for `output: export`.
// Keep this list in sync with the keys of `servicesData` in ServiceClient.tsx.
export function generateStaticParams() {
  return [
    { slug: "digital-marketing" },
    { slug: "mobile-application" },
    { slug: "web-development" },
    { slug: "ui-ux-design" },
    { slug: "ecommerce" },
    { slug: "machine-learning-ai" },
    { slug: "quality-assurance" },
    { slug: "project-management" },
    { slug: "staff-augmentation" },
  ];
}

export default function Page() {
  return <ServiceClient />;
}
