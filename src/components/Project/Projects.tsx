import React, { ComponentProps } from "react";
import { Project } from "./Project";

type ProjectDisplayProps = {
  projects: Array<ComponentProps<typeof Project>>;
};
export const Projects = ({ projects }: ProjectDisplayProps) => {
  return (
    <>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </>
  );
};
