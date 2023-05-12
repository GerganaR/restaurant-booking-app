import React from "react";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillCalendarFill,
  BsFillClockFill,
  BsFillStarFill,
} from "react-icons/bs";

const ReservationItem = ({ reservation }) => {
  return (
    <div className="app__reservationlistitem-wrapper">
      <div>
        {" "}
        <div className="app__reservationlistitem-restaurant">
          <div>
            {" "}
            <span>
              <BsFillStarFill />
            </span>
            {reservation.restaurant}
          </div>
        </div>
        <div className="app__reservationlistitem-name">
          <div>{reservation.name}</div>
        </div>
      </div>

      <div className="app__reservationlistitem-contact">
        <div>
          {" "}
          <span>
            {" "}
            <BsFillTelephoneFill />
          </span>
          {reservation.phone}
        </div>
        <div>
          <span>
            {" "}
            <BsFillEnvelopeFill />
          </span>
          {reservation.email}
        </div>
      </div>

      <div className="app__reservationlistitem-date">
        <div>
          <span>
            {" "}
            <BsFillCalendarFill />
          </span>
          {reservation.date}
        </div>
        <div>
          <span>
            <BsFillClockFill />
          </span>
          {reservation.time}
        </div>
      </div>
      <div className="app__reservationlistitem-guests">
        <div>{reservation.guests}</div>
      </div>
    </div>
  );
};

export default ReservationItem;
