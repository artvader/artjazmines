export default function Work() {
  return (
    <div className="Work contents">
      {/* Vaulted Works / Portfolio Cards */}
      <div id="portfolio" className="shrink-0 w-[1280px] max-w-[1280px] flex items-start flex-wrap content-start gap-4 py-0 px-6">
        <div className="shrink-0 w-[1386px] h-24 relative">
          <p className="absolute left-0 top-0 w-[1280px] [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[var(--color-text-heading)]">
            VAULTED<br /><span className="text-[var(--color-text-accent)]">WORKS</span>
          </p>
          <p className="absolute left-[154px] top-[51px] w-[1232px] h-[38px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)]">
            PORTFOLIO
          </p>
        </div>

        {/* Card 1 */}
        <div className="shrink-0 w-[400px] h-[344px] relative group overflow-hidden">
          <div className="absolute left-0 top-0 w-[400px] h-[344px] bg-[rgb(var(--color-surface-card-rgb)_/_0.33)]"></div>
          <p className="absolute left-[79px] top-[186px] w-[280px] h-36 opacity-80 font-['Lato',_sans-serif] text-[length:14px] font-normal tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)]">
            An entertainment and events website that uses WordPress as its CMS and Vue for frontend templating. This project demonstrates my experience combining a traditional CMS with a component-based frontend approach, along with responsive UI development, visual hierarchy, and image-driven content presentation.
          </p>
          <p className="absolute left-[13px] top-[322px] w-[129px] h-[60px] [transform-origin:0_0] [transform:rotate(-90deg)] opacity-80 font-['Koulen',_sans-serif] text-[length:20px] font-normal leading-[18px] tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)]">
            MUSIC MUSEUM GROUP
          </p>
          <img className="absolute left-0 top-0 w-[400px] h-[177px] object-cover" src="/assets/images/mask-group.png" alt="Music Museum Group" />
        </div>

        {/* Card 2 */}
        <div className="shrink-0 w-[400px] h-[344px] relative group overflow-hidden">
          <div className="absolute left-[1px] top-0 w-[399px] h-[344px] bg-[rgb(var(--color-surface-card-rgb)_/_0.33)]"></div>
          <p className="absolute left-20 top-[186px] w-[280px] h-36 opacity-80 font-['Lato',_sans-serif] text-[length:14px] font-normal tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)]">
            A B2B product website with a WordPress backend. This demonstrates my experience working with information-heavy commercial websites, including technical product content, product specifications, project information, responsive layouts, and organizing complex content for different types of users.
          </p>
          <p className="absolute left-[15px] top-[322px] w-[129px] h-[60px] [transform-origin:0_0] [transform:rotate(-90deg)] opacity-80 font-['Koulen',_sans-serif] text-[length:20px] font-normal leading-[18px] tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)]">
            TRILITE RMS BOARD
          </p>
          <img className="absolute left-0 top-0 w-[399px] h-[177px] object-cover" src="/assets/images/mask-group-2.png" alt="Trilite RMS Board" />
        </div>

        {/* Card 3 */}
        <div className="shrink-0 w-[400px] h-[344px] relative group overflow-hidden">
          <div className="absolute left-0 top-0 w-[400px] h-[344px] bg-[rgb(var(--color-surface-card-rgb)_/_0.33)]"></div>
          <p className="absolute left-[74px] top-[186px] w-[280px] h-36 opacity-80 font-['Lato',_sans-serif] text-[length:14px] font-normal tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)]">
            An experimental content management project built primarily around Vue 3, TypeScript, and Tailwind CSS, with a Laravel REST API and PostgreSQL backend. This demonstrates my recent work with modern frontend development, reusable components, responsive UI, and API and CMS integration.
          </p>
          <p className="absolute left-3.5 top-[322px] w-[129px] h-[60px] [transform-origin:0_0] [transform:rotate(-90deg)] opacity-80 font-['Koulen',_sans-serif] text-[length:20px] font-normal leading-[18px] tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)]">
            LUTONG BAHAY
          </p>
          <img className="absolute left-0 top-0 w-[400px] h-[177px] object-cover" src="/assets/images/mask-group-3.png" alt="Lutong Bahay" />
        </div>
      </div>

      {/* Additional Fabrications */}
      <div id="work" className="shrink-0 h-[349px] w-[1280px] flex flex-col items-start gap-2.5 py-0 px-6">
        <p className="shrink-0 self-stretch opacity-80 [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:40px] font-normal leading-[53px] tracking-normal text-[var(--color-text-heading)]">
          ADDITIONAL FABRICATIONS
        </p>
        <div className="shrink-0 self-stretch flex items-center gap-4">
          <img className="shrink-0 w-[296px] h-[286px] object-contain hover:scale-[1.02] transition-transform duration-200" src="/assets/images/fulda.png" alt="Fulda" />
          <img className="shrink-0 w-[296px] h-[286px] object-contain hover:scale-[1.02] transition-transform duration-200" src="/assets/images/ebay.png" alt="Ebay" />
          <img className="shrink-0 w-[296px] h-[286px] object-contain hover:scale-[1.02] transition-transform duration-200" src="/assets/images/esperanza.png" alt="Esperanza" />
          <img className="shrink-0 w-[296px] h-[286px] object-contain hover:scale-[1.02] transition-transform duration-200" src="/assets/images/larcandasset.png" alt="Larc & Asset" />
        </div>
      </div>
    </div>
  );
}
