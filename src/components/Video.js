import { CardMedia, Typography } from "@mui/material";
import React from "react";

const Video = () => {
  return (
    <>
      <Typography
        sx={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <CardMedia
          component='video'
          image='/video.mp4'
          controls
          sx={{
            maxWidth: { md: "50%", xs: "100%" },
            width: { md: "100%", xs: "100%" },
            borderRadius: "20px",
          }}
        />
      </Typography>
    </>
  );
};

export default Video;
