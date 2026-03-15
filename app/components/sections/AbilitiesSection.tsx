const abilities = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Astro"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PHP", "PostgreSQL", "JavaScript (ES6+)"],
  },
  {
    category: "Tools & Design",
    skills: ["Git", "GitHub", "Figma", "Huawei Ecosystem"],
  },
];

export default function AbilitiesSection() {
  return (
    <section
      id="abilities"
      className="relative min-h-screen w-full bg-[#F9F5F0] py-32 px-6 md:px-12 overflow-hidden font-sans"
    >
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center md:items-start">
        {/* Título de Sección - Igual que "Gael Luna" en Home */}
        <div className="mb-20 md:mb-24 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1A1A1B] tracking-tighter uppercase">
            Abilities
          </h2>
          <p className="text-xl md:text-2xl text-[#4A4A4A] font-light mt-2 md:ml-3 tracking-wide italic font-serif">
            "The tools of the craft."
          </p>
        </div>

        {/* Grid de Habilidades - Estilo Limpio y Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {abilities.map((group, index) => (
            <div
              key={index}
              className="relative p-6 border-l-2 border-[#BC002D]/10 hover:border-[#BC002D] transition-colors duration-500"
            >
              <h3 className="text-[#BC002D] font-bold text-sm tracking-[0.3em] uppercase mb-8">
                {group.category}
              </h3>

              <ul className="space-y-6">
                {group.skills.map((skill, sIndex) => (
                  <li
                    key={sIndex}
                    className="text-[#4A4A4A] text-xl md:text-2xl font-light tracking-tight hover:text-black transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Marca de agua Kanji - Sutil como en Home */}
      <div className="absolute -bottom-10 -right-10 text-[20rem] md:text-[35rem] font-bold text-black/[0.03] select-none pointer-events-none z-0">
        技
      </div>
      {/* Fondo Decorativo de Puntos - EXACTAMENTE el de Home */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
    </section>
  );
}
