import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Appointment = () => {
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { register, reset, handleSubmit } = useForm();

  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    const { name, email, intro, rating } = inputData;
    axios
      .post("https://quiet-cliffs-65550.herokuapp.com/reviews", {
        name: name,
        email: email,
        intro: intro,
        rating: parseInt(rating),
      })
      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Review added successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Add a Review
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmitData)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                defaultValue={user?.displayName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                xs={12}
                {...register("email", { required: true })}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue={user?.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("intro", { required: true })}
                required
                fullWidth
                id="intro"
                label="Description"
                name="intro"
                multiline
                rows={2}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register("doctorName", { required: true })}
                required
                fullWidth
                name="doctorName"
                label="Select Doctor"
                type="text"
                id="doctorName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("date", { required: true })}
                required
                fullWidth
                name="date"
                label="Date"
                type="date"
                id="date"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Appointment;
