import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const user = "gaellunarr";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;

  const handleCopy = async () => {
    try {
      // Intento principal con la API moderna
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      // Fallback: Método antiguo para navegadores móviles caprichosos
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch (err) {
        console.error("Fallo al copiar", err);
      }
      document.body.removeChild(textArea);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, handleCopy, email };
}
