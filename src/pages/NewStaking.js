import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import useStyles from "../styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Footer from "../components/Footer";
import CheckIcon from "@mui/icons-material/Check";
import NewNav from "../components/NewNav";

const NewStaking = () => {
  const stakes = [
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: false,
      btnTitle: "Stake",
    },
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: true,
      btnTitle: "Collect",
    },
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: true,
      btnTitle: "Collect",
    },
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: true,
      btnTitle: "Collect",
    },
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: false,
      btnTitle: "Stake",
    },
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: false,
      btnTitle: "Stake",
    },
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: false,
      btnTitle: "Stake",
    },
    {
      image: "/stakingIMG.png",
      title: "SLOTH ROOB OFFICIAL #5353",
      state: true,
      btnTitle: "Collect",
    },
  ];
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.NewStaking}
        style={{ padding: "20px", paddingBottom: "8%" }}
      >
        <NewNav connect='Connect Wallet' />
        {/* <Container> */}
        <Box
          style={{
            width: { xl: "80%", lg: "80%", md: "80%", sm: "100%", xs: "100%" },
            margin: "auto",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "36px" }} variant='h3'>
            STAKING
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: "10px",
              // padding: "20px",
            }}
            className='stakingBox'
          >
            {/* <Container sx={{ backgroundColor: "#111" }}> */}
            <Grid
              container
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ backgroundColor: "#111", borderRadius: "15px" }}
            >
              <Grid item xl={2.2} lg={2.2} md={2.2} sm={12} xs={12}>
                <Grid container xl={12} lg={12} md={12}>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box
                      sx={{
                        display: {
                          lg: "block",
                          md: "block",
                          sm: "flex",
                          xs: "flex",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#4AFD93",
                          textAlign: "left",
                          // {
                          //   xl: "center",
                          //   lg: "center",
                          //   md: "center",
                          //   sm: "left",
                          //   xs: "left",
                          // },
                          marginLeft: {
                            lg: "30%",
                            md: "30%",
                            sm: "1%",
                            xs: "1%",
                          },
                          fontSize: {
                            lg: "14px",
                            md: "14px",
                            sm: "16px",
                            xs: "16px",
                          },
                        }}
                      >
                        Total Roobs
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: {
                            lg: "20px",
                            md: "20px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontWeight: "bold",
                          textAlign: "left",
                          // {
                          //   xl: "center",
                          //   lg: "center",
                          //   md: "center",
                          //   sm: "left",
                          //   xs: "left",
                          // },
                          marginLeft: {
                            xl: "30%",
                            lg: "30%",
                            md: "30%",
                            sm: "15%",
                            xs: "13%",
                          },
                        }}
                      >
                        15 Roobs
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={0} xs={0}>
                    <Typography
                      sx={{
                        backgroundColor: "#505050",
                        height: "60px",
                        width: "1px",
                        marginLeft: "80%",
                        display: {
                          xl: "block",
                          lg: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    ></Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={2.2} lg={2.2} md={2.2} sm={12} xs={12}>
                <Grid container xl={12} lg={12} md={12}>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box
                      sx={{
                        display: {
                          lg: "block",
                          md: "block",
                          sm: "flex",
                          xs: "flex",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#4AFD93",
                          textAlign: "left",
                          // {
                          //   xl: "center",
                          //   lg: "center",
                          //   md: "center",
                          //   sm: "left",
                          //   xs: "left",
                          // },
                          marginLeft: "1%",
                          fontSize: {
                            lg: "14px",
                            md: "14px",
                            sm: "16px",
                            xs: "16px",
                          },
                        }}
                      >
                        Staked Roobs
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: {
                            lg: "20px",
                            md: "20px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontWeight: "bold",
                          textAlign: "left",
                          // {
                          //   xl: "center",
                          //   lg: "center",
                          //   md: "center",
                          //   sm: "left",
                          //   xs: "left",
                          // },
                          marginLeft: {
                            lg: "1%",
                            md: "1%",
                            sm: "10%",
                            xs: "9%",
                          },
                        }}
                      >
                        5 Roobs
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={0} xs={0}>
                    <Typography
                      sx={{
                        backgroundColor: "#505050",
                        height: "60px",
                        width: "1px",
                        marginLeft: "80%",
                        display: {
                          xl: "block",
                          lg: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    ></Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={2.2} lg={2.2} md={2.2} sm={12} xs={12}>
                <Grid container xl={12} lg={12} md={12}>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box
                      sx={{
                        display: {
                          lg: "block",
                          md: "block",
                          sm: "flex",
                          xs: "flex",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#4AFD93",
                          textAlign: "left",
                          // {
                          //   xl: "center",
                          //   lg: "center",
                          //   md: "center",
                          //   sm: "left",
                          //   xs: "left",
                          // },
                          marginLeft: "1%",
                          fontSize: {
                            lg: "14px",
                            md: "14px",
                            sm: "16px",
                            xs: "16px",
                          },
                        }}
                      >
                        You have Earned
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: {
                            lg: "1%",
                            md: "1%",
                            sm: "15%",
                            xs: "2%",
                          },
                        }}
                      >
                        <div>
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: {
                                lg: "20px",
                                md: "20px",
                                sm: "14px",
                                xs: "14px",
                              },

                              fontWeight: "bold",
                              textAlign: "left",
                              // {
                              //   xl: "center",
                              //   lg: "center",
                              //   md: "center",
                              //   sm: "left",
                              //   xs: "left",
                              // },
                            }}
                          >
                            9,842,865
                          </Typography>
                        </div>
                        <div style={{ marginLeft: "3px" }}>
                          <img src='/Asset1.png' />
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={0} xs={0}>
                    <Typography
                      sx={{
                        backgroundColor: "#505050",
                        height: "60px",
                        width: "1px",
                        marginLeft: "80%",
                        display: {
                          xl: "block",
                          lg: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    ></Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                <Grid container xl={12} lg={12} md={12}>
                  <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                    <div
                      style={{
                        display: "flex",
                        // justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Box
                          sx={{
                            display: {
                              lg: "block",
                              md: "block",
                              sm: "flex",
                              xs: "flex",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#4AFD93",
                              textAlign: "left",
                              // {
                              //   xl: "center",
                              //   lg: "center",
                              //   md: "center",
                              //   sm: "left",
                              //   xs: "left",
                              // },
                              fontSize: {
                                lg: "14px",
                                md: "14px",
                                sm: "16px",
                                xs: "16px",
                              },
                            }}
                          >
                            Available for Claim
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: {
                                lg: "1%",
                                md: "1%",
                                sm: "15%",
                                xs: "20%",
                              },
                            }}
                          >
                            <div>
                              <Typography
                                sx={{
                                  color: "#fff",
                                  fontSize: {
                                    lg: "20px",
                                    md: "20px",
                                    sm: "14px",
                                    xs: "14px",
                                  },
                                  fontWeight: "bold",
                                  textAlign: "left",
                                  // {
                                  //   xl: "center",
                                  //   lg: "center",
                                  //   md: "center",
                                  //   sm: "left",
                                  //   xs: "left",
                                  // },
                                }}
                              >
                                954
                              </Typography>
                            </div>

                            <div style={{ marginLeft: "3px" }}>
                              <img src='/Asset1.png' />
                            </div>
                          </Box>
                        </Box>
                      </div>
                      <Box
                        style={{
                          marginLeft: "5%",
                          // position: {
                          //   lg: "relative",
                          //   md: "relative",
                          //   sm: "absolute",
                          //   xs: "absolute",
                          // },
                          // bottom: "1%",
                          // right: "1%",
                        }}
                      >
                        <Button
                          variant='contained'
                          sx={{
                            backgroundColor: "#573BFE",
                            padding: "10px",
                            borderRadius: "20px",
                            "&:hover": {
                              //you want this to be the same as the backgroundColor above
                              backgroundColor: "#573BFE",
                            },
                          }}
                        >
                          Claim All
                        </Button>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xl={2} lg={2} md={2} sm={0} xs={0}>
                    <Typography
                      sx={{
                        backgroundColor: "#505050",
                        height: "60px",
                        width: "1px",
                        marginLeft: "80%",
                        display: {
                          xl: "block",
                          lg: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    ></Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={2.2} lg={2.2} md={2.2} sm={12} xs={12}>
                <Box
                  sx={{
                    display: {
                      lg: "block",
                      md: "block",
                      sm: "flex",
                      xs: "flex",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4AFD93",
                      textAlign: "left",
                      // {
                      //   xl: "left",
                      //   lg: "left",
                      //   md: "center",
                      //   sm: "left",
                      //   xs: "left",
                      // },
                      marginLeft: "1%",
                      fontSize: {
                        lg: "14px",
                        md: "14px",
                        sm: "16px",
                        xs: "16px",
                      },
                    }}
                  >
                    Paid Out
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: {
                        lg: "1%",
                        md: "1%",
                        sm: "15%",
                        xs: "20%",
                      },
                    }}
                  >
                    <div>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: {
                            lg: "20px",
                            md: "20px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontWeight: "bold",
                          textAlign: "left",
                          // "{
                          //   xl: "center",
                          //   lg: "center",
                          //   md: "center",
                          //   sm: "left",
                          //   xs: "left",
                          // },"
                        }}
                      >
                        9,842,865
                      </Typography>
                    </div>
                    <div>
                      <img src='/Asset1.png' style={{ marginLeft: "3px" }} />
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* </Container> */}
            <Grid
              container
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{
                marginBottom: "130px",
                // paddingLeft: "5%",
                // paddingRight: "5%",
              }}
            >
              {stakes.map((stake, index) => (
                <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                  <Box
                    className='cardParent'
                    style={{
                      padding: "10px",
                      marginTop: "10%",
                      zIndex: 1,
                      border: "1px solid #081027",
                      marginRight: "5px",
                    }}
                  >
                    <Card
                      sx={{
                        background: "transparent",
                        // width: "300px",
                        height: {
                          lg: "550px",
                          md: "550px",
                          sm: "575px",
                          xs: "600px",
                        },
                        position: "relative",
                        border: "1px solid #573BFE",
                      }}
                      className='stakingCard'
                    >
                      {/* <CardMedia
                    component='img'
                    height='140'
                    image='/stakingIMG.png'
                    alt='green iguana'
                  /> */}
                      <div style={{ position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-1%",
                            left: "-3%",
                          }}
                        >
                          <Checkbox
                            {...label}
                            color='success'
                            sx={{ color: "blue" }}
                          />
                        </div>
                        <img
                          src={stake.image}
                          style={{ width: "100%", zIndex: -1 }}
                        />
                      </div>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant='h5'
                          component='div'
                          sx={{
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          {stake.title}
                        </Typography>
                      </CardContent>
                      {stake.state && (
                        <div>
                          <Grid
                            container
                            xl={12}
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                          >
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                              <Typography sx={{ color: "#fff" }}>
                                Earned:
                              </Typography>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                              <div
                                style={{ display: "flex", marginLeft: "40%" }}
                              >
                                <div>
                                  <Typography sx={{ color: "#fff" }}>
                                    86,498
                                  </Typography>
                                </div>
                                <div>
                                  <img
                                    src='/Asset1.png'
                                    style={{ marginLeft: "3px" }}
                                  />
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                          <LinearProgress
                            variant='determinate'
                            value={90}
                            sx={{ color: "red" }}
                          />
                          <Grid
                            container
                            xl={12}
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            sx={{ marginBottom: "25%" }}
                          >
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                              <Typography sx={{ color: "#fff" }}>
                                Time Stake:
                              </Typography>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                              <Typography
                                sx={{ color: "#fff", marginLeft: "20%" }}
                              >
                                4d:16h:24m:32s
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                      <CardActions>
                        <Button
                          size='small'
                          sx={{
                            color: "#fff",
                            width: "100%",
                            padding: "18px",
                            position: "absolute",
                            bottom: "0%",
                            marginLeft: "-8px",
                            backgroundColor: "#081027",
                            "&:hover": {
                              //you want this to be the same as the backgroundColor above
                              backgroundColor: "#4AFD93",
                            },
                          }}
                          variant='contained'
                        >
                          {stake.btnTitle}
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button
              variant='contained'
              sx={{
                position: "absolute ",
                right: { lg: "10%", md: "10%", sm: "20%", xs: "20%" },
                bottom: { lg: "2%", md: "2%", sm: "1%", xs: "0%" },
                padding: "10px",
                width: {
                  xl: "12%",
                  lg: "12%",
                  md: "15%",
                  sm: "25%",
                  xs: "60%",
                },
                borderRadius: "20px",
                backgroundColor: "#573BFE",
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "#573BFE",
                },
              }}
            >
              <CheckIcon sx={{ marginRight: "6%" }} />
              Stake All 8
            </Button>
          </Box>
        </Box>
        {/* </Container> */}
      </div>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </>
  );
};

export default NewStaking;
