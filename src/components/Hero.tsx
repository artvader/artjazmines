import { useEffect, useRef } from "react";
import Navigation from "./Navigation";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let animationFrameId: number;

    const handleLoadedMetadata = () => {
      // Calculate initial target based on scroll position
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const scrollFraction = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      if (video.duration && !isNaN(video.duration)) {
        targetTime = scrollFraction * video.duration;
        video.currentTime = targetTime;
      }
    };

    const handleScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const scrollFraction = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      if (video.duration && !isNaN(video.duration)) {
        targetTime = scrollFraction * video.duration;
      }
    };

    const updateFrame = () => {
      if (video.duration && !isNaN(video.duration)) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > 0.005) {
          // Smoothly interpolate towards target time (advances forward or backward)
          video.currentTime += diff * 0.15;
        }
      }
      animationFrameId = requestAnimationFrame(updateFrame);
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="shrink-0 h-[705px] self-stretch max-w-[1280px] relative">
      <div className="absolute left-0 top-0 w-[1280px] h-[705px]">
        <video
          ref={videoRef}
          className="absolute left-0 top-0 w-[1280px] h-[687px] object-cover pointer-events-none"
          src="/assets/videos/android-hoist.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute left-0 top-[469px] w-[1279px] h-[236px] [background:linear-gradient(360deg,_#290c01_10.36%,_rgba(41,_12,_1,_0.64)_37.75%,_rgba(41,_12,_1,_0)_76.98%)]"></div>
      </div>
      <div className="absolute left-0 top-0 w-[1279px] h-32 [background:linear-gradient(180deg,_rgba(19,_31,_48,_0.67)_49.19%,_rgba(19,_31,_48,_0)_89.06%)]"></div>

      {/* Hero Callout Button / Banner */}
      <div className="absolute left-[22px] top-[239px] w-[368px] h-[179px]">
        <span className="absolute left-0 top-[35px] w-[368px] [text-shadow:0_4px_4px_rgba(0,_0,_0,_0.47)] font-['Koulen',_sans-serif] text-[length:64px] font-normal leading-[53px] tracking-[1px] text-[#ffd166]">
          <span className="text-[#d8e2ea]">Forging the</span>
          <span className="text-[#ffffff]"> <br /></span>Edge of Design
        </span>
        <span className="absolute left-0 top-0 w-[267px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[53px] tracking-normal text-[#ffffff]">
          SYSTEM // CREATIVE FOUNDRY 01
        </span>
        <span className="absolute left-0.5 top-[126px] w-[349px] opacity-80 font-['Lekton',_sans-serif] text-[length:18px] font-normal leading-[53px] tracking-normal text-[#ffffff]">
          DESIGN • DEVELOPMENT • DIGITAL SYSTEMS
        </span>
      </div>

      {/* Header Navigation */}
      <Navigation />
    </div>
  );
}
