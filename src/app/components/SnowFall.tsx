"use client";

import React from "react";
import Snowfall from "react-snowfall";

const SnowEffect: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Snowfall />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "2rem",
        }}
      >
      </div>
    </div>
  );
};

export default SnowEffect;
