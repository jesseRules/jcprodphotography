import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Pricing.scss";
import pic1 from "../../assets/family.jpg";
const Pricing = () => (
  <Container id="Pricing" data-testid="Pricing">
    <div className="pricingPage">
      <div className="section-header pt-5 pb-5 text-center">
        <Typography
          className="section-title"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          <span>Session </span>Pricing
        </Typography>

        <Typography
          className="section-subtitle  mr-auto ml-auto"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          Come on, don't cheap out on me now! I'm kidding, these are pretty
          reasonable rates.
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
                  Family Portraits - $150
                </Typography>

                <div className="about-description">
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    Approximately an hour session to get all the family pics in that we can. Big
                    families work best outside and I can recommend a park.
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemText primary="Minimum of 20 Color Corrected High Resolution Files"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Full Copyright Release"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Online Downloading & Viewing"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Full family and single child images will be provided"></ListItemText>
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  </Container>
);

export default Pricing;
