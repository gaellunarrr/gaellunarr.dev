import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string;
  repoUrl: string;
  liveUrl: string;
}

interface ProjectBentoProps {
  projects: Project[];
}

export function ProjectBento({ projects }: ProjectBentoProps) {
  return (
    <div className="flex flex-col gap-16 md:gap-24 mt-12">
      {projects.map((project, index) => (
        <div key={index} className="w-full">
          {/* CONTENEDOR PRINCIPAL */}
          <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-[1fr_auto] gap-4 min-h-[420px]">
            {/* DESCRIPCIÓN */}
            <div className="order-1 md:order-none md:col-span-2 md:col-start-2 md:row-start-1 bg-[#1A1A1A] rounded-3xl p-8 md:p-12 flex flex-col justify-center border border-white/5 hover:bg-[#1f1f1f] transition-all duration-500">
              <h4 className="text-3xl md:text-3xl font-black text-white mb-4 tracking-tight">
                {project.title}
                <span className="text-[#9A001F]">.</span>
              </h4>

              <p className="text-[#A0A0A0] text-base md:text-xl leading-relaxed font-serif italic opacity-80">
                {project.description}
              </p>
            </div>

            {/* PILAR VISUAL */}
            <div className="order-2 md:order-none h-[180px] md:h-auto md:col-start-1 md:row-span-2 bg-[#121212] rounded-3xl overflow-hidden relative group border border-white/5 hover:border-[#9A001F]/30 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/[0.03] font-black text-5xl md:text-6xl tracking-tighter uppercase select-none">
                  {project.title}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
                <span className="text-[#D4AF37] text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.4em]">
                  {project.tech}
                </span>
              </div>
            </div>

            {/* BOTONES */}
            <div className="order-3 md:order-none grid grid-cols-2 md:col-span-2 md:col-start-2 md:row-start-2 gap-4">
              {/* SOURCE */}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 group border border-white/10 hover:bg-white hover:border-white transition-all duration-500 shadow-lg shadow-black/20"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 relative">
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>

                <span className="text-[#9DA7B3] group-hover:text-black text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-500">
                  Source Code
                </span>
              </a>

              {/* DEMO */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9A001F] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 group border border-transparent hover:bg-[#BC002D] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />

                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>

                <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase relative z-10">
                  Demo
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
