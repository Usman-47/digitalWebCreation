import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/Media/logo.png";
import linktree from "../assets/Media/linktree.svg";
import discord from "../assets/Media/discord.svg";
import twitter from "../assets/Media/twitter.svg";
import facebook from "../assets/Media/facebook.svg";
import instagram from "../assets/Media/instagram.png";
import tiktok from "../assets/Media/tiktok.png";
import footerImg from "../assets/Media/footerImg.png";
import opensea from "../assets/Media/Opensea.svg";
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <img src={logo} height='67px' width='200px' />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='h4'
          sx={{
            color: "#fff",
            fontWeight: "600",
            textAlign: "center",
            paddingTop: "50px",
            marginBottom: "40px",
            fontSize: { lg: "42px", md: "42px", sm: "34px", xs: "28px" },
          }}
          fontFamily='Raleway-bolder'
        >
          STAY CONNECTED!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "40%",
          margin: "auto",
        }}
      >
        <Grid container md={12} lg={12}>
          <Grid
            item
            container
            md={12}
            sm={12}
            lg={12}
            spacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() =>
                  openInNewTab("https://linktr.ee/DigitalWebCreationClub")
                }
              >
                {/* <CardMedia
                  image={linktree}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                    // marginRight: { md: "20px", xs: "6px" },
                  }}
                /> */}
                <img
                  src={linktree}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() => openInNewTab("https://discord.com/invite/dwcc")}
              >
                {/* <CardMedia
                  image={discord}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                    // marginRight: { md: "20px", xs: "6px" },
                  }}
                /> */}
                <img
                  src={discord}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>

            <Grid item md={1.2} xs={3}>
              <div
                onClick={() => openInNewTab("https://twitter.com/SlothRoob")}
              >
                {/* <CardMedia
                  image={twitter}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                    // marginRight: { md: "20px", xs: "6px" },
                  }}
                /> */}
                <img
                  src={twitter}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() =>
                  openInNewTab("https://www.facebook.com/TheChroniclesofRoob")
                }
              >
                {/* <CardMedia
                  image={facebook}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                    // marginRight: { md: "20px", xs: "6px" },
                  }}
                /> */}
                <img
                  src={facebook}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() =>
                  openInNewTab("https://www.instagram.com/sloth_roob/")
                }
              >
                {/* <CardMedia
                  image={instagram}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                    // marginRight: { md: "20px", xs: "6px" },
                  }}
                /> */}
                <img
                  src={instagram}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() =>
                  openInNewTab(
                    "https://www.youtube.com/channel/UCNroE867f5ixB-3Lf2wkZIg"
                  )
                }
              >
                {/* <CardMedia
                  image='/youtube.svg'
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                    // marginRight: { md: "20px", xs: "6px" },
                  }}
                /> */}
                <img
                  src='/youtube.svg'
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() =>
                  openInNewTab("https://www.tiktok.com/@slothroobnft")
                }
              >
                {/* <CardMedia
                  image={tiktok}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                    // marginRight: { md: "20px", xs: "6px" },
                  }}
                /> */}
                <img
                  src={tiktok}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() =>
                  openInNewTab("https://digitalwebcreation.medium.com/")
                }
              >
                {/* <CardMedia
                  image={footerImg}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                  }}
                /> */}
                <img
                  src={footerImg}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
                onClick={() =>
                  openInNewTab(
                    "https://opensea.io/collection/official-sloth-roob"
                  )
                }
              >
                {/* <CardMedia
                  image={opensea}
                  sx={{
                    height: "48px",
                    width: "48px",
                    cursor: "pointer",
                  }}
                /> */}
                <img
                  src={opensea}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <div
              // onClick={() =>
              //   openInNewTab("https://digitalwebcreation.medium.com/")
              // }
              >
                {/* <CardMedia
                  image={opensea}
                  sx={{
                    height: "48px",
                    width: "48px",

                    cursor: "pointer",
                  }}
                /> */}
                <img
                  src={opensea}
                  style={{ cursor: "pointer", width: "40px", height: "38px" }}
                />
              </div>
            </Grid>
            {/* <Grid item md={1.2} xs={3}>
              <Button variant='contained'>OpenSea</Button>
            </Grid>
            <Grid item md={1.2} xs={3}>
              <Button variant='contained'>OpenSea</Button>
            </Grid> */}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            paddingTop: "50px",
            marginBottom: "40px",
          }}
          fontFamily='Raleway'
        >
          ©2022, Digital Web Creation Club " DWCC "
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
