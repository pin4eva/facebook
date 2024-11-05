import React from "react";
import "./styles/app.css";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-wrapper">
        <LeftSidebar />
        <div className="main">
          <p>Main</p>
        </div>
        <div className="right-sidebar">
          <p>Right</p>
        </div>
      </div>
    </div>
  );
};

export default App;
