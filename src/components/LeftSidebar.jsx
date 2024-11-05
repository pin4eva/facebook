import React from "react";
import "../styles/left-sidebar.scss";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul>
        <li>
          <a href="/">
            <img src="/src/assets/images/avatar.png" alt="avatar" />
            <span>Minsara Vithanage</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
