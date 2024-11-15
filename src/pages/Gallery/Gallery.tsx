import React from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Text";
import { Tabs } from "../../components/Tabs";
import { CodeCard } from "../../components/CodeCard";

//TODO: add the follwoing, BACKEND: CLean plate club, Ticketmaster, Service Sentinel,
//TODO: add the folowing, AI: NBA clustering, Room Recognition, Champion Classifier, Sarcasm
//TODO: add teh following, MISC: Algorithims, Path visualization, 2D Game Remake

export default function Gallery() {
  const { data: copy } = useCopy({ filePath: "/copy/gallery.json" });
  const tabs = Object.entries(copy.software_types).map(
    ([software_key, software]: [string, any], idx) => {
      const nestedTabs = Object.entries(software).map(
        ([technology_key, nested_entry]: [string, any], software_type_idx) => {
          console.log(JSON.stringify(nested_entry));
          return {
            label: technology_key,
            id: software_type_idx,
            body: (
              <div className={"max-h-72 max-w-5xl"}>
                <CodeCard
                  title={nested_entry?.title}
                  gitLink={nested_entry?.repo_link}
                  gist={{
                    gistProps: {
                      gist: nested_entry.gist,
                    },
                  }}
                  description={nested_entry?.description}
                />
              </div>
            ),
          };
        },
      );
      return {
        id: idx,
        label: software_key,
        body: <Tabs tabs={nestedTabs} />,
      };
    },
  );
  return (
    <>
      <div>
        <Text text={copy?.title} />
        <Text text={copy?.subtitle} />
        <div className={"flex flex-row items-center justify-center"}>
          <div>
            <Tabs tabs={tabs} isVertical />
          </div>
        </div>
      </div>
    </>
  );
}
