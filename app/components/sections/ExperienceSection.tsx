import { experience } from "@/app/constants/experience";
import { ProjectBento } from "../ui/ProjectBento";
import { ScrollArrow } from "../ui/ScrollArrow";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-[#0D0D0D] py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título de Sección */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase inline-block">
            Experience<span className="text-[#9A001F]">.</span>
          </h2>
          <div className="w-40 md:w-80 h-1.5 bg-[#D4AF37] mt-6" />
        </div>

        {/* Timeline */}
        <div className="space-y-32 border-l border-white/10 ml-4 md:ml-8">
          {experience.map((item, index) => (
            <article
              key={index}
              className="relative pl-8 md:pl-20 group transition-all duration-500"
            >
              {/* Punto indicador */}
              <div className="absolute -left-[6px] top-3 w-3 h-3 bg-white group-hover:bg-[#9A001F] group-hover:shadow-[0_0_20px_#9A001F] transition-all duration-500 rounded-full" />

              <div className="w-full">
                {/* Header: Fecha, Rol y Empresa */}
                <div className="mb-10">
                  <span className="text-[#D4AF37] font-mono text-sm tracking-[0.3em] uppercase mb-3 block">
                    {item.period}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-3 group-hover:text-[#9A001F] transition-colors duration-500">
                    {item.role}
                  </h3>
                  <span className="text-white/40 text-xl md:text-2xl font-light tracking-tight block">
                    @ {item.company}
                  </span>
                </div>
                {/* Renderizado de Bentos (Los 4 proyectos) */}
                {item.projects && item.projects.length > 0 && (
                  <ProjectBento projects={item.projects} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Marca de agua Kanji */}
      <div className="absolute -bottom-20 -left-20 text-[25rem] md:text-[40rem] font-bold text-white/[0.02] select-none pointer-events-none z-0 leading-none">
        夜
      </div>
      <ScrollArrow href="#abilities" label="Abilities" />
    </section>
  );
}
