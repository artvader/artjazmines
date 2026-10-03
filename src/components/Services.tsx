export default function Services() {
  return (
    <div id="services" className="Services shrink-0 self-stretch max-w-[1280px] flex flex-col items-start gap-6 py-0 px-6">
      <div className="shrink-0 h-24 w-[1367px] relative">
        <p className="absolute left-0 top-0 w-[1280px] [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[var(--color-text-heading)]">
          FABRICATION<br /><span className="text-[var(--color-text-accent)]">TYPES</span>
        </p>
        <p className="absolute left-[135px] top-[51px] w-[1232px] h-[38px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)]">
          SERVICES OFFERED
        </p>
      </div>

      <div className="shrink-0 self-stretch max-w-[1280px] flex justify-center items-start border border-[var(--labels-vibrant-quaternary)]">
        {/* Service 1: Web Design */}
        <div className="shrink-0 h-[401px] flex justify-center items-end">
          <div className="shrink-0 w-9 h-[401px] flex flex-col justify-end items-center gap-2.5 py-4 px-0 bg-[var(--color-service-web)]">
            <p className="shrink-0 h-9 self-stretch [transform:rotate(-90deg)] font-['Koulen',_sans-serif] text-[length:20px] font-normal text-[rgb(var(--color-text-dark-rgb)_/_0.8)] whitespace-nowrap">
              WEB DESIGN
            </p>
          </div>
          <div className="shrink-0 w-0 h-[400px] relative">
            <div className="absolute left-0 top-0 w-0 h-[400px] bg-[rgb(var(--color-service-web-rgb)_/_0.3)]"></div>
            <img
              className="absolute left-0 top-[400px] w-0 h-0 [mix-blend-mode:lighten] object-cover"
              src="/assets/images/neon-amber-web-design-window-1.png"
              alt="Web Design Window"
            />
          </div>
        </div>

        {/* Service 2: Print Design */}
        <div className="shrink-0 h-[401px] flex justify-center items-end">
          <div className="shrink-0 w-9 h-[401px] flex flex-col justify-end items-center gap-2.5 py-4 px-0 bg-[var(--color-service-print)]">
            <p className="shrink-0 h-9 self-stretch [transform:rotate(-90deg)] font-['Koulen',_sans-serif] text-[length:20px] font-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)] whitespace-nowrap">
              PRINT DESIGN
            </p>
          </div>
          <div className="shrink-0 w-[1086px] h-[400px] relative overflow-hidden">
            <div className="absolute left-0 top-0 w-[1086px] h-[400px] bg-[rgb(var(--color-service-print-rgb)_/_0.3)]"></div>
            <p className="absolute left-[19px] top-[330px] w-[394px] h-[65px] opacity-60 font-['Lato',_sans-serif] text-[length:16px] font-normal text-[var(--color-text-primary)]">
              Visual designs built for print, combining strong composition, clear typography, and purposeful branding across marketing and promotional materials.
            </p>
            <img className="absolute left-[59px] top-[91px] w-56 h-[187px] opacity-30 [mix-blend-mode:lighten] object-cover" src="/assets/images/neon-orange-print-design-icon-1.png" alt="Print Icon" />
            <img className="absolute left-[571px] top-[149px] w-[430px] h-[168px] [transform-origin:0_0] [transform:rotate(-12.58deg)] object-cover shadow-lg" src="/assets/images/fulda-page-1-1.jpg" alt="Fulda Page 1" />
            <img className="absolute left-[496px] top-[75px] w-[266px] h-[194px]" src="/assets/images/group-8.svg" alt="" />
            <img className="absolute left-[543px] top-[35px] w-60 h-[327px] object-cover" src="/assets/images/image-4.png" alt="" />
            <img className="absolute left-[693px] top-[153px] w-[354px] h-[216px] object-cover" src="/assets/images/rectangle.jpg" alt="" />
          </div>
        </div>

        {/* Service 3: Branding */}
        <div className="shrink-0 h-[401px] flex justify-center items-end">
          <div className="shrink-0 w-9 h-[401px] flex flex-col justify-end items-center gap-2.5 py-4 px-0 bg-[var(--color-service-brand)]">
            <p className="shrink-0 h-9 self-stretch [transform:rotate(-90deg)] font-['Koulen',_sans-serif] text-[length:20px] font-normal text-[rgb(var(--color-text-primary-rgb)_/_0.6)] whitespace-nowrap">
              BRANDING
            </p>
          </div>
          <div className="shrink-0 w-0 h-[400px] bg-[rgb(var(--color-service-brand-rgb)_/_0.3)]"></div>
        </div>

        {/* Service 4: Prototyping */}
        <div className="shrink-0 w-9 h-[401px] flex justify-center items-end">
          <div className="shrink-0 w-9 h-[401px] flex flex-col justify-end items-center gap-2.5 py-4 px-0 bg-[var(--color-service-prototype)]">
            <p className="shrink-0 h-9 self-stretch [transform:rotate(-90deg)] font-['Koulen',_sans-serif] text-[length:20px] font-normal text-[rgb(var(--color-text-primary-rgb)_/_0.6)] whitespace-nowrap">
              PROTOTYPING
            </p>
          </div>
          <div className="shrink-0 w-0 h-[400px] bg-[rgb(var(--color-service-prototype-rgb)_/_0.3)]"></div>
        </div>
      </div>
    </div>
  );
}
