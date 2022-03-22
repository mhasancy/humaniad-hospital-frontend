//imported file
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

//Product component
const Doctor = ({ doctorData }) => {
  //destructuring props
  const { _id, name, image, desig } = doctorData;
  return (
    <Grid item xs={8} md={4} sx={{ mx: "auto" }}>
      <Card sx={{ maxWidth: 400, textAlign: "center", height: 530 }}>
        <CardMedia component="img" height="300" image={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ height: 50 }}
            variant="body2"
            color="text.secondary"
          >
            {desig}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            pt={1.5}
          ></Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Doctor;
