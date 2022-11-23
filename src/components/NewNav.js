import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/Media/logo.png";
import withStyles from "@material-ui/core/styles/withStyles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import styles from "./Navbar.style";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink as Link } from "react-router-hash-link";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";

const drawerWidth = "100%";

function Navbar(props) {
  const { activate } = useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const { classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: "#04212b",
        height: "100vh",
        color: "#fff",
        width: "100%",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <CloseIcon
                color='#fff'
                sx={{ display: "flex", float: "right" }}
                onClick={handleDrawerToggle}
              />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                }}
              >
                <Link
                  to='/#home'
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={handleDrawerToggle}
                >
                  HOME
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                onClick={handleDrawerToggle}
              >
                MINT
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                onClick={handleDrawerToggle}
              >
                <Link
                  to='/staking'
                  style={{ textDecoration: "none", color: "#fff" }}
                  className={`${classes.menu} ${
                    trigger === false ? "" : classes.appBarScrolledMenu
                  }`}
                >
                  STAKING
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <Link
                  to='/#roadmap'
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={handleDrawerToggle}
                >
                  ROADMAP
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <Link
                  to='/#collections'
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={handleDrawerToggle}
                >
                  COLLECTIONS
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <Link
                  to='/#whitepapers'
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={handleDrawerToggle}
                >
                  {" "}
                  WHITEPAPERS
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <Link
                  to='/#faq'
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={handleDrawerToggle}
                >
                  FAQ
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <Link
                  to='/#team'
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={handleDrawerToggle}
                >
                  TEAM
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                <Link
                  to='/#contact'
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={handleDrawerToggle}
                >
                  CONTACT
                </Link>
              </Button>
              <br />
              {props.connect && (
                <Button onClick={connect}>
                  <Typography
                    sx={{
                      fontWeight: "800",
                      fontSize: { xl: "16px", lg: "14px", md: "10px" },
                      paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                      color: "#fff",
                      "&:hover": {
                        color: "#fff",
                      },
                      fontFamily: "Raleway-bolder",
                    }}
                  >
                    {props.connect}
                  </Typography>
                </Button>
              )}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component='nav'
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
        elevation={0}
        className={`${classes.appBar} ${
          trigger === false ? "" : classes.appBarScrolled
        }`}
      >
        <Toolbar
          className={classes.toolbar}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              // paddingLeft: { xl: "52px", lg: "52px", md: "2px" },
              paddingTop: "10px",
            }}
          >
            <img src={logo} height='70px' width='130px' />
          </Typography>
          <IconButton color='inherit' size='small' aria-label='open drawer'>
            <MenuIcon
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <Button>
              <Link
                to='/#home'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  HOME
                </Typography>
              </Link>
            </Button>
            <Button
              className={`${classes.menu} ${
                trigger === false ? "" : classes.appBarScrolledMenu
              }`}
              sx={{
                color: "#fff",
              }}
            >
              <Link
                to='/#home'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  MINT
                </Typography>
              </Link>
            </Button>
            <Button
              className={`${classes.menu} ${
                trigger === false ? "" : classes.appBarScrolledMenu
              }`}
              disabled
            >
              <Link
                to='/staking'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  STAKING
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#roadmap'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  {" "}
                  ROADMAP
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#collections'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  COLLECTIONS
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#whitepapers'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  {" "}
                  WHITEPAPERS
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#faq'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  FAQ
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#team'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  TEAM
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#contact'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  CONTACT
                </Typography>
              </Link>
            </Button>
            {props.connect && (
              <Button onClick={connect}>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    color: "#fff",
                    "&:hover": {
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  {props.connect}
                </Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  classes: PropTypes.object.isRequired,
  window: PropTypes.func,
};

export default withStyles(styles)(Navbar);
