"use client";

import Image from "next/image";

export default function AnimatedVolleyBall() {
  return (
    <div className="group relative flex items-center justify-center">
      {/* Glow detrás */}
      <div
        className="
          absolute inset-0 h-14 w-14
          rounded-full bg-brand-500/20 blur-xl
          opacity-60 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* Imagen principal */}
      <Image
        src="/balon-voley-dark.png"
        alt="Balón de vóley"
        width={58}
        height={58}
        className="
          relative z-10
          animate-bounce-soft
          transition-transform duration-500
          group-hover:animate-spin-slow group-hover:scale-110
        "
      />
    </div>
  );
}
