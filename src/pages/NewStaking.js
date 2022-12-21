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
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useStyles from "../styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Footer from "../components/Footer";
import CheckIcon from "@mui/icons-material/Check";
import NewNav from "../components/NewNav";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import axios from "axios";
import moment from "moment";

import contractAbi from "../abi.json";

const NewStaking = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const classes = useStyles();

  const [tokenToStake, setTokenToStake] = useState();
  const [tokenToClaim, setTokenToClaim] = useState();
  const [stakes, setStakes] = useState([]);
  const [userRoobBalance, setUserRoobBalance] = useState();
  const [totalPaidAmount, setTotalPaidAmount] = useState();
  const [userTotalNumberOfToken, setUserTotalNumberOfToken] = useState();
  const [userTokenData, setUserTokenData] = useState([]);
  const [userStakedTokenList, setUserStakedTokenList] = useState();
  const [checkStakedToken, setCheckStakedToken] = useState();
  const [idx, setIdx] = useState();
  const [claimIdx, setClaimIdx] = useState();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedClaim, setSelectedClaim] = useState([]);
  const [modal, setModal] = useState(true);
  const [userUnlaimedReward, setUserUnlaimedReward] = useState();
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const Contract = new web3.eth.Contract(
    contractAbi,
    "0xF5c58628356C76115F5746Af21ae865f690f1C35"
  );

  const getUserToken = async () => {
    var tempResponsArry = [];
    let res = await axios.get(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${account}`
      // `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0xD7c2F69C27bC57060e88ea80f36DD1e7dB42B430`
    );
    if (res.data) {
      var continuation = res.data.continuation;
      for (var i = 0; i < 10; i++) {
        let newRes = await axios.get(
          `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${account}&continuation=${continuation}`
          // `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0xD7c2F69C27bC57060e88ea80f36DD1e7dB42B430&continuation=${continuation}`
        );

        if (newRes.data.items.length < 1) break; //this will put it outside for loop
        continuation = newRes.data.continuation;
        tempResponsArry = [...tempResponsArry, ...newRes.data.items];
      }
      tempResponsArry = [...res.data.items, ...tempResponsArry];
      Promise.all(tempResponsArry).then((allData) => {
        var count = 0;
        var tempArray = [];
        allData.map((data) => {
          let specificIndex = data.contract.indexOf(":");
          let result = data.contract.slice(specificIndex + 1);
          if (result === "0x9294b5bce53c444eb78b7bd9532d809e9b9cd123") {
            tempArray.push({
              tokenId: data.tokenId,
              imageUrl: data.meta.content[0].url,
            });
            count += 1;
          }
        });
        setOpen(false);
        setUserTotalNumberOfToken(count);
        setUserTokenData(tempArray);
      });
    }
  };

  const getUserRoobBalance = async () => {
    let bal = await Contract.methods.balanceOf(account).call();
    setUserRoobBalance(bal);
  };

  const getTotalPaid = async () => {
    let totalPaid = await Contract.methods.totalPaidReward().call();
    setTotalPaidAmount(totalPaid);
  };

  const checkUserReward = async () => {
    let reward = await Contract.methods
      .getUnclaimedRewardsAmountForSloothRoob(userStakedTokenList)
      .call();
    setUserUnlaimedReward(reward);
  };

  const getUserStakedToken = async () => {
    setOpen(true);
    let result = await Contract.methods.getUserStakedToken(account).call();
    setUserStakedTokenList(result);
    setOpen(false);
  };

  useEffect(() => {
    if (account) {
      setOpen(true);
      getUserToken();
      getUserRoobBalance();
      getTotalPaid();
    }
  }, [account]);

  useEffect(() => {
    if (userStakedTokenList && userTotalNumberOfToken) {
      checkUserReward();
      const createUserData = async () => {
        var tempArray = [];
        for (let i = 0; i < userTokenData?.length; i++) {
          var flag = false;
          for (let j = 0; j < userStakedTokenList?.length; j++) {
            if (userTokenData[i].tokenId === userStakedTokenList[j]) {
              flag = true;
            }
          }
          if (flag) {
            let time = await Contract.methods
              .getSloothRoobLastClaimedTime(userTokenData[i].tokenId)
              .call();
            let unClaimed = await Contract.methods
              .getUnclaimedRewardsAmountForSloothRoob([
                userTokenData[i].tokenId,
              ])
              .call();
            tempArray.push({
              image: `https://gateway.pinata.cloud/ipfs/QmebJdeiYf54XyzQc39aSvZPWz4d9qU8TvLD9D27sfT9Mm/${userTokenData[i].tokenId}.png`,
              title: `SLOTH ROOB OFFICIAL ${userTokenData[i]?.tokenId}`,
              state: true,
              tokenId: userTokenData[i].tokenId,
              btnTitle: "Collect",
              stakeTime: time,
              earned: unClaimed,
            });
          } else {
            tempArray.push({
              image: `https://gateway.pinata.cloud/ipfs/QmebJdeiYf54XyzQc39aSvZPWz4d9qU8TvLD9D27sfT9Mm/${userTokenData[i].tokenId}.png`,
              title: `SLOTH ROOB OFFICIAL ${userTokenData[i]?.tokenId}`,
              tokenId: userTokenData[i].tokenId,
              state: false,
              btnTitle: "Stake",
            });
          }
        }
        // tempArray.push({
        //   image: `https://gateway.pinata.cloud/ipfs/QmebJdeiYf54XyzQc39aSvZPWz4d9qU8TvLD9D27sfT9Mm/5.png`,
        //   title: `SLOTH ROOB OFFICIAL ${5}`,
        //   state: true,
        //   btnTitle: "Collect",
        // });
        Promise.all(tempArray).then((allData) => {
          setStakes(allData);
        });
        // setUserTokenData((data) =>
        //   data.filter(
        //     (filterData) => !userStakedTokenList.includes(filterData.tokenId)
        //   )
        // );
      };
      createUserData();
    }
  }, [userTotalNumberOfToken, userStakedTokenList]);
  const handleClick = async (e, tokenId) => {
    if (e.target.name === "Stake") {
      await stakeToken(tokenId);
    } else {
      await claimReward(tokenId);
    }
  };
  useEffect(() => {
    if (userTotalNumberOfToken) {
      getUserStakedToken();
    }
  }, [userTotalNumberOfToken, checkStakedToken]);

  const stakeToken = async (tokenToStake) => {
    if (!account) {
      alert("please connect wallet first");
      return;
    }
    if (!tokenToStake) {
      alert("token number is missing");
      return;
    }
    await Contract.methods.stakeToken([tokenToStake]).send({
      from: account,
      // from: "0xF1d3217f5D8368248E9AfBAd25e5396b5a93599b",
      // value: web3.utils.toWei("0", "ether"),
    });
    setCheckStakedToken(!checkStakedToken);
  };

  const stakeMultipleToken = async () => {
    if (!account) {
      alert("please connect wallet first");
      return;
    }
    if (!selected || selected?.length == 0) {
      alert("please Select token to stake");
      return;
    }
    await Contract.methods.stakeToken(selected).send({
      from: account,
    });
    setCheckStakedToken(!checkStakedToken);
  };

  const claimReward = async (tokenToClaim) => {
    if (!tokenToClaim) {
      alert("No token selected");
      return;
    }
    await Contract.methods.claimRewardsForSloothRoob([tokenToClaim]).send({
      from: account,
    });
  };

  const claimMultiTokenReward = async () => {
    if (userStakedTokenList?.length < 1) {
      alert("No token selected");
      return;
    }
    await Contract.methods.claimRewardsForSloothRoob(userStakedTokenList).send({
      from: account,
    });
  };

  function onChange(event) {
    if (event.target.checked) {
      setSelected([...selected, event.target.name]);
    } else {
      setSelected((data) =>
        data.filter((currItem) => currItem !== event?.target?.name)
      );
    }
  }

  return (
    <>
      <div
        className={classes.NewStaking}
        style={{ padding: "20px", paddingBottom: "8%" }}
      >
        <NewNav connect="Connect Wallet" />
        {/* <Container> */}
        <Box
          style={{
            width: { xl: "80%", lg: "80%", md: "80%", sm: "100%", xs: "100%" },
            margin: "auto",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "36px" }} variant="h3">
            STAKING
          </Typography>
          <Box
            sx={{
              position: "relative",
              borderRadius: "10px",
              // padding: "20px",
            }}
            className="stakingBox"
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
                        {userTotalNumberOfToken ? userTotalNumberOfToken : 0}
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
                        {userStakedTokenList?.length > 0
                          ? userStakedTokenList?.length - 1
                          : 0}
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
                            {userRoobBalance
                              ? (userRoobBalance / 10 ** 18).toFixed(3)
                              : 0}
                          </Typography>
                        </div>
                        <div style={{ marginLeft: "3px" }}>
                          <img src="/Asset1.png" />
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
                                {userUnlaimedReward
                                  ? (userUnlaimedReward / 10 ** 18).toFixed(5)
                                  : 0}
                              </Typography>
                            </div>

                            <div style={{ marginLeft: "3px" }}>
                              <img src="/Asset1.png" />
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
                        {userStakedTokenList?.length > 0 ? (
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#573BFE",
                              padding: "10px",
                              borderRadius: "20px",
                              "&:hover": {
                                //you want this to be the same as the backgroundColor above
                                backgroundColor: "#573BFE",
                              },
                            }}
                            onClick={claimMultiTokenReward}
                          >
                            Claim All
                          </Button>
                        ) : null}
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
                        {totalPaidAmount
                          ? (totalPaidAmount / 10 ** 18).toFixed(3)
                          : 0}
                      </Typography>
                    </div>
                    <div>
                      <img src="/Asset1.png" style={{ marginLeft: "3px" }} />
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
                    className="cardParent"
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
                      className="stakingCard"
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
                          {!stake?.state ? (
                            <Checkbox
                              {...label}
                              name={stake.tokenId}
                              color="success"
                              sx={{ color: "blue" }}
                              onChange={(event) => onChange(event)}
                            />
                          ) : null}
                        </div>
                        <img
                          src={stake.image}
                          style={{ width: "100%", zIndex: -1 }}
                        />
                      </div>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
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
                                    {stake?.earned
                                      ? (stake?.earned / 10 ** 18).toFixed(3)
                                      : 0}
                                  </Typography>
                                </div>
                                <div>
                                  <img
                                    src="/Asset1.png"
                                    style={{ marginLeft: "3px" }}
                                  />
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                          <LinearProgress
                            variant="determinate"
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
                                {stake?.stakeTime
                                  ? moment
                                      .unix(stake?.stakeTime)
                                      .format("D/MM, h:mm:ss A")
                                  : 0}
                                {/* {stake?.stakeTime ? stake?.stakeTime : 0} */}
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                      <CardActions>
                        <Button
                          size="small"
                          name={stake.btnTitle}
                          onClick={(e) => {
                            handleClick(e, stake.tokenId);
                          }}
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
                          variant="contained"
                        >
                          {stake.btnTitle}
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
            {selected?.length > 0 ? (
              <Button
                variant="contained"
                onClick={stakeMultipleToken}
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
                {selected?.length > 0
                  ? `Stake All (${selected?.length})`
                  : null}
              </Button>
            ) : null}
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
