//imported file
import React from "react";
import { Link } from "react-router-dom";

//service component
const Service = ({ serviceData }) => {
  //destructuring useAuth

  //destructuring props
  const { id, title, intro, image } = serviceData;
  return (
    <div className="col container" id="services">
      <div
        className="card border-card h-100 radius-card overflow-hidden"
        id="hover-card"
      >
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p style={{ height: "100px" }} className="card-text">
            {intro.slice(0, 100)}
          </p>
          <Link to={`/review-order/${id}`}>
            <button className="btn btn-primary gradient-btn rounded-pill px-3 rounded-pill fw-bold px-3 gradient-btn">
              <i className="far fa-bookmark"></i> Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
