import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="text-white px-2">
        <h3 className=" fw-bold">You're giving the professor a headache .</h3>
        <h3 className=" fw-bold">
          Quick, <Link to="/">click here</Link> to get back to the home page.
        </h3>
      </div>
      <div>
        <img
          className="img-fluid"
          src="https://i.ibb.co/xmdbMNG/einstien-removebg.png"
          alt="edu-2"
          border="0"
        ></img>
      </div>
    </div>
  );
};

export default NotFound;
