import React from "react";
import "./styles.scss";

const AlingmentCards = () => {
  return (
    <div className="alignment-cards">
      <button className="alignment-button">Left</button>
      <button className="alignment-button-active">Center</button>
      <button className="alignment-button">Right</button>
    </div>
  );
};

export default AlingmentCards;
