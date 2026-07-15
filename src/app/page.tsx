"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { TechStack } from "@/components/TechStack";
import Head from "next/head";


/**
 * Home page — each section has a visually distinct background
 * so users can clearly see where one section ends and another begins.
 *
 * BG palette in flow order:
 * 1. Hero          → dark navy radial (deep blue)
 * 2. LogoMarquee   → pure white
 * 3. Services      → light icy-blue with gradient blooms
 * 4. WorkingProcess→ dark navy gradient
 * 5. About         → soft pearl white
 * 6. WhyChooseUs   → muted blue tint
 * 7. Industries    → dark navy (different gradient than #4)
 * 8. Testimonials  → light blue tint (different from #3 & #6)
 * 9. CTABanner     → pure white with dark card inside
 */

const GTM_ID = "GTM-NNFTCB87";

export default function Home() {
  return (
    <>
      <Head>
        <Script src="https://www.google.com/recaptcha/enterprise.js" async defer></Script>
      </Head>

      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Microsoft Clarity */}
      <Script
        type="text/javascript"
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
             (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "siwnfj0r1l");
          `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      
      <Hero />
      <LogoMarquee />
      <Services />
      <WorkingProcess />
      <About />
      <WhyChooseUs />
      <Industries />
      <TechStack />
      <Testimonials />
      <CTABanner />
    </>
  );
}
