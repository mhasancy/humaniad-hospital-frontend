//imported file
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
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

//reviews adding component
const AddingReview = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { firebaseContext, dataContext } = useAuth();
  const { user } = firebaseContext;
  const { reviewsData, setReviewsData } = dataContext;
  const { register, reset, handleSubmit } = useForm();

  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    const { name, email, intro, rating } = inputData;

    axios
      .post("https://humaniad-hospital-backend.herokuapp.com/reviews", {
        name,
        email,
        intro,
        rating: parseInt(rating),
        status: "pending",
      })

      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Review added successfully.");
          reset();
          handleClose();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4">My Reviews</Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Reviews
        </Button>
      </Stack>
      <Box>
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
                    {...register("rating", { required: true })}
                    required
                    fullWidth
                    name="rating"
                    label="Review Score out of 5"
                    type="number"
                    id="rating"
                    InputProps={{ inputProps: { min: 0, max: 5 } }}
                  />
                </Grid>
              </Grid>
              <Button
                autoFocus
                // onClick={handleClose}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </DialogContent>
          {/* <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions> */}
        </BootstrapDialog>
      </Box>
      <MyReview reviewsData={reviewsData} />
    </>
  );
};

export default AddingReview;
