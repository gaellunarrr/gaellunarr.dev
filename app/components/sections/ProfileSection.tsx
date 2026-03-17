"use client";
import Image from "next/image";
import { Button } from "../ui/Button";
import { SVG } from "../ui/SVG";
import { ScrollArrow } from "../ui/ScrollArrow";
import { ButtonMail } from "../ui/ButtonMail";

export default function ProfileSection() {
  return (
    <main
      id="home"
      className="relative min-h-screen w-full bg-[#F9F5F0] flex items-center justify-center p-4 md:p-8 overflow-hidden font-sans"
    >
      {/* Contenedor Principal */}
      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        {/* 1. Izquierda: Nombre e Info */}
        <div className="flex-1 text-center md:text-left order-1 md:order-1 relative">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1B] tracking-tighter">
            Gael Luna
          </h1>
          <p className="text-xl md:text-2xl text-[#4A4A4A] font-light mt-2 md:ml-3 tracking-wide">
            Full Stack Developer
          </p>
          <ButtonMail />
        </div>

        {/* 2. Centro: Círculo y Árbol */}
        <div className="relative flex-shrink-0 order-2 md:order-2">
          <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#BC002D] rounded-full shadow-2xl" />

            <div className="absolute -top-[12%] -right-[11%] w-[70%] h-[70%] z-20 pointer-events-none">
              <Image
                src="/tree.svg"
                alt="Japanese Tree"
                width={400}
                height={400}
                className="w-full h-full object-contain rotate-12 opacity-95"
              />
            </div>

            <div className="relative z-30 flex gap-4 md:gap-8 items-center">
              <SVG
                href="https://linkedin.com/in/gael-luna/"
                src="/linkedin.svg"
                alt="LinkedIn"
              />
              <Button
                label="Download CV"
                mobileLabel="CV"
                href="/public/CV.LUNA_MARTINEZ_GAEL_RODRIGO.pdf"
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

        {/* 3. Derecha: Biografía */}
        <div className="flex-1 text-center md:text-right order-3 md:order-3">
          <div className="max-w-sm mx-auto md:ml-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
              Who I am?
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg px-4 md:px-0">
              <span className="font-bold text-[#BC002D] animate-[pulse_2s_ease-in-out_infinite]">
                +1 year of experience
              </span>{" "}
              in software development, always prioritizing results and the
              satisfaction of both clients and the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Flecha de Scroll */}
      <ScrollArrow href="#experience" label="Experience" />

      {/* Fondo Decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
    </main>
  );
}
