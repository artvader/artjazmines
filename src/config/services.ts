export type Service = {
  id: "web" | "print" | "brand" | "prototype";
  title: string;
  color: string;
  panelColor: string;
  tabTextColor: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  placeholderSrc: string;
  placeholderAlt: string;
};

const placeholderSrc = "/assets/images/placeholder.png";

export const services: Service[] = [
  {
    id: "web",
    title: "WEB DESIGN",
    color: "var(--color-service-web)",
    panelColor: "rgb(var(--color-service-web-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-dark-rgb) / 0.8)",
    description:
      "Responsive web experiences with clear hierarchy, purposeful interaction, and layouts built to carry a brand across every screen.",
    iconSrc: "/assets/images/neon-amber-web-design-window-1.png",
    iconAlt: "Web design icon",
    placeholderSrc,
    placeholderAlt: "Placeholder web design work preview",
  },
  {
    id: "print",
    title: "PRINT DESIGN",
    color: "var(--color-service-print)",
    panelColor: "rgb(var(--color-service-print-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-primary-rgb) / 0.8)",
    description:
      "Visual designs built for print, combining strong composition, clear typography, and purposeful branding across marketing and promotional materials.",
    iconSrc: "/assets/images/neon-orange-print-design-icon-1.png",
    iconAlt: "Print design icon",
    placeholderSrc,
    placeholderAlt: "Placeholder print design work preview",
  },
  {
    id: "brand",
    title: "BRANDING",
    color: "var(--color-service-brand)",
    panelColor: "rgb(var(--color-service-brand-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-primary-rgb) / 0.7)",
    description:
      "Identity systems and visual direction that make a business recognizable, consistent, and memorable wherever it appears.",
    iconSrc: "/assets/images/a-fire.svg",
    iconAlt: "Branding icon",
    placeholderSrc,
    placeholderAlt: "Placeholder branding work preview",
  },
  {
    id: "prototype",
    title: "PROTOTYPING",
    color: "var(--color-service-prototype)",
    panelColor: "rgb(var(--color-service-prototype-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-primary-rgb) / 0.7)",
    description:
      "Interactive prototypes that test ideas, clarify behavior, and make the path from concept to working product easier to see.",
    iconSrc: "/assets/images/group-6.svg",
    iconAlt: "Prototyping icon",
    placeholderSrc,
    placeholderAlt: "Placeholder prototyping work preview",
  },
];
