//imported file
import axios from "axios";
import { useEffect, useState } from "react";

//data context for CRUD operations
const useDataContext = () => {
  //data state for CRUD operations
  const [servicesData, setServicesData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [error, setError] = useState("");
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [reviewsData, setReviewsData] = useState([]);

  //delete users order
  const deleteOrder = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(`https://quiet-cliffs-65550.herokuapp.com/orders/${_id}`)
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

  //delete products data
  const deleteProduct = (_id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      axios
        .delete(`https://quiet-cliffs-65550.herokuapp.com/products/${_id}`)
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
  const handleStatusUpdate = (_id) => {
    axios
      .put(`https://quiet-cliffs-65550.herokuapp.com/orders/${_id}`, {
        status: "Shipped",
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          setOrderStatus("Shipped");
        }
      })
      .catch((error) => setError(error));
  };

  //services data load
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/mhasancy/test/main/serviceData.json"
      )
      .then((response) => setServicesData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //review data load
  useEffect(() => {
    axios
      .get("https://quiet-cliffs-65550.herokuapp.com/reviews")
      .then((response) => setReviewsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  //blogs data load
  useEffect(() => {
    axios
      .get("https://quiet-cliffs-65550.herokuapp.com/blogs")
      .then((response) => setBlogsData(response?.data))
      .catch((error) => setError(error));
  }, []);

  // order data load
  useEffect(() => {
    axios
      .get("https://quiet-cliffs-65550.herokuapp.com/orders")
      .then((response) => setOrdersData(response?.data))
      .catch((error) => setError(error));
  }, [ordersData]);

  return {
    servicesData,
    ordersData,
    blogsData,
    deleteOrder,
    handleStatusUpdate,
    orderStatus,
    error,
    reviewsData,
    deleteProduct,
  };
};

export default useDataContext;
