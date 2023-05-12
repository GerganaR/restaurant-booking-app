import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ReservationList from "../../components/UserReservations/ReservationList";

const ReservationsPage = () => {
  return (
    <div>
      <Navbar />
      <ReservationList />
      <Footer />
    </div>
  );
};

export default ReservationsPage;
