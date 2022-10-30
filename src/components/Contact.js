import { Box, Typography } from "@mui/material";
import React from "react";
import ContactComp from "./ContactComp";
const Contact = () => {
  return (
    <section id='contact' style={{ alignContent: "center", color: "white" }}>
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
        CONTACT US
      </Typography>
      <Typography
        variant='h3'
        sx={{
          color: "#fff",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: { lg: "42px", md: "42px", sm: "34px", xs: "28px" },
        }}
        fontFamily='Raleway-bolder'
      >
        GET IN TOUCH
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          alignItems: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          // margin: "auto",
          textAlign: "center",
          color: "white !important",

          width: { md: "100%", sm: "100%", xs: "100%" },
        }}
      >
        <ContactComp />
      </Box>
    </section>
  );
};

export default Contact;
