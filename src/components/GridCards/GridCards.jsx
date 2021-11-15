import React, { useCallback, useState } from "react";
// import { Container, Row, Col } from "react-grid-system";
import "./styles.scss";


const GridCards = ({cards}) => {


  // const [activeIndex, setActiveIndex] = useState(0);
  // const changeActiveIndex = useCallback(
  //   (newIndex) => setActiveIndex(newIndex),
  //   []
  // );

  return (
    <div className="container">
      <div className="row">
        {cards.map((item) => (
          <div className="col">
            <img src={item.image} className="image" alt="actor-card" />
            <p className="actor-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCards;
