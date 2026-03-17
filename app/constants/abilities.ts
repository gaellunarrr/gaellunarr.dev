import {
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiMariadb,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export const abilities = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PHP", icon: SiPhp },
      { name: "MariaDB", icon: SiMariadb },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Jira", icon: SiJira },
    ],
  },
];
