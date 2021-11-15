import React from "react";
import "./styles.scss";
import ArrowUpIcon from "../../assests/icons/arrow-up-active.png";
import ArrowDownIcon from "../../assests/icons/arrow -down.png";
import GridCards from "../GridCards/GridCards";
import background1 from "../../assests/images/background-1.png";
import background2 from "../../assests/images/background-2.png";
import background3 from "../../assests/images/background-3.png";
import background4 from "../../assests/images/background-4.png";
import background5 from "../../assests/images/background-5.png";
import background6 from "../../assests/images/background-6.png";
import background7 from "../../assests/images/background-7.png";

const BackgroundCards = () => {
  // fake data to store future api response
  const imageList = [
    { id: 1, name: "Anna", image: background1 },
    { id: 2, name: "YoYo", image: background2 },
    { id: 3, name: "Skye", image: background3 },
    { id: 4, name: "Mike", image: background4 },
    { id: 5, name: "Vincent", image: background5 },
    { id: 6, name: "Peter", image: background6 },
    { id: 7, name: "May", image: background7 },
  ];
  return (
    <div className="background-card-container">
      <div className="background-card-active">
        <div className="background-card-header">
          <div className="title-active">
            <h3>Images</h3>
          </div>
          <div className="icon">
            <img src={ArrowUpIcon} alt="arrow-up" />
          </div>
        </div>
        <div className="background-card-body">
          <GridCards cards={imageList} />
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-header">
          <div className="title">
            <h3>Solid Colours</h3>
          </div>
          <div className="icon">
            <img src={ArrowDownIcon} alt="arrow-up" />
          </div>
        </div>
      </div>
      <div className="card-divider" />
      <div className="background-card">
        <div className="background-card-header">
          <div className="title">
            <h3>Videos</h3>
          </div>
          <div className="icon">
            <img src={ArrowDownIcon} alt="arrow-up" />
          </div>
        </div>
      </div>
      <div className="card-divider" />
    </div>
  );
};

export default BackgroundCards;
