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
import Appointment from "../Appointment/Appointment";

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
const MyAppointments = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { firebaseContext, dataContext } = useAuth();
  const { user } = firebaseContext;
  const { appointmentsData, setReviewsData } = dataContext;
  console.log(appointmentsData);
  const { register, reset, handleSubmit } = useForm();

  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    const { name, email, doctor, date, cell } = inputData;

    axios
      .post("https://humaniad-hospital-backend.herokuapp.com/appointments", {
        name,
        email,
        doctor,
        cell,
        date,
        status: "pending",
      })

      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Appointment added successfully.");
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
        <Typography variant="h4">My Appointments</Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Appointments
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
            Add Appointments
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
                    {...register("cell", { required: true })}
                    required
                    fullWidth
                    id="cell"
                    label="Cell"
                    name="cell"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    {...register("doctor", { required: true })}
                    required
                    fullWidth
                    name="doctor"
                    label="Doctor Name"
                    type="text"
                    id="doctor"
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
      <Appointment appointmentsData={appointmentsData} />
    </>
  );
};

export default MyAppointments;
