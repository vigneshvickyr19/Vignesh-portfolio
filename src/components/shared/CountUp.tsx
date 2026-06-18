import { useState, useEffect } from "react";

interface CountUpProps {
  value: string; // e.g. "2+", "10+", "3"
  inView: boolean;
  duration?: number; // duration in milliseconds
}

/**
 * Lightweight, high-performance count-up animation component.
 * Animates numbers from 0 to target value when inView is triggered.
 */
export const CountUp: React.FC<CountUpProps> = ({ value, inView, duration = 1200 }) => {
  // Parse target number (e.g., "20+" -> 20)
  const targetNumber = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  // Get suffix (e.g., "20+" -> "+")
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0); // Reset count if it goes out of view
      return;
    }

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad: f(t) = t * (2 - t)
      const easeOutQuad = progress * (2 - progress);
      const currentCount = Math.floor(easeOutQuad * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [targetNumber, inView, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};
