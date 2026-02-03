export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/bellanotte_sa",
    facebook: "https://www.facebook.com/bellanotte.sa",
    whatsapp: "https://wa.me/966547008914"
  },

  support: {
    phone: "+966 54 700 8914",
    email: "Bellanotte.pj25@gmail.com",
    whatsapp: "+966547008914"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
