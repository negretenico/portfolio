import React, { ComponentProps, useMemo, useState } from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Generic/Text";
import { Gist } from "../../components/Gist/Gist";
import { Projects } from "../../components/Project/Projects";
import { IllustrationText } from "../../components/Generic/IllustrationText";
import Joyride, { Step } from "react-joyride";
import "./Gallery.css";
import { COLORS } from "../../constants";

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
  const firstTitle = projects[0].title;
  // State to control Joyride
  const [run, setRun] = useState(true); // Controls whether the walkthrough is running
  const [stepIndex, setStepIndex] = useState(0); // Tracks current step
  const steps: Array<Step> = useMemo(
    () => [
      {
        target: ".gallery-title",
        content: "Welcome to my code gallery!",
        placement: "top", // Place tooltip above the target
        placementBeacon: "right",
      },
      {
        target: `.${firstTitle}-title`,
        content: "On each card you can see the title of the project!",
        placement: "top",
      },
      {
        target: `.${firstTitle}-git`,
        content:
          "When you click on the icon you can visit the repo that holds each project!",
        placement: "right", // Tooltip appears to the right of the target
      },
      {
        target: `.${firstTitle}-gist`,
        content:
          "Here you can see a snippet of some `interesting` code used within that project!",
      },
      {
        target: `.${firstTitle}-desc`,
        content:
          "Finally you can read a short description of what each project's goal was!",
        placement: "top", // Place tooltip above the target
      },
    ],
    [firstTitle],
  ); // Joyride callback handler
  const handleJoyrideCallback = (data: any) => {
    const { action, index, type } = data;

    if (type === "step:after") {
      setStepIndex(index + 1); // Move to the next step
    } else if (type === "tour:end" || action === "skip") {
      setRun(false); // Stop the walkthrough
    }
  };
  return (
    <>
      <div>
        <div className={"flex flex-col  items-center justify-center"}>
          <Joyride
            run={run}
            steps={steps}
            stepIndex={stepIndex}
            continuous
            showSkipButton
            showProgress
            callback={handleJoyrideCallback}
            scrollToFirstStep={true}
            scrollOffset={70} // Adjust based on your header's height
            styles={{
              beacon: {
                marginLeft: "1rem",
              },
              spotlight: {
                borderRadius: "8px", // Smoothen the corners
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)", // Add some glow
              },
              tooltip: {
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "16px",
                color: "#333",
                textAlign: "center",
                fontSize: "16px",
              },
              buttonBack: {
                marginRight: "10px",
                color: COLORS.WHITE,
                backgroundColor: COLORS.LIGHT_VIOLET,
              },
              buttonNext: {
                backgroundColor: COLORS.VIOLET,
                color: COLORS.WHITE,
              },
            }}
          />
          <Text
            text={copy?.title}
            className="text-4xl lg:text-6xl gallery-title"
            color="LIGHT_VIOLET"
          />
          <div className={"flex"}>
            <Text text={sub_text[0]} className="text-lg lg:text-xl" />
            <IllustrationText
              text={{
                text: "projects",
                className: "text-lg lg:text-xl m-0 p-0",
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
            <Text text={sub_text[1]} className="text-lg lg:text-xl" />
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
