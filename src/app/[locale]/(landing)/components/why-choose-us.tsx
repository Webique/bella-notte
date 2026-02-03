"use client";

import { Award, Clock, Heart, Shield, Sparkles, Truck } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const reasons = [
  {
    icon: Shield,
    key: "quality"
  },
  {
    icon: Heart,
    key: "comfort"
  },
  {
    icon: Sparkles,
    key: "elegance"
  },
  {
    icon: Award,
    key: "premium"
  },
  {
    icon: Truck,
    key: "delivery"
  },
  {
    icon: Clock,
    key: "service"
  }
];

export default function WhyChooseUs() {
  const t = useTranslations("IndexPage.whyChooseUs");

  return (
    <section className="bg-linear-to-br relative overflow-hidden from-white via-rose-50/30 to-pink-50/20 py-32">
      {/* Elegant background elements */}
      <div className="absolute inset-0">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="bg-size-[40px_40px] absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand-burgundy)_1px,transparent_0)]" />
        </div>

        {/* Floating decorative elements */}
        <m.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute start-10 top-20 opacity-10"
        >
          <Shield className="text-brand-pink h-8 w-8" />
        </m.div>

        <m.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute end-16 top-32 opacity-10"
        >
          <Sparkles className="text-brand-burgundy h-6 w-6" />
        </m.div>

        {/* Gradient orbs */}
        <div className="from-brand-pink/5 bg-linear-to-r absolute start-1/4 top-1/4 h-64 w-64 rounded-full to-transparent blur-3xl" />
        <div className="from-brand-burgundy/5 bg-linear-to-l absolute bottom-1/4 end-1/4 h-48 w-48 rounded-full to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <m.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-brand-pink/20 text-brand-burgundy/80 mb-6 inline-flex items-center gap-2 rounded-full border bg-white/80 px-6 py-2 text-sm font-medium uppercase tracking-wider shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            {t("subtitle")}
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-burgundy mb-6 text-5xl font-bold leading-tight lg:text-6xl"
            style={{ fontFamily: "serif" }}
          >
            {t("title")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700"
          >
            {t("description")}
          </m.p>
        </m.div>

        {/* Reasons Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <m.div
                  key={reason.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="group relative h-full rounded-3xl border border-white/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
                    {/* Icon */}
                    <div className="bg-brand-burgundy/20 border-brand-burgundy mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 shadow-lg">
                      <Icon className="text-brand-burgundy h-8 w-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-brand-burgundy mb-4 text-xl font-semibold">
                      {t(`${reason.key}.title` as any)}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {t(`${reason.key}.description` as any)}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/50 bg-white/80 p-12 shadow-lg backdrop-blur-sm">
            <h3
              className="text-brand-burgundy mb-6 text-3xl font-bold"
              style={{ fontFamily: "serif" }}
            >
              {t("cta.title")}
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700">
              {t("cta.description")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="border-secondary rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                variant="secondary"
                asChild
              >
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta.primary")}
                </a>
              </Button>
              <Button
                size="lg"
                className="text-secondary border-secondary hover:text-secondary rounded-full border bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-transparent/80"
                variant="outline"
                asChild
              >
                <a href="#contact">{t("cta.secondary")}</a>
              </Button>
            </div>
          </div>
        </m.div>

        {/* Bottom decorative element */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="bg-brand-burgundy/30 h-px w-16"></div>
          <Sparkles className="text-brand-burgundy/50 h-5 w-5" />
          <div className="bg-brand-burgundy/30 h-px w-16"></div>
        </m.div>
      </div>
    </section>
  );
}
