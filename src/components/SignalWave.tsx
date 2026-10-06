import { useEffect, useState } from "react";

const BAR_COUNT = 20;
const EDGE_HEIGHT = 22;
const MIN_HEIGHT = 10;
const CENTER_MAX_HEIGHT = 56;
const OUTER_MAX_HEIGHT = 32;

export default function SignalWave() {
  const [heights, setHeights] = useState(() =>
    Array.from({ length: BAR_COUNT }, (_, i) =>
      i === 0 || i === BAR_COUNT - 1 ? EDGE_HEIGHT : 18 + (i % 4) * 8,
    ),
  );

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const bars = Array.from({ length: BAR_COUNT }, (_, i) => ({
      from: i === 0 || i === BAR_COUNT - 1 ? EDGE_HEIGHT : 18 + (i % 4) * 8,
      target: EDGE_HEIGHT,
      started: 0,
      duration: 0,
    }));
    let frame = 0;

    const animate = (now: number) => {
      if (!preference.matches) {
        setHeights(bars.map((bar, i) => {
          if (i === 0 || i === BAR_COUNT - 1) return EDGE_HEIGHT;
          const progress = bar.duration === 0 ? 1 : Math.min((now - bar.started) / bar.duration, 1);
          const eased = progress * progress * (3 - 2 * progress);
          const height = bar.from + (bar.target - bar.from) * eased;
          if (progress === 1) {
            const maximum = i >= 6 && i <= 13 ? CENTER_MAX_HEIGHT : OUTER_MAX_HEIGHT;
            bar.from = height;
            bar.target = MIN_HEIGHT + Math.random() * (maximum - MIN_HEIGHT);
            bar.started = now;
            bar.duration = 160 + Math.random() * 320;
          }
          return height;
        }));
      }
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <svg className="contact-signal-wave" viewBox="0 0 259 62" role="img" aria-label="Animated signal wave">
      <g fill="#ffffff" fillOpacity="0.3">
        {heights.map((height, i) => (
          <rect key={i} x={4 + i * 13} y={31 - height / 2} width="7" height={height} rx="3.5" />
        ))}
      </g>
    </svg>
  );
}
