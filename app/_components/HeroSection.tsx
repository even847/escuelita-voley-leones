import Link from "next/link";
import AnimatedVolleyBall from "./AnimatedVolleyBall";

const HeroSection = () => {
  return (
    <div className="space-y-3 sm:space-y-6 mt-1">
      {/* Badge superior */}
      <span
        className="
          inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium
        bg-accent-500/10 text-primary-50/95 border border-accent-500/30"
      >
        Club de voleibol formativo para niños y jóvenes
      </span>

      {/* Título + pelota animada */}
      <div className="flex items-center gap-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-50 leading-tight text-shine">
          {/* Versión corta solo para mobile */}
          <span className="sm:hidden">Club Leones</span>

          {/* Versión completa desde sm en adelante */}
          <span className="hidden sm:inline">Club Voleibol Leones</span>
        </h1>
        <AnimatedVolleyBall variant="inline" />
      </div>

      <p className="text-primary-50 max-w-xl text-sm sm:text-base leading-relaxed">
        Entrenamos a niños y jóvenes en voleibol, fomentando el trabajo en
        equipo, la disciplina y el amor por el deporte. Aquí encontrarás
        información de entrenamientos, partidos, pagos, noticias y mucho más del
        club.
      </p>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Botón principal */}
        <Link
          href="/players"
          className="
            w-full sm:w-auto text-center inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold
            bg-accent-500 text-primary-50 border border-accent-500 transition-all duration-200 hover:bg-transparent 
            hover:text-accent-400 hover:shadow-accent-400/20 hover:shadow-md hover:-translate-y-0.5 "
        >
          Ver categorías y jugadores
        </Link>

        {/* Botón secundario */}
        <Link
          href="/contact"
          className="
            w-full sm:w-auto text-center inline-flex items-center justify-center px-5 py-2.5 rounded-full 
            border border-primary-700 text-primary-50 text-sm font-semibold transition-all duration-200
            hover:border-accent-400 hover:text-accent-300 hover:bg-accent-500/10 hover:shadow-accent-400/20 
            hover:shadow-md hover:-translate-y-0.5"
        >
          Inscribir a un jugador
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
