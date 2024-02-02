import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div
      style={{ backgroundColor: "#291ebd", height: "100%", padding: "2vmin" }}
    >
      <Outlet />
    </div>
  );
};

export default Main;
