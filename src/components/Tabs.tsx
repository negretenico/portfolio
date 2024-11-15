import {
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Nullish } from "../types/types";

type TabItem = {
  id: string | number;
  label: string;
  body: React.JSX.Element;
  styling?: React.CSSProperties;
};
type TabProps = {
  tabs: Array<TabItem>;
  isVertical?: boolean;
};
export const Tabs = ({ tabs, isVertical = false }: TabProps) => {
  const defaultStyling = {};
  const TabContent = ({
    body,
    isOpen,
  }: {
    body: React.JSX.Element;
    isOpen: boolean;
  }) => {
    return (
      <MDBTabsPane open={isOpen}>
        <div>{body}</div>
      </MDBTabsPane>
    );
  };
  const [activeTabId, setActiveTabId] = useState<Nullish<string | number>>(0);
  const handleSetActive = (id: string | number): void => {
    if (id === activeTabId) {
      return;
    }
    setActiveTabId(id);
  };
  const tabClassName = isVertical ? "max-w-36 flex flex-col" : undefined;
  const containerClassName = `grid grid-rows-${isVertical ? "1 grid-flow-col" : 2} `;
  const tabPadding = isVertical ? "pr-8" : "pb-8";
  return (
    <>
      <div className={containerClassName}>
        <MDBTabs className={tabClassName}>
          {tabs.map((tab) => {
            return (
              <MDBTabsItem className={tabPadding} key={tab.id}>
                <MDBTabsLink
                  style={tab.styling ?? defaultStyling}
                  onClick={() => {
                    handleSetActive(tab.id);
                  }}
                  active={tab.id === activeTabId}
                >
                  {tab.label}
                </MDBTabsLink>
              </MDBTabsItem>
            );
          })}
        </MDBTabs>
        <MDBTabsContent>
          {tabs.map((tab, idx) => {
            return (
              <TabContent
                body={tab.body}
                key={`${tab.id}-body-${idx}`}
                isOpen={tab.id === activeTabId}
              />
            );
          })}
        </MDBTabsContent>
      </div>
    </>
  );
};
