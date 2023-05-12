import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field } from "formik";

import {
  BsFillLockFill,
  BsFillEnvelopeFill,
  BsFillPersonFill,
} from "react-icons/bs";
import * as Yup from "yup";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, setCurrentUser, currentUser } = useContext(UserContext);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);

    const registeredUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    register(registeredUser);
    // Submit registration to server here
    setCurrentUser(values);
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <div className="app__registerform-group">
            <label className="app__registerform-label" htmlFor="firstName">
              First Name
            </label>
            <Field
              className="app__registerform-input"
              name="firstName"
              type="text"
            />
            <span className="app__registerform-icon">
              <BsFillPersonFill />
            </span>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="app__registerform-error">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="app__registerform-group">
            <label className="app__registerform-label" htmlFor="lastName">
              Last Name
            </label>
            <Field
              className="app__registerform-input"
              name="lastName"
              type="text"
            />
            <span className="app__registerform-icon">
              <BsFillPersonFill />
            </span>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="app__registerform-error">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
          <div className="app__registerform-group">
            <label className="app__registerform-label" htmlFor="email">
              Email
            </label>
            <Field
              className="app__registerform-input"
              name="email"
              type="email"
            />
            <span className="app__registerform-icon">
              <BsFillEnvelopeFill />
            </span>
            {formik.touched.email && formik.errors.email ? (
              <div className="app__registerform-error">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="app__registerform-group">
            <label className="app__registerform-label" htmlFor="password">
              Password
            </label>
            <Field
              className="app__registerform-input"
              name="password"
              type="password"
            />
            <span className="app__registerform-icon">
              <BsFillLockFill />
            </span>
            {formik.touched.password && formik.errors.password ? (
              <div className="app__registerform-error">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="app__registerform-group">
            <label
              className="app__registerform-label"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <Field
              className="app__registerform-input"
              name="confirmPassword"
              type="password"
            />
            <span className="app__registerform-icon">
              <BsFillLockFill />
            </span>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="app__registerform-error">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <div className="app__registerform-button">
            <button className="custom__button" type="submit">
              Register
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default RegisterForm;
