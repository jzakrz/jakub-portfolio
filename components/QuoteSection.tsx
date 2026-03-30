"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const quoteSectionRef = useRef<HTMLElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateIsDesktop = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => {
      mediaQuery.removeEventListener("change", updateIsDesktop);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: quoteSectionRef,
    offset: ["start end", "end start"],
  });

  const lineOneX = useTransform(scrollYProgress, [0, 0.5, 1], [-260, 0, 260]);
  const lineTwoX = useTransform(scrollYProgress, [0, 0.5, 1], [240, 0, -240]);
  const lineThreeX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-180, 0, 180]
  );

  const quoteOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.15, 0.45, 1, 0.45, 0.15]
  );

  return (
    <section
      ref={quoteSectionRef}
      className="w-full overflow-hidden px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="flex min-h-[45vh] w-full items-center justify-center">
        <div className="flex w-full flex-col items-center text-center">
          <motion.p
            style={isDesktop ? { x: lineOneX, opacity: quoteOpacity } : undefined}
            className="text-[clamp(1.8rem,8vw,2.7rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-black lg:whitespace-nowrap lg:text-[clamp(3rem,7vw,6.8rem)] lg:leading-[0.9] lg:tracking-[-0.06em] lg:will-change-transform"
          >
            Designing Clarity in
          </motion.p>

          <motion.p
            style={isDesktop ? { x: lineTwoX, opacity: quoteOpacity } : undefined}
            className="text-[clamp(1.8rem,8vw,2.7rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-black lg:whitespace-nowrap lg:text-[clamp(3rem,7vw,6.8rem)] lg:leading-[0.9] lg:tracking-[-0.06em] lg:will-change-transform"
          >
            Complex Digital
          </motion.p>

          <motion.p
            style={isDesktop ? { x: lineThreeX, opacity: quoteOpacity } : undefined}
            className="text-[clamp(1.8rem,8vw,2.7rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-black lg:whitespace-nowrap lg:text-[clamp(3rem,7vw,6.8rem)] lg:leading-[0.9] lg:tracking-[-0.06em] lg:will-change-transform"
          >
            Products.
          </motion.p>
        </div>
      </div>
    </section>
  );
}