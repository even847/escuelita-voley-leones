import type { Metadata } from "next";
import "./globals.css";
import MainNav from "./_components/MainNav";
import Footer from "./_components/Footer"

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

        <Footer />
      </body>
    </html>
  );
}
