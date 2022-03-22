//imported file
import axios from "axios";
import { useEffect, useState } from "react";

//data context for CRUD operations
const useDataContext = () => {
  //data state for CRUD operations
  const [servicesData, setServicesData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);
  const [error, setError] = useState("");
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewStatus, setReviewStatus] = useState("pending");

  //delete users order
  const deleteAppointment = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(
          `https://humaniad-hospital-backend.herokuapp.com/appointments/${_id}`
        )
        .then((response) => {
          if (response.data.deletedCount > 0) {
            const remainingAppointments = appointmentsData.filter(
              (appointment) => appointment?._id === _id
            );
            setAppointmentsData(remainingAppointments);
            alert("Order Appointment successfully.");
          }
        })
        .catch((error) => setError(error));
    }
  };
  //delete users order
  const deleteReviews = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(
          `https://humaniad-hospital-backend.herokuapp.com/reviews/${_id}`
        )
        .then((response) => {
          if (response.data.deletedCount > 0) {
            const remainingReviews = reviewsData.filter(
              (review) => review?._id === _id
            );
            setReviewsData(remainingReviews);
            alert("Review deleted successfully.");
          }
        })
        .catch((error) => setError(error));
    }
  };

  //delete products data
  const deleteProduct = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(
          `https://humaniad-hospital-backend.herokuapp.com/products/${_id}`
        )
        .then((response) => {
          if (response.data.deletedCount > 0) {
            const remainingServices = servicesData.filter(
              (order) => order?._id === _id
            );
            setServicesData(remainingServices);
            alert("Products deleted successfully.");
          }
        })
        .catch((error) => setError(error));
    }
  };

  //handle status change to approved
  const handleStatusUpdateReview = (_id) => {
    axios
      .put(`https://humaniad-hospital-backend.herokuapp.com/reviews/${_id}`, {
        status: "approved",
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setReviewStatus("approved");
        }
      })
      .catch((error) => setError(error));
  };

  //services data load
  useEffect(() => {
    axios
      .get("https://humaniad-hospital-backend.herokuapp.com/services")
      .then((response) => setServicesData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //review data load
  useEffect(() => {
    axios
      .get("https://humaniad-hospital-backend.herokuapp.com/reviews")
      .then((response) => setReviewsData(response?.data))
      .catch((error) => setError(error));
  }, [reviewsData]);
  //review data load
  useEffect(() => {
    axios
      .get("https://humaniad-hospital-backend.herokuapp.com/doctors")
      .then((response) => setDoctorsData(response?.data))
      .catch((error) => setError(error));
  }, [doctorsData]);

  //blogs data load
  useEffect(() => {
    axios
      .get("https://humaniad-hospital-backend.herokuapp.com/blogs")
      .then((response) => setBlogsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  // order data load
  useEffect(() => {
    axios
      .get("https://humaniad-hospital-backend.herokuapp.com/appointments")
      .then((response) => setAppointmentsData(response?.data))
      .catch((error) => setError(error));
  }, [appointmentsData]);

  return {
    servicesData,
    appointmentsData,
    blogsData,
    deleteAppointment,
    handleStatusUpdateReview,
    orderStatus,
    error,
    reviewsData,
    deleteProduct,
    doctorsData,
    setReviewsData,
    deleteReviews,
  };
};

export default useDataContext;
