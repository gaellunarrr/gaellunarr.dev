import ProfileSection from "./components/sections/ProfileSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import AbilitiesSection from "./components/sections/AbilitiesSection";

export default function Home() {
  return (
    <main className="page-container">
      <ProfileSection />
      <ExperienceSection />
      <AbilitiesSection />
    </main>
  );
}
