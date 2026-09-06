"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

export type ImageViewerSlide = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageViewerProps = {
  slides: ImageViewerSlide[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function ImageViewer({
  slides,
  activeIndex,
  isOpen,
  onClose,
  onIndexChange,
}: ImageViewerProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeSlide = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.documentElement.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const move = (direction: number) => {
      onIndexChange(
        (activeIndex + direction + slides.length) % slides.length,
      );
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, isOpen, onClose, onIndexChange, slides.length]);

  if (!isOpen || !activeSlide || typeof document === "undefined") return null;

  const move = (direction: number) => {
    onIndexChange((activeIndex + direction + slides.length) % slides.length);
  };
  const isPortrait = activeSlide.height > activeSlide.width * 1.25;

  return createPortal(
    <div
      className="image-viewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        className="image-viewer__close"
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <Image
          src="/assets/icons/viewer-close.png"
          alt=""
          width={48}
          height={48}
          aria-hidden="true"
        />
      </button>

      <button
        className="image-viewer__arrow image-viewer__arrow--previous"
        type="button"
        onClick={() => move(-1)}
        aria-label="Previous image"
      >
        <Image
          src="/assets/icons/viewer-previous.png"
          alt=""
          width={56}
          height={56}
          aria-hidden="true"
        />
      </button>

      <figure
        className={`image-viewer__figure${
          isPortrait ? " image-viewer__figure--portrait" : ""
        }`}
      >
        <Image
          key={activeSlide.src}
          className="image-viewer__image"
          src={activeSlide.src}
          alt={activeSlide.alt}
          width={activeSlide.width}
          height={activeSlide.height}
          sizes={isPortrait ? "(max-width: 700px) 75vw, 390px" : "(max-width: 700px) 90vw, 1080px"}
          priority
        />
        <figcaption className="image-viewer__caption" aria-live="polite">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <strong id={titleId}>{activeSlide.title}</strong>
        </figcaption>
      </figure>

      <button
        className="image-viewer__arrow image-viewer__arrow--next"
        type="button"
        onClick={() => move(1)}
        aria-label="Next image"
      >
        <Image
          src="/assets/icons/viewer-next.png"
          alt=""
          width={56}
          height={56}
          aria-hidden="true"
        />
      </button>
    </div>,
    document.body,
  );
}
