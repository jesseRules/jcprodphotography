import React from "react";
import "./MainGallery.scss";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Container from "@material-ui/core/Container";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import pic1 from "../../assets/nebraska1.jpg";
import pic2 from "../../assets/eyeball.jpg";
import pic3 from "../../assets/flowers4.jpg";
import pic4 from "../../assets/everly5.jpg";
import pic5 from "../../assets/trees1.jpg";
import pic6 from "../../assets/park1.jpg";
import pic7 from "../../assets/posies2.jpg";
import pic8 from "../../assets/bird1.jpg";
import pic9 from "../../assets/everly10.jpg";
import pic10 from "../../assets/birds.jpg";
// import pic11 from "../../assets/tower.jpg";
import pic12 from "../../assets/jesse1.jpg";
// import pic13 from "../../assets/tower1.jpg";
import pic14 from "../../assets/cat5.jpg";
import pic15 from "../../assets/ducks.jpg";
import pic16 from "../../assets/turkey.jpg";
import pic17 from "../../assets/weezle.jpg";
import pic18 from "../../assets/JES00284.jpg";
import pic19 from "../../assets/JES03211.jpg";
import pic20 from "../../assets/JES06863.jpg";
import pic21 from "../../assets/jesse3.jpg";
import pic22 from "../../assets/JES08513.jpg";

const MainGallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let sizeH = 800;
  if (isMobile) {
    sizeH = 500;
  }
  const images = [
    {
      src: pic16,
    },
    {
      src: pic15,
    },
    {
      src: pic14,
    },
    {
      src: pic12,
    },
    {
      src: pic10,
    },
    {
      src: pic9,
    },
    {
      src: pic17,
    },
    {
      src: pic18,
    },
    {
      src: pic19,
    },
    {
      src: pic20,
    },
    {
      src: pic21,
    },
    {
      src: pic22,
    },
  ];
  return (
    <div className="mainGalleryView">
      <Container>
        <div className="section-header pt-5 pb-5 text-center">
          <Typography
            className="section-title"
            variant="h4"
            color="textPrimary"
            gutterBottom
          >
            <span>The </span>Gallery
          </Typography>

          <Typography
            className="section-subtitle  mr-auto ml-auto"
            variant="h6"
            color="textPrimary"
            gutterBottom
          >
            I've had some crummy photographers in the past that changed deals
            after the fact or just took low-quality pictures. I don't want
            people to have to go through this and miss out on memories. I want
            to make keepsakes to be kept for generations.
          </Typography>
        </div>
        <div className="sectionBody sectionAbout">
          <div className="section-content">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} sm={6}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic1} alt="about company"></img>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0}>
                  <Typography
                    className="about-title"
                    variant="h5"
                    color="textPrimary"
                    gutterBottom
                  >
                    A Story with Pictures
                  </Typography>

                  <div className="about-description">

                    <Typography
                      variant="body2"
                      color="textPrimary"
                      gutterBottom
                    >
                      Photography is like life’s salt; it makes everything a
                      little better. But by itself it’s awful! And too much
                      makes it gross. The somewhere-in-the-middle is where I
                      live, and it does make life better. It makes boring stuff,
                      like kids’ soccer more fun because you can just work on
                      your photo skills and try to tune out the screaming
                      children.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      gutterBottom
                    >
                      Have a birthday? Getting married? Riding a mountain bike?
                      It would be pretty cool to have some pictures of that! Got
                      a cool new car? Bet you want poster worthy racing photos.
                      You’re a photographer with a camera and a bunch of lenses?
                      Well, I can tell you we just sit here thinking about
                      things to take pictures of. Just having the stuff isn’t
                      the fun part, it’s adding it to life events that makes it
                      worthwhile.
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>

      <Container>
        <div className="sectionBody sectionAbout">
          <div className="section-content">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} sm={4}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic2} alt="about company"></img>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic3} alt="about company"></img>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic4} alt="about company"></img>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic5} alt="about company"></img>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic6} alt="about company"></img>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic7} alt="about company"></img>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic8} alt="about company"></img>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className="aboutImg" elevation={0}>
                  <img src={pic9} alt="about company"></img>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="carousel-container">
          <Carousel
            images={images}
            isAutoPlaying={true}
            hasMediaButton={false}
            style={{ height: sizeH }}
          />
        </div>
      </Container>
    </div>
  );
};

export default MainGallery;
