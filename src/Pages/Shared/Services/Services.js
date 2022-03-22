//imported file
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Home/Header/Header";
import Service from "../Service/Service";

//services component
const Services = () => {
  //services data set
  const { dataContext } = useAuth();
  const { servicesData } = dataContext;
  return (
    <>
      <Header />
      <div className=" container mx-auto my-5">
        <h1 className="fw-bold text-center ms-md-4 p-md-2  my-5">
          Book Your
          <span className="gradient-txt"> Services</span>.
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
          {servicesData?.map((serviceData) => (
            <Service key={serviceData?._id} serviceData={serviceData}></Service>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
