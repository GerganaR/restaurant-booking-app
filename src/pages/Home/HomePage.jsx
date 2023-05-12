import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import Header from "../../components/Header/Header";
import Laurels from "../../components/Laurels/Laurels";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Laurels />
      <Intro />
      <Footer />
    </div>
  );
};

export default HomePage;
