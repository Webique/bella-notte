"use client";

import {
  Clock,
  Gift,
  Heart,
  MessageCircle,
  Shield,
  Sparkles,
  Truck
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const experiences = [
  {
    icon: MessageCircle,
    key: "experience1",
    color: "text-brand-pink"
  },
  {
    icon: Truck,
    key: "experience2",
    color: "text-brand-burgundy"
  },
  {
    icon: Gift,
    key: "experience3",
    color: "text-brand-pink"
  },
  {
    icon: Shield,
    key: "experience4",
    color: "text-brand-burgundy"
  },
  {
    icon: Heart,
    key: "experience5",
    color: "text-brand-pink"
  },
  {
    icon: Clock,
    key: "experience6",
    color: "text-brand-burgundy"
  }
];

export default function CustomerExperience() {
  const t = useTranslations("IndexPage.customerExperience");

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
          <Heart className="text-brand-pink h-8 w-8" />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-burgundy mb-6 text-5xl font-bold leading-tight lg:text-6xl"
            style={{ fontFamily: "serif" }}
          >
            {t("title")}
          </m.h2>

          {/* Description */}
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

        {/* Experience Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <m.div
                  key={experience.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="group relative h-full rounded-3xl border border-white/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
                    {/* Icon */}
                    <div className="bg-brand-pink/20 border-brand-pink mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 shadow-lg">
                      <Icon className="text-brand-burgundy h-8 w-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-brand-burgundy mb-4 text-xl font-semibold">
                      {t(`${experience.key}.title` as any)}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {t(`${experience.key}.description` as any)}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

        {/* Bottom French quote */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm">
            <p
              className="text-brand-burgundy text-2xl italic leading-relaxed"
              style={{ fontFamily: "serif" }}
            >
              &ldquo;{t("frenchQuote")}&rdquo;
            </p>
            <p className="text-brand-burgundy/70 mt-4 text-sm">
              — {t("signature")}
            </p>
          </div>
        </m.div>

        {/* Bottom decorative element */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
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
