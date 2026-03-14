import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="page-container">
      <ProfileSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
