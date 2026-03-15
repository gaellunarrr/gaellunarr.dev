import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Buscamos cuál sección está más cerca de la parte superior del navegador
      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: Infinity };
        // Calculamos la distancia del elemento al tope de la pantalla
        const rect = el.getBoundingClientRect();
        return { id, offset: Math.abs(rect.top) };
      });

      // La sección con el offset más pequeño es la que el usuario está viendo
      const closest = offsets.reduce((prev, curr) =>
        prev.offset < curr.offset ? prev : curr,
      );

      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez al inicio
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}
