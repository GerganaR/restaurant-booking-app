import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookingForm from "../../components/BookingForm/BookingForm";

const BookingPage = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      {currentUser ? (
        <BookingForm />
      ) : (
        <div style={{ paddingTop: "200px" }}>No user</div>
      )}

      <Footer />
    </div>
  );
};

export default BookingPage;
