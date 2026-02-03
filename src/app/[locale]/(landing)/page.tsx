import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhyChooseUs from "@/app/[locale]/(landing)/components/why-choose-us";
import WhatsAppFloat from "@/components/whats-app-float";

import About from "./components/about";
import BrandStory from "./components/brand-story";
import Contact from "./components/contact";
import CTA from "./components/cta";
import CustomerExperience from "./components/customer-experience";
import Hero from "./components/hero";
import ProductSizes from "./components/product-sizes";
import QualityPromise from "./components/quality-promise";
import Testimonials from "./components/testimonials";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <Hero />
      <About />
      <BrandStory />
      <WhyChooseUs />
      <ProductSizes />
      <QualityPromise />
      <CustomerExperience />
      <Testimonials />
      <Contact />
      <CTA />
      <WhatsAppFloat />
    </main>
  );
}
