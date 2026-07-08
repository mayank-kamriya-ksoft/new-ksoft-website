import type { Service } from "@/lib/content";

const paths: Record<Service["icon"], string> = {
  code: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16",
  ai: "M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8a4 4 0 100 8 4 4 0 000-8z",
  seo: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4M8 11h6M11 8v6",
  mobile: "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM10 18h4",
  ux: "M3 12l4-8 4 6 3-4 7 10H3z M6 20h12",
  growth: "M3 17l6-6 4 4 8-8M14 7h7v7",
  wp: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  map: "M9 20l-6-2V4l6 2 6-2 6 2v14l-6-2-6 2zM9 6v14M15 4v14",
};

export function ServiceIcon({ name, className = "w-6 h-6" }: { name: Service["icon"]; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={paths[name]} />
    </svg>
  );
}
