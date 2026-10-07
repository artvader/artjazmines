import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { services, type Service } from "../config/services";
import "swiper/css";

function ServicePanel({
  service,
  panelId,
}: {
  service: Service;
  panelId?: string;
}) {
  return (
    <div
      id={panelId}
      className="services relative h-full min-w-0 flex-1 overflow-hidden"
      style={{ backgroundColor: service.panelColor }}
    >
      <div className="grid h-full grid-cols-1 content-between gap-6 p-6 md:grid-cols-[minmax(160px,0.8fr)_minmax(220px,1.2fr)] md:items-center md:p-8">
        <div className="relative z-10 flex max-w-[260px] flex-col items-start">
          <div className="mb-5 grid h-24 w-24 place-items-center overflow-hidden bg-[rgb(var(--color-bg-page-rgb)_/_0.22)] ring-1 ring-[rgb(var(--color-text-primary-rgb)_/_0.12)] md:h-28 md:w-28">
            <img
              className="max-h-[76%] max-w-[76%] object-contain opacity-80 [mix-blend-mode:screen]"
              src={service.iconSrc}
              alt={service.iconAlt}
            />
          </div>
          <p className="max-w-[28ch] text-sm font-normal leading-6 text-[var(--color-text-primary)] opacity-68">
            {service.description}
          </p>
        </div>

        <div className="relative z-0 flex min-h-0 items-center justify-center md:h-full">
          <img
            className="max-h-[180px] w-full max-w-[360px] object-contain opacity-88 shadow-[0_24px_46px_-32px_rgb(var(--color-shadow-rgb)_/_0.78)] md:max-h-[270px]"
            src={service.placeholderSrc}
            alt={service.placeholderAlt}
          />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<Service["id"]>("print");

  return (
    <div
      id="services"
      className="Services relative flex shrink-0 self-stretch flex-col items-start gap-6 bg-[var(--color-bg-page)]  scroll-mt-[104px] pb-20"
    >
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div className="mb-3 h-24 shrink-0">
          <p className="[text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[var(--color-text-heading)]">
            FABRICATION
            <br />
            <span className="text-[var(--color-text-accent)]">TYPES</span>
            <span className="opacity-30 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)]">
              SERVICES OFFERED
            </span>
          </p>
        </div>

        <Swiper
          className="services-mobile-swiper  w-full overflow-visible md:hidden"
          slidesPerView="auto"
          spaceBetween={0}
          loop
          grabCursor
        >
          {services.map((service) => (
            <SwiperSlide
              key={service.id}
              className="services-mobile-slide overflow-hidden border border-[var(--labels-vibrant-quaternary)]"
            >
              <section className="flex h-full w-full overflow-hidden">
                <div
                  className="flex w-10 shrink-0 items-end justify-center px-0 py-3"
                  style={{ backgroundColor: service.color }}
                >
                  <span
                    className="[writing-mode:sideways-lr] font-['Koulen',_sans-serif] text-[length:20px] font-normal whitespace-nowrap"
                    style={{ color: service.tabTextColor, opacity: 0.9 }}
                  >
                    {service.title}
                  </span>
                </div>

                <ServicePanel service={service} />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="services-deck hidden h-[400px] w-full overflow-hidden border border-[var(--labels-vibrant-quaternary)] md:flex">
          {services.map((service) => {
            const isActive = activeService === service.id;

            return (
              <section
                key={service.id}
                className={`flex min-w-9 shrink-0 overflow-hidden transition-[flex-grow,flex-basis] duration-500 ease-in-out ${
                  isActive ? "grow basis-0" : "grow-0 basis-9"
                }`}
              >
                <button
                  type="button"
                  className="group flex w-9 shrink-0 cursor-pointer items-end justify-center border-0 px-0 py-3 outline-offset-[-4px] focus-visible:outline-2 focus-visible:outline-[var(--color-text-accent)]"
                  style={{ backgroundColor: service.color }}
                  onClick={() => setActiveService(service.id)}
                  aria-expanded={isActive}
                  aria-controls={`${service.id}-service-panel`}
                >
                  <span
                    className="[writing-mode:sideways-lr] font-['Koulen',_sans-serif] text-[length:20px] font-normal whitespace-nowrap transition-opacity group-hover:opacity-100"
                    style={{ color: service.tabTextColor, opacity: isActive ? 1 : 0.8 }}
                  >
                    {service.title}
                  </span>
                </button>

                <div
                  className={`flex h-full min-w-0 flex-1 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <ServicePanel
                    service={service}
                    panelId={`${service.id}-service-panel`}
                  />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
