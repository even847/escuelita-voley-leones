import Link from "next/link";
import AnimatedVolleyBall from "./_components/AnimatedVolleyBall";
import GalleryCarousel from "./_components/GalleryCarousel";

export default function HomePage() {
  return (
    <section className="pb-10 space-y-10">
      {/* HERO PRINCIPAL */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        {/* Columna izquierda: texto principal */}
        <div className="space-y-3 sm:space-y-6 mt-1 ">
          {/* Badge superior */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-brand-500/10 text-brand-300 border border-brand-500/30">
            {/* 🏐 Club de voleibol formativo para niños y jóvenes */}
            Club de voleibol formativo para niños y jóvenes
          </span>

          {/* Título + pelota animada */}
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-50 leading-tight ">
               <span className="text-brand-200 ">Club Voleibol Leones</span>
            </h1>
            <AnimatedVolleyBall variant="inline"/>
          </div>

          <p className="text-slate-200 max-w-xl text-sm sm:text-base leading-relaxed">
            Entrenamos a niños y jóvenes en voleibol, fomentando el trabajo en
            equipo, la disciplina y el amor por el deporte. Aquí encontrarás
            información de entrenamientos, partidos, pagos, noticias y mucho más
            del club.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/players"
              className="
                w-full sm:w-auto text-center inline-flex items-center justify-center
                px-6 py-2.5 rounded-full text-sm font-semibold
                bg-accent-500 text-white border border-accent-500
                transition-all duration-200
                hover:bg-transparent hover:text-accent-400 hover:shadow-accent-400/20 hover:shadow-md
                hover:-translate-y-0.5"
            >
              Ver categorías y jugadores
            </Link>

            <Link
              href="/contact"
              className="
                w-full sm:w-auto text-center inline-flex items-center justify-center
                px-5 py-2.5 rounded-full border border-slate-600 text-slate-100 text-sm font-semibold
                transition-all duration-200
              hover:border-accent-400 hover:text-accent-300 hover:bg-accent-500/10 hover:shadow-accent-400/20 hover:shadow-md hover:-translate-y-0.5"
            >
              Inscribir a un jugador
            </Link>
          </div>
        </div>

        {/* Columna derecha: tarjeta “Próximo entrenamiento” */}
        <div className="relative animate-fade-right [animation-delay:150ms]">
          <div className="absolute inset-0 bg-linear-to-br from-brand-500/20 via-brand-400/10 to-sky-500/20 blur-3xl -z-10" />

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl space-y-5">
            <h2 className="text-lg font-semibold text-slate-100 flex items-center justify-between gap-2">
              <span>Próximo entrenamiento</span>
              <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-500/40 whitespace-nowrap">
                Cupos disponibles
              </span>
            </h2>

            <div className="space-y-3 text-sm text-slate-200">
              <p>
                <span className="font-semibold">Categoría:</span> Sub14
              </p>
              <p>
                <span className="font-semibold">Día y hora:</span> Todos los
                Sabados de 11:30 - 13:00
              </p>
              <p>
                <span className="font-semibold">Lugar:</span> Gimnasio Colegio
                Real o Gimnasio Discapacitados
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2">
                <p className="text-[0.65rem] text-slate-400">Niños/as</p>
                <p className="text-base font-semibold text-brand-300">8-14</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2">
                <p className="text-[0.65rem] text-slate-400">Cupos</p>
                <p className="text-base font-semibold text-emerald-300">
                  Limitados
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2">
                <p className="text-[0.65rem] text-slate-400">Nivel</p>
                <p className="text-base font-semibold text-sky-300">
                  Formativo
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="
                group mt-2 inline-flex w-full items-center justify-center
                rounded-full border border-emerald-500/40 bg-emerald-500/5
                px-4 py-2 text-[11px] font-semibold text-emerald-200
                transition-all duration-200
                hover:bg-emerald-500/15 hover:text-emerald-50 hover:border-emerald-400"
            >
              <span>Hablar con el entrenador para más detalles</span>
              <span
                className="
                  ml-1 text-xs transition-transform duration-200
                  group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <GalleryCarousel />
    </section>
  );
}
