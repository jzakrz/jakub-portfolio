"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "A five-minute movement break",
    src: "/assets/images/exercise-intro.webp.webp",
    alt: "Exercise Snack active movement session",
  },
  {
    title: "A personalized exercise set",
    src: "/assets/images/pre-workout-screen.webp.webp",
    alt: "Recommended exercise set with direct edit controls",
  },
  {
    title: "Progress without pressure",
    src: "/assets/images/stats.webp.webp",
    alt: "Exercise Snack progress screen with active days and points",
  },
];

const prototypeUrl =
  "https://embed.figma.com/proto/x0n44iyTYL4Yj1dFpHNB4h/Exercise-Snack--Student-Project-?node-id=1491-21114&p=f&viewport=-4411%2C-42%2C0.13&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1491%3A21356&page-id=5%3A2&embed-host=share";

export default function ExerciseSnackGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPrototypeOpen, setIsPrototypeOpen] = useState(false);
  const activeSlide = slides[activeIndex];
  const previewSlides = [1, 2].map(
    (offset) => slides[(activeIndex + offset) % slides.length],
  );

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
    setActiveIndex(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  return (
    <>
      <section className="hackathon-case__section hackathon-gallery exercise-gallery">
        <div className="hackathon-case__rail">
          <p className="hackathon-case__eyebrow">08 / Prototype</p>
          <h2>See the flow</h2>
          <button
            className="hackathon-gallery__prototype"
            type="button"
            onClick={() => setIsPrototypeOpen(true)}
          >
            Open prototype →
          </button>
        </div>

        <div className="hackathon-case__content hackathon-gallery__content">
          <div className="hackathon-gallery__controls">
            <p>{String(activeIndex + 1).padStart(2, "0")} / 03</p>
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
        <div className="hackathon-prototype" role="dialog" aria-modal="true" aria-label="Exercise Snack prototype" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setIsPrototypeOpen(false);
        }}>
          <div className="hackathon-prototype__dialog">
            <div className="hackathon-prototype__header">
              <p>Exercise Snack / Interactive prototype</p>
              <button type="button" onClick={() => setIsPrototypeOpen(false)}>Close ×</button>
            </div>
            <iframe src={prototypeUrl} title="Exercise Snack prototype" allowFullScreen />
          </div>
        </div>
      ) : null}
    </>
  );
}
