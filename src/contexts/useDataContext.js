//imported file
import axios from "axios";
import { useEffect, useState } from "react";

//data context for CRUD operations
const useDataContext = () => {
  //data state for CRUD operations
  const [servicesData, setServicesData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);
  const [error, setError] = useState("");
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewStatus, setReviewStatus] = useState("pending");

  //delete users order
  const deleteOrder = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(`http://localhost:5000/orders/${_id}`)
        .then((response) => {
          if (response.data.deletedCount > 0) {
            const remainingOrders = ordersData.filter(
              (order) => order?._id === _id
            );
            setOrdersData(remainingOrders);
            alert("Order deleted successfully.");
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
        .delete(`http://localhost:5000/reviews/${_id}`)
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
        .delete(`http://localhost:5000/products/${_id}`)
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
      .put(`http://localhost:5000/reviews/${_id}`, {
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
      .get("http://localhost:5000/services")
      .then((response) => setServicesData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //review data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((response) => setReviewsData(response?.data))
      .catch((error) => setError(error));
  }, [reviewsData]);
  //review data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((response) => setDoctorsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //blogs data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((response) => setBlogsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  // order data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => setOrdersData(response?.data))
      .catch((error) => setError(error));
  }, [ordersData]);

  return {
    servicesData,
    ordersData,
    blogsData,
    deleteOrder,
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
