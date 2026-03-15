"use client";
import Image from "next/image";
import { useActiveSection } from "../hooks/useActiveSection";
import { smoothScrollTo } from "@/app/utils/scroll";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Abilities", id: "abilities" },
];

export default function Navbar() {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);
  const isDarkSection = activeSection === "experience";

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ease-in-out
        /* 1. MÓVIL Y PANTALLAS HASTA 1799px (BARRA SUPERIOR) */
        top-0 left-0 w-full flex flex-row justify-center items-center gap-6 py-5 px-6
        bg-black/20 backdrop-blur-lg border-b border-white/5
        
        /* 2. SOLO PANTALLAS ULTRA ANCHAS (Desde 1800px en adelante) */
        min-[1800px]:top-1/2 min-[1800px]:left-auto min-[1800px]:right-12 min-[1800px]:-translate-y-1/2 
        min-[1800px]:w-auto min-[1800px]:flex-col min-[1800px]:items-end min-[1800px]:gap-10 
        min-[1800px]:bg-transparent min-[1800px]:backdrop-blur-none min-[1800px]:border-none min-[1800px]:py-0
      `}
    >
      {navLinks.map((link) => (
        <NavItem
          key={link.id}
          name={link.name}
          id={link.id}
          isActive={activeSection === link.id}
          isDarkSection={isDarkSection}
        />
      ))}
    </nav>
  );
}

function NavItem({
  name,
  id,
  isActive,
  isDarkSection,
}: {
  name: string;
  id: string;
  isActive: boolean;
  isDarkSection: boolean;
}) {
  return (
    <button
      onClick={() => smoothScrollTo(id)}
      className={`group relative flex items-center transition-all duration-300 ease-in-out 
        ${isActive ? "scale-105 min-[1800px]:scale-110" : "hover:scale-105 min-[1800px]:hover:scale-110"}`}
    >
      <span
        className={`font-bold text-[11px] min-[1800px]:text-sm tracking-[0.2em] uppercase transition-all duration-300
        min-[1800px]:mr-6
        ${
          isActive
            ? "text-[#BC002D]"
            : isDarkSection
              ? "text-white/70 group-hover:text-white"
              : "text-[#4A4A4A] group-hover:text-[#BC002D]"
        }`}
      >
        {name}
      </span>

      <div
        className={`hidden min-[1800px]:block relative transition-all duration-500 ease-out overflow-visible
        ${isActive ? "min-[1800px]:w-16" : "w-0 min-[1800px]:group-hover:w-16"}`}
      >
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-500 transform
          ${isActive ? "opacity-100 -translate-x-2" : "opacity-0 group-hover:opacity-100 group-hover:-translate-x-2"}`}
        >
          <Image
            src="/katana.svg"
            alt="katana"
            width={70}
            height={24}
            priority
            className={`max-w-none transition-all duration-500 
              ${isDarkSection ? "invert brightness-200" : ""}`}
          />
        </div>
      </div>
    </button>
  );
}
