import Image from "next/image";

interface SVGProps {
  href: string;
  src: string;
  alt: string;
  className?: string;
}

export function SVG({ href, src, alt, className }: SVGProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="group hover:scale-110 transition-transform hover:shadow-[0_0_0_2px_#B6985E]"
    >
      <Image
        src={src}
        alt={alt}
        width={44}
        height={44}
        className="w-10 h-10 md:w-12 md:h-12"
      />
    </a>
  );
}
