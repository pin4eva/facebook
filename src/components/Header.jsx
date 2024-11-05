import { Icon } from "@iconify/react";
import React from "react";
import "../styles/header.scss";

const Header = () => {
  const middleMenus = [
    { name: "Home", path: "/src/assets/images/home.svg" },
    { name: "Notification", path: "/src/assets/images/bell.svg" },
    { name: "Videos", path: "/src/assets/images/video.svg" },
    { name: "Avatar", path: "/src/assets/images/avatar.png" },
    { name: "Store", path: "/src/assets/images/store.svg" },
    { name: "Group", path: "/src/assets/images/group.svg" },
    { name: "Chat", path: "/src/assets/images/messenger.svg" },
  ];
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="/src/assets/images/facebook-logo.svg" alt="facebook-logo" />
          <div className="search">
            <Icon
              className="search-icon"
              height={24}
              icon="bitcoin-icons:search-outline"
            />
            <input type="search" placeholder="Search Facebook" />
          </div>
        </div>
        <ul className="middle-nav">
          {middleMenus.map((nav, i) => (
            <li key={i}>
              <a href="/">
                <img src={nav.path} alt={nav.name} />
              </a>
            </li>
          ))}
        </ul>

        <div className="settings">
          <a href="/">
            <img src="/src/assets/images/Setting.svg" alt="settings" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
