//imported file
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
//banner component
const Banner = () => {
  return (
    <Box
      style={{ height: "520px" }}
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <Box className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </Box>

      <Box className="carousel-inner">
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
          <Box className="carousel-item active">
            <p
              style={{
                height: "550px",
                background: `url("https://get.pxhere.com/photo/green-medical-equipment-hospital-room-operating-theater-building-interior-design-architecture-Research-institute-machine-ceiling-1613121.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="d-block img-fluid w-100"
            />
            <Box className="carousel-caption text-start card-img-overlay">
              <Box className="mt-5">
                <p>EXTRA 20% OFF</p>
                <h1 className="d-none d-md-block col-12 col-md-6 text-white fw-bold">
                  NEW <br />
                  TECHNOLOGY
                </h1>
                <h1
                  style={{ fontSize: "2.5rem" }}
                  className="d-block d-md-none col-12 col-md-6 text-white fw-bold"
                >
                  NEW <br />
                  TECHNOLOGY
                </h1>
                <Box></Box>
                <span className="text-start ">
                  <Link to="/products">
                    {" "}
                    <Button variant="contained" className="px-3 mt-3">
                      <i className="far fa-bookmark"></i> Explore
                    </Button>
                  </Link>
                </span>
              </Box>
            </Box>
          </Box>
          <Box className="carousel-item">
            <p
              style={{
                height: "550px",
                background: `url("https://get.pxhere.com/photo/green-medical-equipment-hospital-room-operating-theater-building-interior-design-architecture-Research-institute-machine-ceiling-1613121.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="d-block img-fluid w-100"
            />
            <Box className="carousel-caption text-start card-img-overlay">
              <Box className="mt-5">
                <p>EXTRA 20% OFF</p>
                <h1 className="d-none d-md-block col-12 col-md-6 text-white fw-bold">
                  EXCLUSIVE <br /> MACHINE
                </h1>
                <h1
                  style={{ fontSize: "2.5rem" }}
                  className="d-block d-md-none col-12 col-md-6 text-white fw-bold"
                >
                  EXCLUSIVE <br /> MACHINE
                </h1>
                <Box></Box>
                <span className="text-start ">
                  <Link to="/products">
                    <Button variant="contained" className="px-3 mt-3">
                      <i className="far fa-bookmark"></i> Explore
                    </Button>
                  </Link>
                </span>
              </Box>
            </Box>
          </Box>
          <Box className="carousel-item">
            <p
              style={{
                height: "550px",
                background: `url("https://get.pxhere.com/photo/green-medical-equipment-hospital-room-operating-theater-building-interior-design-architecture-Research-institute-machine-ceiling-1613121.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="d-block img-fluid w-100"
            />
            <Box className="carousel-caption text-start card-img-overlay">
              <Box className="mt-5">
                <p>EXTRA 20% OFF</p>
                <h1 className="d-none d-md-block col-12 col-md-6 text-white fw-bold">
                  QUALIFIED <br /> DOCTORS
                </h1>
                <h1
                  style={{ fontSize: "2.5rem" }}
                  className="d-block d-md-none col-12 col-md-6 text-white fw-bold"
                >
                  QUALIFIED <br /> DOCTORS
                </h1>
                <Box>
                  <Box></Box>
                </Box>
                <span className="text-start ">
                  <Link to="/products">
                    <Button variant="contained" className="px-3 mt-3">
                      <i className="far fa-bookmark"></i> Explore
                    </Button>
                  </Link>
                </span>
              </Box>
            </Box>
          </Box>
        </Swiper>
      </Box>
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </Box>
  );
};

export default Banner;
