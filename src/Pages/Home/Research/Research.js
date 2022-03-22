//imported file
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

//research component
const Research = () => {
  return (
    <>
      <Header></Header>
      <div className="container shadow radius-card py-1 my-5 py-5">
        <h1 className="fw-bold text-center ms-md-4 p-md-2 ">
          Know Our
          <span className="gradient-txt"> Research</span>.
        </h1>
        <div className="container">
          <h2 className="fw-bold fs-2">
            World-class clinical care, teaching and research
          </h2>
          <br />
          <h4>
            Humanidad Modern Hospital's first fully integrated academic health
            sciences centre.
          </h4>{" "}
          <br />
          <br />
          <h4 className="fw-light lh-base">
            We combine excellence in clinical care with teaching and research to
            enhance patient outcomes and improve lives. Researchers also benefit
            from our unique model because they can see the immediate effects of
            their research on patients.
          </h4>
        </div>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 mx-auto g-4 my-4">
          <div className="col">
            <div className="card border-card h-100 ">
              <div className="card-body">
                <h5 className="card-title">Leaders in patient care</h5>
                <p className="card-text">
                  We offer our patients the latest in technology and therapies
                </p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="card border-card h-100">
              <div className="card-body">
                <h5 className="card-title">Research and education</h5>
                <p className="card-text">
                  Developing new treatments and educating the next generation
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-card h-100">
              <div className="card-body">
                <h5 className="card-title">Learning from experts</h5>
                <p className="card-text">
                  Students learn from expert clinicians and researchers
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2 className="fw-bold fs-2">Mission, vision and values</h2>
          <h3>Our mission</h3>
          <h4 className="fw-light lh-base">
            Putting the patient first, we deliver clinical care, learning and
            research focused on progress through evidence.
          </h4>
          <h3>Our vision</h3>
          <h4 className="fw-light lh-base">
            To be a world-class university health sciences centre, integrating
            clinical care, learning and research to improve lives
          </h4>
          <h3>Our values</h3>
          <h4 className="fw-light lh-base">
            As a progressive healthcare system, we focus on six core values to
            provide high-quality care for patients through research and
            training.
          </h4>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Research;
