import React, { useState } from "react";
import { COLORS } from "../constants";
import { Button } from "./Button";

const TabContent = ({ content }: { content: JSX.Element }) => {
  return (
    <>
      <div className="flex-1 p-4">{content}</div>
    </>
  );
};

export const Tabs = ({
  tabs,
  isVertical,
}: {
  tabs: Array<{ id: number; label: string; content: JSX.Element }>;
  isVertical?: boolean;
}) => {
  const [activeTab, setActiveTab] = useState(0); // Initially, the first tab is active

  return (
    <div className="flex">
      <div
        style={{ backgroundColor: COLORS.WHITE }}
        className={`flex flex-${isVertical ? "col" : "row"} w-48 p-2 border-r`}
      >
        {tabs.map((tab) => (
          <Button
            isActive={activeTab === tab.id}
            key={`${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            label={tab.label}
          />
        ))}
      </div>
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
};
