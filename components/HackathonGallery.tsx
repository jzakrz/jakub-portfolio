"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { title: "Team formation", src: "/assets/images/onboarding.webp.webp", alt: "Team formation interface with search, filters and team cards" },
  { title: "Event context", src: "/assets/images/event-page.webp.webp", alt: "Hackathon overview with navigation, event information and team prompt" },
  { title: "Participant profile", src: "/assets/images/user-profile.webp.webp", alt: "Participant profile with skills, experience and invite action" },
  { title: "Connected journey", src: "/assets/images/hackathon-case-study-image.webp.webp", alt: "Hackathon participants collaborating around a laptop" },
];

const prototypeUrl = "https://embed.figma.com/proto/ZktGQu1JSiKVIstVvhbdU0/Hackathon-Platform-Redesign?page-id=5116%3A37624&node-id=5116-44646&p=f&viewport=1802%2C-3302%2C0.55&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5116%3A44646&embed-host=share";

export default function HackathonGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPrototypeOpen, setIsPrototypeOpen] = useState(false);
  const activeSlide = slides[activeIndex];
  const previewSlides = [1, 2].map((offset) => slides[(activeIndex + offset) % slides.length]);

  useEffect(() => {
    if (!isPrototypeOpen) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPrototypeOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isPrototypeOpen]);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <>
      <section className="hackathon-case__section hackathon-gallery">
        <div className="hackathon-case__rail">
          <p className="hackathon-case__eyebrow">07 / Product walkthrough</p>
          <h2>Explore the product</h2>
          <button className="hackathon-gallery__prototype" type="button" onClick={() => setIsPrototypeOpen(true)}>
            View prototype →
          </button>
        </div>

        <div className="hackathon-case__content hackathon-gallery__content">
          <div className="hackathon-gallery__controls">
            <p>{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
            <p>{activeSlide.title}</p>
            <div className="hackathon-gallery__progress" aria-hidden="true">
              <span style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }} />
            </div>
            <div className="hackathon-gallery__arrows">
              <button type="button" onClick={() => move(-1)} aria-label="Previous gallery image">←</button>
              <button type="button" onClick={() => move(1)} aria-label="Next gallery image">→</button>
            </div>
          </div>

          <div className="hackathon-gallery__primary">
            <Image key={activeSlide.src} src={activeSlide.src} alt={activeSlide.alt} fill sizes="(max-width: 900px) 100vw, 58vw" />
          </div>
          <div className="hackathon-gallery__previews">
            {previewSlides.map((slide, previewIndex) => (
              <button type="button" key={`${slide.src}-${previewIndex}`} onClick={() => move(previewIndex + 1)} aria-label={`Show ${slide.title}`}>
                <Image src={slide.src} alt="" fill sizes="(max-width: 900px) 50vw, 29vw" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {isPrototypeOpen ? (
        <div className="hackathon-prototype" role="dialog" aria-modal="true" aria-label="Hackathon Platform prototype" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setIsPrototypeOpen(false);
        }}>
          <div className="hackathon-prototype__dialog">
            <div className="hackathon-prototype__header">
              <p>Hackathon Platform / Interactive prototype</p>
              <button type="button" onClick={() => setIsPrototypeOpen(false)}>Close ×</button>
            </div>
            <iframe src={prototypeUrl} title="Hackathon Platform prototype" allowFullScreen />
          </div>
        </div>
      ) : null}
    </>
  );
}
