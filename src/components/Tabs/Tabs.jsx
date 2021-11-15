import React, { useState, useCallback } from "react";
import "./Tabs.scss";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabs = children.map((child) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}
      className={
        child.props.label === activeTab
          ? ["tabs-tab", "tabs-tab-active"].join(" ")
          : "tabs-tab"
      }
      key={child.props.label}
    >
      {child.props.tabName}
    </button>
  ));
  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );
  return (
    <div className="tabs-container">
      <div className="tabs-box">{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
};

function Tab(props) {
  return <>{props.children}</>;
}

export { Tabs, Tab };
