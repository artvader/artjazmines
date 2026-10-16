export const navItems = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Works" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export type NavItemId = (typeof navItems)[number]["id"];

export const mobileMenuContent = {
  quote: {
    body: "Design is intelligence made visible.",
    author: "Alina Wheeler",
  },
  featuredWork: {
    title: "LAPR+",
    eyebrow: "Featured Work",
    imageSrc: "/assets/images/lapr-plus-homepage.png",
    imageAlt: "LAPR+ website homepage screenshot",
    href: "#portfolio",
  },
} as const;
