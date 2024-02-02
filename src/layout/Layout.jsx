import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const Layout = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Main />

      {/* <div
        style={{
          position: "absolute",
          left: 0,
          height: "100%",

          width: "15rem",
          opacity: "1",

          backgroundColor: "#ff000050",
          border: "solid 2px #ff000050",
          transition: "all 500ms ease",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "15rem",
          backgroundColor: "#ff000050",
          border: "solid 2px #ff000050",
        }}
      ></div> */}
    </div>
  );
};

export default Layout;
