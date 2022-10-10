import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="text-white">
        <h1 className=" fw-bold">
          Start Learning With Learn<span style={{ color: "red" }}>Up</span> Now
        </h1>
        <p>
          Study any topic, anytime. Choose from thousands of expert-led expelio
          terms courses now.
        </p>
      </div>
      <div>
        <img
          className="img-fluid"
          src="https://i.ibb.co/dKMm2qN/edu-2.png"
          alt="edu-2"
          border="0"
        ></img>
      </div>
    </div>
  );
};

export default Header;
