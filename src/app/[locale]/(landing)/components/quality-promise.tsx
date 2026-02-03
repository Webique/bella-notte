"use client";

import { Award, Heart, Leaf, Shield, Sparkles, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const promises = [
  {
    icon: Shield,
    key: "promise1",
    gradient: "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--secondary)))"
  },
  {
    icon: Leaf,
    key: "promise2",
    gradient: "linear-gradient(to bottom right, hsl(var(--secondary)), var(--brand-dark-burgundy))"
  },
  {
    icon: Heart,
    key: "promise3",
    gradient: "linear-gradient(to bottom right, hsl(var(--primary)), var(--brand-dark-burgundy))"
  },
  {
    icon: Award,
    key: "promise4",
    gradient: "linear-gradient(to bottom right, hsl(var(--secondary)), hsl(var(--primary)))"
  },
  {
    icon: Sparkles,
    key: "promise5",
    gradient: "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--secondary)))"
  },
  {
    icon: Star,
    key: "promise6",
    gradient: "linear-gradient(to bottom right, hsl(var(--secondary)), var(--brand-dark-burgundy))"
  }
];

export default function QualityPromise() {
  const t = useTranslations("IndexPage.qualityPromise");

  return (
    <section className="bg-brand-cream relative overflow-hidden py-24">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="bg-size-[80px_80px] absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.brand-pink/0.1)_1px,transparent_0)]" />
      </div>

      {/* Decorative elements */}
      <div className="bg-brand-pink/5 absolute start-10 top-20 h-40 w-40 rounded-full blur-3xl" />
      <div className="bg-brand-burgundy/5 absolute bottom-20 end-10 h-32 w-32 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-brand-burgundy/70 text-sm font-medium uppercase tracking-wider">
            {t("subtitle")}
          </span>
          <h2
            className="text-brand-burgundy mb-8 mt-4 text-4xl font-bold lg:text-5xl"
            style={{ fontFamily: "serif" }}
          >
            {t("title")}
          </h2>

          {/* French subtitle */}
          <p
            className="mx-auto max-w-3xl text-xl italic text-gray-700"
            style={{ fontFamily: "serif" }}
          >
            &ldquo;{t("frenchSubtitle")}&rdquo;
          </p>
        </m.div>

        {/* Promises Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <m.div
                key={promise.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="border-brand-light-pink/30 relative h-full overflow-hidden rounded-2xl border bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
                  {/* Background gradient on hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                    style={{ background: promise.gradient }}
                  />

                  {/* Icon */}
                  <m.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-brand-pink/20 border-brand-pink relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-500 group-hover:shadow-xl"
                  >
                    <Icon className="text-brand-burgundy h-8 w-8" />
                  </m.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-brand-burgundy group-hover:text-brand-pink mb-4 text-xl font-semibold transition-colors duration-300">
                      {t(`${promise.key}.title` as any)}
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      {t(`${promise.key}.description` as any)}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="bg-brand-pink/10 absolute -end-2 -top-2 h-8 w-8 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom section with French quote */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="border-brand-light-pink/30 from-brand-light-pink/10 bg-linear-to-br mx-auto max-w-4xl rounded-3xl border to-white p-12 shadow-xl">
            <h3
              className="text-brand-burgundy mb-6 text-3xl font-bold"
              style={{ fontFamily: "serif" }}
            >
              {t("bottomSection.title")}
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              {t("bottomSection.description")}
            </p>

            {/* Signature */}
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
              <div className="bg-brand-pink h-px w-16"></div>
              <p
                className="text-brand-burgundy text-xl italic"
                style={{ fontFamily: "serif" }}
              >
                Bella Notte
              </p>
              <div className="bg-brand-pink h-px w-16"></div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
