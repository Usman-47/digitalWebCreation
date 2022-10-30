import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import React from "react";
import c1 from "../assets/Media/c1.png";
import c2 from "../assets/Media/c2.png";

import c4 from "../assets/Media/c4.png";
import c5 from "../assets/Media/c5.png";
import c6 from "../assets/Media/c6.png";
import bgSphere from "../assets/Media/bgSphere.png";
import useStyles from "../styles";
import SecondCollection from "./SecondCollection";
const Collection = () => {
  const classes = useStyles();

  //   const collections = [
  //     {img:{c1}, title:"Genesis Boss Sloth Roob"},
  //     {img:{c2}, title:"Sloth Roob Official Collection"},
  //     {img:{c3}, title:"MammothBoof"},
  //     {img:{c4}, title:"SquirrelToot"},
  //     {img:{c5}, title:"TigerHooch"},
  //     {img:{c6}, title:"TigerHooch"},
  //   ]
  return (
    <>
      <Grid
        container
        md={12}
        lg={12}
        // display={"flex"}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          spacing={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            position: "relative",
          }}
          // sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          <Grid item md={2} sm={12} xs={12}>
            <Card
              className={classes.Ccard1}
              sx={{
                backgroundColor: "#573bfe",
                padding: "23px",
                position: "absolute",
                left: "10%",
                borderRadius: "15px",
              }}
            >
              <img src={c1} style={{}} />
              <CardContent>
                <Typography
                  className={classes.typo}
                  // sx={{ textAlign: "center" }}
                  fontFamily='Raleway-bolder'
                >
                  Genesis Boss Sloth Roob
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={2} sm={12} xs={12}>
            <Card
              className={classes.Ccard2}
              sx={{
                backgroundColor: "#573bfe",
                position: "absolute",
                padding: "23px",
                left: "24.5%",
                top: "400%",
                borderRadius: "15px",
              }}
            >
              <CardMedia image={c2} className={classes.c2} />
              <CardContent>
                <Typography
                  className={classes.typo}
                  fontFamily='Raleway-bolder'
                >
                  Sloth Roob Official
                  <br />
                  Collection
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={2} sm={12} xs={12}>
            <Card
              className={classes.Ccard3}
              sx={{
                backgroundColor: "#573bfe",
                position: "absolute",
                padding: "23px",
                left: "39%",
                top: "200%",
                borderRadius: "15px",
              }}
            >
              <CardMedia image='/repHero.png' className={classes.c3} />
              <CardContent>
                <Typography
                  className={classes.typo}
                  fontFamily='Raleway-bolder'
                >
                  MammothBoof
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#9c9d9d", width: "100%" }}
                    fontFamily='Raleway'
                  >
                    comming soon
                  </Typography>
                  <Typography
                    sx={{
                      height: "1px",
                      backgroundColor: "#9c9d9d",
                      width: "40%",
                    }}
                  ></Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={2} sm={12} xs={12}>
            <Card
              className={classes.Ccard4}
              sx={{
                backgroundColor: "#573bfe",
                position: "absolute",
                padding: "23px",
                left: "51%",
                top: "350%",
                borderRadius: "15px",
              }}
            >
              <CardMedia image={c4} className={classes.c4} />
              <CardContent>
                <Typography
                  className={classes.typo}
                  fontFamily='Raleway-bolder'
                >
                  SquirrelToot
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#9c9d9d", width: "100%" }}
                    fontFamily='Raleway'
                  >
                    comming soon
                  </Typography>
                  <Typography
                    sx={{
                      height: "1px",
                      backgroundColor: "#9c9d9d",
                      width: "40%",
                    }}
                  ></Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={2} sm={12} xs={12}>
            <Card
              className={classes.Ccard5}
              sx={{
                backgroundColor: "#573bfe",
                position: "absolute",
                padding: "23px",
                left: "64%",
                borderRadius: "15px",
              }}
            >
              <CardMedia image={c5} className={classes.c5} />
              <CardContent>
                <Typography
                  className={classes.typo}
                  fontFamily='Raleway-bolder'
                >
                  TigerHooch
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#9c9d9d", width: "100%" }}
                    fontFamily='Raleway'
                  >
                    comming soon
                  </Typography>
                  <Typography
                    sx={{
                      height: "1px",
                      backgroundColor: "#9c9d9d",
                      width: "40%",
                    }}
                  ></Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={2} sm={12} xs={12}>
            <Card
              className={classes.Ccard6}
              sx={{
                backgroundColor: "#573bfe",
                position: "absolute",
                padding: "23px",
                left: "75%",
                top: "880%",
                borderRadius: "15px",
              }}
            >
              <CardMedia image={c6} className={classes.c6} />
              <CardContent>
                <Typography
                  className={classes.typo}
                  fontFamily='Raleway-bolder'
                >
                  WeaselWooz
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#9c9d9d", width: "100%" }}
                    fontFamily='Raleway'
                  >
                    comming soon
                  </Typography>
                  <Typography
                    sx={{
                      height: "1px",
                      backgroundColor: "#9c9d9d",
                      width: "40%",
                    }}
                  ></Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid container spacing={2} sx={{ display: { md: "flex", xs: "none" } }}>
        <Grid item>
          <Card className={classes.Ccard1} sx={{ backgroundColor: "#573bfe" }}>
            <CardMedia image={c1} className={classes.c1} />
            <CardContent>
              <Typography className={classes.typo}>
                Genesis Boss Sloth
                <br />
                Roob
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.Ccard2} sx={{ backgroundColor: "#573bfe" }}>
            <CardMedia image={c2} className={classes.c2} />
            <CardContent>
              <Typography className={classes.typo}>
                Sloth Roob Official
                <br />
                Collection
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.Ccard3} sx={{ backgroundColor: "#573bfe" }}>
            <CardMedia image={c3} className={classes.c3} />
            <CardContent>
              <Typography className={classes.typo}>MammothBoof</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.Ccard4} sx={{ backgroundColor: "#573bfe" }}>
            <CardMedia image={c4} className={classes.c4} />
            <CardContent>
              <Typography className={classes.typo}>SquirrelToot</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.Ccard5} sx={{ backgroundColor: "#573bfe" }}>
            <CardMedia image={c5} className={classes.c5} />
            <CardContent>
              <Typography className={classes.typo}>TigerHooch</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.Ccard6} sx={{ backgroundColor: "#573bfe" }}>
            <CardMedia image={c6} className={classes.c6} />
            <CardContent>
              <Typography className={classes.typo}>WeaselWooz</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <CardMedia image={bgSphere} className={classes.bgSphere} /> */}
    </>
  );
};

export default Collection;
