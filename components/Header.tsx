"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div
          ref={menuRef}
          className="relative flex w-full items-center justify-between py-3"
        >
          <Link
            href="/"
            aria-label="Go to home page"
            className="group min-w-0 rounded-xl px-2 py-1 pl-1 transition-colors hover:bg-gray-100"
          >
            <div className="relative min-h-[2.2rem]">
              <div className="transition-opacity duration-150 group-hover:opacity-0">
                <p className="text-base font-bold leading-none text-black">
                  Product Designer
                </p>
                <p className="mt-1 flex items-center gap-1 text-base font-medium leading-none text-black/45">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 4.9 5.7 11.7 6 12a1.3 1.3 0 0 0 2 0c.3-.3 6-7.1 6-12a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                  </svg>
                  <span>Based in Warsaw</span>
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="home-wiggle h-6 w-6 text-black"
                  fill="currentColor"
                >
                  <path d="M12 2.5 2 10.6V21a1 1 0 0 0 1 1h6.5a1 1 0 0 0 1-1v-5h3v5a1 1 0 0 0 1 1H21a1 1 0 0 0 1-1V10.6L12 2.5Z" />
                </svg>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/get-in-touch"
              className="hidden lg:inline-flex lg:h-14 lg:items-center lg:justify-center lg:rounded-full lg:bg-black lg:px-6 lg:text-[0.95rem] lg:font-semibold lg:uppercase lg:tracking-[0.12em] lg:text-white lg:transition-transform lg:hover:scale-[1.03]"
            >
              Get in touch
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-black transition hover:bg-black/5 lg:h-[56px] lg:w-[56px]"
              style={{ cursor: "pointer" }}
            >
              {isMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-[18px] w-[18px] stroke-current"
                  fill="none"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  style={{ cursor: "pointer" }}
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              ) : (
                <div
                  className="relative h-[18px] w-[20px]"
                  style={{ cursor: "pointer" }}
                >
                  <span className="absolute left-0 top-[2px] h-[2px] w-full rounded-full bg-current" />
                  <span className="absolute left-0 top-[8px] h-[2px] w-full rounded-full bg-current" />
                  <span className="absolute left-0 top-[14px] h-[2px] w-full rounded-full bg-current" />
                </div>
              )}
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute right-0 top-[calc(100%+12px)] z-50 w-[220px] max-w-[calc(100vw-1rem)] overflow-hidden rounded-[1.6rem] border border-black/10 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:w-[240px]"
                >
                  <motion.nav
                    className="flex flex-col gap-1"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.03,
                        },
                      },
                    }}
                  >
                    {navItems.map((item) => (
                      <motion.a
                        key={item}
                        href={`/#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        variants={{
                          hidden: { opacity: 0, x: -12 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center justify-between rounded-[1rem] px-5 py-3.5 text-[1rem] font-semibold uppercase tracking-[0.06em] text-black transition-colors hover:bg-black hover:text-white"
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
                      </motion.a>
                    ))}
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
