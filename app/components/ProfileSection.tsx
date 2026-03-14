import Image from "next/image";

export default function ProfileSection() {
  return (
    <main className="relative min-h-screen w-full bg-[#F9F5F0] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Contenedor Principal: Controla el ancho máximo y el centrado de los textos */}
      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        {/* 1. Izquierda: Nombre (Centrado en móvil, Izquierda en desktop) */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] tracking-tighter">
            Gael Luna
          </h1>
          <p className="text-xl md:text-2xl text-[#4A4A4A] font-light mt-2 ml-3 tracking-wide">
            Full Stack Developer
          </p>
        </div>

        {/* 2. Centro: Círculo y Árbol (Ancla) */}
        <div className="relative flex-shrink-0 order-1 md:order-2">
          {/* Tamaño del círculo: 280px en móvil, 450px en desktop */}
          <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* El Sol Rojo */}
            <div className="absolute inset-0 bg-[#BC002D] rounded-full shadow-2xl" />

            {/* El Árbol (Anclado al círculo) */}
            <div className="absolute -top-[12%] -right-[10%] w-[70%] h-[70%] z-20 pointer-events-none">
              <Image
                src="/tree.svg"
                alt="Japanese Tree"
                width={400}
                height={400}
                className="w-full h-full object-contain rotate-12 opacity-95"
              />
            </div>

            {/* Los Logos */}
            <div className="relative z-30 flex gap-6 md:gap-8">
              <a
                href="https://linkedin.com/in/gael-luna/"
                target="_blank"
                className="group hover:scale-110 transition-transform hover:shadow-[0_0_0_2px_#B6985E]"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={44}
                  height={44}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>
              <a
                href="/cv.pdf"
                download
                className="relative px-4 py-3 group overflow-hidden transition-all duration-300
             bg-[#1A1A1A] text-white
             font-bold text-xs md:text-sm tracking-[0.15em] uppercase
             hover:bg-white hover:text-[#BC002D]
             border-2 border-[#1A1A1A]
             flex items-center gap-2"
              >
                {/* Efecto de fondo que se desliza (moderno) */}
                <div className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full z-0" />

                <span className="relative z-10">Descargar CV</span>

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
              <a
                href="https://github.com/gaellunarrr"
                target="_blank"
                className="hover:scale-110 transition-transform hover:shadow-[0_0_0_2px_#B6985E]"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={44}
                  height={44}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Derecha: Biografía (Centrado en móvil, Derecha en desktop) */}
        <div className="flex-1 text-center md:text-right order-3">
          <div className="max-w-sm mx-auto md:ml-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
              Who I am?
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed font-serif text-base md:text-lg italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>
      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-30"
      >
        <span className="text-[#BC002D] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-[#BC002D] group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </a>
      {/* Fondo Decorativo (Opcional: Sutil textura o sombra) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
    </main>
  );
}
