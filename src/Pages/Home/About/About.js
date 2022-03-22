//imported file
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

//about component
const About = () => {
  return (
    <>
      <Header />
      <div className="container shadow radius-card py-1 my-5">
        <h1 className="fw-bold text-center ms-md-4 p-md-2  my-5">
          Who We
          <span className="gradient-txt"> Are</span>.
        </h1>
        <h4 className="fw-light lh-base text-start px-5 pb-5 ">
          At Humanidad Modern Hospital We’re here to help you get better, feel
          better, and stay better. We believe movement matters. We’ve made it
          our mission to support all kinds of movement: for every body, at every
          stage. Movement matters when it comes to enjoying life, regardless of
          whether you’re an elite athlete or hoping to alleviate every day pain.
          We want to guide your performance, or recovery, so you can achieve
          your movement goals—’personal best’ is just that, personalised to suit
          your fitness level and lifestyle. Whether it’s improving, maintaining
          or optimising your movement, we’re here to help. We use our experience
          to support your needs. We believe that every patient, and their
          movement, is unique. It’s why we leverage the varied skills of our
          team when assessing a specific injury or focus area. This allows you
          to be paired with the practitioner whose expertise best suits your
          needs. Our people are some of the most knowledgeable in the field,
          with leading expertise across spinal, pregnancy, and sports, through
          to chronic pain and aging. Our network connects you with experienced
          allied health professionals that share their knowledge during your
          sessions and through our online blog and injury resources. We’re there
          when you need us. We know it’s important to be available when you need
          us. It’s why we’ve built a network of practices all around Australia
          and filled them with the most supportive and experienced professionals
          in the industry. We maintain flexible appointment times across our
          clinics, and a range of locations in each state that support our
          allied health services across physiotherapy, sports medicine, massage
          therapy, exercises classes, and podiatry.
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default About;
