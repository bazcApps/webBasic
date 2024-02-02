import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "2vmin",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src="/hammer.svg" alt="logo" style={{ height: "1rem" }} />
    </div>
  );
};

export default Header;
