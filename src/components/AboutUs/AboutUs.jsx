import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We create joyful emotions and moments of pleasure for each of our
          guests! We will add to your experience with friendly service and
          hospitality, paying attention to every detail.
        </p>
        <button type="button" className="custom__button">
          <Link to="/restaurants"> Book table</Link>
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Restaurants</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          A premium selection of meats from our legendary barbecue? Appetizing
          sushi? Traditional Spanish dishes? We are ready to tempt you!
        </p>
        <button type="button" className="custom__button">
          <Link to="/about">Quick look</Link>
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
