"use client";
import { smoothScrollTo } from "@/app/utils/scroll";

interface ArrowProps {
  href: string;
  label: string;
}

export function ScrollArrow({ href, label }: ArrowProps) {
  const handleClick = () => {
    // Si pasas "#experience", esto quita el "#" para que la función de scroll lo encuentre bien
    const targetId = href.startsWith("#") ? href.substring(1) : href;
    smoothScrollTo(targetId);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-30 bg-transparent border-none"
    >
      <span className="text-[#BC002D] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
      <div className="animate-bounce">
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-[#BC002D] group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
  );
}
