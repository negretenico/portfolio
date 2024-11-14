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
  const tabs = [
    {
      id: 0,
      label: "Tab 1",
      body: (
        <CodeCard
          title={copy?.frontend?.micro?.title}
          gitLink={copy?.frontend?.micro?.repo_link}
          gist={{
            iframeProps: {
              title: "IFRAME",
              width: "100%",
              height: "100%",
              src: "https://gist.github.com/negretenico/0e24894f1292ba3ded1740273a80c853",
            },
          }}
          description={copy?.frontend?.micro?.description}
        />
      ),
    },
    { id: 1, label: "Tab 2", body: <>Hi2</> },
    { id: 2, label: "Tab 3", body: <>Hi3</> },
    { id: 3, label: "Tab 4", body: <>Hi4</> },
  ];
  //<script src="https://gist.github.com/your-username/your-gist-id.js"></script>
  return (
    <>
      <div>
        <Text text={copy?.title} />
        <Text text={copy?.subtitle} />
        <div className="max-w-lg">
          <Tabs tabs={tabs} isVertical />
        </div>
      </div>
    </>
  );
}
