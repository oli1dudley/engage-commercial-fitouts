export const siteConfig = {
  name: "WeMoveStuff",
  tagline: "Fast. Careful. Reliable.",
  url: "https://www.wemovestuff.ae",
  description:
    "WeMoveStuff provides apartment moving, villa moving, commercial relocation, packing, furniture assembly and moving services across Dubai.",
  phone: "+971 XX XXX XXXX",
  email: "hello@wemovestuff.ae",
  address: {
    locality: "Dubai",
    country: "AE",
    countryName: "United Arab Emirates",
  },
  openingHours: "Mo-Su 07:00-20:00",
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  images: {
    ogDefault: "/images/seo/og-default.jpg",
    logo: "/images/seo/logo.png",
  },
  titleTemplate: "%s | WeMoveStuff",
  defaultTitle: "WeMoveStuff | Moving Company Dubai",
} as const;

export const whatsappNumber = "971XXXXXXXXX";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;
export const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
