import Image from "next/image";

type ClubLogoProps = {
  variant?: "nav" | "hero";
};

const ClubLogo = ({ variant = "nav" }: ClubLogoProps) => {
  const isNav = variant === "nav";

  // Tamaños reales del logo
  const size = isNav ? 140 : 200;

  // Escala solo para el icono en el nav
  const iconScaleClasses = isNav
    ? "origin-top-left scale-125 md:scale-150"
    : "";

  return (
    <div
      className={`
        group flex items-center gap-3
        ${isNav ? "gap-6 py-1" : "gap-3 py-2"}
      `}
    >
      {/* Contenedor del icono */}
      <div className={`relative ${iconScaleClasses}`}>
        {/* Glow: solo visible en hover */}
        <div
          className="
            absolute inset-0 rounded-full bg-green-500/30 blur-xl
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />

        {/* Imagen del logo */}
        <Image
          src="/Leones_V11.png"
          alt="Leones Vóleibol San Fernando"
          width={size}
          height={size}
          className="
            relative z-10
            rounded-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Texto al lado */}
      <div className="leading-tight">
        <p
          className={`
            uppercase tracking-[0.20em] text-green-400
            ${isNav ? "text-[9px]" : "text-[11px]"}
          `}
        >
          CLUB
        </p>
        <p
          className={`
            font-extrabold text-white
            ${isNav ? "text-sm" : "text-xl"}
          `}
        >
          Voleibol Leones
        </p>
        <p
          className={`
            text-slate-400
            ${isNav ? "text-[9px]" : "text-[11px]"}
          `}
        >
          San Fernando · Chile
        </p>
      </div>
    </div>
  );
};

export default ClubLogo;
