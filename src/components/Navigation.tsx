import { ChevronRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { mobileMenuContent, navItems } from "../config/navigationMenu";
import type { NavItemId } from "../config/navigationMenu";

type PillRect = {
  height: number;
  left: number;
  top: number;
  width: number;
};

const topThreshold = 24;

export default function Navigation() {
  const [activeId, setActiveId] = useState<NavItemId | null>(null);
  const [hoveredId, setHoveredId] = useState<NavItemId | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pillRect, setPillRect] = useState<PillRect | null>(null);
  const navListRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Partial<Record<NavItemId, HTMLAnchorElement>>>({});
  const pillTargetId = hoveredId ?? activeId;

  const updateActiveSection = useCallback(() => {
    const nextIsAtTop = window.scrollY <= topThreshold;

    if (nextIsAtTop) {
      setActiveId(null);
      return;
    }

    const targetLine = 128;
    let nextActiveId: NavItemId | null = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (const item of navItems) {
      const section = document.getElementById(item.id);

      if (!section) {
        continue;
      }

      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - targetLine);
      const isNearViewport = rect.top <= window.innerHeight * 0.55 && rect.bottom >= targetLine;
      const weightedDistance = isNearViewport ? distance - window.innerHeight : distance;

      if (weightedDistance < closestDistance) {
        closestDistance = weightedDistance;
        nextActiveId = item.id;
      }
    }

    setActiveId(nextActiveId);
  }, []);

  const updatePillRect = useCallback(() => {
    if (!pillTargetId || !navListRef.current) {
      setPillRect(null);
      return;
    }

    const target = itemRefs.current[pillTargetId];

    if (!target) {
      setPillRect(null);
      return;
    }

    const listRect = navListRef.current.getBoundingClientRect();
    const itemRect = target.getBoundingClientRect();

    setPillRect({
      height: itemRect.height + 12,
      left: itemRect.left - listRect.left - 12,
      top: itemRect.top - listRect.top - 7,
      width: itemRect.width + 24,
    });
  }, [pillTargetId]);

  const handleNavClick = useCallback((event: MouseEvent<HTMLAnchorElement>, id: NavItemId) => {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  }, []);

  const handleFeaturedWorkClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const targetId = mobileMenuContent.featuredWork.href.replace("#", "") as NavItemId;

    handleNavClick(event, targetId);
  }, [handleNavClick]);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(updateActiveSection);

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  useLayoutEffect(() => {
    updatePillRect();
  }, [updatePillRect]);

  useEffect(() => {
    window.addEventListener("resize", updatePillRect);

    return () => {
      window.removeEventListener("resize", updatePillRect);
    };
  }, [updatePillRect]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="Navigation fixed left-0 top-0 pt-3 md:pt-3 pb-6 w-full flex items-center z-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_0%,black_35%,transparent_100%)]"
      />
      <span className="logo-sprite relative z-10 shrink-0" role="img" aria-label="Logo" />
      <nav className="relative z-10 basis-full h-full flex justify-end md:justify-center items-center transition-[justify-content] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <div
          ref={navListRef}
          onMouseLeave={() => setHoveredId(null)}
          className="relative mr-4 flex h-12 w-12 min-w-0 items-center justify-center overflow-hidden rounded-full p-0 transition-[width,margin,background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [background:linear-gradient(rgb(var(--color-surface-glass-rgb)_/_0),_rgb(var(--color-surface-glass-rgb)_/_0)),_rgb(var(--color-surface-glass-rgb)_/_0.24)] [border:1px_solid_rgb(var(--color-surface-glass-rgb)_/_0.18)] shadow-[0_8px_16px_-4px_rgb(var(--color-shadow-accent-rgb)_/_0.08),_0_4px_8px_-4px_rgb(var(--color-shadow-accent-rgb)_/_0.08)] md:mx-4 md:w-auto md:gap-8 md:px-4 md:py-4 md:[background:linear-gradient(rgb(var(--color-surface-glass-rgb)_/_0),_rgb(var(--color-surface-glass-rgb)_/_0)),_rgb(var(--color-surface-glass-rgb)_/_0.2)] md:[border:1px_solid_rgb(var(--color-surface-glass-rgb)_/_0.1)]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_100%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 hidden rounded-full bg-[rgb(var(--color-surface-glass-rgb)_/_0.2)] shadow-[0_10px_24px_-10px_rgb(var(--color-shadow-accent-rgb)_/_0.35),inset_0_0_0_1px_rgb(var(--color-surface-glass-rgb)_/_0.1)] transition-[opacity,transform,width,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:block"
            style={{
              height: pillRect?.height ?? 0,
              opacity: pillRect ? 1 : 0,
              transform: `translate3d(${pillRect?.left ?? 0}px, ${pillRect?.top ?? 0}px, 0)`,
              width: pillRect?.width ?? 0,
            }}
          />
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setIsMenuOpen(true)}
            className="relative z-10 grid size-12 place-items-center rounded-full text-[rgb(var(--color-text-primary-rgb)_/_0.84)] transition-[color,transform] duration-300 hover:scale-105 hover:text-[rgb(var(--color-text-primary-rgb)_/_1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-surface-glass-rgb)_/_0.65)] md:hidden"
          >
            <Menu aria-hidden="true" size={22} strokeWidth={2} />
          </button>
          {navItems.map((item) => (
            <a
              key={item.id}
              ref={(node) => {
                if (node) {
                  itemRefs.current[item.id] = node;
                } else {
                  delete itemRefs.current[item.id];
                }
              }}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "location" : undefined}
              onBlur={() => setHoveredId(null)}
              onClick={(event) => handleNavClick(event, item.id)}
              onFocus={() => setHoveredId(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              className="relative z-10 hidden shrink-0 text-base leading-6 text-[rgb(var(--color-text-primary-rgb)_/_0.5)] whitespace-nowrap transition-[opacity,color] duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:opacity-90 md:block"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-20 bg-[rgb(var(--color-surface-glass-rgb)_/_0.3)] backdrop-blur-md transition-opacity duration-500 md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
      />
      <aside
        id="mobile-navigation-menu"
        aria-hidden={!isMenuOpen}
        className={`fixed bottom-0 right-0 top-0 z-30 w-[min(326px,calc(100vw-16px))] origin-right overflow-hidden rounded-l-lg bg-[#efe9e3]/30 text-[#33281f] backdrop-blur-sm shadow-[0_30px_90px_-34px_rgb(var(--color-shadow-rgb)_/_0.78)] transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-x-0 rotate-0 opacity-100 blur-0"
            : "pointer-events-none translate-x-full rotate-[1.5deg] opacity-0 blur-sm"
        }`}
      >
        <div
          className={`flex h-full flex-col transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen ? "translate-x-0 opacity-100 delay-200" : "translate-x-6 opacity-0 delay-0"
          }`}
        >
          <div className="relative  overflow-hidden [background:linear-gradient(180deg,_rgb(var(--color-bg-page-rgb)_/_100)_0,_var(--color-bg-page)_100px)] px-6 pb-16 pt-7 text-white">
            <button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMobileMenu}
              className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-white/20 bg-white/12 text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.2)] backdrop-blur-md transition-[background-color,transform] duration-300 hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <X aria-hidden="true" size={21} strokeWidth={2} />
            </button>
            <div className="relative z-10 max-w-[220px]">
              <span className="logo-sprite block origin-left scale-75 -translate-x-3 -translate-y-6" role="img" aria-label="Logo" />
              <p className="text-sm leading-5 text-white/70">
                “{mobileMenuContent.quote.body}”
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/62">
                {mobileMenuContent.quote.author}
              </p>
            </div>
          </div>

          <a
            href={mobileMenuContent.featuredWork.href}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={handleFeaturedWorkClick}
            className="relative z-10 mx-5 -mt-12 flex items-center gap-3 rounded-lg bg-[#451e09] px-4 py-3 text-left shadow-[0_18px_34px_-24px_rgb(41_12_1_/_0.72)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_42px_-24px_rgb(41_12_1_/_0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-glow-orange-rgb)_/_0.45)]"
          >
            <img
              src={mobileMenuContent.featuredWork.imageSrc}
              alt={mobileMenuContent.featuredWork.imageAlt}
              className="size-12 shrink-0 rounded-xl object-cover"
            />
            <span className="min-w-0 flex-1">
              <span className="block text-[length:11px] font-bold uppercase tracking-[0.12em] text-[rgb(var(--color-glow-orange-rgb)_/_0.78)]">
                {mobileMenuContent.featuredWork.eyebrow}
              </span>
              <span className="mt-0.5 block truncate text-sm font-bold leading-5 text-[#ffffff]/60">
                {mobileMenuContent.featuredWork.title}
              </span>
            </span>
            <ChevronRight aria-hidden="true" size={18} strokeWidth={2} className="shrink-0 text-[#26211c]" />
          </a>

          <div className="mt-4 flex flex-col px-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "location" : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={(event) => handleNavClick(event, item.id)}
                className="group flex items-center justify-between border-b border-[#26211c]/20 px-1 py-4 text-[length:15px] font-semibold leading-5 text-[#40352c] transition-[color,padding-left] duration-300 last:border-b-0 hover:pl-2 hover:text-[rgb(var(--color-glow-orange-rgb))] focus-visible:outline-none focus-visible:text-[rgb(var(--color-glow-orange-rgb))]"
              >
                <span>{item.label}</span>
                <ChevronRight
                  aria-hidden="true"
                  size={17}
                  strokeWidth={2}
                  className="text-[#26211c] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[rgb(var(--color-glow-orange-rgb))]"
                />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
}
