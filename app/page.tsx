// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="pb-10 space-y-10 sm:pt-10">
      {/* HERO PRINCIPAL */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        {/* Columna izquierda: texto principal */}
        <div className="space-y-3 sm:space-y-6 mt-1">
          {/* Badge superior */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-brand-500/10 text-brand-300 border border-brand-500/30">
            🏐 Escuelita de voleibol para niños y jóvenes
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-400 leading-tight">
            Bienvenido a la{" "}
            <span className="text-brand-500">Escuelita Vóley Leones</span>
          </h1>

          <p className="text-slate-200 max-w-xl text-sm sm:text-base leading-relaxed">
            Entrenamos a niños y jóvenes en voleibol, fomentando el trabajo en
            equipo, la disciplina y el amor por el deporte. Aquí encontrarás
            información de entrenamientos, partidos, pagos, noticias y mucho más
            del club.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* CTA principal */}
            <Link
              href="/players"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent-500 text-white text-sm font-semibold shadow-md hover:bg-accent-400 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
            >
              Ver categorías y jugadores
            </Link>

            {/* Secundario */}
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-600 text-slate-100 text-sm font-semibold hover:border-brand-400 hover:text-brand-300 transition"
            >
              Inscribir a un jugador
            </Link>
          </div>

          {/* Línea de info rápida */}
          <p className="text-xs sm:text-sm text-slate-400">
            📍 Gimnasio Colegio Real · 🕒 Sábados · Nivel de formación.
          </p>
        </div>

        {/* Columna derecha: tarjeta “Próximo entrenamiento” */}
        <div className="relative">
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
                <span className="font-semibold">Día y hora:</span> Todos los Sabados de 11:30 - 13:00
              </p>
              <p>
                <span className="font-semibold">Lugar:</span> Gimnasio Colegio Real o Gimnasio Discapacitados
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
                <p className="text-base font-semibold text-sky-300">Inicial</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-center text-xs font-semibold text-brand-300 hover:text-brand-200 underline underline-offset-4"
            >
              Hablar con el entrenador para más detalles →
            </Link>
          </div>
        </div>
      </div>

      {/* BLOQUES INFORMATIVOS (abajo) */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-1 text-slate-50">Entrenamientos</h3>
          <p className="text-xs text-slate-400">
            Días y horarios de práctica, niveles y categorías disponibles.
          </p>

          <ul className="mt-3 space-y-2 text-xs text-slate-300">
            <li>
              📅 <strong>Sábados</strong> - 11:30 a 13:00
            </li>
            <li>📍 Gimnasio Colegio Real</li>
            <li>👦 Categoría: Sub 14</li>
            <li>🏐 Nivel: Inicial y formativo</li>
          </ul>

          <Link
            href="/trainings"
            className="inline-block mt-3 text-accent-300 hover:text-accent-200 text-xs underline underline-offset-4"
          >
            Ver detalles →
          </Link>
        </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-1 text-slate-50">Entrenamientos</h3>
          <p className="text-xs text-slate-400">
            Días y horarios de práctica, niveles y categorías disponibles.
          </p>

          <ul className="mt-3 space-y-2 text-xs text-slate-300">
            <li>
              📅 <strong>Sábados</strong> - 13:00 a 15:00
            </li>
            <li>📍 Gimnasio Colegio Real</li>
            <li>👦 Categoría: Sub 18</li>
            <li>🏐 Nivel: Competitivo</li>
          </ul>

          <Link
            href="/trainings"
            className="inline-block mt-3 text-accent-300 hover:text-accent-200 text-xs underline underline-offset-4"
          >
            Ver detalles →
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-1 text-slate-50">Torneos</h3>
          <p className="text-xs text-slate-300">
            Amistosos, torneos locales y resultados recientes de todas las
            categorías.
          </p>
        </div>
      </div>
    </section>
  );
}
