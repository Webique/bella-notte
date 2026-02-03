"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("IndexPage.about");

  return (
    <section
      id="about"
      className="bg-brand-cream relative overflow-hidden py-32"
    >
      {/* Enhanced background pattern */}
      <div className="opacity-8 absolute inset-0">
        <div className="bg-size-[40px_40px] absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,69,19,0.1)_1px,transparent_0)]" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-brand-burgundy absolute start-20 top-20 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.01, 0.03, 0.01]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-brand-pink absolute bottom-20 end-20 h-80 w-80 rounded-full blur-3xl"
        />
      </div>

      {/* Decorative circles */}
      <div className="border-brand-burgundy/10 absolute start-10 top-20 h-32 w-32 rounded-full border-2" />
      <div className="border-brand-pink/10 absolute bottom-20 end-10 h-40 w-40 rounded-full border-2" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="relative h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl">
                <ExportedImage
                  src="/images/0.jpg"
                  alt="Bella Notte Story"
                  fill
                  className="object-cover"
                />
                <div className="from-brand-burgundy/20 bg-linear-to-t absolute inset-0 to-transparent" />
              </div>

              {/* Floating card */}
              <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="border-brand-light-pink absolute -bottom-8 -end-8 rounded-2xl border-2 bg-white p-8 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-brand-burgundy mb-2 text-4xl font-bold">
                    100%
                  </div>
                  <div className="text-brand-burgundy/70 text-sm font-medium uppercase tracking-wider">
                    {t("naturalCotton")}
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
                className="border-brand-pink/30 absolute -start-6 -top-6 h-24 w-24 rounded-full border-2"
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
                className="bg-brand-burgundy/20 absolute -start-4 -top-4 h-16 w-16 rounded-full"
              />
            </div>
          </m.div>

          {/* Content Section */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <m.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-brand-burgundy/70 inline-block text-sm font-medium uppercase tracking-wider"
              >
                {t("title")}
              </m.span>

              <m.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-brand-burgundy text-5xl font-bold leading-tight lg:text-6xl"
                style={{ fontFamily: "serif" }}
              >
                {t("subtitle")}
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl leading-relaxed text-gray-700"
              >
                {t("description")}
              </m.p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-brand-light-pink/20 border-brand-pink/20 rounded-2xl border p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-brand-burgundy mb-4 text-2xl font-semibold">
                  {t("mission")}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {t("missionText")}
                </p>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-brand-burgundy/10 border-brand-burgundy/20 rounded-2xl border p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-brand-burgundy mb-4 text-2xl font-semibold">
                  {t("vision")}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {t("visionText")}
                </p>
              </m.div>

              {/* Goals Section */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/50 border-brand-pink/20 rounded-2xl border p-8 shadow-lg backdrop-blur-sm"
              >
                <h3 className="text-brand-burgundy mb-6 text-2xl font-semibold">
                  {t("goalsTitle")}
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-brand-burgundy mt-1 flex-shrink-0 font-bold">1.</span>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {t("goal1")}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-burgundy mt-1 flex-shrink-0 font-bold">2.</span>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {t("goal2")}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-burgundy mt-1 flex-shrink-0 font-bold">3.</span>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {t("goal3")}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-burgundy mt-1 flex-shrink-0 font-bold">4.</span>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {t("goal4")}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-burgundy mt-1 flex-shrink-0 font-bold">5.</span>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {t("goal5")}
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-burgundy mt-1 flex-shrink-0 font-bold">6.</span>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {t("goal6")}
                    </p>
                  </li>
                </ul>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
