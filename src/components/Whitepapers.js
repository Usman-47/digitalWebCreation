import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import w1 from "../assets/Media/w1.png";
import w2 from "../assets/Media/w2.png";
import w3 from "../assets/Media/w3.png";
import Btn from "./Btn";
import useStyles from "../styles";
const Whitepapers = () => {
  const classes = useStyles();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section id='whitepapers'>
      <Typography
        sx={{
          color: "#9c9d9d",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: {
            xs: "-4px",
            sm: "-4px",
            md: "0px",
            lg: "0px",
            xl: "0px",
          },
        }}
        fontFamily='Raleway-bolder'
      >
        OUR FILES
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "800",
          textAlign: "center",
          fontSize: "34px",
        }}
        fontFamily='Raleway-bolder'
      >
        WHITEPAPERS
      </Typography>
      <Grid container md={12} lg={12}>
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          spacing={4}
          sx={{ justifyContent: "center", padding: "0px 5%" }}
        >
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                backgroundColor: "#04212b",
                borderRadius: "20px",

                paddingTop: { lg: "30px", md: "30px", sm: "20px", xs: "70px" },
              }}
            >
              <CardMedia
                image={w1}
                sx={{
                  margin: "auto",
                  height: {
                    xl: "350px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "250px",
                  },
                  width: {
                    xl: "350px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "250px",
                  },
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "26px",
                    letterSpacing: "2px",
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "left",
                      lg: "left",
                      xl: "center",
                    },
                    marginLeft: { xl: "0px", lg: "57px", sm: "0px", xs: "0px" },
                  }}
                  fontFamily='Raleway-bolder'
                >
                  Whitepaper
                </Typography>
                {/* <Btn
                  title='LEARN MORE'
                  onClick={() =>
                    openInNewTab(
                      "https://digital-web-creation-club.gitbook.io/digital-web-creation-club-whitepaper/dwcc-whitepaper/overview"
                    )
                  }
                /> */}
                <Container
                  sx={{
                    width: {
                      xl: "80%",
                      lg: "93%",
                      md: "100%",
                      sm: "50%",
                      xs: "80%",
                    },
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#4efd93",
                      padding: "18px",
                      width: "100%",
                      borderRadius: "16px",
                      color: "#fff",
                      fontWeight: "bold",
                      mt: "20px",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#4efd93",
                      },
                    }}
                    onClick={() =>
                      openInNewTab(
                        "https://digital-web-creation-club.gitbook.io/digital-web-creation-club-whitepaper/dwcc-whitepaper/overview"
                      )
                    }
                    variant='contained'
                  >
                    LEARN MORE
                  </Button>
                </Container>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                backgroundColor: "#04212b",
                borderRadius: "20px",
                paddingTop: { lg: "30px", md: "30px", sm: "20px", xs: "70px" },
              }}
            >
              <CardMedia
                image={w2}
                sx={{
                  margin: "auto",
                  height: {
                    xl: "350px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "250px",
                  },
                  width: {
                    xl: "350px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "250px",
                  },
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "26px",
                    letterSpacing: "2px",
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "left",
                      lg: "left",
                      xl: "center",
                    },
                    marginLeft: { xl: "0px", lg: "57px", sm: "0px", xs: "0px" },
                  }}
                  fontFamily='Raleway-bolder'
                >
                  Licensing Rights
                </Typography>
                {/* <Btn
                  title='LEARN MORE'
                  onClick={() =>
                    openInNewTab(
                      "https://digital-web-creation-club.gitbook.io/digital-web-creation-club-licensing-agreement/digital-web-creation-club-licensing-agreement"
                    )
                  }
                /> */}
                <Container
                  sx={{
                    width: {
                      xl: "80%",
                      lg: "93%",
                      md: "100%",
                      sm: "50%",
                      xs: "80%",
                    },
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#4efd93",
                      padding: "18px",
                      width: "100%",
                      borderRadius: "16px",
                      color: "#fff",
                      fontWeight: "bold",
                      mt: "20px",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#4efd93",
                      },
                    }}
                    onClick={() =>
                      openInNewTab(
                        "https://digital-web-creation-club.gitbook.io/digital-web-creation-club-licensing-agreement/digital-web-creation-club-licensing-agreement"
                      )
                    }
                    variant='contained'
                  >
                    LEARN MORE
                  </Button>
                </Container>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                backgroundColor: "#04212b",
                borderRadius: "20px",
                paddingTop: { lg: "30px", md: "30px", sm: "20px", xs: "70px" },
              }}
            >
              <CardMedia
                image={w3}
                sx={{
                  margin: "auto",
                  height: {
                    xl: "350px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "250px",
                  },
                  width: {
                    xl: "350px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "250px",
                  },
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "26px",
                    letterSpacing: "2px",
                    // marginLeft: { lg: "23px", md: "23px", xs: "13px" },
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "left",
                      lg: "left",
                      xl: "center",
                    },
                    marginLeft: { xl: "0px", lg: "57px", sm: "0px", xs: "0px" },
                  }}
                  fontFamily='Raleway-bolder'
                >
                  Roob Chronicles
                </Typography>
                {/* <Btn
                  title='LEARN MORE'
                  onClick={() =>
                    openInNewTab(
                      "https://online.flippingbook.com/view/1040088348/"
                    )
                  }
                /> */}
                <Container
                  sx={{
                    width: {
                      xl: "80%",
                      lg: "93%",
                      md: "100%",
                      sm: "50%",
                      xs: "80%",
                    },
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#4efd93",
                      padding: "18px",
                      width: "100%",
                      borderRadius: "16px",
                      color: "#fff",
                      fontWeight: "bold",
                      mt: "20px",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#4efd93",
                      },
                    }}
                    onClick={() =>
                      openInNewTab(
                        "https://online.flippingbook.com/view/1040088348/"
                      )
                    }
                    variant='contained'
                  >
                    LEARN MORE
                  </Button>
                </Container>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Whitepapers;
