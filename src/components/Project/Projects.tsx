import React, { ComponentProps } from "react";
import { Project } from "./Project";

type ProjectDisplayProps = {
  projects: Array<ComponentProps<typeof Project>>;
};
export const Projects = ({ projects }: ProjectDisplayProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
};
