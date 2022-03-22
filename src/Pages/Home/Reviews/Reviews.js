//imported file

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/modules/navigation/navigation.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import useAuth from "../../../hooks/useAuth";
import Review from "../Review/Review";

//reviews component
const Reviews = () => {
  //destructuring
  const { dataContext } = useAuth();
  const { reviewsData } = dataContext;

  return (
    <Container>
      <Typography variant="h2" gutterBottom component="div">
        What people say.
      </Typography>
      <Box
        container
        sx={{ textAlign: "center" }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviewsData?.map((reviewData) => (
            <SwiperSlide key={reviewData?._id}>
              {" "}
              <Review key={reviewData?._id} reviewData={reviewData}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Reviews;
