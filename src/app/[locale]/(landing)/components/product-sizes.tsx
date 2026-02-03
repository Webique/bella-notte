"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const productSizes = [
  {
    image: "/images/56.jpg",
    sizeKey: "sizeS" as const
  },
  {
    image: "/images/57.jpg",
    sizeKey: "sizeM" as const
  },
  {
    image: "/images/58.jpg",
    sizeKey: "sizeL" as const
  }
];

export default function ProductSizes() {
  const t = useTranslations("IndexPage.productSizes");

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

        {/* Product Sizes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productSizes.map((product, index) => (
            <m.div
              key={product.image}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="border-brand-light-pink/30 relative h-full overflow-hidden rounded-2xl border bg-white shadow-lg transition-all duration-500 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  <ExportedImage
                    src={product.image}
                    alt={t("imageAlt")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="from-brand-burgundy/20 bg-linear-to-t absolute inset-0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Size Label */}
                <div className="border-brand-pink/20 bg-brand-light-pink/10 absolute start-4 top-4 rounded-full border px-4 py-2 backdrop-blur-sm">
                  <span className="text-brand-burgundy text-lg font-bold">
                    {t(product.sizeKey as any)}
                  </span>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

