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
};
export const Tabs = ({ tabs }: TabProps) => {
  const defaultStyling = {};
  const TabContent = ({ body }: { body: React.JSX.Element }) => {
    return <MDBTabsPane>{body}</MDBTabsPane>;
  };
  const [activeTabId, setActiveTabId] =
    useState<Nullish<string | number>>(null);
  const handleSetActive = (id: string | number): void => {
    if (id === activeTabId) {
      return;
    }
    setActiveTabId(id);
  };
  return (
    <>
      <MDBTabs>
        {tabs.map((tab) => {
          return (
            <>
              <MDBTabsItem key={tab.id}>
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
            </>
          );
        })}
      </MDBTabs>
      <MDBTabsContent>
        {tabs.map((tab, idx) => {
          return <TabContent body={tab.body} key={`${tab.id}-body-${idx}`} />;
        })}
      </MDBTabsContent>
    </>
  );
};
