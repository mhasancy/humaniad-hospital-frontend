//imported file
import React from "react";
import { NavLink } from "react-router-dom";

//footer component
const Footer = () => {
  return (
    <div className="container-fluid img-fluid mx-0 footer-bg row row-cols-1 g-4 btn-yellow  mt-5 text-light py-5 text-start">
      <div className="row">
        {/* short about */}
        <div className="col col-md-5">
          <h2 className="fw-bold fs-2 text-start ms-3 ps-4">
            <span>Humanidad</span>
          </h2>
          <br />
          <p className="fw-light fs-5 text-start ms-4 ps-3 lh-base">
            Humanidad Modern Hospital is an specializes hospital in England. We
            provide great care for our people through our community Services.
            Make yourself comfortable to take out services on demand. And be
            always aware of your health and safety.
          </p>
          <div className="flex g-4 d-flex justify-content-start ps-3 pt-4 pb-4">
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-twitter-square fs-2 ms-4 text-light"></i>
            </a>
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-facebook-square fs-2 ms-5 text-light"></i>
            </a>
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-linkedin fs-2 ms-5 text-light"></i>
            </a>
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-youtube fs-2 ms-5 text-light"></i>
            </a>
          </div>
        </div>
        <div className="col col-md-4">
          <h2 className="fw-bold fs-2 text-start ms-3 ps-4">Contact</h2>
          <br />
          <p className="fw-light fs-5 text-start ms-4 ps-3 lh-lg w-75">
            23/2, Aston Villa, <br />
            England. <br />
            Tel: +44 01234 567890 <br /> Fax: +44 025 7689 <br />
            Email: info@humanidad.ac.uk
            <br />
            visit:{" "}
            <a
              className="text-light text-decoration-none"
              href="http://www.greenwatch.ac.uk"
              target="_blank"
              rel="noreferrer"
            >
              www.humanidad.ac.uk
            </a>
          </p>
        </div>
        {/* useful links */}
        <div className="col col-md-3">
          <h2 className="fw-bold fs-2 text-start ms-3 ps-4">Pages</h2>
          <br />
          <ul className="fs-5 fw-light text-start ms-4 ps-3 lh-lg w-75 list-unstyled">
            <li className="">
              <NavLink
                className="active text-light text-decoration-none"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-light text-decoration-none"
                to="/appointment"
              >
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-light text-decoration-none"
                to="/department"
              >
                Department
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-light text-decoration-none"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-light text-decoration-none">
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="text-light text-decoration-none">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-light text-decoration-none">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-light text-decoration-none">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-card" />
      <div>
        <p className="text-center mb-0">
          © 2022 Humanidad. Component copyrights belongs to their authors.
        </p>
      </div>
    </div>
  );
};

export default Footer;
