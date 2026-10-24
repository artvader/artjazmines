import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";

type SocialLink = {
  href: string;
  label: string;
  meta: string;
} & (
  | {
      iconText: string;
      iconId?: never;
    }
  | {
      iconText?: never;
      iconId: string;
    }
);

const footerNavLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/art.jazmines/",
    iconText: "f",
    meta: "social feed",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/art-jazmines-877a574/",
    iconText: "in",
    meta: "career signal",
  },
  {
    label: "GitHub",
    href: "https://github.com/artvader",
    iconId: "github-icon",
    meta: "code archive",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/artjazvader",
    iconText: "ig",
    meta: "visual feed",
  },
  {
    label: "Etsy",
    href: "https://www.etsy.com/shop/ArtistArtArtcraft",
    iconText: "etsy",
    meta: "art shop",
  },
];

function handleFooterNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  const section = document.getElementById(href.slice(1));

  if (!section) {
    return;
  }

  event.preventDefault();

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  section.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start",
  });
  window.history.pushState(null, "", href);
}

function SocialIcon({ link }: { link: SocialLink }) {
  if ("iconId" in link) {
    return (
      <svg aria-hidden="true" className="size-5">
        <use href={`/icons.svg#${link.iconId}`} />
      </svg>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="font-['Lato',_sans-serif] text-sm font-bold leading-none tracking-normal"
    >
      {link.iconText}
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      className="Footer relative isolate flex min-h-[520px] w-full items-center overflow-hidden bg-[var(--color-bg-page)] bg-[url('/assets/images/footer-section.png')] bg-center bg-cover bg-no-repeat px-6 py-12 md:min-h-[560px] md:px-10 md:py-14"
    >
      <div className="absolute inset-x-0 top-0 h-[211px] [background:linear-gradient(180deg,_var(--color-bg-page)_42.57%,_rgb(var(--color-bg-page-rgb)_/_0)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_rgb(var(--color-bg-page-rgb)_/_0)_0%,_rgb(var(--color-bg-page-rgb)_/_0.48)_46%,_rgb(var(--color-bg-page-rgb)_/_0.88)_100%)]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div className="max-w-sm">
            <p className="font-['Lekton',_sans-serif] text-xs uppercase tracking-[0.16em] text-white/54">
              End of transmission
            </p>
            <h2 className="mt-3 max-w-[12ch] font-['Koulen',_sans-serif] text-[length:34px] font-normal leading-[0.95] tracking-[1px] text-white/62 [text-shadow:0_3px_4px_rgb(var(--color-shadow-rgb)_/_0.34)] md:text-[length:44px]">
              Keep the signal open
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/52">
              Follow the work, browse the code trails, or send a brief.
            </p>
          </div>

          <div className="footer-social-dock grid gap-x-3 gap-y-1 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${link.label} ${link.meta}`}
                className="group flex min-h-14 items-center justify-between gap-4 rounded-lg px-1 py-1.5 text-white/82 transition-[color,transform] duration-300 hover:-translate-y-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-primary)]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/8 text-white/68 shadow-[0_10px_24px_-22px_rgb(var(--color-shadow-rgb)_/_0.65)] transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-white/12 group-hover:text-white">
                    <SocialIcon link={link} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-5">
                      {link.label}
                    </span>
                    <span className="block truncate text-xs uppercase tracking-[0.1em] text-white/44">
                      {link.meta}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-white/42 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-action-primary)]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-2 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {footerNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleFooterNavClick(event, link.href)}
                className="rounded-full px-1 py-2 text-sm text-white/62 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-1 text-left text-xs uppercase tracking-[0.12em] text-white/50 md:text-right">
            <span>Available for selective builds</span>
            <span>Art Jazmines / Portfolio System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
