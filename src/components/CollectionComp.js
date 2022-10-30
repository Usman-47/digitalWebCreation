import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import sphereCollection from "../assets/Media/sphereCollection.png";
import useStyles from "../styles";
const CollectionComp = () => {
  const classes = useStyles();
  return (
    <section id='collections'>
      <Box>
        <Typography
          sx={{
            color: "#9c9d9d",
            fontWeight: "800",
            textAlign: "center",
          }}
          fontFamily='Raleway'
        >
          CREATIVE MODERN LIMITED NFT COLLECTIONS
        </Typography>
        {/* <CardMedia
        image={sphereCollection}
        className={classes.sphereCollection}
      /> */}
        <Typography
          variant='h3'
          sx={{
            color: "#fff",
            paddingBottom: "100px",
            textAlign: "center",
            fontSize: {
              xl: "50px",
              lg: "44px",
              md: "36px",
              sm: "32px",
              xs: "28px",
            },
          }}
          fontFamily='Raleway-bolder'
        >
          OUR NFT COLLECTIONS
        </Typography>
      </Box>
    </section>
  );
};

export default CollectionComp;
