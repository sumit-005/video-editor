import React from "react";
import "./stlyes.scss";
import check from "../../assests/icons/check.png";
import close from "../../assests/icons/close.png";

const Plans = () => {
  const plans = [
    {
      id: 1,
      title: "Free",
      features: [
        { id: 101, title: "Pellentesque interdum libero et", feature: true },
        { id: 201, title: "Pellentesque posuere jdfkdfkdfhd", feature: true },
        { id: 301, title: "Cras sed felis eget", feature: true },
        { id: 401, title: "Maecenas eget luctus", feature: true },
        { id: 501, title: "Nullam vitae augue", feature: true },
      ],
      price: 0,
      action: "Downgrade",
      active: false,
    },
    {
      id: 2,
      title: "Pro",
      features: [
        { id: 101, title: "Maecenas eget luctus purus dds", feature: true },
        { id: 201, title: "Graesent in sollicitudin velit dfd", feature: true },
        { id: 301, title: "Donec in orci vitae nisi ", feature: true },
        { id: 401, title: "Class aptent taciti", feature: true },
        { id: 501, title: "Ut blandit vestibulum", feature: false },
      ],
      price: 12,
      action: "Downgrade",
      active: false,
    },
    {
      id: 3,
      title: "Team",
      features: [
        { id: 101, title: "Maecenas eget luctus purus", feature: true },
        { id: 201, title: "Graesent in sollicitudin velit", feature: true },
        { id: 301, title: "Donec in orci vitae nisi ", feature: true },
        { id: 401, title: "Class aptent taciti", feature: true },
        { id: 501, title: "Ut blandit vestibulum", feature: false },
      ],
      price: 23,
      action: "Current Plan",
      active: true,
    },
    {
      id: 4,
      title: "Agency",
      features: [
        { id: 101, title: "Maecenas eget luctus purusd dfd", feature: true },
        { id: 201, title: "Graesent in sollicitudin velidfdt", feature: true },
        { id: 301, title: "Donec in orci vitae nisi dfd ", feature: true },
        { id: 401, title: "Class aptent taciti", feature: true },
        { id: 501, title: "Ut blandit vestibulum", feature: true },
      ],
      price: 43,
      action: "Upgrade",
      active: false,
    },
  ];
  return (
    <div className="plans-container">
      {plans.map((item) => (
        <div
          key={item.id}
          className={item.active ? "plan-card-active" : "plan-card"}
        >
          <h2 className="plan-title">{item.title}</h2>
          <div className="plan-features">
            <ul className="plan-list">
              {item?.features?.map((feature) => (
                <li key={feature.id}>
                  <div className="feature">
                    <div className="feature-icon">
                      {feature.feature ? (
                        <img src={check} alt="check" />
                      ) : (
                        <img src={close} alt="close" />
                      )}
                    </div>
                    <p className="feature-title">{feature.title}</p>
                  </div>
                </li>
              ))}
            </ul>
            <h1 className="plan-price">${item.price}</h1>
            {!item.active && (
              <button className="plan-button">{item.action}</button>
            )}
            {item.active && (<button className="active-plan-button">{item.action}</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
