import React, { useState } from "react";
import "./AuthPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import SubHeading from "../../components/SubHeading/SubHeading";
import { Link } from "react-router-dom";
export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleFormType = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="app__auth-wrapper app__bg">
      <div
        className="app__bg  section__padding"
        style={{ paddingTop: "120px" }}
      >
        <div className="app__auth-loginwrapper">
          <div className="app__auth-heading">
            <SubHeading title="Book a table" />
            <h1 className="headtext__cormorant">
              {isLogin ? "Log In" : "Register"}
            </h1>
            {/* <p className="p__opensans">And enjoy the pleasent atmosphere!</p> */}
          </div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="app__auth-switchtext">
            <p style={{ marginBottom: "0px" }}>
              {" "}
              {isLogin
                ? "Don't have an account?  "
                : "Already have an account?  "}
              <Link style={{ color: "#dcca87" }} onClick={toggleFormType}>
                {isLogin ? "Register here" : "Log in here"}
              </Link>
            </p>
            <p>
              {" "}
              Or go to{" "}
              <Link style={{ color: "#dcca87" }} to="/">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
