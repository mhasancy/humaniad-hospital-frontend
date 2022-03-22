//imported file
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "../../../index.css";
//header component
const Header = () => {
  const { firebaseContext } = useAuth();
  //destructuring
  const { user, logOut, admin } = firebaseContext;
  const navItemCol = {
    color: "rgb(54, 201, 95)",
  };
  return (
    <Box
      style={{ background: "#fff" }}
      className="sticky-top navbar navbar-expand-lg shadow "
    >
      <Box className="container-fluid px-5">
        <NavLink className="navbar-brand fs-2 fw-bold" to="/">
          <span style={{ color: "rgba(54, 201, 95, 0.829)" }}>Humanidad</span>
        </NavLink>
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Box className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user?.email ? (
              <>
                <li style={navItemCol} className="nav-item">
                  <NavLink
                    aria-current="page"
                    className="nav-link active"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                {user?.email && !admin && (
                  <li style={navItemCol} className="nav-item">
                    <NavLink to="/dashboard" className="nav-link">
                      Appointment
                    </NavLink>
                  </li>
                )}

                <li style={navItemCol} className="nav-item">
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item nav-dict">
                  <NavLink to="/doctors" className="nav-link">
                    Doctors
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item nav-dict">
                  <NavLink to="/research" className="nav-link">
                    Research
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item nav-dict">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item">
                  <NavLink disabled to="" className="nav-link">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li className="nav-item" style={navItemCol}>
                  <NavLink to="/" className="nav-link" onClick={logOut}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li style={navItemCol} className="nav-item">
                  <NavLink to="/appointment" className="nav-link">
                    Appointment
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item">
                  <NavLink to="/department" className="nav-link">
                    Department
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item">
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item nav-dict">
                  <NavLink to="/doctors" className="nav-link">
                    Doctors
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item nav-dict">
                  <NavLink to="/research" className="nav-link">
                    Research
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item nav-dict">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>

                <li style={navItemCol} className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li style={navItemCol} className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
