import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import vision1 from "../assets/Media/vision1.png";
import vision2 from "../assets/Media/vision2.png";
import vision3 from "../assets/Media/vision3.png";
import vision4 from "../assets/Media/vision4.png";
const Vision = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "28px",
            display: "block",
            textAlign: "center",
            paddingTop: "60px",
          }}
          fontFamily='Raleway-bolder'
        >
          OUR VISION
        </Typography>
      </Container>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item>
            <img src={vision1} height='270px' width='270px' />
            <Typography
              sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
              fontFamily='Raleway-bolder'
            >
              UNIQUE META IDENTITY
            </Typography>
          </Grid>
          <Grid item>
            <img src={vision2} height='270px' width='270px' />
            <Typography
              sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
              fontFamily='Raleway-bolder'
            >
              BECOME PART OF THE FUTURE
            </Typography>
          </Grid>
          <Grid item>
            <img src={vision3} height='270px' width='270px' />
            <Typography
              sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
              fontFamily='Raleway-bolder'
            >
              ECOSYSTEM MAPPING
            </Typography>
          </Grid>
          <Grid item>
            <img src={vision4} height='270px' width='270px' />
            <Typography
              sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
              fontFamily='Raleway-bolder'
            >
              DIGITAL ENTERTAINMENT
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Vision;
