import { experience } from "@/data/experience";

export default function ExperiencePanel() {
  return (
    <div className="w-[calc(100vw-2rem)] md:w-[calc(100vw-8rem)] rounded-lg overflow-hidden border-3 border-dex-gold shadow-lg">
      {/* Gold header */}
      <div className="bg-dex-gold px-4 py-2.5 flex items-center gap-2.5">
        <div className="w-3.5 h-3.5 rounded-full bg-warm-gold border-2 border-yellow-700" />
        <p className="text-[10px] text-white tracking-[3px]">E X P E R I E N C E</p>
      </div>

      {/* Cream interior */}
      <div className="bg-dex-cream p-3 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {experience.map((entry) => (
            <div
              key={entry.id}
              className="rounded-md overflow-hidden border-2 border-d-blue bg-white flex flex-col"
            >
              {/* Header */}
              <div className="bg-d-blue px-3 py-2 flex items-center gap-2">
                <span className="text-sm">{entry.icon}</span>
                <span className="text-[10px] text-warm-gold font-bold">{entry.title}</span>
              </div>

              {/* Org */}
              <div className="bg-pale-blue px-3 py-1">
                <span className="text-[7px] text-d-blue">{entry.org}</span>
              </div>

              {/* Bullets */}
              <div className="px-3 py-2 flex-1">
                <ul className="space-y-1">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="text-[8px] leading-relaxed text-n-blue">
                      ▸ {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
