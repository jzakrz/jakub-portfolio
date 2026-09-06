"use client";

import Image from "next/image";
import { useState } from "react";
import ImageViewer, { type ImageViewerSlide } from "@/components/ImageViewer";

const slides: ImageViewerSlide[] = [
  {
    title: "Organization portfolio",
    src: "/assets/images/net-zero-portfolio-dashboard.png",
    alt: "Net Zero Build organization portfolio dashboard",
    width: 854,
    height: 666,
  },
  {
    title: "Project overview",
    src: "/assets/images/net-zero-project-dashboard.png",
    alt: "Project dashboard showing progress, risks, certification stages and local requirements",
    width: 854,
    height: 590,
  },
  {
    title: "Credit evidence",
    src: "/assets/images/net-zero-credit-model.png",
    alt: "LEED-led scorecard and credit evidence model",
    width: 854,
    height: 610,
  },
  {
    title: "Contextual assistant",
    src: "/assets/images/net-zero-ai-assistant.png",
    alt: "Contextual AI assistant working inside a project credit",
    width: 854,
    height: 590,
  },
  {
    title: "Report centre",
    src: "/assets/images/net-zero-report-centre.png",
    alt: "Report centre with templates, generation status and download history",
    width: 854,
    height: 570,
  },
];

type NetZeroViewerImageProps = {
  index: number;
  priority?: boolean;
  sizes: string;
};

export default function NetZeroViewerImage({
  index,
  priority = false,
  sizes,
}: NetZeroViewerImageProps) {
  const [activeIndex, setActiveIndex] = useState(index);
  const [isOpen, setIsOpen] = useState(false);
  const slide = slides[index];

  return (
    <>
      <button
        className="net-zero-viewer-trigger"
        type="button"
        onClick={() => {
          setActiveIndex(index);
          setIsOpen(true);
        }}
        aria-label={`Open ${slide.title} in image viewer`}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          priority={priority}
          sizes={sizes}
        />
      </button>

      <ImageViewer
        slides={slides}
        activeIndex={activeIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onIndexChange={setActiveIndex}
      />
    </>
  );
}
