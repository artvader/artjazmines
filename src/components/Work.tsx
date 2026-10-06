import { portfolioCards } from "../config/work";

export default function Work() {
  return (
    <div className="Works bg-[var(--color-bg-page)] relative pb-6">
      {/* Vaulted Works / Portfolio Cards */}
      <div
        id="portfolio"
        className=" shrink-0 max-w-5xl mx-auto flex items-center flex-wrap content-center w-full gap-4 py-0 px-6 scroll-mt-[104px]"
      >
        <div className="shrink-0 max-w-5xl mx-auto h-24 relative basis-full">
          <p className="max-w-5xl [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[var(--color-text-heading)]">
            VAULTED
            <br />
            <span className="text-[var(--color-text-accent)]">WORKS</span>
            <span className="inline-block -translate-y-7 h-[38px] opacity-30 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)] pb-6">
              PORTFOLIO
            </span>
          </p>
        </div>
        <div className="folio-cards flex flex-wrap gap-3 mb-4">
          {portfolioCards.map((card) => (
            <div
              key={card.title}
              className="folio-card basis-full md:basis-[calc(33%-8px)] grow-1 flex flex-wrap bg-[rgb(var(--color-surface-card-rgb)_/_0.33)]"
            >
              <img
                className="w-full h-[177px] object-cover"
                src={card.imageSrc}
                alt={card.imageAlt}
              />
              <div className="basis-full flex gap-6">
                <p className="project-name pl-3 pb-6 self-end [writing-mode:sideways-lr] opacity-80 font-['Koulen',_sans-serif] text-[length:20px] leading-[18px] text-[rgb(var(--color-text-primary-rgb)_/_0.8)] max-h-[140px]">
                  {card.title.toUpperCase()}
                </p>
                <p className="opacity-80 pr-6 pb-6 text-sm font-normal tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Fabrications */}
      <div
        id="works"
        className="flex flex-wrap content-start px-6 max-w-5xl mx-auto shrink-0 items-start gap-2.5 py-0 px-6 scroll-mt-[104px]"
      >
        <p className="basis-full shrink-0 self-start opacity-80 [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:40px] font-normal leading-none tracking-normal text-[var(--color-text-heading)]">
          ADDITIONAL FABRICATIONS
        </p>
        <div className=" flex items-center gap-4">
          <div>
          <img
            className="object-contain hover:scale-[1.02] transition-transform duration-200"
            src="/assets/images/fulda.png"
            alt="Fulda"
          />
          </div>
          <div >
          <img
            className="object-contain hover:scale-[1.02] transition-transform duration-200"
            src="/assets/images/ebay.png"
            alt="Ebay"
          />
          </div>
          <div>
          <img
            className="object-contain hover:scale-[1.02] transition-transform duration-200"
            src="/assets/images/esperanza.png"
            alt="Esperanza"
          />
          </div>
          <div>
          <img
            className="object-contain hover:scale-[1.02] transition-transform duration-200"
            src="/assets/images/larcandasset.png"
            alt="Larc & Asset"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
