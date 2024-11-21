import React, { ComponentProps } from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Generic/Text";
import { Gist } from "../../components/Gist/Gist";
import { Projects } from "../../components/Project/Projects";
import { IllustrationText } from "../../components/Generic/IllustrationText";

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
  const sub_text = copy?.subtitle.split("REPLACE_ME");
  return (
    <>
      <div>
        <div className={"flex flex-col  items-center justify-center"}>
          <Text text={copy?.title} className="text-6xl" color="LIGHT_VIOLET" />
          <div className={"flex"}>
            <Text text={sub_text[0]} className="text-xl" />
            <IllustrationText
              text={{
                text: "projects",
                className: "text-xl m-0 p-0",
                color: "BLACK",
              }}
              icon={{
                svgProps: {
                  className: "w-full max-h-1.5",
                  viewBox: "0 0 55 5",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: 'none"',
                },
                pathProps: {
                  d: "M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002",
                  strokeWidth: "2",
                },
              }}
            />
            <Text text={sub_text[1]} className="text-xl " />
          </div>
        </div>
        <div className={"flex flex-row items-center justify-center"}>
          <div className="w-full max-w-8xl px-4">
            <Projects projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
