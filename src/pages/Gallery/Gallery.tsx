import React from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Text";
import { Tabs } from "../../components/Tabs";
import Accordion from "../../components/Accordion";

//TODO: add the following, FRONTEND: Clean plate club, Micro frontends, porfolio, anime website
//TODO: add the follwoing, BACKEND: CLean plate club, Ticketmaster, Service Sentinel,
//TODO: add the folowing, AI: NBA clustering, Room Recognition, Champion Classifier, Sarcasm
//TODO: add teh following, MISC: Algorithims, Path visualization, 2D Game Remake

export default function Gallery() {
  const { data: copy } = useCopy({ filePath: "/copy/gallery.json" });

  const tabs = [
    { id: 0, label: "Tab 1", content: <Accordion /> },
    { id: 1, label: "Tab 2", content: <>Hi2</> },
    { id: 2, label: "Tab 3", content: <>Hi3</> },
    { id: 3, label: "Tab 4", content: <>Hi4</> },
  ];
  return (
    <>
      <div>
        <Text text={copy?.title} />
        <Text text={copy?.subtitle} />
        <div className="max-w-lg">
          <Tabs isVertical tabs={tabs} />
        </div>
      </div>
    </>
  );
}
