import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";

import { images } from "../../constants";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="app__header-overlay">
    <div
      className="app__header app__wrapper section__padding"
      style={{ backgroundImage: `url(${images.bgheader})` }}
    >
      <div className="app__header">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          We create joyful emotions and moments of pleasure for each of our
          guests!{" "}
        </p>
        <button type="button" className="custom__button">
          <Link to="/book"> Book Table</Link>
        </button>
      </div>
    </div>
  </div>
);

export default Header;
