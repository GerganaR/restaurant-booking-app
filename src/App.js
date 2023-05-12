import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import HomePage from "./pages/Home/HomePage";

import "./App.css";
import AboutPage from "./pages/About/AboutPage";
import BookingPage from "./pages/Booking/BookingPage";
import Menu from "./pages/Menu/Menu";
import { AuthPage } from "./pages/Auth/AuthPage";
import ReservationsPage from "./pages/Reservations/ReservationsPage";

const App = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/*" element={<Navigate to="/auth" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
