"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function BrandStory() {
  const t = useTranslations("IndexPage.brandStory");

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
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <m.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium uppercase tracking-wider text-white/80"
              >
                {t("subtitle")}
              </m.span>

              <m.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold leading-tight text-white lg:text-6xl"
                style={{ fontFamily: "serif" }}
              >
                {t("title")}
              </m.h2>
            </div>

            {/* Story content */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed text-white/90">
                {t("description")}
              </p>

              {/* French quote */}
              <div className="border-brand-pink rounded-2xl border-s-4 bg-white/10 p-8 shadow-xl backdrop-blur-sm">
                <p
                  className="text-2xl italic leading-relaxed text-white"
                  style={{ fontFamily: "serif" }}
                >
                  &ldquo;{t("frenchQuote")}&rdquo;
                </p>
              </div>
            </m.div>

            {/* Brand values */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  {t("value1.title")}
                </h4>
                <p className="leading-relaxed text-white/80">
                  {t("value1.description")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  {t("value2.title")}
                </h4>
                <p className="leading-relaxed text-white/80">
                  {t("value2.description")}
                </p>
              </div>
            </m.div>
          </m.div>

          {/* Image Section */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl">
                <ExportedImage
                  src="/images/1.jpg"
                  alt="Bella Notte Brand Story"
                  fill
                  className="object-cover"
                />
                <div className="from-brand-burgundy/40 bg-linear-to-t absolute inset-0 to-transparent" />
              </div>

              {/* Floating elements */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -start-8 rounded-2xl border border-white/30 bg-white/95 p-8 shadow-2xl backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-brand-burgundy mb-2 text-4xl font-bold">
                    2025
                  </div>
                  <div className="text-brand-burgundy/70 text-sm font-medium uppercase tracking-wider">
                    {t("established")}
                  </div>
                </div>
              </m.div>

              {/* Decorative elements */}
              <m.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="border-brand-pink/30 absolute -end-6 -top-6 h-24 w-24 rounded-full border-2"
              />
              <m.div
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-brand-pink/30 absolute -bottom-4 -end-4 h-16 w-16 rounded-full"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
