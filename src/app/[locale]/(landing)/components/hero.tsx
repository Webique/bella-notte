"use client";

import { ArrowRight, Heart, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const t = useTranslations("IndexPage.hero");

  return (
    <section
      className="relative flex min-h-[700px] items-center overflow-hidden sm:min-h-[600px] lg:min-h-screen"
      id="home"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <ExportedImage
          src="/images/hero.png"
          alt="Bella Notte Luxury Nightwear"
          fill
          className="object-cover"
          priority={true}
        />
        {/* Elegant overlay for better text readability */}
        <div className="lg:bg-secondary/10 bg-secondary/20 absolute inset-0"></div>
      </div>

      {/* Animated Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-brand-pink/20 absolute right-20 top-20 h-96 w-96 rounded-full opacity-40 mix-blend-screen blur-3xl filter"></div>
        <div className="animation-delay-2000 animate-blob bg-brand-burgundy/20 absolute left-20 top-40 h-96 w-96 rounded-full opacity-40 mix-blend-screen blur-3xl filter"></div>
        <div className="animation-delay-4000 animate-blob bg-brand-pink/30 absolute bottom-20 right-40 h-96 w-96 rounded-full opacity-30 mix-blend-screen blur-3xl filter"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <m.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-1/4 top-1/4 h-16 w-16 rounded-full border border-white/20"
        />
        <m.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 h-12 w-12 rounded-full border-2 border-white/15"
        />
        <Sparkles className="absolute right-1/3 top-1/3 h-6 w-6 text-white/30" />
        <Sparkles className="absolute bottom-1/4 left-1/3 h-4 w-4 text-white/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Luxury Badge */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md"
          >
            <Heart size={16} className="text-brand-pink animate-pulse" />
            <span className="uppercase tracking-wider">
              {t("luxuryNightwear")}
            </span>
            <div className="h-4 w-px bg-white/30"></div>
            <Sparkles size={14} className="text-white/80" />
          </m.div>

          {/* Main Title */}
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-8xl"
            style={{ fontFamily: "serif" }}
          >
            {t("title")}
          </m.h1>

          {/* Subtitle with Elegant Styling */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-6 text-2xl font-light italic leading-relaxed text-white/90 md:text-3xl lg:text-4xl"
            style={{ fontFamily: "serif" }}
          >
            &ldquo;{t("subtitle")}&rdquo;
          </m.h2>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mb-10 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {t("description")}
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 ring-primary/20 hover:shadow-primary/40 group h-auto min-w-[160px] gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-md ring-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart size={20} />
                {t("shopNow")}
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group h-auto rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/60 hover:bg-white/20"
              asChild
            >
              <a href="#about">
                {t("cta")}
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </a>
            </Button>
          </m.div>

          {/* French Tagline */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="bg-linear-to-r h-px w-12 from-white/50 to-transparent"></div>
            <p
              className="text-sm font-light italic text-white/70"
              style={{ fontFamily: "serif" }}
            >
              Parce que votre nuit mérite d&rsquo;être belle
            </p>
            <div className="bg-linear-to-l h-px w-12 from-white/50 to-transparent"></div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
