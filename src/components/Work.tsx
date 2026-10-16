import { useEffect, useRef, useState } from "react";
import { additionalFabrications, portfolioCards } from "../config/work";
import ViewportHeader from "./ViewportHeader";

export default function Work() {
  const [activeCard, setActiveCard] = useState<(typeof portfolioCards)[number] | null>(
    null,
  );
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const screenshots = (activeCard?.screenshots ?? []).filter(
    (screenshot) =>
      screenshot.imageSrc.trim() &&
      !screenshot.imageSrc.includes("work-preview-placeholder"),
  );

  useEffect(() => {
    if (!activeCard) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCard(null);
      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href]',
        );
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [activeCard]);

  return (
    <div className="Works bg-[var(--color-bg-page)] relative pb-20">
      {/* Vaulted Works / Portfolio Cards */}
      <div
        id="portfolio"
        className=" shrink-0 max-w-5xl mx-auto flex items-center flex-wrap content-center w-full gap-4 py-0 px-6 scroll-mt-[104px]"
      >
        <div className="shrink-0 max-w-5xl mx-auto h-24 relative basis-full">
          <ViewportHeader
            echo="VAULTED WORKS"
            className="max-w-5xl [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[var(--color-text-heading)]"
          >
            VAULTED
            <br />
            <span className="text-[var(--color-text-accent)]">WORKS</span>
            <span className="inline-block -translate-y-7 h-[38px] opacity-30 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)] pb-6">
              PORTFOLIO
            </span>
          </ViewportHeader>
        </div>
        <div className="folio-cards mb-8 grid w-full gap-4 md:grid-cols-3">
          {portfolioCards.map((card) => (
            <button
              type="button"
              key={card.title}
              className="folio-card group flex min-h-[380px] flex-col overflow-hidden rounded-lg bg-[rgb(var(--color-surface-card-rgb)_/_0.22)] text-left shadow-[0_22px_56px_-42px_rgb(var(--color-shadow-rgb)_/_0.78)] transition-[filter,transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[rgb(var(--color-surface-card-rgb)_/_0.32)] hover:shadow-[0_30px_70px_-46px_rgb(var(--color-shadow-accent-rgb)_/_0.42)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-accent)]"
              onClick={() => setActiveCard(card)}
            >
              {"imagePresentation" in card && card.imagePresentation === "artwork" ? (
                <div className="work-artwork flex h-48 w-full items-center overflow-hidden pt-5">
                  <div className="work-artwork-crop ml-auto h-40 w-5/6 shrink-0 overflow-hidden rounded-md border border-[var(--color-text-accent)]/30 bg-[var(--color-bg-page)] shadow-[0_16px_32px_rgb(var(--color-shadow-rgb)_/_0.45)]">
                    <img
                      className="block w-[170%] max-w-none -translate-x-[3%] -translate-y-[8%]"
                      src={card.imageSrc}
                      alt={card.imageAlt}
                    />
                  </div>
                </div>
              ) : (
                <img
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  src={card.imageSrc}
                  alt={card.imageAlt}
                />
              )}
              <div className="flex flex-1 flex-col justify-between gap-5 p-5">
                <div>
                  <p className="font-['Lekton',_sans-serif] text-[length:11px] font-bold uppercase tracking-[0.16em] text-[rgb(var(--color-text-primary-rgb)_/_0.42)]">
                    Selected work
                  </p>
                  <h3 className="font-['Koulen',_sans-serif] text-[length:28px] font-normal leading-none tracking-[0.02em] text-[var(--color-text-heading)]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-[rgb(var(--color-text-primary-rgb)_/_0.72)]">
                  {card.description}
                </p>
                <span className="text-[length:11px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-accent)] opacity-80">
                  View project
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Fabrications */}
      <div
        id="works"
        className="flex flex-wrap content-start px-6 max-w-5xl mx-auto shrink-0 items-start gap-2.5 py-0 px-6 scroll-mt-[104px]"
      >
        <ViewportHeader
          echo="ADDITIONAL FABRICATIONS"
          className="basis-full shrink-0 self-start opacity-80 [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:40px] font-normal leading-none tracking-normal text-[var(--color-text-heading)]"
        >
          ADDITIONAL FABRICATIONS
        </ViewportHeader>
        <div className="grid w-full grid-cols-1 gap-8 pt-4 sm:grid-cols-3 sm:gap-6">
          {additionalFabrications.map((item) => (
            <figure key={item.imageSrc} className="min-w-0">
              <img
                className="aspect-square w-full object-contain transition-transform duration-200 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                src={item.imageSrc}
                alt={item.imageAlt}
                loading="lazy"
              />
              <figcaption className="mt-4 border-t border-[var(--color-text-primary)]/15 pt-3">
                <h3 className="text-lg font-bold leading-tight text-[var(--color-text-heading)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-primary)]">
                  {item.category}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {activeCard ? (
        <div
          className="portfolio-dialog fixed inset-0 z-[80] overflow-y-auto px-6 py-6 md:px-8 md:py-12"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-dialog-title"
          aria-describedby="portfolio-dialog-description"
        >
          <button
            type="button"
            className="fixed inset-0 cursor-default bg-neutral-950/95 backdrop-blur-lg"
            tabIndex={-1}
            aria-label="Close project preview"
            onClick={() => setActiveCard(null)}
          />

          <div ref={dialogRef} className="portfolio-dialog-stage relative z-10 mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center">
            <div className="mb-4 flex justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              className="min-h-11 px-2 text-sm font-bold uppercase tracking-widest text-neutral-200 transition-colors hover:text-[var(--color-text-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-accent)]"
              onClick={() => setActiveCard(null)}
            >
              Close
            </button>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className="min-w-0">
                <img
                  className="max-h-[55vh] w-full object-contain md:max-h-[70vh]"
                  src={activeCard.mockupSrc}
                  alt={activeCard.imageAlt}
                />
              </div>

              <div className="min-w-0 pb-6">
                <div className="max-w-lg">
                  <h2
                    id="portfolio-dialog-title"
                    className="font-['Koulen',_sans-serif] text-3xl font-normal leading-tight tracking-wide text-[var(--color-text-accent)] md:text-4xl"
                  >
                    {activeCard.title.toUpperCase()}
                  </h2>
                  <p id="portfolio-dialog-description" className="mt-4 max-w-prose text-base leading-7 text-neutral-100">
                    {activeCard.description}
                  </p>
                  {activeCard.url ? (
                    <a
                      href={activeCard.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--color-text-accent)] underline decoration-current/50 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-accent)]"
                    >
                      Visit website
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : null}
                  {screenshots.length > 0 ? <div
                    className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4"
                    aria-label="Additional project screenshots"
                  >
                    {screenshots.map((screenshot, index) => (
                      <div
                        key={`${activeCard.title}-${screenshot.imageAlt}-${index}`}
                        className="aspect-[4/3] overflow-hidden rounded-md bg-[#595959] shadow-[inset_0_1px_0_rgb(var(--color-text-primary-rgb)_/_0.12)]"
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={screenshot.imageSrc}
                          alt={screenshot.imageAlt}
                        />
                      </div>
                    ))}
                  </div> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
