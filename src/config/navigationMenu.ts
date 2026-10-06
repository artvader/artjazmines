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
    title: "Trilite RMS Board",
    eyebrow: "Featured Work",
    imageSrc: "/assets/images/mask-group-2.png",
    imageAlt: "Trilite RMS Board website thumbnail",
    href: "#portfolio",
  },
} as const;
