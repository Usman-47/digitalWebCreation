import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const MellowmenComp = (props) => {
  return (
    <Box
      sx={{
        width: "70%",
        backgroundColor: "rgba(0,0,0,.3)",
        backdropFilter: "blur(10px)",
        padding: "20px",
        margin: "auto",
        borderRadius: "8px",
      }}
    >
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        spacing={4}
        sx={{ margin: "auto" }}
      >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography sx={{ color: "#fff" }}>{props.title1}</Typography>
          <Typography sx={{ color: "#fff" }}>{props.title2}</Typography>
        </Grid>
        {/* <Grid item lg={3} md={3} sm={3}>
          <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
            {props.subtitle}
          </Typography>
        </Grid> */}
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography sx={{ color: "#fff" }}>{props.title3}</Typography>
          <Typography sx={{ color: "#fff" }}>{props.title4}</Typography>
        </Grid>
        {/* <Grid item lg={4} md={4} sm={4} xs={12}>
          <Typography sx={{ color: "#fff" }}>{props.subtitle1}</Typography>
          <Typography sx={{ color: "#fff" }}>{props.subtitle2}</Typography>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default MellowmenComp;
