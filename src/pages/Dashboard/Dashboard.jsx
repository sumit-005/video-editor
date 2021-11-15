import React from "react";
import "./styles.scss";
import largeImage from "../../assests/images/large-image.png";
import ImageCard from "../../components/ImageCard/ImageCard";
import DescriptionCard from "../../components/DescriptionCard/DescriptionCard";
import { Tab, Tabs } from "../../components/Tabs/Tabs";
import VoiceCards from "../../components/VoiceCards/VoiceCards";
import AlingmentCards from "../../components/AlignmentCards/AlignmentCards";
import BackgroundCards from "../../components/BackgroundCards/BackgroundCards";
import actor1 from "../../assests/images/image-1.png";
import actor2 from "../../assests/images/image-2.png";
import actor3 from "../../assests/images/image-3.png";
import actor4 from "../../assests/images/image-4.png";
import actor5 from "../../assests/images/image-5.png";
import actor6 from "../../assests/images/image-6.png";
import actor7 from "../../assests/images/image-7.png";
import GridCards from "../../components/GridCards/GridCards";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const actorList = [
    { id: 1, name: "Anna", image: actor1 },
    { id: 2, name: "YoYo", image: actor2 },
    { id: 3, name: "Skye", image: actor3 },
    { id: 4, name: "Mike", image: actor4 },
    { id: 5, name: "Vincent", image: actor5 },
    { id: 6, name: "Peter", image: actor6 },
    { id: 7, name: "May", image: actor7 },
  ];
  return (
    <>
      <Nav component="dashboard" />
      <div className="dashboard">
        <div className="main-card">
          <div className="image-card">
            <ImageCard image={largeImage} />
          </div>
          <div className="description-card">
            <DescriptionCard />
          </div>
        </div>
        <div className="action-card">
          <Tabs>
            <Tab label={"actor"} tabName={"Actor"}>
              <div className="actor-cards">
                <GridCards cards={actorList} />
              </div>
            </Tab>
            <Tab label={"voice"} tabName={"Voice"}>
              <VoiceCards />
            </Tab>
            <Tab label={"alignment"} tabName={"Alignment"}>
              <AlingmentCards />
            </Tab>
            <Tab label={"backgroud"} tabName={"Background"}>
              <BackgroundCards />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
