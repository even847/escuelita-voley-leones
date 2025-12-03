"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClubLogo from "./ClubLogo";

const navLinks = [
  { href: "/club", label: "El club" },
  { href: "/trainings", label: "Entrenamientos" },
  { href: "/contact", label: "Contacto" },
];

export function MainNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        {/* Fila principal: logo + nav / botón */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-4 sm:-ml-8">
            <ClubLogo variant="nav" />
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex gap-2 text-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-3 py-1 rounded-full transition 
                    group
                    ${
                      active
                        ? "text-emerald-300"
                        : "text-slate-200 hover:text-emerald-200"
                    }
                  `}
                >
                  {/* Texto */}
                  <span className="relative z-10">{link.label}</span>

                  {/* Fondo suave al hover / activo */}
                  <span
                    className={`
                      absolute inset-0 rounded-full transition 
                      ${
                        active
                          ? "bg-emerald-500/15 border border-emerald-400/40"
                          : "bg-transparent group-hover:bg-slate-800/70"
                      }
                    `}
                  />

                  {/* Barra inferior animada */}
                  <span
                    className={`
                      absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 rounded-full 
                      transition-all duration-200
                      ${
                        active
                          ? "w-6 bg-emerald-400"
                          : "w-0 bg-emerald-400 group-hover:w-6"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Botón mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 text-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Menú mobile (debajo de la barra, empujando el contenido) */}
        {open && (
          <div className="md:hidden pb-3 pt-3 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    block px-2 py-2 rounded-lg text-sm transition
                    ${
                      active
                        ? "text-emerald-300 bg-slate-800/90"
                        : "text-slate-100 hover:bg-slate-800/80"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
