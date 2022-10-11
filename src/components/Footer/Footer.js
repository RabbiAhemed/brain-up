import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer text-white py-5">
      <div className=" py-2">
        <Logo></Logo>
      </div>
      <p className="text-muted">
        2022 © All rights reserved.BrainUp Education.
      </p>
      <p className="text-muted">Handcrafted by @Rabbi_Ahemed.</p>
    </div>
  );
};

export default Footer;
