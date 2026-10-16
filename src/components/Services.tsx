import { useMemo, useState } from "react";
import { services, type Service } from "../config/services";
import ViewportHeader from "./ViewportHeader";

const serviceDetails: Record<
  Service["id"],
  {
    signal: string;
    readout: string;
    deliverables: string[];
    workflow: string[];
    specs: Array<{ label: string; value: string }>;
    asset: string;
  }
> = {
  web: {
    signal: "Responsive interfaces built as durable visual systems, not one-off screens.",
    readout: "Viewport-calibrated",
    deliverables: ["Landing pages", "Portfolio systems", "Interactive builds"],
    workflow: ["Audit", "Wire", "Compose", "Ship"],
    specs: [
      { label: "Mode", value: "Responsive" },
      { label: "Output", value: "UI + code" },
      { label: "Range", value: "Mobile to wide" },
    ],
    asset: "/assets/images/service-web-design-holographic-interface.jpg",
  },
  print: {
    signal: "Print compositions with press-minded hierarchy, type, and campaign continuity.",
    readout: "Production-ready",
    deliverables: ["Poster systems", "Collateral sets", "Press files"],
    workflow: ["Brief", "Grid", "Proof", "Press"],
    specs: [
      { label: "Mode", value: "CMYK ready" },
      { label: "Output", value: "Layouts" },
      { label: "Range", value: "Promo to print" },
    ],
    asset: "/assets/images/service-print-design-editorial-layouts.jpg",
  },
  brand: {
    signal: "Identity systems that turn a business into a recognizable visual language.",
    readout: "Identity locked",
    deliverables: ["Logo suites", "Color logic", "Usage rules"],
    workflow: ["Listen", "Mark", "Systemize", "Launch"],
    specs: [
      { label: "Mode", value: "Recognizable" },
      { label: "Output", value: "Brand kit" },
      { label: "Range", value: "Mark to guide" },
    ],
    asset: "/assets/images/service-branding-identity-guidelines.jpg",
  },
  prototype: {
    signal: "Clickable product models that expose behavior before expensive build decisions.",
    readout: "Behavior mapped",
    deliverables: ["User flows", "Motion tests", "Product demos"],
    workflow: ["Sketch", "Wire", "Animate", "Validate"],
    specs: [
      { label: "Mode", value: "Interactive" },
      { label: "Output", value: "Prototype" },
      { label: "Range", value: "Flow to demo" },
    ],
    asset: "/assets/images/service-prototyping-development-board.jpg",
  },
};

function ServicePreview({ service }: { service: Service }) {
  const details = serviceDetails[service.id];

  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-lg bg-[rgb(var(--color-shadow-rgb)_/_0.32)] md:min-h-[430px]">
      <div
        className="absolute inset-0 opacity-24"
        style={{ background: service.gradient }}
      />
      <div className="services-matrix-preview-grid absolute inset-0 opacity-32" />
      <img
        className="relative z-10 h-full min-h-[300px] w-full scale-[1.04] object-cover opacity-70 saturate-[1.08] [mix-blend-mode:screen] md:min-h-[430px]"
        src={details.asset}
        alt=""
      />
      <div className="services-matrix-scan absolute inset-0 z-20 opacity-35" />
      <div className="absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-[rgb(var(--color-bg-page-rgb)_/_0.94)] via-[rgb(var(--color-bg-page-rgb)_/_0.78)] to-transparent px-5 pb-5 pt-24">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p
              className="font-['Lekton',_sans-serif] text-[length:11px] font-bold uppercase leading-none tracking-[0.2em]"
              style={{ color: service.color }}
            >
              {details.readout}
            </p>
            <p className="mt-2 max-w-[28ch] font-['Lekton',_sans-serif] text-[length:12px] font-bold uppercase leading-4 tracking-[0.1em] text-[rgb(var(--color-text-primary-rgb)_/_0.76)]">
              {details.signal}
            </p>
          </div>
          <div className="hidden min-w-[132px] border-l border-[rgb(var(--color-text-primary-rgb)_/_0.16)] pl-4 sm:block">
            {details.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-4 text-[length:10px] font-bold uppercase leading-4 tracking-[0.12em]"
              >
                <span className="text-[rgb(var(--color-text-primary-rgb)_/_0.38)]">
                  {spec.label}
                </span>
                <span className="text-[rgb(var(--color-text-primary-rgb)_/_0.7)]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <span
          className="mt-4 block h-1 w-full"
          style={{ background: service.gradient }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function MatrixPanel({ service }: { service: Service }) {
  const details = serviceDetails[service.id];

  return (
    <section
      className="grid overflow-hidden rounded-lg bg-[rgb(var(--color-surface-card-rgb)_/_0.16)] shadow-[0_30px_80px_-48px_rgb(var(--color-shadow-rgb)_/_0.72)] md:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)]"
      aria-live="polite"
    >
      <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden px-5 py-6 sm:px-7 md:min-h-[430px] md:px-8 md:py-8">
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{ background: service.gradient }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <h3 className="max-w-[8ch] font-['Koulen',_sans-serif] text-[length:clamp(48px,8vw,48px)] font-normal leading-[0.84] tracking-normal text-[var(--color-text-heading)]">
            {service.title}
          </h3>
          <p className="mt-5 max-w-[44ch] text-sm leading-6 text-[rgb(var(--color-text-primary-rgb)_/_0.76)]">
            {service.description}
          </p>
        </div>

        <div className="relative z-10 mt-8">
          <div className="grid gap-2 sm:grid-cols-3" aria-label={`${service.title} deliverables`}>
            {details.deliverables.map((deliverable) => (
              <div
                key={deliverable}
                className="relative overflow-hidden rounded-md bg-[rgb(var(--color-bg-page-rgb)_/_0.34)] px-3 py-3 shadow-[inset_0_0_0_1px_rgb(var(--color-text-primary-rgb)_/_0.08)]"
              >
                <span
                  className="absolute inset-x-0 top-0 h-px opacity-60"
                  style={{ background: service.gradient }}
                  aria-hidden="true"
                />
                <p className="font-['Lekton',_sans-serif] text-[length:12px] font-bold uppercase leading-4 tracking-[0.08em] text-[rgb(var(--color-text-primary-rgb)_/_0.78)]">
                  {deliverable}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-[rgb(var(--color-text-primary-rgb)_/_0.12)] pt-4">
            {details.workflow.map((step) => (
              <span
                key={step}
                className="font-['Lekton',_sans-serif] text-[length:11px] font-bold uppercase tracking-[0.16em] text-[rgb(var(--color-text-primary-rgb)_/_0.56)]"
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ServicePreview service={service} />
    </section>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<Service["id"]>("print");
  const active = useMemo(
    () => services.find((service) => service.id === activeService) ?? services[0],
    [activeService],
  );

  return (
    <div
      id="services"
      className="Services relative bg-[var(--color-bg-page)] pb-24 scroll-mt-[104px]"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-4 h-24">
          <ViewportHeader
            echo="FABRICATION MATRIX"
            className="[text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[var(--color-text-heading)]"
          >
            FABRICATION
            <br />
            <span className="text-[var(--color-text-accent)]">MATRIX</span>
            <span className="opacity-30 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)]">
              SERVICES OFFERED
            </span>
          </ViewportHeader>
        </div>

        <div className="grid gap-4">
          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            role="tablist"
            aria-label="Service matrix"
          >
            {services.map((service) => {
              const isActive = service.id === activeService;

              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="services-panel"
                  className={`group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-lg px-4 py-4 text-left shadow-[0_20px_50px_-42px_rgb(var(--color-shadow-rgb)_/_0.72)] transition-[background-color,transform,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text-accent)] ${
                    isActive
                      ? "bg-[rgb(var(--color-surface-card-rgb)_/_0.34)] shadow-[0_24px_64px_-44px_rgb(var(--color-shadow-accent-rgb)_/_0.52)]"
                      : "bg-[rgb(var(--color-bg-page-rgb)_/_0.34)] hover:-translate-y-0.5 hover:bg-[rgb(var(--color-surface-card-rgb)_/_0.2)]"
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <span
                    className="absolute inset-x-0 top-0 h-1"
                    style={{
                      background: service.gradient,
                      opacity: isActive ? 1 : 0.42,
                    }}
                    aria-hidden="true"
                  />
                  <span className="block font-['Lekton',_sans-serif] text-[length:10px] font-bold uppercase leading-4 tracking-[0.16em] text-[rgb(var(--color-text-primary-rgb)_/_0.34)]">
                    {serviceDetails[service.id].readout}
                  </span>
                  <span className="mt-6 flex items-end justify-between gap-3">
                    <span className="block max-w-[8ch] font-['Koulen',_sans-serif] text-[length:28px] font-normal leading-[0.9] tracking-normal text-[var(--color-text-heading)]">
                      {service.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="services-panel" role="tabpanel">
            <MatrixPanel service={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
