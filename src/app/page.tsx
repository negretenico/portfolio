import TrainerCard from "./components/TrainerCard";
import ProjectsPanel from "./components/ProjectsPanel";
import ExperiencePanel from "./components/ExperiencePanel";
import SocialLinks from "./components/SocialLinks";
import Aurora from "./backgrounds/Aurora/Aurora";

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={1.5}
          speed={1.0}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center gap-6 px-4 md:px-16 py-8">
        {/* Hero text */}
        <div className="animate-appear text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Nico Negrete</h1>
          <SocialLinks />
        </div>

        {/* Trainer Card with reveal animation */}
        <div className="relative overflow-hidden">
          <div className="animate-reveal">
            <TrainerCard />
          </div>
          <div className="glare-sweep animate-glare-swipe"></div>
        </div>

        {/* Projects */}
        <ProjectsPanel />

        {/* Experience */}
        <ExperiencePanel />
      </main>
    </div>
  );
}
