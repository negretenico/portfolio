import TrainerCard from "./components/TrainerCard";
import PauseMenu from "./components/PauseMenu";
import Aurora from "./backgrounds/Aurora/Aurora";

export default async function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="flex flex-col items-center gap-8">
        {/* Container for the reveal effect with overflow hidden */}
        <h1 className="animate-appear text-4xl font-bold text-center">
          Nico wants to battle!
        </h1>
        <div className="relative overflow-hidden">
          <div className="animate-reveal">
            <TrainerCard />
          </div>
          <div className="glare-sweep animate-glare-swipe"></div>
        </div>
        <div className="animate-appear">
          <PauseMenu />
        </div>
      </main>
    </div>
  );
}
