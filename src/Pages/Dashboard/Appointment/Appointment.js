import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import MyReview from "../MyReview/MyReview";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Appointment = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { firebaseContext, dataContext } = useAuth();
  const { user } = firebaseContext;
  const { reviewsData } = dataContext;
  console.log(reviewsData);
  const { register, reset, handleSubmit } = useForm();
  const myReviews = reviewsData?.filter(
    (myReview) => myReview.email === user.email
  );
  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    const { name, email, cell, doctorName, date } = inputData;
    console.log(inputData);
    axios
      .post("http://localhost:5000//reviews", {
        name: name,
        email: email,
      })
      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Review added successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert(error);
        reset();
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Add a Review
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <Typography component="h1" variant="h4">
                Add a Review
              </Typography> */}
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
                      xs={12}
                      {...register("cell", { required: true })}
                      required
                      fullWidth
                      id="cell"
                      label="cell"
                      // name="tel"
                      // defaultValue={user?.cell}
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
                  autoFocus
                  onClick={handleClose}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </DialogContent>
          {/* <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions> */}
        </BootstrapDialog>
      </div>
      <div className="radius-card container mt-5 pt-1 pb-5 px-5">
        <h1 className="fw-bold d-none d-md-block text-center  mt-5 ">
          Manage Your Booked Tour
          <span className="gradient-txt">.</span>
        </h1>
        <h1
          style={{ fontSize: "2.3rem" }}
          className="fw-bold d-block d-md-none text-center  mt-5 "
        >
          Manage Your Booked Tour
          <span className="gradient-txt">.</span>
        </h1>
        <p className="text-center w-75 mx-auto ">
          Here you can know your total booked items, booking status and also can
          delete respective booking.
        </p>
        <p className="fs-4">
          {" "}
          <strong>Total Bookings</strong>: {myReviews?.length}
        </p>
        <div className="table-responsive-md">
          <table className="table table-bordered border-card">
            <thead>
              <tr>
                <th style={{ width: "200px" }} scope="col align-middle">
                  Name
                </th>
                <th style={{ width: "650px" }} scope="col align-middle">
                  Info
                </th>
                <th style={{ width: "130px" }} scope="col align-middle">
                  Status
                </th>
                <th style={{ width: "150px" }} scope="col align-middle">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myReviews?.map((myReviewedItem) => (
                <MyReview
                  myReviewedItem={myReviewedItem}
                  key={myReviewedItem?._id}
                ></MyReview>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Appointment;
