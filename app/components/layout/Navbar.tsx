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
  // 1. Obtenemos solo los IDs para pasarlos al hook
  const sectionIds = navLinks.map((link) => link.id);

  // 2. Usamos nuestra lógica reutilizable
  const activeSection = useActiveSection(sectionIds);
  const isDarkSection =
    activeSection === "experience" || activeSection === "abilities";

  // 3. Renderizamos
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-8">
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

// --- SUB-COMPONENTE DE UI ---
// Lo dejamos en el mismo archivo para no crear tantos archivos pequeños,
// pero fuera de la función principal para mantener el orden.

interface NavItemProps {
  name: string;
  id: string;
  isActive: boolean;
  isDarkSection: boolean;
}

function NavItem({ name, id, isActive, isDarkSection }: NavItemProps) {
  return (
    <button
      onClick={() => smoothScrollTo(id)}
      className={`group relative flex items-center transition-all duration-300 ease-in-out 
        ${isActive ? "scale-110" : "hover:scale-110"}`}
    >
      <span
        className={`font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 mr-4
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
        className={`relative transition-all duration-500 ease-out overflow-visible
        ${isActive ? "w-16" : "w-0 group-hover:w-16"}`}
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
