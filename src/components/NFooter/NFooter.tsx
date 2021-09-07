import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
import "./NFooter.scss";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export class NFooter extends Component {
  preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  render() {
    return (
      <footer className="NFooter" data-testid="NFooter">
        <div className="container text-light pt-5">
          <Container className="row">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item xs={6} sm={4}>
                <div className="col-sm-6 col-md-6 col-lg-4 mb-5">
                  <div className="footer-title">
                    <h6>About Us</h6>
                  </div>
                  <div className="footer-content">
                    <p>
                      <small className="text-muted">
                        Jesse Carlberg Production Photograpy is the content
                        creation and photograpy branch of my web dev company{" "}
                        <a href="https://jessecarlbergproduction.com/#/home">
                          A Jesse Carlberg Production
                        </a>
                        .
                      </small>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={4}>
                <div className="col-sm-6 col-md-6 col-lg-2 mb-5">
                  <div className="footer-title">
                    <h6>Links</h6>
                  </div>
                  <div className="footer-content">
                    <ul className="list-group quick-links">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      {/* <li>
                        <Link to="/blog">Blog</Link>
                        </li> */}
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
                  <div className="footer-title">
                    <h6>Contact Us</h6>
                  </div>
                  <div className="footer-content">
                    <p className="text-muted">
                      <small>
                        Jesse Carlberg Production<br></br>Photography
                      </small>
                    </p>
                    <p className="text-muted">
                      <small>
                        <a
                          className="emailLink"
                          href="mailto:jesse@jessecarlbergproduction.com"
                        >
                          E-mail : jesse@jessecarlbergproduction.com
                        </a>
                      </small>
                    </p>
                    <div className="social-media mt-4">
                      <a
                        href="https://github.com/jesseRules"
                        rel="noreferrer"
                        target="_blank"
                        className="text-light"
                      >
                        <GitHubIcon />
                      </a>
                      {/* <a href="https://github.com/jesseRules" rel="noreferrer" target="_blank" className="text-light">
                        <FacebookIcon />
                      </a>
                      <a href="https://github.com/jesseRules" rel="noreferrer" target="_blank"  className="text-light">
                        <InstagramIcon />
                      </a> */}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="bottom-footer pt-3 pb-3 text-center">
          <small>
            © All Right Reserved.{" "}
            <a href="https://jessecarlbergproduction.com/#/home">
              A Jesse Carlberg Production
            </a>
          </small>
        </div>
      </footer>
    );
  }
}
