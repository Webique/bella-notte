"use client";

import { Quote, Sparkles, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("IndexPage.testimonials");

  const testimonials = [
    {
      id: 1,
      name: t("testimonial1.name"),
      location: t("testimonial1.location"),
      text: t("testimonial1.text")
    },
    {
      id: 2,
      name: t("testimonial2.name"),
      location: t("testimonial2.location"),
      text: t("testimonial2.text")
    },
    {
      id: 3,
      name: t("testimonial3.name"),
      location: t("testimonial3.location"),
      text: t("testimonial3.text")
    }
  ];

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
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 inline-block text-sm font-medium uppercase tracking-wider text-white/80"
          >
            {t("subtitle")}
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-5xl font-bold leading-tight text-white lg:text-6xl"
            style={{ fontFamily: "serif" }}
          >
            {t("title")}
          </m.h2>

          {/* French subtitle */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-2xl italic leading-relaxed text-white/90"
            style={{ fontFamily: "serif" }}
          >
            &ldquo;Nos clientes partagent leur expérience Bella Notte&rdquo;
          </m.p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <m.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:bg-white/15 hover:shadow-[0_20px_60px_rgba(254,133,161,0.3)]">
                  {/* Quote icon */}
                  <div className="bg-brand-pink absolute -top-4 start-8 flex size-14 items-center justify-center rounded-full shadow-lg">
                    <Quote className="size-8 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="mb-6 flex justify-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="mb-8 text-center leading-relaxed text-white/90">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Customer info */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/70">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
            <p
              className="text-2xl italic leading-relaxed text-white/90"
              style={{ fontFamily: "serif" }}
            >
              &ldquo;La satisfaction de nos clientes est notre plus belle
              récompense&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/80">
              — L&rsquo;équipe Bella Notte
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
          <div className="h-px w-16 bg-white/50"></div>
          <Sparkles className="h-5 w-5 text-white/70" />
          <div className="h-px w-16 bg-white/50"></div>
        </m.div>
      </div>
    </section>
  );
}
