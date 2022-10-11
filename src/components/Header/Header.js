import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header px-5">
      <div className="text-white px-5">
        <h1 className=" fw-bold title">
          Train up your knowledge With Brain
          <span style={{ color: "red" }}>Up</span>
        </h1>
        <p className="title">
          Participate in quizes on any topic, anytime. Choose from thousands of
          expert-led expelio terms quize modules now.
        </p>
        <Link to="/topics">
          <div className="button try">
            <div className="button-wrapper">
              <div className="text">Try Now</div>
              <span className="icon">For Free!</span>
            </div>
          </div>
        </Link>
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
