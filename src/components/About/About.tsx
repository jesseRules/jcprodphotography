import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import pic1 from "../../assets/jessepic11.jpg";
import pic2 from "../../assets/martians.jpg";
import pic3 from "../../assets/jessesarah.jpg";
import pic4 from "../../assets/everly12.jpg";
import pic5 from "../../assets/JES09771.jpg";
import pic6 from "../../assets/everly13.jpg";
import pic7 from "../../assets/jackson4.jpg";
import pic8 from "../../assets/jackson1.jpg";
import pic9 from "../../assets/maverick1.jpg";
import "./About.scss";
const About = () => (
  <Container id="About">
    <div className="aboutPage">
      <div className="section-header pt-5 pb-5 text-center">
        <Typography
          className="section-title"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          <span>About JC Production </span>Photography
        </Typography>

        <Typography
          className="section-subtitle  mr-auto ml-auto"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          I've had some crummy photographers in the past that changed deals
          after the fact or just took low-quality pictures. I don't want people
          to have to go through this and miss out on memories. I want to make
          keepsakes to be kept for generations.
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
                  My Story
                </Typography>

                <div className="about-description">
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    This has all spiraled out of control, lol. I got into
                    photography as a hobby and then it became a really useful
                    skill to have at my day job as a Web Dev. Which was honestly
                    the worst thing to happen because than I had a reason to
                    justify buying camera gear. So here we are, me with all my
                    camera stuff and you wanting pictures. Not a long story, but
                    still a story!
                  </Typography>

                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    But people kept telling me that I took great photos, so I
                    got a nicer camera and some way too expensive lenses and
                    started taking even more pictures. The wife said I have to
                    justify my expensive purchases, so here we are. And since I
                    am a website developer most of the time, being a
                    photographer makes it really easy to add content to my
                    websites and apps I build for people. So, this all kind of
                    works out.
                  </Typography>

                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    If you have website or app development needs hit me up. I
                    have been doing big data and analytics for a long time and
                    some of the time for fun, that's how boring I am. But you
                    can't spell, "function" without fun! You can find out more
                    about my software development here:
                    <a
                      href="jessecarlbergproduction.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      JesseCarlbergProduction.com
                    </a>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
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
              <Paper elevation={0}>
                <Typography
                  className="about-title"
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                >
                  Making "Art"
                </Typography>

                <div className="about-description">
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    I think everyone is a photographer, you have a camera on
                    your phone that you bring everywhere. This kind of makes you
                    a de facto shutter bug. The pictures are not professional
                    print quality but when you look at them later on you
                    remember the moment and suddenly little things like it being
                    out of focus or framed poorly don’t matter. The picture was
                    for you, and it captured everything you needed it to. When
                    you try to take that picture and show it to the world is
                    when the quality begins to matter. And it is extremely hard
                    to qualify what is good photography, because a lot of
                    photography just needs to get the job done, a first birthday
                    or bringing home a new puppy. In this moment, with an iPhone
                    taking tons of pictures you probably got the photo needed.
                    But let’s figure out how to get to the picture you wanted.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="aboutImg" elevation={0}>
                <img src={pic2} alt="about martians"></img>
              </Paper>
            </Grid>
          </Grid>
        </div>
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
                <img src={pic3} alt="Jesse and Sarah"></img>
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
                  Trophy Husband
                </Typography>

                <div className="about-description">
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    The obligatory shot with the wife. As a guy photographer
                    it's really easy to come across as creepy, and for good
                    reason, the photography groups on FB are breeding ground of
                    weird. But here's visual proof the weirdest thing about me
                    is my sense of humor and my love of Australian licorice. My
                    wife, Sarah, is a Registered Nurse who enjoys crafting,
                    seltzer water, and all the movies I hate. We have vastly
                    different interests and hobbies, but it gives us something
                    to talk about at the end of the day.
                  </Typography>

                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    I got some more space to fill here and nothing to talk
                    about, also, like college essays, no one reads this stuff.
                    So, I'll just tell you about a story of when Sarah and I
                    first lived together. We got into this ever-increasing prank
                    war that ended with me unscrewing all the light bulbs and
                    hiding under the dining room table. She came home and
                    flipped on the hallway light, and nothing happened. She
                    could see the diffuser she had recently purchased and put in
                    the entry way was lit up, so the power was on. Sarah made
                    her way in and turned on a side table light and nothing
                    happened. She called out for me, but she was met with
                    silence. As she made her way to the back room, she crossed
                    the dining room where I lay in wait. I shot my handout and
                    grabbed her ankle, and she froze just long enough to squeal.
                    But don't worry this story has a moral, she kicked me in the
                    head. And this is why we don't play this game anymore. But I
                    don't want you thinking I got off track, so photography!
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
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
              <Paper elevation={0}>
                <Typography
                  className="about-title"
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                >
                  Autism Story
                </Typography>

                <div className="about-description">
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    Autism is an everyday word around my house. And it’s a good
                    word! When parents first get an autism diagnosis for their
                    kid there’s this denial period where you just don’t want to
                    accept it. Well, I am here to tell you to accept it because
                    it’s awesome. And if you don’t have someone with autism in
                    your life, I have children and friends to spare! I have two
                    kids with autism, my oldest boy, and the girl one. My
                    youngest son, Maverick, is neurotypical, so I have the full
                    spectrum going on here and it is all amazing.
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    Sure, there’s struggles and hardships but it’s like a family
                    road trip, everyone has a horrible time during it but only
                    rose-colored glasses and fond memories afterwards. And this
                    is what I try to capture with my photography, the journey,
                    and the accomplishments. I try to raise autism awareness by
                    sharing my story and my journey through pictures on social
                    media, so people realize how amazing my kids are, and autism
                    is just a part of that. So, come share in my story, give
                    support, or get support, the autism community is welcoming
                    of everyone because inclusion is what makes this all work.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="aboutImg" elevation={0}>
                <img src={pic4} alt="about martians"></img>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="aboutPage">
        <div className="section-header pt-5 pb-5 text-center">
          <Typography
            className="section-title"
            variant="h4"
            color="textPrimary"
            gutterBottom
          >
            <span>My </span>Family
          </Typography>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={4}>
            <Paper className="aboutImg" elevation={0}>
              <img src={pic5} alt="about company"></img>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className="aboutImg" elevation={0}>
              <img src={pic6} alt="about company"></img>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className="aboutImg" elevation={0}>
              <img src={pic7} alt="about company"></img>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className="aboutImg" elevation={0}>
              <img src={pic8} alt="about company"></img>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="aboutImg" elevation={0}>
              <img src={pic9} alt="about company"></img>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  </Container>
);

export default About;
