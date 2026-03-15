import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  // Dividimos el correo para que no exista la cadena completa en el código
  const user = "gaellunarr";
  const domain = "gmail.com";
  const fullEmail = `${user}@${domain}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return {
    copied,
    handleCopy,
    email: fullEmail,
  };
}
