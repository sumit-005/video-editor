import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./styles.scss";

const Layout = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          overflowX: "hidden",
          maxWidth: "100%",
        }}
      >
        <Sidebar history={props.history} />

        <div style={{ flex: "1 0 auto" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
