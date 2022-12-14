import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer text-white py-5">
      <div className="logo py-2">
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <p className="copyright">2022 © All rights reserved.BrainUp Education.</p>
      <p className="">
        Handcrafted by @ <span className="my-name">Rabbi_Ahemed</span>.
      </p>
    </div>
  );
};

export default Footer;
