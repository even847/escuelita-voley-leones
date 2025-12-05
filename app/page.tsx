import HeroSection from "./_components/HeroSection"
import GalleryCarousel from "./_components/GalleryCarousel";
import TrainingCard from "./_components/TrainingCard";

export default function HomePage() {
  return (
    <section className="pb-10 space-y-10">
      {/* HERO PRINCIPAL */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        {/* Columna izquierda: texto principal */}
        <HeroSection />

        {/* Columna derecha: tarjeta “Próximo entrenamiento” */}
        <TrainingCard 
          category="Sub-14" 
          place="Gimnasio Discapacitados" 
          dateTime="Sabado 05 de Diciembre - 11:30 a 13:00" 
        />
      </div>

      <GalleryCarousel />
    </section>
  );
}
