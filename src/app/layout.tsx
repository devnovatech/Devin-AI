import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

// Inline script: applies the theme class before paint to avoid FOUC.
// Policy: a user choice in localStorage always wins. Otherwise we INVERT
// the OS preference — system light → site dark, system dark → site light.
const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem("devinception.theme");
    if (t !== "light" && t !== "dark") {
      var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      t = prefersLight ? "dark" : "light";
    }
    var root = document.documentElement;
    root.classList.remove("light","dark");
    root.classList.add(t);
    root.style.colorScheme = t;
  } catch(_) {
    document.documentElement.classList.add("dark");
  }
})();
`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dev Inception | From Strategy to Systems",
  description:
    "Dev Inception builds robust, scalable digital solutions tailored to your business goals. Custom software development, AI/ML solutions, mobile apps, web development, and more.",
  keywords: [
    "software development",
    "mobile app development",
    "web development",
    "AI solutions",
    "machine learning",
    "UI/UX design",
    "digital marketing",
    "staff augmentation",
  ],
  openGraph: {
    title: "Dev Inception | From Strategy to Systems",
    description:
      "We build robust, scalable digital solutions tailored to your unique business goals.",
    type: "website",
    locale: "en_US",
    siteName: "Dev Inception",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Inception | From Strategy to Systems",
    description:
      "We build robust, scalable digital solutions tailored to your unique business goals.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Dev Inception",
      url: "https://devinception.com",
      logo: "https://devinception.com/site_logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@devinception.com",
        contactType: "customer service",
      },
      sameAs: [
        "https://linkedin.com/company/devinception",
        "https://github.com/devinception",
        "https://twitter.com/devinception",
      ],
    },
    {
      "@type": "WebSite",
      name: "Dev Inception",
      url: "https://devinception.com",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to build a custom mobile app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A custom mobile app typically takes 3\u20136 months depending on complexity, features, & platform (iOS, Android, or cross-platform). We provide clear timelines after the discovery phase.",
          },
        },
        {
          "@type": "Question",
          name: "Can Dev Inception handle end-to-end mobile app development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. From UI/UX design & prototyping to development, testing, deployment, & post-launch support, we offer full-cycle mobile app services.",
          },
        },
        {
          "@type": "Question",
          name: "Does Dev Inception build custom websites or use templates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build fully custom, scalable websites\u2014no off-the-shelf templates\u2014ensuring your site reflects your brand & technical requirements.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="https://www.google.com/recaptcha/enterprise.js" strategy="afterInteractive" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
