"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional caption shown bottom-left on the large image */
  caption?: string;
  /** Optional sub-caption (smaller text) */
  subcaption?: string;
}

interface ServiceGalleryProps {
  images: [GalleryImage, GalleryImage, GalleryImage]; // exactly 3: [large, small1, small2]
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  const [large, small1, small2] = images;

  return (
    <>
      {/* Gallery grid */}
      <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        {/* Large image */}
        <button
          type="button"
          onClick={() => open(0)}
          className="group relative min-h-[360px] overflow-hidden bg-dark md:min-h-[520px] cursor-zoom-in text-left w-full"
          aria-label={`View full size: ${large.alt}`}
        >
          <Image
            src={large.src}
            alt={large.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          {/* Overlay hint */}
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" /></svg>
            View
          </span>
          {(large.caption || large.subcaption) && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/70 to-transparent p-6 pt-20 text-background sm:p-8 sm:pt-24">
              {large.subcaption && <p className="text-sm font-semibold text-background/75">{large.subcaption}</p>}
              {large.caption && <p className="mt-1 text-2xl font-extrabold">{large.caption}</p>}
            </div>
          )}
        </button>

        {/* Two small images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {([small1, small2] as GalleryImage[]).map((img, idx) => (
            <button
              key={img.src + idx}
              type="button"
              onClick={() => open(idx + 1)}
              className="group relative min-h-[220px] overflow-hidden bg-dark sm:min-h-[250px] cursor-zoom-in w-full"
              aria-label={`View full size: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 40vw"
              />
              <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" /></svg>
                View
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-16 h-[82vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightboxIndex}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 85vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/50">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
