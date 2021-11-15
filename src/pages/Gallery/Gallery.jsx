import React from "react";
import Nav from "../../components/Nav/Nav";
import "./styles.scss";
import gallery1 from "../../assests/images/gallery-1.png";
import more from "../../assests/icons/more.png";
import ImageCard from "../../components/ImageCard/ImageCard";

const Gallery = () => {
  const tabList = [
    {
      id: 0,
      title: "Email",
    },
    {
      id: 1,
      title: "Marketing",
    },
    {
      id: 2,
      title: "Greeting",
    },
  ];
  return (
    <div className="gallery">
      <Nav component="gallery" />

      <div className="gallery-card">
        <div className="image-container">
          <ImageCard image={gallery1} />
          <img src={more} className="more" alt="more" />
        </div>

        <div className="video-title">Saying Hi to users!</div>
        <div className="video-tabs">
          {tabList.map((item) => (
            <div className="video-tabs-list" key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
