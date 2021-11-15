import React from "react";
import "./styles.scss";
import ArrowDown from "../../assests/icons/arrow -down.png";

const Nav = ({ component }) => {
  return (
    <>
      {component === "dashboard" && (
        <div className="navbar">
          <div className="title">
            <h2>
              Saying Hi to my customers
              <img src={ArrowDown} alt="ArrowDown" className="arrow-icon" />
            </h2>
          </div>
          <div className="buttons">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Save </button>
          </div>
        </div>
      )}

      {component === "gallery" && (
        <div className="navbar">
          <div className="title">
            <h2>Saved Videos</h2>
          </div>
          <div className="buttons">
            <button className="btn btn-primary">Create New </button>
          </div>
        </div>
      )}

      {component === "account" && (
        <div className="navbar">
          <div className="title">
            <h2>My Account</h2>
          </div>
            <p className="logout">Logout </p>
        </div>
      )}

      <div className="list-divider" />
    </>
  );
};

export default Nav;
