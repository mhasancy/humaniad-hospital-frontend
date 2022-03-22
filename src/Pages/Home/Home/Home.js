//imported file
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Services from "../../Shared/Services/Services";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";

//home component
const Home = () => {
  //destructuring
  const { dataContext } = useAuth();
  const { productsData } = dataContext;
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <br />
      <br />
      <Container>
        <Typography variant="h2" gutterBottom component="div">
          Featured Watches For You
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          Today is the last day. Up to 30% off!
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Services />
          </Grid>
        </Box>
      </Container>

      <Blogs></Blogs>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
