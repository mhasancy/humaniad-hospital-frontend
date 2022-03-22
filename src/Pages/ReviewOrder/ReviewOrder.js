//imported file
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";

//ReviewOrder component
const ReviewOrder = () => {
  //dynamic route data set
  const { serviceId } = useParams();

  //react hook form
  const { register, handleSubmit, reset } = useForm();
  //destructuring
  const { dataContext, firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { servicesData } = dataContext;
  console.log(servicesData);
  //matched order
  const matchedServices = servicesData?.find(
    (serviceData) => serviceData?._id === serviceId
  );
  // console.log(matchedServices);
  //data post to server
  const onSubmit = (data) => {
    axios
      ?.post("https://humaniad-hospital-backend.herokuapp.com//orders", {
        ...data,
        productTitle: matchedServices?.title,
        serviceId,
        status: "Pending",
        image: matchedServices?.image,
        price: matchedServices?.price,
      })
      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Order placed successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Header></Header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography component="h1" variant="h2">
          Place Your Order
        </Typography>
        <br />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            columns={14}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={8} md={4} sx={{ mx: "auto" }}>
              <Card sx={{ maxWidth: 400, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={matchedServices?.image}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {matchedServices?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {matchedServices?.description}
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    pt={1.5}
                  >
                    <Typography variant="h6" component="div">
                      $ {matchedServices?.price}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={matchedServices?.rating}
                      readOnly
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                item
                justifyContent="space-around"
                alignItems="center"
                md={12}
              >
                <Typography component="p" variant="p">
                  Place order by providing Name, Email, Number and Address.
                </Typography>
              </Grid>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={14} md={12}>
                    <TextField
                      defaultValue={user?.displayName}
                      {...register("name", { required: true })}
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={14} md={12}>
                    <TextField
                      {...register("email", { required: true })}
                      defaultValue={user?.email}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={14} md={12}>
                    <TextField
                      {...register("address", { required: true })}
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      multiline
                      rows={2}
                    />
                  </Grid>

                  <Grid item xs={14} md={12}>
                    <TextField
                      {...register("cell", { required: true })}
                      autoComplete="telephone"
                      name="cell"
                      required
                      type="tel"
                      fullWidth
                      id="cell"
                      label="Mobile No."
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={14} md={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Place Order
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ReviewOrder;
