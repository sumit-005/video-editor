import React from "react";
import "./styles.scss";

const GridCards = ({ cards }) => {
  // To get active card data
  // const [activeTab, setActiveTab] = useState("center");
  // const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  return (
    <div className="container">
      <div className="row">
        {cards.map((item) => (
          <div className="col">
            <img
              src={item.image}
              alt="actor-card"
              // onClick={(e) => {
              //   e.preventDefault();
              //   handleActiveTab(item.name);
              // }}
              // className={item.name === activeTab ? ["image-active"] : "image"}
              className="image"
            />
            <p className="actor-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCards;
