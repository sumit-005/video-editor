import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import "./styles.scss";
import galleryActiveIcon from "../../assests/icons/gallery-active.png";
import galleryIcon from "../../assests/icons/gallery.png";
import videoActiveIcon from "../../assests/icons/video-active.png";
import videoIcon from "../../assests/icons/video.png";
import logo from "../../assests/icons/logo.png";
import account from "../../assests/images/account.png";

const Sidebar = (props, { defaultActive }) => {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);

  const sideMenuIcons = [
    {
      name: "video",
      icon: videoIcon,
      activeIcon: videoActiveIcon,
    },
    {
      name: "gallery",
      icon: galleryIcon,
      activeIcon: galleryActiveIcon,
    },
  ];

  const getImagePath = (path, index) => {
    console.log("index", index);
    console.log("path", path);
    const data = sideMenuIcons[path];
    const image = path !== index ? data.icon : data.activeIcon;
    console.log("image", image);
    return image;
  };

  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex || defaultActive
  );

  const changeActiveIndex = (newIndex) => {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  };

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <>
      <div className="sidebar-parent">
        <div>
          <div className="sidebar-logo">
            <img src={logo} alt="icon" />
          </div>

          {SidebarItems.map((item, index) => (
            <Link to={item.route}>
              <div
                key={item.id}
                className={
                  "sidebar-items " +
                  (index === lastActiveIndex ? "sidebar-items-active" : null)
                }
              >
                <img src={getImagePath(item.id, activeIndex)} alt="icon" />
              </div>
            </Link>
          ))}
        </div>
        <Link to="/account">
          <div className="sidebar-account">
            <img src={account} alt="icon" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
