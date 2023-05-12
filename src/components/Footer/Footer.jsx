import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import FooterOvelay from "../../components/Footer/FooterOverlay";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer" id="login">
    <FooterOvelay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Cherni vrah 15, Okolovrasten pat <br /> Sofia, Bulgaria, 4200
        </p>
        <p className="p__opensans">+359 898 565 231</p>
        <p className="p__opensans">+359 898 563 445</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginBottom: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 SteakHouse. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;