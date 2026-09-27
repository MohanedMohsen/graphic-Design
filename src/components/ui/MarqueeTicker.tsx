'use client';

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function MarqueeTicker({
  items,
  speed = 30,
  className = '',
}: MarqueeTickerProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex gap-8 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
