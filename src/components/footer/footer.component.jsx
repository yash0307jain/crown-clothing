import React from "react";
import { Link } from "react-router-dom"

import "./footer.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Footer = () => (
  <div className="footer">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="footer-content">
      © 2020 Crown Clothing | All right reserved.
    </div>
  </div>
);

export default Footer;
