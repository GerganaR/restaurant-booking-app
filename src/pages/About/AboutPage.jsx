import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import FindUs from "../../components/FindUs/FindUs";
import AboutUs from "../../components/AboutUs/AboutUs";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <FindUs />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
  );
};

export default AboutPage;
