"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CTA() {
  const t = useTranslations("IndexPage.cta");

  return (
    <section className="bg-secondary relative overflow-hidden py-32">
      {/* Dark overlay to ensure proper contrast */}
      <div className="bg-brand-dark-burgundy/40 absolute inset-0"></div>

      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-size-[40px_40px] absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(254,133,161,0.3)_1px,transparent_0)]" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-brand-pink absolute start-20 top-20 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 end-20 h-80 w-80 rounded-full bg-white blur-3xl"
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute start-10 top-20 h-32 w-32 rounded-full border-2 border-white/20" />
      <div className="absolute bottom-20 end-10 h-40 w-40 rounded-full border-2 border-white/10" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Main content */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            {/* Subtitle */}
            <m.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-white/80"
            >
              {t("subtitle")}
            </m.span>

            {/* Main Title */}
            <m.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8 text-5xl font-bold leading-tight text-white lg:text-7xl"
              style={{ fontFamily: "serif" }}
            >
              {t("title")}
            </m.h2>

            {/* French Quote */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto mb-12 max-w-3xl text-2xl italic leading-relaxed text-white/90"
              style={{ fontFamily: "serif" }}
            >
              &ldquo;La beauté commence par une nuit de sommeil parfait&rdquo;
            </m.p>

            {/* CTA Button */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Button
                size="lg"
                className="text-brand-burgundy hover:bg-brand-light-pink hover:text-brand-dark-burgundy group rounded-full bg-white px-16 py-8 text-xl font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(254,133,161,0.4)]"
                asChild
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("button")}
                  <ArrowRight className="ms-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
              </Button>
            </m.div>

            {/* Features badges */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6 text-white"
            >
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="text-sm font-medium">{t("freeShipping")}</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="text-sm font-medium">{t("returns")}</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="text-sm font-medium">
                  {t("premiumQuality")}
                </span>
              </div>
            </m.div>
          </m.div>

          {/* Bottom decorative element */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-white"></div>
            <Sparkles className="h-5 w-5 text-white" />
            <div className="h-px w-16 bg-white"></div>
          </m.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 start-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-20 w-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".1"
            className="fill-white"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".05"
            className="fill-white"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            opacity=".03"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
