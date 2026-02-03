"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useState } from "react";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import { siteConfig } from "@/config/site";

const productImages = [
  "/images/56.jpg",
  "/images/57.jpg",
  "/images/58.jpg"
];

export default function ProductSizes() {
  const t = useTranslations("IndexPage.productSizes");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleWhatsAppOrder = () => {
    const productName = t("productName");
    const message = encodeURIComponent(
      `مرحباً، أريد طلب: ${productName}\nالسعر: ${t("newPrice")}`
    );
    window.open(`${siteConfig.links.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section
      id="product-sizes"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="bg-brand-pink/5 absolute start-10 top-20 h-40 w-40 rounded-full blur-3xl" />
        <div className="bg-brand-burgundy/5 absolute bottom-20 end-10 h-32 w-32 rounded-full blur-3xl" />
      </div>

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

        {/* Product Slideshow */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="border-brand-light-pink/30 relative overflow-hidden rounded-2xl border bg-white shadow-2xl">
            {/* Image Container */}
            <div className="relative h-[500px] w-full overflow-hidden md:h-[600px]">
              <ExportedImage
                key={currentImageIndex}
                src={productImages[currentImageIndex]}
                alt={t("imageAlt")}
                fill
                className="object-cover"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute start-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
                aria-label="Previous image"
              >
                <svg
                  className="h-6 w-6 text-brand-burgundy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute end-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
                aria-label="Next image"
              >
                <svg
                  className="h-6 w-6 text-brand-burgundy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-8 bg-brand-burgundy"
                        : "w-2 bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 text-center md:p-12">
              <h3 className="text-brand-burgundy mb-4 text-3xl font-bold md:text-4xl" style={{ fontFamily: "serif" }}>
                {t("productName")}
              </h3>
              
              <p className="text-brand-burgundy/80 mb-6 text-lg leading-relaxed">
                {t("description")}
              </p>

              <p className="text-brand-burgundy/70 mb-6 text-base">
                {t("fabricType")}
              </p>

              {/* Price */}
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="text-red-500 text-2xl font-semibold line-through">
                  {t("oldPrice")}
                </span>
                <span className="text-brand-burgundy text-4xl font-bold">
                  {t("newPrice")}
                </span>
              </div>

              {/* WhatsApp Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="mx-auto flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <WhatsAppIcon className="h-6 w-6 fill-white" />
                {t("orderButton")}
              </button>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

