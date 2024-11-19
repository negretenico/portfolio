import React, { ComponentProps } from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Generic/Text";
import { Gist } from "../../components/Gist/Gist";
import { Projects } from "../../components/Project/Projects";

export default function Gallery() {
  const { data: copy } = useCopy({ filePath: "/copy/gallery.json" });
  const projects_without_gist_component: Array<{
    id: string;
    title: string;
    repo_link: string;
    description: string;
    gist: ComponentProps<typeof Gist>["gistProps"]["gist"];
    tags: Array<string>;
  }> = copy?.projects;
  const projects: ComponentProps<typeof Projects>["projects"] =
    projects_without_gist_component.map((project) => {
      return {
        ...project,
        repoLink: project.repo_link,
        gist: {
          gistProps: {
            gist: project.gist,
          },
        },
      };
    });
  return (
    <>
      <div>
        <Text text={copy?.title} />
        <Text text={copy?.subtitle} />
        <div className={"flex flex-row items-center justify-center"}>
          <Projects projects={projects} />
        </div>
      </div>
    </>
  );
}
