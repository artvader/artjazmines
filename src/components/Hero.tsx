import { useEffect, useRef } from "react";


const SCROLL_PLAY_THRESHOLD = 50;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      video.playbackRate = 1;

      if (video.currentTime >= getDuration() - 0.001) {
        stopAtEnd();
        return;
      }

      void video.play().catch(() => {
        playbackMode = "idle";
      });
    };

    const handleLoadedMetadata = () => {
      if (window.scrollY > SCROLL_PLAY_THRESHOLD) {
        playForward();
        return;
      }

      stopAtStart();
    };

    const handleScroll = () => {
      if (window.scrollY > SCROLL_PLAY_THRESHOLD) {
        playForward();
      } else {
        stopAtStart();
      }
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
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
    <div className="Hero sticky top-0 shrink-0 h-[705px] self-stretch max-full">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1280px] h-[705px]">
        <video
          ref={videoRef}
          className="absolute left-0 top-0 w-[1280px] h-[687px] object-cover pointer-events-none"
          src="/assets/videos/android-hoist.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute left-0 top-[469px] w-[1280px] h-[236px] [background:linear-gradient(360deg,_var(--color-bg-page)_10.36%,_rgb(var(--color-bg-page-rgb)_/_0.64)_37.75%,_rgb(var(--color-bg-page-rgb)_/_0)_76.98%)]"></div>
      </div>
      <div className="absolute left-0 top-0 w-[1280px] h-32 [background:linear-gradient(180deg,_rgb(var(--color-steel-900-rgb)_/_0.67)_49.19%,_rgb(var(--color-steel-900-rgb)_/_0)_89.06%)]"></div>

      {/* Hero Callout Button / Banner */}
      <div className="absolute left-[22px] top-[239px] w-[368px] h-[179px]">
        <span className="absolute left-0 top-[35px] w-[368px] [text-shadow:0_4px_4px_rgb(var(--color-shadow-rgb)_/_0.47)] font-['Koulen',_sans-serif] text-[length:64px] font-normal leading-[53px] tracking-[1px] text-[var(--color-text-accent)]">
          <span className="text-[var(--color-text-heading)]">Forging the</span>
          <span className="text-[var(--color-text-primary)]"> <br /></span>Edge of Design
        </span>
        <span className="absolute left-0 top-0 w-[267px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[53px] tracking-normal text-[var(--color-text-primary)]">
          SYSTEM // CREATIVE FOUNDRY 01
        </span>
        <span className="absolute left-0.5 top-[126px] w-[349px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[53px] tracking-normal text-[var(--color-text-primary)]">
          DESIGN • DEVELOPMENT • DIGITAL SYSTEMS
        </span>
      </div>


    </div>
  );
}
