//imported file
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Home/Header/Header";
import Doctor from "../Doctor/Doctor";

//Products component
const Doctors = () => {
  //destructuring data set
  const { dataContext } = useAuth();
  const { doctorsData } = dataContext;
  return (
    <>
      <Header></Header>
      <br />

      <Container>
        <Typography variant="h2" gutterBottom component="div">
          Our Experts Doctors
        </Typography>

        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {doctorsData?.map((doctorData) => (
              <Doctor key={doctorData?._id} doctorData={doctorData}></Doctor>
            ))}
          </Grid>
        </Box>
      </Container>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Doctors;
