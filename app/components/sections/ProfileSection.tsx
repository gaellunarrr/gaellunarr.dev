import Image from "next/image";
import { Button } from "../ui/Button";
import { SVG } from "../ui/SVG";
import { ScrollArrow } from "../ui/ScrollArrow";

export default function ProfileSection() {
  return (
    <main
      id="home"
      className="relative min-h-screen w-full bg-[#F9F5F0] flex items-center justify-center p-4 md:p-8 overflow-hidden font-sans"
    >
      {/* Contenedor Principal */}
      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        {/* 1. Izquierda: Nombre (order-1 en móvil para quedar arriba) */}
        <div className="flex-1 text-center md:text-left order-1 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1B] tracking-tighter">
            Gael Luna
          </h1>
          <p className="text-xl md:text-2xl text-[#4A4A4A] font-light mt-2 md:ml-3 tracking-wide">
            Full Stack Developer
          </p>
        </div>

        {/* 2. Centro: Círculo y Árbol (order-2 en móvil) */}
        <div className="relative flex-shrink-0 order-2 md:order-2">
          <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* El Sol Rojo */}
            <div className="absolute inset-0 bg-[#BC002D] rounded-full shadow-2xl" />

            {/* El Árbol (Anclado al círculo) */}
            <div className="absolute -top-[12%] -right-[11%] w-[70%] h-[70%] z-20 pointer-events-none">
              <Image
                src="/tree.svg"
                alt="Japanese Tree"
                width={400}
                height={400}
                className="w-full h-full object-contain rotate-12 opacity-95"
              />
            </div>

            {/* Los Logos e Interacción */}
            <div className="relative z-30 flex gap-4 md:gap-8 items-center">
              <SVG
                href="https://linkedin.com/in/gael-luna/"
                src="/linkedin.svg"
                alt="LinkedIn"
              />
              <Button
                label="Download CV"
                mobileLabel="CV"
                href="/cv.pdf"
                download
              />
              <SVG
                href="https://github.com/gaellunarrr"
                src="/github.svg"
                alt="GitHub"
              />
            </div>
          </div>
        </div>

        {/* 3. Derecha: Biografía (order-3 en móvil) */}
        <div className="flex-1 text-center md:text-right order-3 md:order-3">
          <div className="max-w-sm mx-auto md:ml-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
              Who I am?
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed font-serif text-base md:text-lg italic px-4 md:px-0">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>

      {/* Flecha de Scroll posicionada al fondo */}
      <ScrollArrow href="#experience" label="Experience" />

      {/* Fondo Decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
    </main>
  );
}
