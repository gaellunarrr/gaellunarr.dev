const projects = [
  {
    name: "Portfolio Personal",
    description:
      "Web desarrollada con Next.js y TypeScript para mostrar trabajos.",
    link: "#",
  },
  {
    name: "App de Tareas",
    description: "Gestión de tareas con estado, filtros y persistencia local.",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="abilities" className="section">
      <h2>Proyectos</h2>
      <div className="card-list">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">
              Ver proyecto
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
