import { Typography, Box, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MellowmenComp from "../components/MellowmenComp";
import Navbar from "../components/Navbar";
import useStyles from "../styles";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import axios from "axios";

import contractAbi from "../abi.json";
import baseContractAbi from "../baseContractAbi.json";

const Mellowmen = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [tokenToStake, setTokenToStake] = useState();
  const [userTotalNumberOfToken, setUserTotalNumberOfToken] = useState();
  const [userTokenIds, setUserTokenIds] = useState([]);
  const [userStakedTokenList, setUserStakedTokenList] = useState();
  const [checkStakedToken, setCheckStakedToken] = useState();
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
    "0x557B92cb9B01442C8aacf38dCE832e65af38419B"
  );

  const baseContract = new web3.eth.Contract(
    baseContractAbi,
    "0x9294b5Bce53C444eb78B7BD9532D809e9b9cD123"
  );

  const classes = useStyles();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
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
          tempArray.push(data.tokenId);
          count += 1;
        }
      });
      setUserTotalNumberOfToken(count);
      setUserTokenIds(tempArray);
    }
  };

  const getUserStakedToken = async () => {
    var allStakedToken = [];
    let index = -1;
    for (let i = 0; i < userTotalNumberOfToken; i++) {
      // have to findout the user base contract balance then replace hardcoded value
      let record = await Contract.methods.stake(userTokenIds[i]).call();

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
      });
  };

  useEffect(() => {
    if (account) {
      getUserToken();
    }
  }, [account]);

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
    await Contract.methods.stakeToken([tokenToStake]).send({
      from: account,
      // from: "0xF1d3217f5D8368248E9AfBAd25e5396b5a93599b",
      // value: web3.utils.toWei("0", "ether"),
    });
    setCheckStakedToken(!checkStakedToken);
  };

  const claimReward = async () => {
    await Contract.methods.claimReward(tokenToStake).send({
      from: account,
      // from: "0xF1d3217f5D8368248E9AfBAd25e5396b5a93599b",
      // value: web3.utils.toWei("0", "ether"),
    });
  };
  return (
    <>
      <Box className={classes.skating}>
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)", paddingBottom: "50px" }}
        >
          <Navbar />
          <button variant="" className="solbutton mx-auto" onClick={connect}>
            Connect Wallet
          </button>
          <input
            type="text"
            // value={value}
            onChange={(e) => {
              setTokenToStake(e.target.value);
            }}
            style={{
              width: "80%",
              background: "transparent",
              border: "2px solid rgb(255 255 255)",
              textAlign: "center",
              padding: "8px",
              marginTop: "2%",
              color: "#fff",
            }}
          />
          <button variant="" className="solbutton mx-auto" onClick={stakeToken}>
            Stake Token
          </button>
          <button
            variant=""
            className="solbutton mx-auto"
            onClick={claimReward}
          >
            Claim Reward
          </button>
          <MellowmenComp
            title1="Your wallet"
            title2="RoobChronicle Staked"
            subtitle="5MpA. . . .v7Wc929"
            title3="Earnings :"
            title4="Reward rate"
            subtitle1="0.000000"
            subtitle2="10 ROOB/day"
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
                  // width: "70%",

                  height: "100%",
                  backgroundColor: "rgba(0,0,0,.3)",
                  backdropFilter: "blur(10px)",
                  margin: "auto",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft: {
                    xl: "30px",
                    lg: "30px",
                    md: "30px",
                    sm: "0px",
                    xs: "0px",
                  },
                }}
              >
                <Typography>
                  <Typography sx={{ padding: "10px", color: "#fff" }}>
                    Select Your Tokens
                  </Typography>
                  {userTokenIds.length > 0 ? (
                    userTokenIds?.map((data) => (
                      <Typography
                        sx={{
                          marginTop: "30px",
                          // marginBottom: "400px",
                          padding: "10px",
                          color: "#fff",
                        }}
                      >
                        {data}
                      </Typography>
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
                    Stake Token (0)
                  </Button>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  // width: "70%",

                  height: "100%",
                  backgroundColor: "rgba(0,0,0,.3)",
                  backdropFilter: "blur(10px)",
                  margin: "auto",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <Typography sx={{ padding: "10px", color: "#fff" }}>
                    View Staked Tokens (0)
                  </Typography>
                  {userStakedTokenList?.length > 0 ? (
                    userStakedTokenList?.map((data) => (
                      <Typography
                        sx={{
                          marginTop: "10px",
                          // marginBottom: "100px",
                          padding: "10px",
                          color: "#fff",
                        }}
                      >
                        {data}
                      </Typography>
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
                    Unstake Token (0)
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