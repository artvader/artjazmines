import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type ViewportHeaderProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  echo?: string;
};

export default function ViewportHeader({
  children,
  className = "",
  echo = "",
  ...props
}: ViewportHeaderProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: "-18% 0px -22% 0px",
        threshold: 0.2,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      data-echo={echo}
      className={`viewport-header-reveal ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      {...props}
    >
      <span className="viewport-header-reveal__inner">{children}</span>
    </p>
  );
}
