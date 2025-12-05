// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="space-y-8">
      {/* Título y descripción */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-accent-400">Contacto</h1>
        <p className="text-sm text-primary-50 max-w-xl">
          Si tienes dudas sobre horarios, categorías, cupos o pagos, puedes
          escribirnos por WhatsApp, correo o completar el formulario.
        </p>
      </header>

      {/* Grid principal */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Columna izquierda: info de contacto */}
        <div className="rounded-2xl border border-primary-800 bg-primary-900/70 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-primary-50">
            Datos del club
          </h2>

          <div className="space-y-3 text-sm text-primary-300">
            <div>
              <p className="font-semibold text-primary-50 flex items-center gap-2">
                <span>📍</span> Lugares de entrenamiento
              </p>

              {/* Cancha 1 */}
              <div className="mt-2 space-y-1 text-sm">
                <p className="font-semibold text-primary-50">
                  Gimnasio Colegio Real – San Fernando
                </p>
                <p className="text-primary-300">
                  Valdivia 440, San Fernando, O&apos;Higgins, Chile
                </p>
                <a
                  href="https://www.google.com/maps?q=Valdivia+440+San+Fernando+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent-300 hover:text-accent-200"
                >
                  Ver en Google Maps →
                </a>
              </div>

              {/* Cancha 2 */}
              <div className="mt-4 space-y-1 text-sm">
                <p className="font-semibold text-primary-50">
                  Gimnasio Discapacitados – San Fernando
                </p>
                <p className="text-primary-300">
                  Valdivia #833, San Fernando, O&apos;Higgins, Chile
                </p>
                <a
                  href="https://www.google.com/maps?q=Valdivia+833+San+Fernando+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent-300 hover:text-accent-200"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-primary-50 flex items-center gap-2">
                <span>🕒</span> Horarios generales
              </p>
              <p className="text-primary-300">
                Todos los Sábados de 11:30 a 13:00 hrs
                <br />
                (Horarios específicos por categoría se informan en el grupo).
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary-50 flex items-center gap-2">
                <span>📱</span> WhatsApp
              </p>
              <p className="text-primary-300">+56 977828450</p>
            </div>

            <div>
              <p className="font-semibold text-primary-50 flex items-center gap-2">
                <span>✉️</span> Correo electrónico
              </p>
              <p className="text-primary-300">
                escuelitavoley.leones@example.com
              </p>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/56977828450"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold
            bg-accent-500 text-primary-50 border border-accent-500 transition-all duration-200 hover:bg-transparent 
            hover:text-accent-400 hover:shadow-accent-400/20 hover:shadow-md hover:-translate-y-0.5"
          >
            Escribir por WhatsApp
          </a>
        </div>

        {/* Columna derecha: formulario */}
        <div className="rounded-2xl border border-primary-800 bg-primary-900/70 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-primary-50">
            Enviar mensaje
          </h2>
          <p className="text-sm text-primary-50">
            Déjanos tus datos y te contactaremos para resolver tus dudas o
            coordinar la inscripción de tu hijo/a.
          </p>

          <form className="space-y-4" noValidate>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-primary-50">
                Nombre del apoderado
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Tu nombre"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-primary-50">
                Nombre del jugador/a
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Nombre del niño o niña"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-primary-50">
                Correo electrónico
              </label>
              <input
                type="email"
                className="input w-full"
                placeholder="tucorreo@mail.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wide text-primary-50">
                Mensaje
              </label>
              <textarea
                className="input w-full min-h-[120px] resize-none"
                placeholder="Cuéntanos en qué podemos ayudarte (categoría, horarios, cupos, etc.)"
              />
            </div>

            {/* <button type="button" className="btn btn-accent w-full md:w-auto">
              Enviar mensaje
            </button> */}

            <p className="text-[11px] text-primary-50">
              * Este formulario es solo de contacto informativo. La inscripción
              oficial se coordina directamente con el entrenador.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
