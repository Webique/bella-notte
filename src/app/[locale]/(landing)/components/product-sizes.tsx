"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { useState } from "react";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import { siteConfig } from "@/config/site";

interface ProductCardProps {
  images: string[];
  productKey: "product1" | "product2";
}

function ProductCard({ images, productKey }: ProductCardProps) {
  const t = useTranslations(
    `IndexPage.productSizes.${productKey}` as any
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleWhatsAppOrder = () => {
    const productName = t("productName");
    const newPrice = t("newPrice");
    const message = encodeURIComponent(
      `مرحباً، أريد طلب: ${productName}\nالسعر: ${newPrice}`
    );
    window.open(`${siteConfig.links.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="border-brand-light-pink/30 relative overflow-hidden rounded-2xl border bg-white shadow-xl">
      {/* Image Container */}
      <div className="relative h-[350px] w-full overflow-hidden md:h-[400px]">
        <ExportedImage
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={t("productName")}
          fill
          className="object-cover"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute start-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:scale-110 hover:bg-white md:start-3 md:p-2.5"
          aria-label="Previous image"
        >
          <svg
            className="text-brand-burgundy h-5 w-5 md:h-6 md:w-6"
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
          className="absolute end-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:scale-110 hover:bg-white md:end-3 md:p-2.5"
          aria-label="Next image"
        >
          <svg
            className="text-brand-burgundy h-5 w-5 md:h-6 md:w-6"
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
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-brand-burgundy w-6"
                  : "w-1.5 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 text-center md:p-8">
        <h3
          className="text-brand-burgundy mb-3 text-2xl font-bold md:text-3xl"
          style={{ fontFamily: "serif" }}
        >
          {t("productName")}
        </h3>

        <p className="text-brand-burgundy/80 mb-4 text-sm leading-relaxed md:text-base">
          {t("description")}
        </p>

        <p className="text-brand-burgundy/70 mb-4 text-sm md:text-base">
          {t("fabricType")}
        </p>

        {/* Price */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="text-xl font-semibold text-red-500 line-through md:text-2xl">
            {t("oldPrice")}
          </span>
          <span className="text-brand-burgundy text-3xl font-bold md:text-4xl">
            {t("newPrice")}
          </span>
        </div>

        {/* WhatsApp Order Button */}
        <button
          onClick={handleWhatsAppOrder}
          className="mx-auto flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:px-8 md:py-3.5 md:text-lg"
        >
          <WhatsAppIcon className="h-5 w-5 fill-white md:h-6 md:w-6" />
          {t("orderButton")}
        </button>
      </div>
    </div>
  );
}

const product1Images = [
  "/images/56.jpg",
  "/images/57.jpg",
  "/images/58.jpg",
  "/images/59.jpg",
  "/images/60.jpg",
  "/images/61.jpg",
  "/images/62.jpg",
  "/images/63.jpg",
  "/images/64.jpg"
];

const product2Images = [
  "/images/65.jpg",
  "/images/66.jpg",
  "/images/67.jpg",
  "/images/68.jpg",
  "/images/69.jpg",
  "/images/70.jpg",
  "/images/71.jpg",
  "/images/72.jpg"
];

export default function ProductSizes() {
  const t = useTranslations("IndexPage.productSizes");

  return (
    <section
      id="product-sizes"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="bg-brand-pink/5 absolute start-10 top-20 h-32 w-32 rounded-full blur-3xl" />
        <div className="bg-brand-burgundy/5 absolute bottom-20 end-10 h-24 w-24 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-brand-burgundy/70 text-sm font-medium uppercase tracking-wider">
            {t("subtitle")}
          </span>
          <h2
            className="text-brand-burgundy mt-4 text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{ fontFamily: "serif" }}
          >
            {t("title")}
          </h2>
        </m.div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProductCard images={product1Images} productKey="product1" />
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProductCard images={product2Images} productKey="product2" />
          </m.div>
        </div>
      </div>
    </section>
  );
}
