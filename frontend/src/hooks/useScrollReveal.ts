import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'left' | 'right' | 'down';

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  direction?: Direction;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, delay = 0, direction = 'up', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay, once]);

  const baseStyles: React.CSSProperties = {
    transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const hiddenTransform: Record<Direction, string> = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
  };

  const style: React.CSSProperties = {
    ...baseStyles,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : hiddenTransform[direction],
  };

  return { ref, style, isVisible };
}

export function useStaggerReveal(count: number, baseDelay = 100) {
  return Array.from({ length: count }, (_, i) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useScrollReveal({ delay: i * baseDelay, direction: 'up' });
  });
}
