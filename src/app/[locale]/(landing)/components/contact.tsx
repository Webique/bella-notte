"use client";

import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const t = useTranslations("IndexPage.contact");
  const tFooter = useTranslations("Footer");

  return (
    <section
      id="contact"
      className="bg-linear-to-br relative overflow-hidden from-white via-rose-50/30 to-pink-50/20 py-32"
    >
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
          <Star className="text-brand-pink h-8 w-8" />
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
        <div className="mx-auto max-w-6xl">
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
              {t("title")}
            </m.span>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-brand-burgundy mb-6 text-5xl font-bold leading-tight lg:text-6xl"
              style={{ fontFamily: "serif" }}
            >
              {t("subtitle")}
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600"
            >
              {t("description")}
            </m.p>

            {/* Decorative line */}
            <m.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="via-brand-pink bg-linear-to-r mx-auto mt-8 h-px w-24 from-transparent to-transparent"
            />
          </m.div>

          {/* Contact Cards */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {/* Phone */}
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="border-brand-pink/20 hover:shadow-brand-pink/10 relative overflow-hidden rounded-3xl border bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div className="from-brand-pink/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="bg-linear-to-br mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl from-rose-100 to-pink-100 shadow-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                    <Phone className="text-brand-burgundy h-9 w-9" />
                  </div>

                  <h3 className="text-brand-burgundy mb-3 text-center text-xl font-bold">
                    {tFooter("phone")}
                  </h3>

                  <a
                    href={`tel:${siteConfig.support.phone}`}
                    className="text-brand-burgundy/80 hover:text-brand-pink block text-center text-lg transition-colors"
                    dir="ltr"
                  >
                    {siteConfig.support.phone}
                  </a>
                </div>
              </div>
            </m.div>

            {/* Email */}
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="border-brand-burgundy/20 hover:shadow-brand-burgundy/10 relative overflow-hidden rounded-3xl border bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div className="from-brand-burgundy/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="bg-linear-to-br mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl from-red-50 to-rose-100 shadow-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                    <Mail className="text-brand-burgundy h-9 w-9" />
                  </div>

                  <h3 className="text-brand-burgundy mb-3 text-center text-xl font-bold">
                    {tFooter("email")}
                  </h3>

                  <a
                    href={`mailto:${siteConfig.support.email}`}
                    className="text-brand-burgundy/80 hover:text-brand-pink block break-all text-center text-lg transition-colors"
                  >
                    {siteConfig.support.email}
                  </a>
                </div>
              </div>
            </m.div>

            {/* Location */}
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="border-brand-pink/20 hover:shadow-brand-pink/10 relative overflow-hidden rounded-3xl border bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div className="from-brand-pink/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="bg-linear-to-br mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl from-pink-50 to-rose-100 shadow-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                    <MapPin className="text-brand-burgundy h-9 w-9" />
                  </div>

                  <h3 className="text-brand-burgundy mb-3 text-center text-xl font-bold">
                    {tFooter("location")}
                  </h3>

                  <p className="text-brand-burgundy/80 text-center text-lg">
                    المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </m.div>
          </div>

          {/* WhatsApp CTA */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-gradient-to-r from-brand-pink/30 to-brand-burgundy/30 bg-linear-to-br relative overflow-hidden rounded-3xl border from-white via-rose-50/50 to-pink-50/30 p-12 shadow-2xl backdrop-blur-sm">
              {/* Decorative elements */}
              <div className="from-brand-pink/10 bg-linear-to-br absolute -end-4 -top-4 h-24 w-24 rounded-full to-transparent blur-2xl" />
              <div className="from-brand-burgundy/10 bg-linear-to-tr absolute -bottom-4 -start-4 h-32 w-32 rounded-full to-transparent blur-2xl" />

              <div className="relative text-center">
                {/* Icon */}
                <m.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6,
                    type: "spring",
                    bounce: 0.4
                  }}
                  viewport={{ once: true }}
                  className="bg-linear-to-br mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full from-rose-100 to-pink-100 shadow-2xl"
                >
                  <MessageCircle className="text-brand-burgundy h-12 w-12" />
                </m.div>

                <m.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-brand-burgundy mb-4 text-3xl font-bold"
                  style={{ fontFamily: "serif" }}
                >
                  {t("whatsappTitle")}
                </m.h3>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8 text-xl leading-relaxed text-gray-600"
                >
                  {t("whatsappDescription")}
                </m.p>

                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Button
                    size="lg"
                    className="bg-linear-to-r from-brand-pink to-brand-burgundy group relative overflow-hidden rounded-full px-12 py-6 text-xl font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(254,133,161,0.4)]"
                    asChild
                  >
                    <a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10 flex items-center gap-2.5">
                        <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                        {t("whatsappButton")}
                      </span>

                      {/* Animated background */}
                      <div className="bg-linear-to-r from-brand-burgundy to-brand-pink absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  </Button>
                </m.div>

                {/* Decorative stars */}
                <div className="absolute start-8 top-8 opacity-20">
                  <Sparkles className="text-brand-pink h-5 w-5" />
                </div>
                <div className="absolute bottom-8 end-8 opacity-20">
                  <Star className="text-brand-burgundy h-4 w-4" />
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
