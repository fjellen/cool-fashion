import React from "react";
import heroImg from "./Hero.png";

const hero = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          backgroundImage: "url(" + heroImg + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "70vh",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
};

export default hero;
