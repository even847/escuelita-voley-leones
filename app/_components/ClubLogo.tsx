import Image from "next/image";

type ClubLogoProps = {
  variant?: "nav" | "hero";
};

const ClubLogo = ({ variant = "nav" }: ClubLogoProps) => {
  const isNav = variant === "nav";
  const size = isNav ? 140 : 200;
  const iconScaleClasses = isNav ? "origin-top-left scale-125 md:scale-150" : "";

  return (
    <div
      className={`group flex items-center ${isNav ? "gap-6 py-1" : "gap-3 py-2"} `}
    >
      <div className={`relative ${iconScaleClasses}`}>
        <div
          className="
            absolute inset-0 rounded-full bg-accent-500/30 blur-xl
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <Image
          src="/Leones_V11.png"
          alt="Leones Vóleibol San Fernando"
          width={size}
          height={size}
          className="
            relative z-10 rounded-full object-cover transition-transform duration-300
            group-hover:scale-105"
        />
      </div>

      <div className="leading-tight">
        <p className={`uppercase tracking-[0.20em] text-accent-400 ${isNav ? "text-[9px]" : "text-[11px]"} `}>
          CLUB
        </p>

        <p className={`font-extrabold text-primary-50 ${isNav ? "text-sm" : "text-xl"} `}>
          Voleibol Leones
        </p>

        <p className={`text-primary-300 ${isNav ? "text-[9px]" : "text-[11px]"} `}>
          San Fernando · Chile
        </p>
      </div>
    </div>
  );
};

export default ClubLogo;
