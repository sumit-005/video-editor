import React from "react";
import "./styles.scss";
import image1 from "../../assests/images/voice-1.png";
import image2 from "../../assests/images/voice-2.png";
import image3 from "../../assests/images/voice-3.png";

const VoiceCards = () => {
  return (
    <div className="voice-container">
      <div className="voice-card">
        <img src={image1} alt="voice-card" width="472px" />
      </div>
      <div className="voice-card">
        <img src={image2} alt="voice-card" width="472px" />
      </div>
      <div className="voice-card">
        <img src={image3} alt="voice-card" width="472px" />
      </div>
    </div>
  );
};

export default VoiceCards;
