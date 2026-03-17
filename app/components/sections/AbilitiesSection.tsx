"use client";
import { abilities } from "@/app/constants/abilities";

export default function AbilitiesSection() {
  return (
    <section
      id="abilities"
      className="relative min-h-screen w-full bg-[#F9F5F0] py-32 px-6 md:px-12 overflow-hidden font-sans"
    >
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center md:items-start">
        {/* Título de Sección - Consistente con el estilo de Gael Luna en Home */}
        <div className="mb-20 md:mb-28 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1A1A1B] tracking-tighter uppercase">
            Abilities<span className="text-[#BC002D]">.</span>
          </h2>
        </div>

        {/* Grid de Habilidades - Estilo Limpio y Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
          {abilities.map((group, index) => (
            <div
              key={index}
              className="relative p-6 border-l-2 border-[#BC002D]/10 hover:border-[#BC002D] transition-all duration-500 group/card"
            >
              {/* Categoría */}
              <h3 className="text-[#BC002D] font-black text-xs md:text-sm tracking-[0.4em] uppercase mb-10 opacity-70 group-hover/card:opacity-100 transition-opacity">
                {group.category}
              </h3>

              {/* Lista de Skills */}
              <ul className="space-y-8">
                {group.skills.map((skill, sIndex) => {
                  const SkillIcon = skill.icon;
                  return (
                    <li
                      key={sIndex}
                      className="flex items-center gap-4 text-[#4A4A4A] hover:text-black transition-all duration-300 group/item"
                    >
                      {/* Icono con Hover dinámico */}
                      <div className="flex items-center justify-center w-8 h-8 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:rotate-6">
                        <SkillIcon
                          className="text-[#1A1A1B] opacity-60 group-hover/item:opacity-100 group-hover/item:text-[#BC002D] transition-all duration-300 text-2xl md:text-3xl"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Nombre de la Skill */}
                      <span className="text-xl md:text-2xl font-light tracking-tight group-hover/item:translate-x-1 transition-transform">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Marca de agua Kanji - Ajustada con rotación como el árbol de Home */}
      <div className="absolute -bottom-16 -right-16 text-[22rem] md:text-[38rem] font-bold text-black/[0.02] select-none pointer-events-none z-0 rotate-12 transition-transform duration-1000 hover:rotate-6">
        技
      </div>

      {/* Fondo Decorativo de Puntos - Exactamente el de Home para fluidez total */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:24px_24px] md:[background-size:16px_16px] opacity-40 pointer-events-none" />

      {/* Línea decorativa lateral sutil (opcional para dar verticalidad) */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#BC002D]/10 to-transparent" />
    </section>
  );
}
