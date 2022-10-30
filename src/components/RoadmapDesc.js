import { Box, Typography } from "@mui/material";
import React from "react";

const RoadmapDesc = (props) => {
  return (
    <>
      <Box
        sx={{
          padding: "34px",
          width: "80%",
          backgroundColor: "#04212b",
          borderRadius: "20px",
          marginLeft: "96px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            paddingBlockEnd: "15px",
            marginBlockStart: "2px",
            color: "#4efd93",
            fontSize: "16px",
            fontWeight: "800",
          }}
          fontFamily='Raleway-bolder'
        >
          {props.date}
        </Typography>
        <Typography
          sx={{
            padding: "10px",
            border: "0px",
            fontSize: "100%",
            fontWeight: "400",
            verticalAlign: "initial",
            background: "transparent",
          }}
          fontFamily='Raleway'
        >
          {props.description}
        </Typography>
      </Box>
    </>
  );
};

export default RoadmapDesc;
