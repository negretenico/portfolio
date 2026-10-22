import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const featured = projects.filter((p) => p.featured);

export default function ProjectsPanel() {
  return (
    <div className="w-[calc(100vw-2rem)] md:w-[calc(100vw-8rem)] rounded-lg overflow-hidden border-3 border-dex-red-dark shadow-lg">
      {/* Red Pokédex header */}
      <div className="bg-dex-red px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-dex-light border-2 border-blue-600" />
          <p className="text-[10px] text-white tracking-[3px]">P R O J E C T S</p>
        </div>
        <Link href="pokedex" className="text-[8px] text-dex-cream hover:text-white transition-colors">
          View all →
        </Link>
      </div>

      {/* Cream interior */}
      <div className="bg-dex-cream p-3 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {featured.map((project) => (
            <div
              key={project.id}
              className="rounded-md overflow-hidden border-2 border-d-blue bg-white flex flex-col"
            >
              {/* Project header */}
              <div className="bg-d-blue px-3 py-2 flex items-center gap-2">
                <span className="text-[8px] text-l-blue">#{project.number}</span>
                <span className="text-sm">{project.image}</span>
                <span className="text-[10px] text-warm-gold font-bold">{project.name}</span>
              </div>

              {/* Type */}
              <div className="bg-pale-blue px-3 py-1">
                <span className="text-[7px] text-d-blue tracking-wider">
                  {project.type.toUpperCase()}
                </span>
              </div>

              {/* Body */}
              <div className="px-3 py-2 flex-1 flex flex-col gap-2">
                <p className="text-[8px] leading-relaxed text-n-blue">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[7px] px-1.5 py-0.5 rounded bg-pale-blue border border-l-blue text-d-blue"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[7px] px-1.5 py-0.5 rounded bg-pale-blue border border-l-blue text-d-blue">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* GitHub link */}
              {project.githubUrl && (
                <div className="bg-d-blue px-3 py-1.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[8px] text-warm-gold hover:underline"
                  >
                    <FaGithub className="w-2.5 h-2.5" />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
