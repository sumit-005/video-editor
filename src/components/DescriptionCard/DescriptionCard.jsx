import React from "react";
import "./styles.scss";

const DescriptionCard = () => {
  return (
    <div className="description">
      <p>
        Type or paste your videoscript here. You can also request a translation
        of an English script to any of 27 other languages
      </p>
      <button className="btn btn-secondary">Listen</button>
    </div>
  );
};

export default DescriptionCard;
