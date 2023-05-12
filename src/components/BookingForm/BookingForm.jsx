import React from "react";
import { Formik, Form, Field } from "formik";

import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import * as Yup from "yup";
import SubHeading from "../SubHeading/SubHeading";
import "./BookingForm.css";

const BookingForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    restaurant: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "Minimum number of guests is 1")
      .max(10, "Maximum number of guests is 10")
      .required("Number of guests is required"),
    restaurant: Yup.string().required("Restaurant is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Submit reservation to server here
  };

  return (
    <div className="app__bg  section__padding" style={{ paddingTop: "120px" }}>
      <div className="app__bookingform">
        <div className="app__bookingform-heading">
          <SubHeading title="Make a reservation" />
          <h1 className="headtext__cormorant">Book a table</h1>
          <p className="p__opensans">And enjoy the pleasent atmosphere!</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div className="row">
                <div className="col-md-12">
                  <div className="app__bookingform-group">
                    <label
                      className="app__bookingform-label"
                      htmlFor="restaurant"
                    >
                      Restaurant
                    </label>

                    <Field
                      className="app__bookingform-input"
                      name="restaurant"
                      component="select"
                    >
                      <option value=""></option>
                      <option value="1">Restaurant 1</option>
                      <option value="2">Restaurant 2</option>
                      <option value="3">Restaurant 3</option>
                    </Field>
                    {formik.touched.restaurant && formik.errors.restaurant ? (
                      <div className="app__bookingform-error">
                        {formik.errors.restaurant}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <div className="app__bookingform-group">
                    <label className="app__bookingform-label" htmlFor="name">
                      Name
                    </label>
                    <Field
                      className="app__bookingform-input"
                      name="name"
                      type="text"
                    />
                    <span className="app__bookingform-icon">
                      <BsFillPersonFill />
                    </span>

                    {formik.touched.name && formik.errors.name ? (
                      <div className="app__bookingform-error">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="app__bookingform-group">
                    <label className="app__bookingform-label" htmlFor="surname">
                      Surname
                    </label>
                    <Field
                      className="app__bookingform-input"
                      name="surname"
                      type="text"
                    />
                    <span className="app__bookingform-icon">
                      <BsFillPersonFill />
                    </span>
                    {formik.touched.surname && formik.errors.surname ? (
                      <div className="app__bookingform-error">
                        {formik.errors.surname}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <div className="app__bookingform-group">
                    <label className="app__bookingform-label" htmlFor="email">
                      Email
                    </label>
                    <Field
                      className="app__bookingform-input"
                      name="email"
                      type="email"
                    />
                    <span className="app__bookingform-icon">
                      <BsFillEnvelopeFill />
                    </span>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="app__bookingform-error">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="app__bookingform-group">
                    <label className="app__bookingform-label" htmlFor="phone">
                      Phone
                    </label>
                    <Field
                      className="app__bookingform-input"
                      name="phone"
                      type="text"
                    />
                    <span className="app__bookingform-icon">
                      <BsPhoneVibrateFill />
                    </span>

                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="app__bookingform-error">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>{" "}
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="app__bookingform-group">
                    <label className="app__bookingform-label" htmlFor="date">
                      Date
                    </label>
                    <Field
                      className="app__bookingform-input"
                      min={new Date().toISOString().slice(0, 10)}
                      name="date"
                      type="date"
                    />
                    {formik.touched.date && formik.errors.date ? (
                      <div className="app__bookingform-error">
                        {formik.errors.date}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="app__bookingform-group">
                    <label className="app__bookingform-label" htmlFor="time">
                      Time
                    </label>
                    <Field
                      className="app__bookingform-input"
                      name="time"
                      component="select"
                    >
                      <option value=""></option>
                      <option value="18">18:00</option>
                      <option value="18_30">18:30</option>
                      <option value="19">19:00</option>
                      <option value="19_30">19:30</option>
                      <option value="20">20:00</option>
                      <option value="20_30">20:30</option>
                      <option value="21">21:00</option>
                    </Field>
                    {/* <Field
                      className="app__bookingform-input"
                      name="time"
                      type="time"
                    /> */}
                    {formik.touched.time && formik.errors.time ? (
                      <div className="app__bookingform-error">
                        {formik.errors.time}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="app__bookingform-group">
                    <label className="app__bookingform-label" htmlFor="guests">
                      Guests
                    </label>
                    <Field
                      className="app__bookingform-input"
                      name="guests"
                      type="number"
                    />

                    {formik.touched.guests && formik.errors.guests ? (
                      <div className="app__bookingform-error">
                        {formik.errors.guests}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="app__bookingform-button">
                <button className="custom__button" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
