import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";

import "./Contact.scss";
import { ContactForm } from "./ContactForm";

class Contact extends Component {
  render() {
    return (
      <div className="Contact" data-testid="Contact">
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
            <ContactForm />
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
