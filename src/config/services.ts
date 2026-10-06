type ServiceImage = {
  src: string;
  alt: string;
  className: string;
};

export type Service = {
  id: "web" | "print" | "brand" | "prototype";
  title: string;
  color: string;
  panelColor: string;
  tabTextColor: string;
  description: string;
  images?: ServiceImage[];
};

export const services: Service[] = [
  {
    id: "web",
    title: "WEB DESIGN",
    color: "var(--color-service-web)",
    panelColor: "rgb(var(--color-service-web-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-dark-rgb) / 0.8)",
    description:
      "Responsive web experiences with clear hierarchy, purposeful interaction, and layouts built to carry a brand across every screen.",
    images: [
      {
        src: "/assets/images/neon-amber-web-design-window-1.png",
        alt: "Web design window",
        className:
          "absolute right-6 top-6 h-[calc(100%-3rem)] max-w-[62%] object-contain opacity-70 [mix-blend-mode:screen]",
      },
    ],
  },
  {
    id: "print",
    title: "PRINT DESIGN",
    color: "var(--color-service-print)",
    panelColor: "rgb(var(--color-service-print-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-primary-rgb) / 0.8)",
    description:
      "Visual designs built for print, combining strong composition, clear typography, and purposeful branding across marketing and promotional materials.",
    images: [
      {
        src: "/assets/images/neon-orange-print-design-icon-1.png",
        alt: "Print design icon",
        className:
          "absolute left-[6%] top-[23%] h-[47%] max-w-[24%] object-contain opacity-30 [mix-blend-mode:lighten]",
      },
      {
        src: "/assets/images/fulda-page-1-1.jpg",
        alt: "Fulda print layout",
        className:
          "absolute right-[8%] top-[37%] w-[40%] -rotate-[12.58deg] object-cover shadow-lg",
      },
      {
        src: "/assets/images/group-8.svg",
        alt: "",
        className: "absolute left-[46%] top-[19%] w-[25%]",
      },
      {
        src: "/assets/images/image-4.png",
        alt: "",
        className:
          "absolute left-[50%] top-[9%] h-[82%] w-[23%] object-cover",
      },
      {
        src: "/assets/images/rectangle.jpg",
        alt: "",
        className:
          "absolute right-[4%] top-[38%] w-[33%] object-cover shadow-lg",
      },
    ],
  },
  {
    id: "brand",
    title: "BRANDING",
    color: "var(--color-service-brand)",
    panelColor: "rgb(var(--color-service-brand-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-primary-rgb) / 0.7)",
    description:
      "Identity systems and visual direction that make a business recognizable, consistent, and memorable wherever it appears.",
  },
  {
    id: "prototype",
    title: "PROTOTYPING",
    color: "var(--color-service-prototype)",
    panelColor: "rgb(var(--color-service-prototype-rgb) / 0.3)",
    tabTextColor: "rgb(var(--color-text-primary-rgb) / 0.7)",
    description:
      "Interactive prototypes that test ideas, clarify behavior, and make the path from concept to working product easier to see.",
  },
];
