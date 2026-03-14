const experience = [
  {
    company: "Empresa A",
    role: "Desarrollador Frontend",
    period: "2022 - 2023",
    description: "Construcción de interfaces responsivas y mejoras de rendimiento.",
  },
  {
    company: "Empresa B",
    role: "Desarrollador Full Stack",
    period: "2023 - Presente",
    description: "Desarrollo de aplicaciones web completas con Next.js y API.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2>Experiencia</h2>
      <div className="card-list">
        {experience.map((item) => (
          <article key={`${item.company}-${item.period}`} className="card">
            <h3>{item.role}</h3>
            <p className="company">{item.company} · {item.period}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
