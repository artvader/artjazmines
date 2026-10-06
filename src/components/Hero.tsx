import { useEffect, useRef, type CSSProperties } from "react";

const SCROLL_PLAY_THRESHOLD = 100;
const CALLOUT_FADE_SCROLL_RATE = 0.2;
const CALLOUT_FADE_BASE_DISTANCE = 230;
const CALLOUT_MIN_SCALE = 0.86;
const VIDEO_TRANSLATE_RATE = .12;
const EMBER_PARTICLES = [
  { left: "8%", size: 8, delay: "0s", duration: "6.8s", drift: "-18px" },
  { left: "14%", size: 6, delay: "-3.4s", duration: "8.2s", drift: "24px" },
  { left: "20%", size: 9, delay: "-1.2s", duration: "7.4s", drift: "-32px" },
  { left: "29%", size: 6, delay: "-5.1s", duration: "9s", drift: "18px" },
  { left: "36%", size: 8, delay: "-2.2s", duration: "6.4s", drift: "-22px" },
  { left: "43%", size: 6, delay: "-6.2s", duration: "8.8s", drift: "34px" },
  { left: "51%", size: 11, delay: "-0.8s", duration: "7.8s", drift: "-14px" },
  { left: "58%", size: 6, delay: "-4.6s", duration: "9.4s", drift: "26px" },
  { left: "64%", size: 8, delay: "-2.9s", duration: "6.9s", drift: "-28px" },
  { left: "72%", size: 6, delay: "-5.8s", duration: "8.5s", drift: "20px" },
  { left: "80%", size: 9, delay: "-1.7s", duration: "7.2s", drift: "-36px" },
  { left: "88%", size: 8, delay: "-4.1s", duration: "9.1s", drift: "16px" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoLayerRef = useRef<HTMLDivElement | null>(null);
  const calloutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playbackMode: "idle" | "forward" = "idle";

    const getDuration = () =>
      video.duration && !isNaN(video.duration) ? video.duration : 5;

    const stopAtStart = () => {
      playbackMode = "idle";
      video.pause();
      video.currentTime = 0;
    };

    const stopAtEnd = () => {
      playbackMode = "idle";
      video.pause();
      video.currentTime = getDuration();
    };

    const playForward = () => {
      if (playbackMode === "forward") return;

      playbackMode = "forward";
      video.playbackRate = 5;

      if (video.currentTime >= getDuration() - 0.001) {
        stopAtEnd();
        return;
      }

      void video.play().catch(() => {
        playbackMode = "idle";
      });
    };

    const updateCallout = () => {
      const callout = calloutRef.current;
      if (!callout) return;

      const fadeDistance = CALLOUT_FADE_BASE_DISTANCE / CALLOUT_FADE_SCROLL_RATE;
      const progress = Math.min(Math.max(window.scrollY / fadeDistance, 0), 1);
      const scale = 1 - progress * (1 - CALLOUT_MIN_SCALE);

      callout.style.opacity = `${1 - progress}`;
      callout.style.transform = `scale(${scale})`;
    };

    const updateVideoLayer = () => {
      const videoLayer = videoLayerRef.current;
      if (!videoLayer) return;

      const videoHeight = video.getBoundingClientRect().height || 687;
      const translateY = -Math.min(window.scrollY * VIDEO_TRANSLATE_RATE, videoHeight);

      videoLayer.style.transform = `translate(0%, ${translateY}px)`;
    };

    const handleLoadedMetadata = () => {
      updateCallout();
      updateVideoLayer();

      if (window.scrollY > SCROLL_PLAY_THRESHOLD) {
        playForward();
        return;
      }

      stopAtStart();
    };

    const handleScroll = () => {
      updateCallout();
      updateVideoLayer();

      if (window.scrollY > SCROLL_PLAY_THRESHOLD) {
        playForward();
      } else {
        stopAtStart();
      }
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      updateCallout();
      updateVideoLayer();
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    video.addEventListener("ended", stopAtEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", stopAtEnd);
    };
  }, []);

  return (
    <div className="Hero sticky top-0 shrink-0 h-[300dvh] self-stretch w-full">
      <div
        ref={videoLayerRef}
        className="absolute  top-0 w-full h-[900px] will-change-transform"
      >
        <video
          ref={videoRef}
          className="absolute left-0 top-0 w-full max-w-full h-[900px] object-cover pointer-events-none [mask-image:linear-gradient(180deg,_black_0%,_rgba(0,0,0,0.65)_80%,_transparent_100%)] [-webkit-mask-image:linear-gradient(180deg,_black_0%,_rgba(0,0,0,0.5)_95%,_transparent_100%)]"
          src="/assets/videos/android-hoist.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
      <div className="fixed left-0 right-0 top-0 z-30 h-32 [background:linear-gradient(180deg,_rgb(var(--color-steel-900-rgb)_/_0.67)_49.19%,_rgb(var(--color-steel-900-rgb)_/_0)_89.06%)]"></div>
      <div className="ember-field pointer-events-none absolute left-0 top-0 z-10 h-dvh w-full overflow-hidden" aria-hidden="true">
        {EMBER_PARTICLES.map((ember, index) => (
          <span
            key={`${ember.left}-${index}`}
            className="ember-particle"
            style={
              {
                "--ember-left": ember.left,
                "--ember-size": `${ember.size}px`,
                "--ember-delay": ember.delay,
                "--ember-duration": ember.duration,
                "--ember-drift": ember.drift,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Hero Callout Button / Banner */}
      <div
        ref={calloutRef}
        className="relative z-20 mx-auto h-[179px] max-w-5xl origin-left top-[250px] will-change-[opacity,transform]"
      >
        <span className="absolute left-6 top-[35px]  [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:44px] md:text-[length:64px] font-normal leading-[36px] md:leading-[53px] tracking-[1px] text-[var(--color-text-accent)]">
          <span className="text-[var(--color-text-heading)]">Forging the</span>
          <span className="text-[var(--color-text-primary)]">
            {" "}
            <br />
          </span>
          Edge of Design
        </span>
        <span className="absolute left-6 top-0  opacity-80 font-['Lekton',_sans-serif] text-[length:10px] md:text-[length:18px] font-normal leading-[53px] tracking-normal text-[var(--color-text-primary)]">
          SYSTEM // CREATIVE FOUNDRY 01
        </span>
        <span className="absolute left-6 top-[90px] md:top-[126px] w opacity-80 font-['Lekton',_sans-serif] text-[length:10px] md:text-[length:18px] font-normal leading-[53px] tracking-normal text-[var(--color-text-primary)]">
          DESIGN • DEVELOPMENT • DIGITAL SYSTEMS
        </span>
      </div>
    </div>
  );
}
