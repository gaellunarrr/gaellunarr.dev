interface ButtonProps {
  label: string;
  mobileLabel?: string;
  href: string;
  download?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function Button({
  label,
  mobileLabel = "CV",
  href,
  download,
  icon,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      download={download}
      className={`relative px-4 py-3 group overflow-hidden transition-all duration-300
                 bg-[#1A1A1A] text-white
                 font-bold text-xs md:text-sm tracking-[0.15em] uppercase
                 hover:bg-white hover:text-[#BC002D]
                 border-2 border-[#1A1A1A]
                 flex items-center gap-2`}
    >
      {/* Efecto de fondo que se desliza (moderno) */}
      <div className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full z-0" />

      <span className="relative z-10 md:hidden">{mobileLabel}</span>

      <span className="relative z-10 hidden md:inline">{label}</span>

      {/* Icono minimalista de descarga */}
      <svg
        className="relative z-10 w-4 h-4 transition-transform group-hover:translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </a>
  );
}
