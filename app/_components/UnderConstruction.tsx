"use client";

import type { ReactNode } from "react";

type UnderConstructionProps = {
  /** Nombre de la sección, por ejemplo: "El club", "Entrenamientos" */
  sectionName?: string;
  /** Texto opcional personalizado */
  message?: string;
  /** Ícono opcional (por defecto 🚧) */
  icon?: ReactNode;
  /** Si quieres que centre todo en la pantalla */
  fullHeight?: boolean;
};

export default function UnderConstruction({
  sectionName,
  message,
  icon,
  fullHeight = false,
}: UnderConstructionProps) {
  const title = sectionName
    ? `Sección ${sectionName} en construcción`
    : "Sección en construcción";

  const fallbackMessage =
    "Estamos trabajando en esta sección para traerte más información pronto.";

  return (
    <div
      className={`w-full flex items-center justify-center ${
        fullHeight ? "min-h-[60vh]" : "py-10"
      }`}
    >
      <div className="rounded-3xl bg-slate-900/70 border border-slate-800 px-6 py-8 shadow-xl max-w-xl w-full text-center">
        <div className="text-5xl mb-3 flex justify-center">
          {icon ?? <span className="animate-bounce">🚧</span>}
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-2">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-400">
          {message ?? fallbackMessage}
        </p>
      </div>
    </div>
  );
}
