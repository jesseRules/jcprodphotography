import React, { Component } from "react";
import HomeGallery from "../HomeGallery/HomeGallery";
import "./Home.scss";
// import Button from "@material-ui/core/Button";
// import pic1 from "../../assets/grainPhoto.jpg";
// import pic2 from "../../assets/everly8.jpg";
import pic3 from "../../assets/baby1.jpg";
import pic4 from "../../assets/JES01897.jpg";
import pic5 from "../../assets/jessepic11.jpg";
import pic6 from "../../assets/business.jpg";
import pic7 from "../../assets/JES02111.jpg";
import pic8 from "../../assets/JLC06341.jpg";
import pic9 from "../../assets/train1.jpg";
// import pic10 from "../../assets/uglybaby.jpg";
// import pic11 from "../../assets/gas.jpg";
// import pic12 from "../../assets/flowers13.jpg";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ContactForm } from "../Contact/ContactForm";
import {
  CardActionArea,
  CardHeader,
  CardMedia,
  Paper,
} from "@material-ui/core";
import LinkButton from "../LinkButton/LinkButton";
import { Link } from "react-router-dom";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <main>
        <div id="home" className="homeJumboTron">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <div className="home-content jumboPic p-5">
              <div className="intro container text-center text-light">
                <WhiteTextTypography variant="h2" gutterBottom>
                  Capture the Moment
                </WhiteTextTypography>
                <WhiteTextTypography variant="subtitle1" gutterBottom>
                  The secret is to take many, many pictures.
                </WhiteTextTypography>
                <div className="buttonbox">
                  <LinkButton to="/gallery" variant="contained" color="primary">
                    Gallery
                  </LinkButton>
                  <LinkButton
                    to="/contact"
                    variant="contained"
                    color="secondary"
                  >
                    Contact
                  </LinkButton>
                </div>
              </div>
            </div>
          </Grid>
        </div>
        <Container>
          <section id="about">
            <Container>
              <div className="section-header pt-5 pb-5 text-center">
                <Typography
                  className="section-title"
                  variant="h4"
                  color="textPrimary"
                  gutterBottom
                >
                  <span>JC Production </span>Photography
                </Typography>

                <Typography
                  className="section-subtitle  mr-auto ml-auto"
                  variant="h6"
                  color="textPrimary"
                  gutterBottom
                >
                  The goal has always been to take the best picture of whatever
                  I am photographing. I've found that the secret seems to be a
                  combination of good lighting, an interesting subject, and a
                  lot of patience. Or at least two out of three usually works
                  for me.
                </Typography>
              </div>
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
                      <img src={pic5} alt="about company"></img>
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
                        My Story
                      </Typography>

                      <div className="about-description">
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          gutterBottom
                        >
                          Always Be Clicking! Honestly, that is how it all
                          started. I have three kids, and two of them have
                          autism. My wife and I would take them on all sorts of
                          fun adventures, and I found myself taking lots of
                          pictures. They really loved looking back over the day
                          and seeing all that they did. The pictures helped them
                          develop communication skills, since kids love talking
                          about themselves and what they are doing. Show them a
                          picture of themselves playing and they'll talk your
                          ear off. But I also took pictures of them at places
                          like the doctor's office, or the dentist. This was so
                          we could look at them before the next trip and see how
                          easy it was how the upcoming visit was no big deal.
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textPrimary"
                          gutterBottom
                        >
                          People kept telling me that I took great photos, so I
                          got a nicer camera and some way too expensive lenses
                          and started taking even more pictures. The wife said I
                          have to justify my expensive purchases, so here we
                          are. And since I am a website developer most of the
                          time, being a photographer makes it really easy to add
                          content to my websites and apps I build for people.
                          So, this all kind of works out.
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          gutterBottom
                        >
                          Long story short, I needed a hobby and it kind of grew
                          into all this. Being a photographer has helped me in
                          my main hustle of being a web dev and I wanted to
                          branch out and take pics of rando people, not because
                          my kids are tired of me taking their pics, but other
                          reasons. <Link to="/about">Read more</Link>
                        </Typography>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </section>
          <section id="galleries">
            <div className="galleries-container mainG">
              <Container className="galleriesItems">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={3} sm={4}>
                    <div></div>
                  </Grid>
                  <Grid item xs={9} sm={8}>
                    <div className="centerCard">
                      <div className="mb-2 facts-icon">
                        <AssessmentIcon /> Client Testimonials:
                      </div>
                      <h4 className="galleries-counter text-light">
                        "Best family portraits I've ever had."
                      </h4>
                      <h5 className="facts-title text-light">
                        - The Highlander Family
                      </h5>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </section>
          <section id="gallery" className="section">
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
                A random sampling of pictures from over the years. I genuinely
                like taking pics, so I spend most of my free time taking pics of
                my kids, my dog, and random interesting things I see.{" "}
                <Link to="/gallery">See more</Link>
              </Typography>
            </div>

            <div className="section-content">
              <HomeGallery></HomeGallery>
            </div>
          </section>
          <section id="services">
            <div className="section-header pt-5 pb-5 text-center">
              <Typography
                className="section-title"
                variant="h4"
                color="textPrimary"
                gutterBottom
              >
                <span>Photography </span>Services
              </Typography>

              <Typography
                className="section-subtitle  mr-auto ml-auto"
                variant="h6"
                color="textPrimary"
                gutterBottom
              >
                I'm a software developer that does photography. So, most of my
                pictures are taken to be posted online or on websites to drive
                traffic up. Because of how I got started in photography I take
                pretty interesting content-driven photos.
              </Typography>
            </div>

            <Container className="section-content">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12} sm={4}>
                  <Card className="service-box" elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        className="servicesCardMedia"
                        image={pic4}
                        title="Paella dish"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        Family Photos
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        Need family pics? I got a camera and am willing to drive
                        to some obscure park or nature setting for some awesome
                        outdoor pics.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        We can do indoor pictures too, but the lighting takes
                        more time to set up and the kids will get restless.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        I'll bring juice boxes.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className="service-box" elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        className="servicesCardMedia"
                        image={pic3}
                        title="Baby Pic"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        Baby Photos
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        I actually have a lot of experience with this, I have
                        three kids. One of those kids, the girl one, was not a
                        smiley baby but a serious baby.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        Because of her I have honed the fine art of getting
                        babies to laugh on command and also nap. The last one
                        costs more.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className="service-box" elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        className="servicesCardMedia"
                        image={pic7}
                        title="Paella dish"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        Real Estate
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        This is not really that hard. Most Real Estate agents do
                        it themselves with fairly decent results. The secret is
                        to overexpose the picture so they look bright and
                        inviting.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        If you want extra amazing results, I have an ultra-wide
                        lens that takes bright photos and I know how to
                        photoshop grass.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className="service-box" elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        className="servicesCardMedia"
                        image={pic6}
                        title="Paella dish"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        Business
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        OMG, I have built so many business apps. Apps that are
                        behind corporate firewalls. These apps usually are just
                        some weird salmon color or Excel green.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        So, to keep things interesting I would take pics of the
                        business and include them. The users loved it and this
                        ended up being a pretty good design practice.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className="service-box" elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        className="servicesCardMedia"
                        image={pic8}
                        title="Paella dish"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        Corporate Headshots
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        Every website has that, "About Us" section where you
                        have owner or CEO smiling with a light background behind
                        them. Usually, a tan or blue suit to show that the
                        company is business casual but still to be taken
                        serious. Yeah, I'll take these pics too.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        If you let me build your website there's a pretty big
                        discount on these kinds of pics.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card className="service-box" elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        className="servicesCardMedia"
                        image={pic9}
                        title="Paella dish"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        Training
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        I would describe this as CrossFit with a camera, maybe
                        less grunting but more screaming. If you can dodge a
                        camera you can take a picture!
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        I dont't know really what this is going to be. I just
                        plan on putting some LightRoom preset here and maybe
                        some behind-the-scenes articles in the near future.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        gutterBottom
                      >
                        Check back later.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </section>
          {/* <section id="blog">
            <Container>
              <div className="section-header pt-5 pb-5 text-center">
                <Typography
                  className="section-title"
                  variant="h4"
                  color="textPrimary"
                  gutterBottom
                >
                  <span>Photo </span>Articles
                </Typography>

                <Typography
                  className="section-subtitle  mr-auto ml-auto"
                  variant="h6"
                  color="textPrimary"
                  gutterBottom
                >
                  Just some recent blog posts I have written about photography
                  or events I photographed. There's probably some pics of my
                  kids in here, someone has to look at them.
                </Typography>
              </div>

              <div className="section-content">
                <div className="row">
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={4}>
                      <div className="col-lg-4 mb-3">
                        <Card className="card rounded-0">
                          <div className="blogPhotoCont">
                            <img
                              src={pic11}
                              className="card-img-top"
                              alt="GAS"
                            ></img>
                          </div>
                          <CardContent>
                            <h2>GAS: Gear Acquisition Syndrome</h2>
                            <p>
                              Exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo. cillum dolore eu fugiat nulla pariatur
                              commodo consequat.cillum dolore eu fugiat
                              pariatur....
                            </p>
                            <Button href="#!" color="secondary">
                              Read More
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <div className="col-lg-4 mb-3">
                        <Card className="card rounded-0">
                          <div className="blogPhotoCont">
                            <img
                              src={pic10}
                              className="card-img-top"
                              alt="Blog 2"
                            ></img>
                          </div>
                          <CardContent>
                            <h2>How to photograph ugly babies</h2>
                            <p>
                              Exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo. cillum dolore eu fugiat nulla pariatur
                              commodo consequat.cillum dolore eu fugiat
                              pariatur....
                            </p>
                            <Button href="#!" color="secondary">
                              Read More
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <div className="col-lg-4 mb-3">
                        <Card className="card rounded-0">
                          <div className="blogPhotoCont">
                            <img
                              src={pic12}
                              className="card-img-top"
                              alt="Blog 3"
                            ></img>
                          </div>
                          <CardContent>
                            <h2>Monetize your hobby to hate it</h2>
                            <p>
                              Exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo. cillum dolore eu fugiat nulla pariatur
                              commodo consequat.cillum dolore eu fugiat
                              pariatur....
                            </p>
                            <Button href="#!" color="secondary">
                              Read More
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Container>
          </section> */}
          <section id="facts">
            <div className="facts-container mainF">
              <Container className="factsItems">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={3} sm={4}>
                    <div></div>
                  </Grid>
                  <Grid item xs={9} sm={8}>
                    <div className="centerCard">
                      <div className="mb-2 facts-icon">
                        <AssessmentIcon /> Client Testimonials:
                      </div>
                      <h4 className="facts-counter text-light">
                        "Jesse has a true passion for this."
                      </h4>
                      <h5 className="facts-title text-light">
                        - The O'Connors Family
                      </h5>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </section>

          <section id="contactSection">
            <Container className="container pt-2 pb-5">
              <div className="section-header pt-5 pb-5 text-center">
                <Typography
                  className="section-title"
                  variant="h4"
                  color="textPrimary"
                  gutterBottom
                >
                  <span>Contact </span>Us
                </Typography>

                <Typography
                  className="section-subtitle  mr-auto ml-auto"
                  variant="h6"
                  color="textPrimary"
                  gutterBottom
                >
                  Individualized photo shoots are just an e-mail away.
                </Typography>
              </div>
              <div>
                <Card elevation={3}>
                  <CardHeader
                    title="Send us a Message"
                    subheader="Message us for an appointment"
                  ></CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </Container>
          </section>
        </Container>
      </main>
    );
  }
}
