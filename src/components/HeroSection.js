import { Grid, Typography, Container, Button, CardMedia } from "@mui/material";
import React from "react";
import useStyles from "../styles";
import discord from "../assets/Media/discord-white.svg";
import hero1 from "../assets/Media/hero1.png";
import hero2 from "../assets/Media/hero2.png";
import hero3 from "../assets/Media/hero3.png";
import hero4 from "../assets/Media/hero4.png";
import circle from "../assets/Media/circle1.png";
import { fontSize } from "@mui/system";
const HeroSection = () => {
  const classes = useStyles();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section id='home'>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            display: { lg: "block", md: "block", sm: "flex", xs: "flex" },
            justifyContent: "center",
            alignItems: "center",
            margin: { xl: "0px", lg: "0px", md: "0px", sm: "auto", xs: "auto" },
          }}
          direction='column'
        >
          <Typography
            variant='h4'
            className={classes.heroTitle}
            sx={{
              fontSize: { lg: "42px", md: "36px", sm: "30px", xs: "26px" },
              paddingLeft: { xs: "5px", md: "120px" },
              fontWeight: "800",
            }}
            fontFamily='Raleway-bolder'
          >
            DIGITAL WEB CREATION
            <br /> CLUB{" "}
            <span
              style={{
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Powered by Roob Chronicles
            </span>
          </Typography>
          <Typography
            className={classes.heroSubtitle}
            sx={{
              fontSize: "30px",
              paddingLeft: { xs: "5px", md: "120px" },
              fontSize: { lg: "34px", md: "34px", sm: "30px", xs: "28px" },
              justifyContent: "center",
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
            fontFamily='Raleway'
            paragraph
          >
            Get You Meta Identity
            <br />
            Become part of the Future
          </Typography>
          <Button
            variant='contained'
            className={classes.button}
            sx={{
              padding: "12px",
              marginLeft: { xs: "5px", md: "121px" },
              width: { xs: "90%", sm: "80%", md: "43%" },
              borderRadius: "16px",
              marginTop: "20px",
              backgroundColor: "#573bfe",
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-around",
              "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: "#573bfe",
              },
            }}
            onClick={() => openInNewTab("https://discord.com/invite/dwcc")}
          >
            <img src={discord} style={{ marginRight: "10px" }} />
            JOIN OUR DISCORD
          </Button>
        </Grid>
        <Grid
          item
          lg={3}
          md={0}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              lg: "block",
              md: "block",
              position: "relative",
            },
          }}
        >
          <CardMedia
            image={hero1}
            className={classes.image1}
            sx={{
              height: { md: "180px", lg: "350px", sm: "0px", xs: "0px" },
              width: { md: "150px", lg: "280px", sm: "0px", xs: "0px" },
              marginLeft: "55px",
              border: "3px solid #573bfe",
              borderRadius: "15px",
            }}
          />
          <CardMedia
            image='/repHero.png'
            sx={{
              height: { md: "180", lg: "350px", sm: "200px", xs: "200px" },
              width: { md: "150px", lg: "280px", sm: "170px", xs: "170px" },
              border: "3px solid #573bfe",
              borderRadius: "15px",
              position: "absolute",
              right: { lg: "-35%", md: "-46%" },
              top: { lg: "27%", md: "20%" },
              transform: "rotate(15deg)",
            }}
          />
          <CardMedia
            image={hero3}
            className={classes.image3}
            sx={{
              height: { md: "180px", lg: "350px", sm: "0px", xs: "0px" },
              width: { md: "150px", lg: "280px", sm: "0px", xs: "0px" },
              border: "3px solid #573bfe",
              borderRadius: "15px",
              position: "absolute",
              right: { lg: "-73%", md: "-85%" },
              top: { lg: "67%", md: "40%" },
              transform: "rotate(42deg)",
            }}
          />
          <CardMedia
            image='/repHero2.png'
            className={classes.image4}
            sx={{
              height: { md: "180px", lg: "350px", sm: "0px", xs: "0px" },
              width: { md: "150px", lg: "280px", sm: "0px", xs: "0px" },
              border: "3px solid #573bfe",
              borderRadius: "15px",
              position: "absolute",
              transform: "rotate(-20deg)",
              left: { lg: "55%", md: "70%" },
              top: { lg: "100%", md: "70%" },
            }}
          />
          <CardMedia
            image={circle}
            sx={{
              height: { lg: "250px", md: "200px" },
              width: { lg: "230px", md: "180px" },
              position: "absolute",
              transform: "rotate(93deg)",
              bottom: { lg: "-100%", md: "-25%" },
              right: { lg: "-80%", md: "-90%" },
            }}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
