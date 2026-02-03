"use client";

import { Heart, Leaf, Sparkles, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const features = [
  {
    icon: Sparkles,
    key: "feature1",
    gradient: "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--secondary)))"
  },
  {
    icon: Heart,
    key: "feature2",
    gradient: "linear-gradient(to bottom right, hsl(var(--secondary)), var(--brand-dark-burgundy))"
  },
  {
    icon: Star,
    key: "feature3",
    gradient: "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--secondary)))"
  },
  {
    icon: Leaf,
    key: "feature4",
    gradient: "linear-gradient(to bottom right, hsl(var(--secondary)), hsl(var(--primary)))"
  }
];

export default function Features() {
  const t = useTranslations("IndexPage.features");

  return (
    <section
      id="features"
      className="bg-brand-cream relative overflow-hidden py-20"
    >
      {/* Decorative elements */}
      <div className="bg-brand-pink/10 absolute start-10 top-20 h-32 w-32 rounded-full blur-2xl" />
      <div className="bg-brand-burgundy/10 absolute bottom-20 end-10 h-40 w-40 rounded-full blur-2xl" />

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
            className="text-brand-burgundy mt-4 text-4xl font-bold lg:text-5xl"
            style={{ fontFamily: "serif" }}
          >
            {t("title")}
          </h2>
        </m.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
                key={feature.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="border-brand-light-pink/50 h-full rounded-2xl border bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <m.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="h-16 w-16 rounded-xl mb-6 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-lg"
                    style={{ background: feature.gradient }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </m.div>

                  {/* Content */}
                  <h3 className="text-brand-burgundy mb-4 text-xl font-semibold">
                    {t(`${feature.key}.title` as any)}
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    {t(`${feature.key}.description` as any)}
                  </p>

                  {/* Decorative line */}
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-1 mt-6 rounded-full"
                    style={{ background: feature.gradient }}
                  />
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom decorative text */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p
            className="text-brand-burgundy/60 mx-auto max-w-2xl text-2xl font-light italic"
            style={{ fontFamily: "serif" }}
          >
            &ldquo;Parce que votre nuit mérite d&rsquo;être belle&rdquo;
          </p>
        </m.div>
      </div>
    </section>
  );
}
