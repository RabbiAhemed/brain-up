import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header px-5">
      <div className="text-white px-5">
        <h1 className=" fw-bold">
          Train up your knowledge With Brain
          <span style={{ color: "red" }}>Up</span> Now
        </h1>
        <p>
          Participate in quizes on any topic, anytime. Choose from thousands of
          expert-led expelio terms quize modules now.
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
