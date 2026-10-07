import { ValidationError, useForm } from "@formspree/react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import SignalWave from "./SignalWave";

const ROUTING_FILL_DURATION_MS = 1500;
const FORMSPREE_FORM_ID = "meaeelvj";
const MIN_SUBMIT_DELAY_MS = 2500;
const SUBMIT_COOLDOWN_MS = 30000;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [routingStarted, setRoutingStarted] = useState(false);
  const [routingProgress, setRoutingProgress] = useState(0);
  const [localStatusMessage, setLocalStatusMessage] = useState("");
  const mountedAtRef = useRef(0);
  const cooldownUntilRef = useRef(0);
  const [state, submitToFormspree] = useForm(FORMSPREE_FORM_ID, {
    data: {
      _subject: () =>
        name.trim()
          ? `Portfolio inquiry from ${name.trim()}`
          : "Portfolio inquiry",
    },
  });

  useEffect(() => {
    mountedAtRef.current = performance.now();
  }, []);

  useEffect(() => {
    if (!routingStarted) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;
    const started = performance.now();
    const advance = (now: number) => {
      const progress = reducedMotion
        ? 100
        : Math.min(100, ((now - started) / ROUTING_FILL_DURATION_MS) * 100);
      setRoutingProgress(progress);
      if (progress < 100) frame = window.requestAnimationFrame(advance);
    };
    frame = window.requestAnimationFrame(advance);
    return () => window.cancelAnimationFrame(frame);
  }, [routingStarted]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const now = performance.now();
    const formData = new FormData(event.currentTarget);
    const honeypot = String(formData.get("_gotcha") ?? "").trim();
    const mountedAt = mountedAtRef.current || now;

    if (honeypot) {
      event.preventDefault();
      setLocalStatusMessage("Signal rejected.");
      return;
    }

    if (now - mountedAt < MIN_SUBMIT_DELAY_MS) {
      event.preventDefault();
      setLocalStatusMessage("Signal is too fast. Try again in a moment.");
      return;
    }

    if (now < cooldownUntilRef.current) {
      event.preventDefault();
      const seconds = Math.ceil((cooldownUntilRef.current - now) / 1000);
      setLocalStatusMessage(`Signal cooling down. Retry in ${seconds}s.`);
      return;
    }

    cooldownUntilRef.current = now + SUBMIT_COOLDOWN_MS;
    setLocalStatusMessage("");
    setRoutingStarted(true);
    setRoutingProgress(0);
    void submitToFormspree(event);
  };

  const integrity = name.trim().length > 0 ? 80 : 0;
  const dataStream = email.trim().length > 0 ? 94 : 0;
  const signalStrength = message.trim().length > 0 ? 87 : 0;
  const fieldErrorClass =
    "mt-1 min-h-4 text-right text-[length:10px] font-bold uppercase tracking-[0.08em] text-[var(--color-text-accent)]";
  const statusMessage = state.submitting
    ? "Routing message..."
    : state.succeeded
      ? "Message routed. I will reply soon."
      : state.errors
        ? "Signal failed. Check the channels and try again."
        : localStatusMessage;

  return (
    <div
      id="contact"
      className="Contact relative bg-[var(--color-bg-page)] scroll-mt-[104px]"
    >
      <div className="h-24 max-w-5xl mx-auto px-6">
        <p className="[text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:58px] font-normal leading-[48px] tracking-[1px] text-[var(--color-text-heading)] whitespace-nowrap">
          COMMUNICATIONS
          <span className="text-[var(--color-text-primary)]">
            {" "}
            <br />
          </span>
          <span className="text-[var(--color-text-accent)]">CHANNELS</span>
        </p>
        <p className=" left-[219px] top-[52px] w-[1232px] h-[38px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[16px] tracking-normal text-[var(--color-text-primary)]">
          CONTACT FORM
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-6 max-w-4xl mx-auto px-6 py-6">
        <img
          className="w-[185px] h-[239px] [mix-blend-mode:luminosity] pointer-events-none "
          src="/assets/images/group.svg"
          alt=""
        />
        <div className=" relative basis-full">
          <div className="mb-6">
            <SignalWave />
          </div>
          {/* Telemetry / Signal Status */}
          <div className="grid grid-cols-[10ch_1fr] gap-2 w-full items-center content-center">
            <p className="font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.3)]">
              MESSAGE INTEGRITY
            </p>
            <div
              className="progress-bar bg-white/30 w-full h-2 self-center rounded overflow-hidden"
              role="progressbar"
              aria-label="Message Integrity"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={integrity}
            >
              <div
                className="message-integrity-fill bg-white/20 h-2 self-center rounded"
                style={{ "--integrity-base": `${integrity}%` } as CSSProperties}
              ></div>
            </div>
            <p className="font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.3)]">
              DATA STREAM
            </p>
            <div
              className="progress-bar bg-white/30 w-full h-2 self-center rounded overflow-hidden"
              role="progressbar"
              aria-label="Data Stream"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={dataStream}
            >
              <div
                className="message-integrity-fill bg-white/20 h-2 self-center rounded"
                style={
                  {
                    "--integrity-base": `${dataStream}%`,
                    animationDuration: "1.7s",
                    animationDelay: "-0.4s",
                  } as CSSProperties
                }
              ></div>
            </div>
            <p className=" font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.3)]">
              Signal Strength
            </p>
            <div
              className="progress-bar bg-white/30 w-full h-2 self-center rounded overflow-hidden"
              role="progressbar"
              aria-label="Signal Strength"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={signalStrength}
            >
              <div
                className="message-integrity-fill bg-white/20 h-2 self-center rounded"
                style={
                  {
                    "--integrity-base": `${signalStrength}%`,
                    animationDuration: "1.4s",
                    animationDelay: "-0.7s",
                  } as CSSProperties
                }
              ></div>
            </div>
            <p className="font-['Koulen',_sans-serif] text-[length:10px] font-normal leading-none tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.3)]">
              Routing Efficiency
            </p>
            <div
              className="progress-bar bg-white/30 w-full h-2 self-center rounded overflow-hidden"
              role="progressbar"
              aria-label="Routing Efficiency"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(routingProgress)}
            >
              <div
                className={`${routingStarted ? "" : "message-integrity-fill"} bg-white/20 h-2 self-center rounded`}
                style={
                  {
                    "--integrity-base": "0%",
                    width: `${routingProgress}%`,
                    animationDuration: "1.9s",
                    animationDelay: "-0.9s",
                  } as CSSProperties
                }
              ></div>
            </div>
            <div className="col-span-2 text-white/30">
              <p
                className={`text-right text-xs font-bold tracking-[0.08em] ${
                  state.errors
                    ? "text-[var(--color-text-accent)]/60"
                    : "text-[rgb(var(--color-text-primary-rgb)_/_0.55)]"
                }`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
              <ValidationError
                className={fieldErrorClass}
                field="name"
                prefix="Name"
                errors={state.errors}
              />
              <ValidationError
                className={fieldErrorClass}
                field="email"
                prefix="Email"
                errors={state.errors}
              />
              <ValidationError
                className={fieldErrorClass}
                field="message"
                prefix="Message"
                errors={state.errors}
              />
              <ValidationError
                className={fieldErrorClass}
                errors={state.errors}
              />
            </div>
          </div>
        </div>

        {/* Form Controls */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-[305px] shrink-0 flex-col gap-3"
        >
          <div className="h-10 w-full rounded-[8px] bg-white/30 focus-within:ring-2 focus-within:ring-[var(--color-action-primary)]">
            <input
              className="w-full h-full bg-transparent px-5 text-sm font-normal text-[var(--color-bg-page)] placeholder:text-[var(--color-bg-page)] outline-none"
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              name="_gotcha"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <input
            className="w-full h-10 px-5 rounded-[8px] bg-white/30 text-sm font-normal text-[var(--color-bg-page)] placeholder:text-[var(--color-bg-page)] outline-none focus:ring-2 focus:ring-[var(--color-action-primary)]"
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <textarea
            className="w-full h-[150px] py-3 px-5 rounded-[8px] bg-white/30 text-sm font-normal text-[var(--color-bg-page)] placeholder:text-[var(--color-bg-page)] outline-none resize-none focus:ring-2 focus:ring-[var(--color-action-primary)]"
            name="message"
            placeholder="Message"
            aria-label="Message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <button
            type="submit"
            disabled={state.submitting}
            aria-busy={state.submitting}
            className="self-end h-10 flex justify-center items-center px-6 rounded-[8px] bg-[var(--color-action-primary)] enabled:hover:bg-[var(--color-action-primary-hover)] transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text-primary)]"
          >
            <span className="text-sm font-bold leading-none tracking-normal text-[rgb(var(--color-text-primary-rgb)_/_0.8)] whitespace-nowrap">
              {state.submitting ? "SENDING" : "SEND"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
