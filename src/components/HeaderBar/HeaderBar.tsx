// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import VignetteIcon from "@material-ui/icons/Vignette";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import "./HeaderBar.scss";
import LinkButton from "../LinkButton/LinkButton";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: "white !important",
    textDecoration: "none" ,
    marginRight: theme.spacing(2),
  },
  title: {
    color: "white !important",
    textDecoration: "none" ,
    flexGrow: 1,
  },
}));

function HideOnScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const HeaderBar = (props: any) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className="mainNav">
            <Typography
              variant="h5"
              component="p"
              color="textSecondary"
              className={classes.title}
            >
              <Link to="/">JC Production Photography</Link>
            </Typography>

            {isMobile ? (
              <>
                <IconButton
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchorEl(null)}
                    component={Link}
                    to={process.env.PUBLIC_URL + "/"}
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchorEl(null)}
                    component={Link}
                    to={process.env.PUBLIC_URL + "/about"}
                  >
                    <ListItemIcon>
                      <EmojiEmotionsIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> About </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchorEl(null)}
                    component={Link}
                    to={process.env.PUBLIC_URL + "/pricing"}
                  >
                    <ListItemIcon>
                      <VignetteIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Gallery </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchorEl(null)}
                    component={Link}
                    to={process.env.PUBLIC_URL + "/gallery"}
                  >
                    <ListItemIcon>
                      <CreditCardIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Pricing </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchorEl(null)}
                    component={Link}
                    to={process.env.PUBLIC_URL + "/contact"}
                  >
                    <ListItemIcon>
                      <ContactMailIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Contact</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <LinkButton variant="text" color="secondary" to="/">
                  Home
                </LinkButton>
                <LinkButton variant="text" color="secondary" to="/about">
                  About
                </LinkButton>
                <LinkButton variant="text" color="secondary" to="/gallery">
                  Gallery
                </LinkButton>
                <LinkButton variant="text" color="secondary" to="/pricing">
                  Pricing
                </LinkButton>
                <LinkButton variant="text" color="secondary" to="/contact">
                  Contact
                </LinkButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default HeaderBar;
