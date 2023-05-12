import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import { BsFillLockFill, BsFillEnvelopeFill } from "react-icons/bs";
import { UserContext } from "../../context/UserContext";
import * as Yup from "yup";
import "./LoginForm.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const initialValues = {
    password: "",
    email: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is inavlid"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Submit reservation to server here
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
          <div className="app__loginform-group">
            <label className="app__loginform-label" htmlFor="email">
              Email
            </label>
            <Field className="app__loginform-input" name="email" type="email" />
            <span className="app__loginform-icon">
              <BsFillEnvelopeFill />
            </span>
            {formik.touched.email && formik.errors.email ? (
              <div className="app__loginform-error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="app__loginform-group">
            <label className="app__loginform-label" htmlFor="password">
              Password
            </label>
            <Field
              className="app__loginform-input"
              name="password"
              type="password"
            />
            <span className="app__loginform-icon">
              <BsFillLockFill />
            </span>
            {formik.touched.password && formik.errors.password ? (
              <div className="app__loginform-error">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="app__loginform-button">
            <button className="custom__button" type="submit">
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
