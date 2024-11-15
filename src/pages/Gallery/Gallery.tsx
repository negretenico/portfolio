import React from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Text";
import { Tabs } from "../../components/Tabs";
import { CodeCard } from "../../components/CodeCard";

//TODO: add the following, FRONTEND: Clean plate club, Micro frontends, porfolio, anime website
//TODO: add the follwoing, BACKEND: CLean plate club, Ticketmaster, Service Sentinel,
//TODO: add the folowing, AI: NBA clustering, Room Recognition, Champion Classifier, Sarcasm
//TODO: add teh following, MISC: Algorithims, Path visualization, 2D Game Remake

export default function Gallery() {
  const { data: copy } = useCopy({ filePath: "/copy/gallery.json" });
  // https://gist.github.com/negretenico/0e24894f1292ba3ded1740273a80c853
  const tabs = [
    {
      id: 0,
      label: "Tab 1",
      body: (
        <div className={"max-h-80"}>
          <CodeCard
            title={copy?.frontend?.micro?.title}
            gitLink={copy?.frontend?.micro?.repo_link}
            gist={{
              gistProps: {
                gist: "negretenico/0e24894f1292ba3ded1740273a80c853",
              },
            }}
            description={copy?.frontend?.micro?.description}
          />
        </div>
      ),
    },
    { id: 1, label: "Tab 2", body: <>Hi2</> },
    { id: 2, label: "Tab 3", body: <>Hi3</> },
    { id: 3, label: "Tab 4", body: <>Hi4</> },
  ];
  return (
    <>
      <div>
        <Text text={copy?.title} />
        <Text text={copy?.subtitle} />
        <div>
          <Tabs tabs={tabs} isVertical />
        </div>
      </div>
    </>
  );
}
