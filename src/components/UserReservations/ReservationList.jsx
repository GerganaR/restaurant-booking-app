import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Reservation.css";
import { data } from "../../constants";
import ReservationItem from "./ReservationItem";

const ReservationList = () => {
  return (
    <div className="app__bg reservation_padding">
      <div className="app__reservation-heading">
        <SubHeading title="Check your previous reservations" />
        <h1 className="headtext__cormorant">User's Reservations</h1>
      </div>
      <div className="app__reservationlist-wrapper">
        {data.reservations.map((reservation) => (
          <ReservationItem reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
