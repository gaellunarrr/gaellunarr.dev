import { useClipboard } from "../hooks/useClipboard";

export function ButtonMail() {
  const { copied, handleCopy, email } = useClipboard();

  return (
    <div className="absolute left-1/2 -translate-x-1/2 md:left-3 md:translate-x-0 mt-4 flex flex-col items-center md:items-start w-full">
      <button
        onClick={handleCopy}
        className={`
                group flex items-center gap-3 px-6 py-2.5 
                bg-white border border-black/5 
                rounded-full transition-all duration-300 
                /* Efecto de Sombra y Elevación */
                shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] 
                hover:shadow-[0_15px_30px_-10px_rgba(188,0,45,0.15)] 
                hover:-translate-y-0.5 active:scale-95
                ${copied ? "ring-2 ring-[#BC002D]/20 border-[#BC002D]/30" : ""}
              `}
      >
        <span
          className={`text-sm font-bold tracking-tight transition-colors duration-300 ${copied ? "text-[#BC002D]" : "text-[#4A4A4A] group-hover:text-black"}`}
        >
          {email}
        </span>

        <div className="relative flex items-center justify-center w-4 h-4">
          {copied ? (
            <svg
              className="text-[#BC002D] animate-in zoom-in duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="text-[#4A4A4A] opacity-40 group-hover:opacity-100 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          )}
        </div>

        {/* Alerta de Copiado (Ajustada para que no mueva nada) */}
        <div className="absolute top-full left-0 w-full flex justify-center pt-2 pointer-events-none">
          <span
            className={`text-[9px] font-black uppercase tracking-[0.2em] text-[#BC002D] transition-all duration-500 ${copied ? "opacity-100 translate-y-1" : "opacity-0 translate-y-0"}`}
          >
            Success Copy
          </span>
        </div>
      </button>
    </div>
  );
}
