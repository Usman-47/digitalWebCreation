import { Typography, Box, Grid, Button } from "@mui/material";
import React, { useEffect } from "react";
import MellowmenComp from "../components/MellowmenComp";
import Navbar from "../components/Navbar";
import useStyles from "../styles";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import contractAbi from "../abi.json";
import baseContractAbi from "../baseContractAbi.json";

const Mellowmen = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

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
    "0x78Eb0c4428343AEE916B63813403Ad281176fdB0"
  );

  const baseContract = new web3.eth.Contract(
    baseContractAbi,
    "0x4F706A9C342Efad7c8Bf15A772e0681399a51aEb"
  );

  const classes = useStyles();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const getOwnerOf = async () => {
    let totalSupply = await baseContract.methods.totalSupply().call();
    console.log(totalSupply, "totalSupply");

    for (let i = 1; i <= totalSupply; i++) {
      console.log(i, "jshfjks");

      let result = await baseContract.methods.ownerOf(i).call();
      // console.log(result, "dfjhdjshfjks");
    }
  };

  useEffect(() => {
    if (account) {
      getOwnerOf();
    }
  }, [account]);
  const stakeToken = async () => {
    await Contract.methods.stakeToken([7558]).send({
      // from: account,
      from: "0xF1d3217f5D8368248E9AfBAd25e5396b5a93599b",
      // value: web3.utils.toWei("0", "ether"),
    });
  };

  const claimReward = async () => {
    await Contract.methods.claimReward(7558).send({
      // from: account,
      from: "0xF1d3217f5D8368248E9AfBAd25e5396b5a93599b",
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
