import React from "react";
import logoFooter from "../assets/images/logo.jpeg";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer-container">
      <div className="logo-column">
        <img src={logoFooter} alt="logo footer" className="logo-img" />
        <div className="icons">
          <FacebookOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
        </div>
        <p className="copyright">
          {" "}
          copyright &copy;{year} by SheCanCODE,
          <span>Inc. All rights reserved</span>{" "}
        </p>
      </div>
      <div className="contactus-column">
        <h3 className="footer-title">Contact-US</h3>
        <p>
          623 Kacyiru ST., 2nd floor, <span>Kigali Rwanda</span>
        </p>
        <p>
          <a href="tel:+250-788-737-287">tel:+250-788-737-287</a>
          <a href="mailto:webmaster@example.com">shecancode@gmail.com</a>.
        </p>
      </div>
      <div className="account-column">
        <h3 className="footer-title">Account</h3>
        <p>
          <a href="#">Create Account</a>
        </p>
        <p>
          <a href="#">Sign in</a>
        </p>
      </div>
      <div className="company-column">
        <h3 className="footer-title">Company</h3>
        <p>
          <a href="#">About SheCanCODE</a>
        </p>
        <p>
          <a href="#">Careers</a>
        </p>
        <p>
          <a href="#">Partners</a>
        </p>
      </div>
      <div className="company-column">
        <h3 className="footer-title">Ressources</h3>
        <p>
          <a href="#">ShecanCODE directory</a>
        </p>
        <p>
          <a href="#">Help Center</a>
        </p>
        <p>
          <a href="#">Privacy & terms</a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
