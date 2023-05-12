import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isLoggedIn, logout } = useContext(UserContext);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logomain} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="p__opensans">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/reservations"
            >
              Reservations
            </NavLink>
          </li>
        )}
      </ul>
      <div className="app__navbar-login p__opensans">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/book"
        >
          Book table
        </NavLink>
        <div />
        {!isLoggedIn ? (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/auth"
          >
            Log In / Register
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "" : "")}
            onClick={logout}
          >
            Log out
          </NavLink>
        )}
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link-mobile" : ""
                  }
                  to="/"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link-mobile" : ""
                  }
                  to="/about"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="p__opensans">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link-mobile" : ""
                  }
                  to="/menu"
                  onClick={() => setToggleMenu(false)}
                >
                  Menu
                </NavLink>
              </li>
              {isLoggedIn && (
                <li className="p__opensans">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link-mobile" : ""
                    }
                    to="/reservations"
                    onClick={() => setToggleMenu(false)}
                  >
                    Reservations
                  </NavLink>
                </li>
              )}

              <li className="p__opensans">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link-mobile" : ""
                  }
                  to="/book"
                  onClick={() => setToggleMenu(false)}
                >
                  Book table
                </NavLink>
              </li>
              {!isLoggedIn ? (
                <li className="p__opensans">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link-mobile" : ""
                    }
                    to="/auth"
                    onClick={() => setToggleMenu(false)}
                  >
                    Log In / Register
                  </NavLink>
                </li>
              ) : (
                <li className="p__opensans">
                  <NavLink
                    className={({ isActive }) => (isActive ? "" : "")}
                    onClick={logout}
                  >
                    Log out
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
