import Link from "next/link";
import type { TrainingCardProps } from "../_types/TrainingCard";

const TrainingCard = ({ category, dateTime, place }: TrainingCardProps) => {
  return (
    <div className="relative animate-fade-right [animation-delay:150ms]">
      {/* Glow de fondo (con tu paleta real) */}
      <div
        className="absolute inset-0 bg-gradient-to-br 
        from-accent-500/20 via-accent-400/10 to-secondary-500/20 
        blur-3xl -z-10"
      />

      <div
        className="
        rounded-3xl border border-primary-800 
        bg-primary-900/70 p-6 shadow-xl space-y-5
      "
      >
        {/* Header */}
        <h2 className="text-lg font-semibold text-primary-50 flex items-center justify-between gap-2">
          <span>Próximo entrenamiento</span>

          <span
            className="
            text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full 
            bg-accent-500/15 text-accent-300 
            border border-accent-500/40 whitespace-nowrap
          "
          >
            Cupos disponibles
          </span>
        </h2>

        {/* Datos del entrenamiento */}
        <div className="space-y-3 text-sm text-primary-300">
          <p>
            <span className="font-semibold text-primary-50">Categoría:</span>{" "}
            {category}
          </p>
          <p>
            <span className="font-semibold text-primary-50">Día y hora:</span>{" "}
            {dateTime}
          </p>
          <p>
            <span className="font-semibold text-primary-50">Lugar:</span>{" "}
            {place}
          </p>
        </div>

        {/* Mini-cards */}
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="rounded-2xl border border-primary-800 bg-primary-900/60 px-3 py-2">
            <p className="text-[0.65rem] text-primary-400">Niños/as</p>
            <p className="text-sm sm:text-base font-semibold text-primary-50">
              8-14
            </p>
          </div>

          <div className="rounded-2xl border border-primary-800 bg-primary-900/60 px-3 py-2">
            <p className="text-[0.65rem] text-primary-400">Cupos</p>
            <p className="text-sm sm:text-base font-semibold text-accent-300">
              Limitados
            </p>
          </div>

          <div className="rounded-2xl border border-primary-800 bg-primary-900/60 px-3 py-2">
            <p className="text-[0.65rem] text-primary-400">Nivel</p>
            <p className="text-sm sm:text-base font-semibold text-secondary-500">
              Formativo
            </p>
          </div>
        </div>

        {/* Botón */}
        <Link
          href="/contact"
          className="
            group mt-2 inline-flex w-full items-center justify-center
            rounded-full border border-accent-500/40 bg-accent-500/10
            px-4 py-2 text-[11px] font-semibold text-accent-300
            transition-all duration-200
            hover:bg-accent-500/20 hover:text-accent-100 hover:border-accent-400
          "
        >
          <span>Hablar con el entrenador para más detalles</span>
          <span
            className="
              ml-1 text-xs transition-transform duration-200
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
