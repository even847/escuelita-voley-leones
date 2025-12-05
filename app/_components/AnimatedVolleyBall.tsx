// app/_components/AnimatedVolleyBall.tsx
"use client";

import Image from "next/image";

type AnimatedVolleyBallProps = {
  /** "inline" = dentro del texto (como la 'o'); "hero" = versión grande */
  variant?: "inline" | "hero";
};

export default function AnimatedVolleyBall({
  variant = "inline",
}: AnimatedVolleyBallProps) {
  if (variant === "hero") {
    // 🔹 Versión grande (por si la usas en otro sitio, hero, etc.)
    return (
      <div className="relative inline-flex h-20 w-20 items-end justify-center">
        {/* Glow / sombra debajo del balón */}
        <div
          className="
            pointer-events-none absolute bottom-2
            h-2 w-16 rounded-full
            animate-[ball-shadow-glow_1.5s_cubic-bezier(0.33,0.66,0.66,1)_infinite]
          "
        />

        {/* Balón que solo rebota */}
        <div
          className="
            relative z-10 origin-bottom
            animate-[ball-bounce-only_1.5s_ease-in-out_infinite]
          "
        >
          <Image
            src="/balon-voley-transparente.png"  
            alt="Balón de vóley"
            width={64}
            height={64}
            className="w-16 h-16 drop-shadow-xl"
          />
        </div>
      </div>
    );
  }

  // 🔹 Versión inline: la que usas como la segunda "o" de Voleibol
  return (
    <div className="relative inline-block w-18 h-12 align-middle -mx-0.5">
      <div
        className="
          pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2
          h-1.5 w-9 rounded-full bg-accent-400/25 blur-md
          animate-[ball-shadow-glow_1.4s_ease-in-out_infinite]
        "
      />

      {/* Balón que rebota */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 -bottom-0.5 origin-bottom z-10
          animate-[ball-bounce-only_1.4s_ease-in-out_infinite]
        "
      >
        <Image
          src="/balon-voley-transparente.png"  
          alt="Balón de vóley"
          width={56}
          height={56}
          className="w-14 h-14 drop-shadow-xl"
        />
      </div>
    </div>
  );
}
