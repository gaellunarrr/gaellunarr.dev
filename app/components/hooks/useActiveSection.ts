import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const centerOfScreen = viewportHeight / 2;

      let currentSection = "";

      // Recorremos las secciones para ver cuál contiene el "centro" de la pantalla
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // Si el centro de la pantalla está dentro de los límites de esta sección
        if (rect.top <= centerOfScreen && rect.bottom >= centerOfScreen) {
          currentSection = id;
          break;
        }
      }

      // Caso especial: Si estamos muy arriba (Home), forzamos Home
      if (window.scrollY < 100) {
        currentSection = sectionIds[0];
      }

      // Caso especial: Si llegamos al final de la página, forzamos la última sección
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, activeSection]);

  return activeSection;
}
