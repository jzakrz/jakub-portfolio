"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/portfolio";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2">
      <div
        ref={menuRef}
        className="relative flex items-center justify-end rounded-[1.35rem] bg-white/80 px-4 py-3 backdrop-blur"
      >
        <div />

        <div className="relative flex items-center gap-3">
          <a
            href="mailto:zakrzewski_j@yahoo.com"
            className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
          >
            Hire me
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full text-black transition hover:bg-black/5"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[18px] w-[18px] stroke-current"
                fill="none"
                strokeWidth="2.25"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            ) : (
              <div className="relative h-[18px] w-[20px]">
                <span className="absolute left-0 top-[2px] h-[2px] w-full rounded-full bg-current" />
                <span className="absolute left-0 top-[8px] h-[2px] w-full rounded-full bg-current" />
                <span className="absolute left-0 top-[14px] h-[2px] w-full rounded-full bg-current" />
              </div>
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-[calc(100%+14px)] z-50 min-w-[240px] overflow-hidden rounded-[1.6rem] border border-black/10 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
  <a
    key={item}
    href={`#${item.toLowerCase()}`}
    onClick={() => setIsMenuOpen(false)}
    className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-[1rem] font-semibold uppercase tracking-[0.06em] text-black transition-colors hover:bg-black hover:text-white"
  >
    <span>{item}</span>

    {item === "Resume" && (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 5h5v5" />
        <path d="M10 14 19 5" />
        <path d="M19 14v5h-5" />
        <path d="M5 10V5h5" />
      </svg>
    )}
  </a>
))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}