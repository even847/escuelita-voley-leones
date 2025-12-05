"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import FullscreenWrapper from "./FullscreenWrapper";
import { gallerySlides } from "../_data/gallerySlides";
import type { Slide } from "../_types/Slide";

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const total = gallerySlides.length;
  const currentSlide: Slide = gallerySlides[current];

  const goTo = (index: number) => {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    setCurrent(index);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <FullscreenWrapper isFullscreen={isFullscreen}>
      <div
        className=" relative rounded-3xl overflow-hidden bg-primary-900/70 border border-primary-800 shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="relative h-72 sm:h-96">
          {gallerySlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === current
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1400}
                height={800}
                className="object-cover w-full h-full"
                priority={index === current}
              />

              {/* Gradiente oscuro */}
              <div className="absolute inset-0 bg-linear-to-t from-primary-900/80 via-primary-900/50 to-transparent" />

              {/* Card transparente */}
              <div className="absolute bottom-4 left-4 sm:left-6 right-auto">
                <div className="max-w-xs bg-primary-900/40 border border-primary-50/10 rounded-lg p-2.5 backdrop-blur-sm shadow-lg">
                  <div className="flex gap-2 mb-1 text-[10px]">
                    <span className="px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-300 uppercase font-medium">
                      {currentSlide.type}
                    </span>

                    {currentSlide.category && (
                      <span className="px-2 py-0.5 rounded-full bg-primary-50/10 text-primary-50">
                        {currentSlide.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-[13px] font-semibold text-primary-50 leading-tight line-clamp-1">
                    {currentSlide.title}
                  </h3>

                  {currentSlide.subtitle && (
                    <p className="text-[11px] text-primary-300 line-clamp-1 mt-0.5">
                      {currentSlide.subtitle}
                    </p>
                  )}

                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-primary-300">
                    {currentSlide.date && <span>📅 {currentSlide.date}</span>}
                    {currentSlide.location && (
                      <span>📍 {currentSlide.location}</span>
                    )}

                    <span className="ml-auto text-[10px] text-primary-400">
                      Foto {current + 1} de {total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón ← */}
        <button
          onClick={prev}
          className="
            absolute left-3 top-1/2 -translate-y-1/2 bg-primary-900/40 text-primary-50 
            h-8 w-8 rounded-full flex items-center justify-center text-lg hover:bg-primary-900/70"
        >
          ‹
        </button>

        {/* Botón → */}
        <button
          onClick={next}
          className="
            absolute right-3 top-1/2 -translate-y-1/2 bg-primary-900/40 text-primary-50 
            h-8 w-8 rounded-full flex items-center justify-center text-lg hover:bg-primary-900/70"
        >
          ›
        </button>

        {/* Pantalla completa */}
        <button
          onClick={() => setIsFullscreen((v) => !v)}
          className="
            absolute top-3 right-3 bg-primary-900/45 text-primary-50 
            px-2 py-1 rounded-full text-xs hover:bg-primary-900/70"
        >
          {isFullscreen ? "Cerrar" : "Pantalla completa"}
        </button>
      </div>

      {/* Indicadores */}
      <div className="mt-3 flex justify-center gap-2">
        {gallerySlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === current
                ? "w-6 bg-accent-400"
                : "w-2 bg-primary-700 hover:bg-primary-500"
            }`}
          />
        ))}
      </div>

      {/* Miniaturas */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {gallerySlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goTo(index)}
            className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border transition-all ${
              index === current
                ? "border-accent-400 ring-2 ring-accent-400/60"
                : "border-primary-700 hover:border-primary-400"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-x-0 bottom-0 bg-primary-900/50 text-[10px] text-center text-primary-50 px-1 py-0.5 line-clamp-2">
              {slide.type} · {slide.category}
            </div>
          </button>
        ))}
      </div>
    </FullscreenWrapper>
  );
}
