import React from "react";
import "./HomeGallery.scss";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Container from "@material-ui/core/Container";
import pic1 from "../../assets/everly8.jpg";
import pic2 from "../../assets/cat6.jpg";
import pic3 from "../../assets/flowers1.jpg";
import pic4 from "../../assets/maverick10.jpg";
import pic5 from "../../assets/saraheverly.jpg";
import pic6 from "../../assets/JES00284.jpg";
import pic7 from "../../assets/train1.jpg";
import { useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery
} from "@material-ui/core";

const HomeGallery =  (props: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let sizeH = 800;
  if (isMobile) {
    sizeH = 500;
  }
  const images = [
    {
      src: "https://jesserulesphotography.blob.core.windows.net/images/JES00570.jpg",
    },
    {
      src: "https://jesserulesphotography.blob.core.windows.net/images/JES01181.jpg",
    },
    {
      src: "https://jesserulesphotography.blob.core.windows.net/images/JES01196.jpg",
    },
    {
      src: "https://jesserulesphotography.blob.core.windows.net/images/JES01391.jpg",
    },
    {
      src: "https://jesserulesphotography.blob.core.windows.net/images/JES09361.jpg",
    },
    {
      src: "https://jesserulesphotography.blob.core.windows.net/images/JES09835.jpg",
    },
    {
      src: pic6,
    },
    {
      src: pic7,
    },
    {
      src: pic1,
    },
    {
      src: pic2,
    },
    {
      src: pic3,
    },
    {
      src: pic4,
    },
    {
      src: pic5,
    },
  ];
  return (
    <Container>
      <div className="carousel-container">
        <Carousel
          images={images}
          isAutoPlaying={true}
          hasMediaButton={false}
          style={{ height: sizeH }}
        />
      </div>
    </Container>
  );
};

export default HomeGallery;
