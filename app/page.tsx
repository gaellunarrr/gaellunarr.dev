import ProfileSection from "./components/sections/ProfileSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="page-container">
      <ProfileSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
