import { ClassNames } from "@emotion/react";
import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import faq from "../assets/Media/faq.png";
import useStyles from "../styles";
import ControlledAccordions from "./ControlledAccordios";
import NftAccordion from "./NftAccordion";
const FaqComp = () => {
  const classes = useStyles();
  return (
    <div style={{ position: "relative" }} id='faq'>
      <Typography
        sx={{
          color: "#9c9d9d",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "14px",
          paddingTop: "80px",
        }}
        variant='h4'
        fontFamily='Raleway'
      >
        CHILL TIME
      </Typography>
      <Typography
        variant='h4'
        sx={{
          color: "#fff",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: { lg: "32px", md: "32px", sm: "24px", xs: "16px" },
        }}
        fontFamily='Raleway'
      >
        THE CHRONICLES OF ROOB
      </Typography>
      <Typography
        variant='h5'
        sx={{
          color: "#4efd93",
          fontWeight: "500",
          textAlign: "center",
          // paddingBottom: "120px",
          fontSize: { lg: "28px", md: "28px", sm: "22px", xs: "14px" },
        }}
        fontFamily='Raleway'
      >
        First Edition Audiobook
      </Typography>
      <CardMedia
        image={faq}
        sx={{
          position: "absolute",
          top: "10%",
          height: "250px",
          width: "250px",
          display: { md: "block", xs: "none" },
        }}
      />

      {/* <CardMedia
        image={faq}
        sx={{
          height: "150px",
          width: "150px",
          position: "relative",
          top: "10%",
        }}
      /> */}
      <Typography
        sx={{
          color: "#9c9d9d",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "14px",
          paddingTop: "10px",
        }}
        variant='h4'
        fontFamily='Raleway'
      >
        FAQ
      </Typography>
      <Typography
        variant='h3'
        sx={{
          color: "#fff",
          fontWeight: "600",
          textAlign: "center",
          paddingBottom: "80px",
          fontSize: { lg: "32px", md: "32px", sm: "24px", xs: "16px" },
        }}
        fontFamily='Raleway'
      >
        FREQUENCY ASKED QUESTIONS
      </Typography>
      <ControlledAccordions />
      <NftAccordion />
    </div>
  );
};

export default FaqComp;
