import { experience } from "@/app/constants/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-[#0D0D0D] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Detalle decorativo: Un resplandor carmesí muy sutil al fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9A001F] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título Estilo Moderno */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase inline-block">
            Experience<span className="text-[#9A001F]">.</span>
          </h2>
          <div className="w-80 h-1 bg-[#D4AF37] mt-4" />
        </div>

        {/* Lista de Cards con estilo de línea de tiempo */}
        <div className="space-y-12 md:space-y-20 border-l border-white/10 ml-4 md:ml-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="relative pl-8 md:pl-16 group transition-all duration-500"
            >
              {/* El Punto de la línea de tiempo (Neon effect on hover) */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white group-hover:bg-[#9A001F] group-hover:shadow-[0_0_15px_#9A001F] transition-all duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-8">
                {/* Lado Izquierdo: Empresa y Periodo */}
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] font-mono text-sm tracking-widest uppercase mb-1">
                    {item.period}
                  </span>
                  <span className="text-white/60 text-lg md:text-xl font-medium tracking-tight">
                    {item.company}
                  </span>
                </div>

                {/* Lado Derecho: Rol y Descripción */}
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#9A001F] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed font-serif text-base md:text-lg italic opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Marca de agua Kanji: 'Noche' (夜) */}
      <div
        className="absolute 
          /* Móvil: Abajo a la izquierda, muy grande y medio salido */
          -bottom-10 -left-16 
          /* Desktop: Regresa a su posición original */
          md:-bottom-20 md:-left-20 
          
          /* Tamaño: 20rem en móvil para que sea masivo, 30rem en desktop */
          text-[20rem] md:text-[30rem] 
          
          font-bold text-white/[0.03] 
          select-none pointer-events-none 
          z-0 leading-none"
      >
        夜
      </div>
    </section>
  );
}
