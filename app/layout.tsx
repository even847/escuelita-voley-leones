import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "./_components/MainNav";

export const metadata: Metadata = {
  title: "Club Voleibol Leones",
  description: "Sitio oficial de la escuelita de voleibol Leones"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* flex-col para header + contenido + footer */}
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <MainNav />

        {/* grow para que el main empuje el footer al fondo */}
        <main className="max-w-6xl mx-auto w-full px-4 py-8 grow">
          {children}
        </main>

        <footer className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Escuelita Vóley Leones. Todos los
            derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
