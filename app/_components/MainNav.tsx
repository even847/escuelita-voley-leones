"use client";

import { useState } from "react";
import ClubLogo from "./ClubLogo";
import Link from "next/link";

export function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur overflow-visible">
      <nav className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between h-20">
        {/* Logo / nombre del club */}
        <Link href="/" className="flex items-center -ml-4 md:-ml-8 lg:-ml-16">
          <ClubLogo variant="nav" />
        </Link>

        {/* Botones del menú en desktop */}
        <div className="hidden md:flex gap-4 text-sm">
          <Link href="/club" className="hover:text-accent-400">
            El club
          </Link>
          <Link href="/trainings" className="hover:text-accent-400">
            Entrenamientos
          </Link>
          <Link href="/contact" className="hover:text-accent-400">
            Contacto
          </Link>
        </div>

        {/* Botón hamburguesa (solo mobile) */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {/* Icono hamburguesa */}
          <svg
            className={`h-5 w-5 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Icono cerrar */}
          <svg
            className={`h-5 w-5 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6l-12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Menú desplegable mobile */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <Link
              href="/club"
              className="py-1 hover:text-accent-400"
              onClick={() => setOpen(false)}
            >
              El club
            </Link>
            <Link
              href="/trainings"
              className="py-1 hover:text-accent-400"
              onClick={() => setOpen(false)}
            >
              Entrenamientos
            </Link>
            <Link
              href="/contact"
              className="py-1 hover:text-accent-400"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
