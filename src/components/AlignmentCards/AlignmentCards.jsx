import React, { useCallback, useState } from "react";
import "./styles.scss";

const AlingmentCards = () => {
  const [activeTab, setActiveTab] = useState('center');
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);
  return (
    <div className="alignment-cards">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab("left");
        }}
        className={
          "left" === activeTab
            ? ["alignment-button-active"]
            : "alignment-button"
        }
      >
        Left
      </button>
      <button
        className={
          "center" === activeTab
            ? ["alignment-button-active"]
            : "alignment-button"
        }
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab("center");
        }}
      >
        Center
      </button>
      <button
        className={
          "right" === activeTab
            ? ["alignment-button-active"]
            : "alignment-button"
        }
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab("right");
        }}
      >
        Right
      </button>
    </div>
  );
};

export default AlingmentCards;
