import { experience } from "@/app/constants/experience";
import { ProjectBento } from "../ui/ProjectBento";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-[#0D0D0D] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Contenedor principal expandido a 7xl para darle espacio al Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título Estilo Moderno */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase inline-block">
            Experience<span className="text-[#9A001F]">.</span>
          </h2>
          <div className="w-80 h-1 bg-[#D4AF37] mt-4" />
        </div>

        {/* Lista de Experiencias (Línea de tiempo) */}
        <div className="space-y-24 border-l border-white/10 ml-4 md:ml-8">
          {experience.map((item, index) => (
            <article
              key={index}
              className="relative pl-8 md:pl-16 group transition-all duration-500"
            >
              {/* El Punto de la línea de tiempo (Neon effect on hover) */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white group-hover:bg-[#9A001F] group-hover:shadow-[0_0_15px_#9A001F] transition-all duration-300" />

              {/* Contenido en una sola columna gigante */}
              <div className="w-full">
                {/* 1. Encabezado de la Experiencia */}
                <div className="mb-6">
                  <span className="text-[#D4AF37] font-mono text-sm tracking-widest uppercase mb-2 block">
                    {item.period}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#9A001F] transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-white/60 text-lg md:text-xl font-medium tracking-tight block">
                    @ {item.company}
                  </span>
                </div>

                {/* 2. Descripción */}
                <p className="text-[#A0A0A0] leading-relaxed font-serif text-base md:text-lg italic opacity-80 group-hover:opacity-100 transition-opacity max-w-4xl mb-12">
                  {item.description}
                </p>

                {/* 3. GRID 2x2 DE PROYECTOS */}
                {/* Solo dibuja el componente Bento si hay proyectos en el arreglo */}
                {item.projects && item.projects.length > 0 && (
                  <ProjectBento projects={item.projects} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Marca de agua Kanji: 'Noche' (夜) */}
      <div
        className="absolute 
          -bottom-10 -left-16 
          md:-bottom-20 md:-left-20 
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
