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
      className="services relative h-full min-w-0 flex-1 overflow-hidden "
      style={{ backgroundColor: service.panelColor }}
    >
      <p className="absolute bottom-4 left-6 z-10 max-w-sm pr-4 text-sm font-normal text-[var(--color-text-primary)] opacity-60">
        {service.description}
      </p>
      {service.images?.map((image) => (
        <img
          key={image.src}
          className={image.className}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<Service["id"]>("print");

  return (
    <div
      id="services"
      className="Services relative flex shrink-0 self-stretch flex-col items-start gap-6 bg-[var(--color-bg-page)]  py-0 scroll-mt-[104px] pb-6"
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
          className="services-mobile-swiper h-[400px] w-full overflow-visible md:hidden"
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
