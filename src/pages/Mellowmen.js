import {
  Typography,
  Box,
  Grid,
  Button,
  Backdrop,
  CircularProgress,
  Checkbox,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MellowmenComp from "../components/MellowmenComp";
import Navbar from "../components/Navbar";
import useStyles from "../styles";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import axios from "axios";

import contractAbi from "../abi.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(0,0,0,.3)",
  backdropFilter: "blur(10px)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Mellowmen = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [tokenToStake, setTokenToStake] = useState();
  const [tokenToClaim, setTokenToClaim] = useState();
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
    //console.log(web3, "web 3 console")
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const Contract = new web3.eth.Contract(
    contractAbi,
    "0x7389FfBd4C23707766a274edD051F8596cfbe196"
  );

  const classes = useStyles();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
    setModal(false);
  }

  const getUserToken = async () => {
    let res = await axios.get(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${account}`
    );
    var count = 0;
    var tempArray = [];
    if (res.data) {
      res.data.items.map((data) => {
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
    }
  };
  // console.log(userTokenData, "dfghdfjkh");
  const getUserStakedToken = async () => {
    setOpen(true);
    var allStakedToken = [];
    let index = -1;
    for (let i = 0; i < userTotalNumberOfToken; i++) {
      let record = await Contract.methods
        .stake(userTokenData[i]?.tokenId)
        .call();

      if (record.isStaked) {
        index += 1;
        let result = await Contract.methods
          .userStakedToken(account, index)
          .call();
        allStakedToken.push(result);
      }
    }
    Promise.all(allStakedToken)
      .catch(function (err) {
        // log that I have an error, return the entire array;
        console.log("A promise failed to resolve", err);
        // return arrayOfPromises;
      })
      .then(() => {
        setUserStakedTokenList(allStakedToken);
        setOpen(false);
      });
  };

  const checkUserReward = async () => {
    let reward = await Contract.methods
      .getUnclaimedRewardsAmountForSloothRoob(userStakedTokenList)
      .call();
    setUserUnlaimedReward(reward);
  };

  useEffect(() => {
    if (account) {
      setOpen(true);
      getUserToken();
    }
  }, [account]);

  useEffect(() => {
    if (userStakedTokenList && userTotalNumberOfToken) {
      checkUserReward();
      setUserTokenData((data) =>
        data.filter(
          (filterData) => !userStakedTokenList.includes(filterData.tokenId)
        )
      );
    }
  }, [userTotalNumberOfToken, userStakedTokenList]);

  useEffect(() => {
    if (userTotalNumberOfToken) {
      getUserStakedToken();
    }
  }, [userTotalNumberOfToken, checkStakedToken]);

  const stakeToken = async () => {
    if (!account) {
      alert("please connect wallet first");
      return;
    }
    if (!tokenToStake) {
      alert("please enter to token number to stake");
      return;
    }
    await Contract.methods.stakeToken(selected).send({
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

  const claimReward = async () => {
    if (!tokenToClaim) {
      alert("No token selected");
      return;
    }
    if (!userUnlaimedReward || userUnlaimedReward <= 0) {
      alert("You cannot claim reward, until the reward is greater then zero");
      return;
    }
    await Contract.methods.claimRewardsForSloothRoob([tokenToClaim]).send({
      from: account,
    });
  };

  const claimMultiTokenReward = async () => {
    if (!selectedClaim) {
      alert("No token selected");
      return;
    }
    if (!userUnlaimedReward || userUnlaimedReward <= 0) {
      alert("You cannot claim reward, until the reward is greater then zero");
      return;
    }
    await Contract.methods.claimRewardsForSloothRoob(selectedClaim).send({
      from: account,
    });
  };
  const handleStake = (data, index) => {
    setTokenToStake([data.tokenId]);
    setIdx(index);
  };
  const handleClaim = (data, index) => {
    setTokenToClaim(data);
    setClaimIdx(index);
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

  function onChangeClaim(event) {
    if (event.target.checked) {
      setSelectedClaim([...selectedClaim, event.target.name]);
    } else {
      setSelectedClaim((data) =>
        data?.filter((currItem) => currItem !== event?.target?.name)
      );
    }
  }
  return (
    <>
      {/* {!account && (
        <Modal
          open={modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Button onClick={connect}>
              <Typography>Connect Wallet</Typography>
            </Button>
          </Box>
        </Modal>
      )} */}
      <Box className={classes.skating}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {/* backgroundColor: "rgba(0,0,0,0.5)", this goes below*/}
        <div style={{ paddingBottom: "50px" }}>
          <Navbar connect="Connect Wallet" />

          <MellowmenComp
            title1={`Your wallet : ${
              account ? account.substring(0, 10) + "..." : ""
            }`}
            title2="RoobChronicle Staked :"
            title3={`Earnings : ${
              userUnlaimedReward ? userUnlaimedReward : ""
            } ROOB`}
            title4={`Reward rate : 15 ROOB/day`}
            // subtitle1={userUnlaimedReward ? userUnlaimedReward : "?"}
            // subtitle2='15 ROOB/day'
          />
          <Grid
            container
            lg={12}
            md={12}
            sm={12}
            sx={{ marginTop: "30px" }}
            spacing={4}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  backgroundColor: "rgba(0,0,0,.3)",
                  backdropFilter: "blur(10px)",
                  margin: "auto",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflowY: "auto",
                  marginLeft: {
                    xl: "30px",
                    lg: "30px",
                    md: "30px",
                    sm: "0px",
                    xs: "0px",
                  },
                  height: "50vh",
                }}
              >
                <Typography>
                  <Typography sx={{ padding: "10px", color: "#fff" }}>
                    Select Your Tokens
                  </Typography>
                  <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
                    {userTokenData?.length > 0 ? (
                      userTokenData?.map((data, index) => (
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                          <div onClick={() => handleStake(data, index)}>
                            <div style={{ position: "relative" }}>
                              <img
                                src={`https://gateway.pinata.cloud/ipfs/QmebJdeiYf54XyzQc39aSvZPWz4d9qU8TvLD9D27sfT9Mm/${data.tokenId}.png`}
                                height="40%"
                                width="50%"
                                style={{
                                  borderRadius: "10px",
                                  marginLeft: "4%",
                                }}
                              />
                              <Checkbox
                                {...label}
                                color="success"
                                name={data.tokenId}
                                sx={{
                                  position: "absolute",
                                  fontWeight: "600",
                                  color: "blue",
                                  top: {
                                    xl: "2%",
                                    lg: "2%",
                                    md: "1%",
                                    sm: "1%",
                                    xs: "1%",
                                  },
                                  left: {
                                    xl: "4%",
                                    lg: "2%",
                                    md: "2%",
                                    sm: "2%",
                                    xs: "2%",
                                  },
                                }}
                                onChange={(event) => onChange(event)}
                              />
                            </div>
                            <Typography
                              sx={{
                                // marginTop: "30px",
                                // marginBottom: "400px",
                                padding: "10px",
                                color: "#fff",
                                marginLeft: "4%",
                              }}
                            >
                              {data.tokenId}
                            </Typography>
                            {idx === index ? (
                              <button
                                variant=""
                                className="solbutton mx-auto"
                                onClick={stakeToken}
                                style={{
                                  backgroundColor: "#04212B",
                                  color: "#fff",
                                  padding: "10px",
                                  border: "none",
                                  marginBottom: "10px",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  marginLeft: "2%",
                                }}
                              >
                                Stake Token
                              </button>
                            ) : null}
                          </div>
                        </Grid>
                      ))
                    ) : (
                      <Typography
                        sx={{
                          marginTop: "30px",
                          marginBottom: "400px",
                          padding: "10px",
                          color: "#fff",
                        }}
                      >
                        No allowed tokens found in wallet.
                      </Typography>
                    )}
                  </Grid>
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xl: "flex-start",
                      lg: "flex-start",
                      md: "flex-start",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={stakeMultipleToken}
                    sx={{
                      marginBottom: "15px",
                      marginLeft: "15px",
                      backgroundColor: "#04212b",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#04212b",
                      },
                    }}
                  >
                    Stake Token ({selected ? selected?.length : "?"})
                  </Button>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  // width: "70%",
                  backgroundColor: "rgba(0,0,0,.3)",
                  backdropFilter: "blur(10px)",
                  margin: "auto",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "50vh",
                  overflowY: "auto",
                }}
              >
                <Typography>
                  <Typography sx={{ padding: "10px", color: "#fff" }}>
                    View Staked Tokens:{" "}
                    {userStakedTokenList ? userStakedTokenList?.length : ""}
                  </Typography>
                  <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
                    {userStakedTokenList?.length > 0 ? (
                      userStakedTokenList?.map((data, index) => (
                        <Grid xl={4} lg={4} md={4} sm={6} xs={12}>
                          <div
                            onClick={() => {
                              handleClaim(data, index);
                            }}
                            style={{ position: "relative" }}
                          >
                            <div style={{ position: "relative" }}>
                              <img
                                src={`https://gateway.pinata.cloud/ipfs/QmebJdeiYf54XyzQc39aSvZPWz4d9qU8TvLD9D27sfT9Mm/${data}.png`}
                                height="40%"
                                width="50%"
                                style={{
                                  borderRadius: "10px",
                                  marginLeft: "4%",
                                }}
                              />{" "}
                              <Checkbox
                                {...label}
                                color="success"
                                name={data}
                                sx={{
                                  position: "absolute",
                                  color: "blue",
                                  top: {
                                    xl: "2%",
                                    lg: "2%",
                                    md: "1%",
                                    sm: "1%",
                                    xs: "1%",
                                  },
                                  left: {
                                    xl: "4%",
                                    lg: "2%",
                                    md: "2%",
                                    sm: "2%",
                                    xs: "2%",
                                  },
                                }}
                                onChange={(event) => onChangeClaim(event)}
                              />
                            </div>

                            <Typography
                              sx={{
                                marginTop: "10px",
                                // marginBottom: "100px",
                                padding: "10px",
                                color: "#fff",
                                marginLeft: "4%",
                              }}
                            >
                              {data}
                            </Typography>
                            {claimIdx === index ? (
                              <button
                                variant=""
                                className="solbutton mx-auto"
                                onClick={claimReward}
                                style={{
                                  backgroundColor: "#04212B",
                                  color: "#fff",
                                  padding: "10px",
                                  border: "none",
                                  marginBottom: "10px",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  marginLeft: "2%",
                                }}
                              >
                                Claim Reward
                              </button>
                            ) : null}
                          </div>
                        </Grid>
                      ))
                    ) : (
                      <Typography
                        sx={{
                          marginTop: "30px",
                          marginBottom: "400px",
                          padding: "10px",
                          color: "#fff",
                        }}
                      >
                        No tokens currently staked.
                      </Typography>
                    )}
                  </Grid>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xl: "flex-end",
                      lg: "flex-end",
                      md: "flex-end",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={claimMultiTokenReward}
                    sx={{
                      marginBottom: "15px",
                      marginRight: "15px",
                      backgroundColor: "#04212b",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#04212b",
                      },
                    }}
                  >
                    Claim Reward ({selectedClaim ? selectedClaim?.length : "0"})
                  </Button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Mellowmen;
