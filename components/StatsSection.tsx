"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

function parseValue(raw: string): { number: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 divide-x divide-white/[0.06] md:grid-cols-4"
    >
      {stats.map((stat) => {
        const { number, suffix } = parseValue(stat.value);
        return (
          <div key={stat.label} className="px-8 py-12 text-center">
            <div className="font-heading text-5xl font-bold text-electric">
              <CountUp target={number} suffix={suffix} active={active} />
            </div>
            <div className="mt-2 text-sm text-white/45">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
