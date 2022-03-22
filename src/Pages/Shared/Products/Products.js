//imported file
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Home/Header/Header";
import Product from "../Product/Product";

//Products component
const Products = () => {
  //destructuring data set
  const { dataContext } = useAuth();
  const { productsData } = dataContext;
  return (
    <>
      <Header></Header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h2" gutterBottom component="div">
          Pick your Watch
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          When it comes to exploring exotic places, the choices are numerous.
          Whether you like peaceful destinations or vibrant landscapes, we have
          offers for you.
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {productsData?.map((productData) => (
              <Product
                key={productData?._id}
                productData={productData}
              ></Product>
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

export default Products;
