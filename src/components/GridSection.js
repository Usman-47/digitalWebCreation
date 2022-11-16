import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import useStyles from "../styles";
import React, { useState } from "react";
import Btn from "./Btn";
import GridComp from "./GridComp";
const GridSection = () => {
  const grids = [
    {
      img: "/grid1.png",
      vision: "OUR VISION",
      title: "ROOB'S COMMUNITY",
      subtitle: "Keystone",
      state: false,
      description: [
        "We are bridging art and utility while building a great community around our digital characters for all members in the entertainment industry.Everybody should have a meta identity and be part of the metaverse future.",
        "We are creating an exclusive “ Roobs Community “.",
      ],
      image: "/sphere1.png",
    },
    {
      img: "/grid2.png",
      vision: "WHEN EVERYTHING STARTED",
      title: "JUST AN IDEA",
      subtitle: "The Beginning",
      description: [
        "Project was founded by a team of 5 designers and artists in September 2021. They wanted to create a unique concept different to anything around. They have started working on a short story about 5 characters.",
        "Each character is based on each of the designer’s artist’s style and personality.",
        "The created a book called “ The Chronicles of Roob “. It’s a story book talking about the adventure of 5 characters. Roob the Sloth , Boof the Mammoth, Toot the Squirrel, Hooch the Tiger & Wooz the Weasel",
        "The team then started on the first draft of ``Sloth Roob `` character in such way that is connected to the revolution of the metaverse entrainment.",
        "5353 unique iconic digital characters of Sloth Roobs were created, and they will be ready to be in the Ethereum universe.",
      ],
      btnTitle: "SEE MORE",

      image: "/sphereCollection.png",
      state: false,
    },
    {
      img: "/grid3.png",
      vision: "THE NEW ERA IS ABOUT TO BEGIN",
      title: "WHAT'S NEXT?",
      subtitle: "The Future",
      description: [
        "5353 unique iconic digital characters of Sloth Roobs will be ready to connect with their holders and give them a unique meta identity soon.",
        "They will be available to mint on ERC-721 smart contract on the Ethereum blockchain very soon. Sloth Roobs are PFP with instant rarity ranking and unique meta identity for their holders.",
        "Upon the completion of the mint process of Sloth Roob, our team will be releasing the next phase of the project which is the launch of the other 4 collections Boof the Mammoth, Toot the Squirrel, Hooch the Tiger & Wooz the Weasel.",
        "Upon the completion of the 5 collections, our team will partner with a well-known story writer ( Top Secret ) publishing the full story book of “ Chronicles of Roob “.",
      ],
      btnTitle: "SEE MORE",
      image: "/sphere3.png",
      state: false,
    },
    {
      img: "/grid4.png",
      vision: "ONE COMMUNITY",
      title: "EXCLUSIVITY",
      subtitle: "Perks for Holder",
      description: [
        "-	Holders of Roobs NFTs will be giving priority position to acquire future released NFTs . Yes, we call it “ Roobs List “ , we don’t call it “ Whitelist “ when you with us. Guaranteed Free Mint on All Future Collections. ",
        "-	Special NFT Airdrops to large holders.",
        "-	Staking platform rewards & Future $ROOB token airdrop ",
        "-	Exclusive membership to the Alpha Roobs club  and their community Cash & Raffle giveaways. Exclusive access to Ecosystem Partners, ALPHA Group, ALPHA Calls, Marketplace & DAO.",
        "-	Access to special edition of “ The Chronicles of Roob “ story book once published in 2023. ",
        "-	Early Access to the Roob Chronicles BETA version Epic game in 2023. ",
        "-	Exclusive access to projects voting system and holders votes .",
        "-	Exclusive access to partner’s collection at a discounted price",
      ],
      btnTitle: "SEE MORE",

      image: "/sphere4.png",
      state: false,
    },
    {
      img: "/grid6.png",
      vision: "THE SKY IS THE LIMIT",
      title: "THE FIRST COLLECTION",
      subtitle: "Sloth Roob Official Collection",
      description: [
        "Sloth Roob is the first most iconic digital character from DWCC’s book ”The Chronicles of Roob”.",
        "-	Some would argue Sloth Roob is from the ice age period. Sloth Roob was in a deep, centuries-long sleep and just woke up.",
        "-	After a century-long sleep, a total of 5353 Sloth Roobs are now roaming the Ethereum metaverse in search of their friends human fans & collectors.",
        "-	Sloth Roob NFT is a collection of 5353 unique iconic digital characters inspired by the Digital Web Creation Club's book - ``The Chronicles of Roob``.",
        "-	This limited edition comprises characters that have its special rarity and traits providing a secure certification of authenticity.",
        "-	We are building something phenomenal as DWCC will become a premier hub for crypto enthusiasts, NFTs and SlothRoob fans.",
        "-	Owners of these digital NFTs will be entitled to special perks in the Sloth Roob metaverse in the future as this is a key that grants holders entrance to the metaverse we are building.",
        "-	Sloth Roob NFTs are yours to trade and collect.",
      ],

      btnTitle: "SEE MORE",

      image: "/sphere6.png",
      state: false,
    },
    {
      img: "/newHero.png",
      vision: "Ice Age Time",
      title: "The Second Collection",
      subtitle: "Mammoth Boof Collection ",
      description: [
        "This is the second iconic digital character from DWCC’s book ”Roob Chronicles ”. Mammoth Boof NFT is a collection of 4,343 unique iconic digital characters inspired by the Digital Web Creation Club's book - “Roob Chronicles ”. Mammoth Boof was founded by Sloth Roob, Mammoth Boof who was deep inside his cave, he had probably gone that far to hide from the cold. Roob got Boof's frozen figure out of the cave, with the help of the sun and its slow and steady hands he was able to break the ice using a rock and unfreeze him.",
        "Mammoth Boof limited edition comprises characters that have its special rarity and traits providing a secure certification of authenticity",
      ],
      btnTitle: "SEE MORE",
      image: "/sphere5.png",
      state: false,
    },
  ];
  const [showMore, setShowMore] = useState(false);
  const [UserData, setUserData] = useState(grids);

  const classes = useStyles();
  const handlerCard = (id) => {
    const NewArray = UserData.map((e, index) => {
      if (id === index) {
        e.state = true;
        return e;
      }
      e.state = false;
      return e;
    });
    setUserData([...NewArray]);
  };
  const handlerCardless = (id) => {
    const NewArray = UserData.map((e, index) => {
      if (id === index) {
        e.state = false;
        return e;
      }
      e.state = false;
      return e;
    });
    setUserData([...NewArray]);
  };

  return (
    <>
      <Grid
        container
        md={12}
        lg={12}
        // display={"flex"}
        sx={{ paddingTop: { md: "140px", xs: "30px" } }}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          xs={12}
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: { md: "100px", lg: "100px", sm: "50px", xs: "0px" },
            paddingRight: { md: "100px", lg: "100px", sm: "50px", xs: "0px" },
          }}
          // sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          {UserData?.map((grid, index) => (
            <>
              {console.log(grid.image)}
              <Grid item md={4} sm={6} xs={12} sx={{ marginBottom: "100px" }}>
                <Card
                  className={classes.card}
                  sx={{
                    backgroundColor: "#04212b",
                    borderRadius: "18px",
                    position: "relative",
                  }}
                >
                  <img
                    src={grid.img}
                    style={
                      index === 5
                        ? {
                            border: "2px solid #4efd93",
                            borderRadius: "18px",
                          }
                        : {}
                    }
                  />
                  {/* <Typography>
                    <img
                      src={grid.image}
                      style={
                        index === 0
                          ? {
                              position: "absolute",
                              bottom: "0",
                              right: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 1
                          ? {
                              position: "absolute",
                              bottom: "-4%",
                              right: "-25%",
                              maxWidth: "100%",
                              height: "auto",
                              background: "transparent",
                            }
                          : index === 2
                          ? {
                              position: "absolute",
                              bottom: "-1%",
                              right: "4%",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 3
                          ? {
                              position: "absolute",
                              bottom: "-3%",
                              left: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 4
                          ? {
                              position: "absolute",
                              bottom: "-3%",
                              right: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 5
                          ? {
                              position: "absolute",
                              bottom: "-1%",
                              right: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : {}
                      }
                    />
                  </Typography> */}
                  <CardContent>
                    <Typography>
                      <img
                        src={grid.image}
                        style={
                          index === 0
                            ? {
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 1
                            ? {
                                position: "absolute",
                                bottom: "-1%",
                                right: "-25%",
                                maxWidth: "100%",
                                height: "auto",
                                background: "transparent",
                              }
                            : index === 2
                            ? {
                                position: "absolute",
                                bottom: "-1%",
                                right: "4%",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 3
                            ? {
                                position: "absolute",
                                bottom: "-3%",
                                left: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 4
                            ? {
                                position: "absolute",
                                bottom: "-3%",
                                right: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 5
                            ? {
                                position: "absolute",
                                bottom: "-1%",
                                right: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : {}
                        }
                      />
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ zIndex: "1" }}>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                          width: "100%",

                          fontSize: "16px",
                          textAlign: { xs: "center", sm: "center", lg: "left" },
                        }}
                        fontFamily='Raleway-bolder'
                      >
                        {grid.vision}
                      </Typography>
                      <Typography
                        sx={
                          index === 0
                            ? {
                                marginLeft: "-120px",
                                height: "1px",
                                backgroundColor: "#fff",
                                width: "100%",
                                display: {
                                  lg: "block",
                                  md: "block",
                                  sm: "none",
                                  xs: "none",
                                },
                              }
                            : index === 1
                            ? {
                                // marginLeft: "-20px",
                                height: "1px",
                                backgroundColor: "#fff",
                                width: "35%",
                                display: {
                                  lg: "block",
                                  md: "block",
                                  sm: "none",
                                  xs: "none",
                                },
                              }
                            : index === 2
                            ? {
                                height: "1px",
                                backgroundColor: "#fff",
                                width: "19%",
                                display: {
                                  lg: "block",
                                  md: "block",
                                  sm: "none",
                                  xs: "none",
                                },
                              }
                            : index === 3
                            ? {
                                height: "1px",
                                backgroundColor: "#fff",
                                width: "100%",
                                marginLeft: "-22px",
                                display: {
                                  lg: "block",
                                  md: "block",
                                  sm: "none",
                                  xs: "none",
                                },
                              }
                            : index === 4
                            ? {
                                height: "1px",
                                backgroundColor: "#fff",
                                width: "80%",
                                display: {
                                  lg: "block",
                                  md: "block",
                                  sm: "none",
                                  xs: "none",
                                },
                              }
                            : index === 5
                            ? {
                                height: "1px",
                                backgroundColor: "#fff",
                                width: "100%",
                                marginLeft: "-20px",
                                display: {
                                  lg: "block",
                                  md: "block",
                                  sm: "none",
                                  xs: "none",
                                },
                              }
                            : {}
                        }
                      ></Typography>
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "28px",
                        fontSize: "22px",
                        textAlign: { xs: "center", sm: "center", lg: "left" },
                      }}
                      fontFamily='Raleway-bolder'
                      variant='h3'
                    >
                      {grid.title}
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        color: "#4efd93",
                        fontWeight: "bold",
                        fontSize: "28px",
                        fontSize: "30px",
                        textAlign: { xs: "center", sm: "center", lg: "left" },
                      }}
                      fontFamily='Raleway-bolder'
                    >
                      {grid.subtitle}
                    </Typography>
                    <br />
                    {grid.state
                      ? grid?.description?.map((des, index) => (
                          <>
                            <br />
                            <br />
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: "100%",
                                textAlign: {
                                  xs: "center",
                                  sm: "center",
                                  lg: "left",
                                },
                              }}
                              fontFamily='Raleway'
                            >
                              {des}
                            </Typography>
                          </>
                        ))
                      : grid?.description?.map((des, index) => (
                          <>
                            {index <= 1 && (
                              <Typography
                                sx={{
                                  color: "#fff",
                                  fontSize: "100%",
                                  textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    lg: "left",
                                  },
                                }}
                                fontFamily='Raleway'
                              >
                                {des}
                              </Typography>
                            )}
                          </>
                        ))}

                    {grid.btnTitle && (
                      <>
                        {grid.state ? (
                          <Btn
                            title='Show less'
                            onClick={() => handlerCardless(index)}
                            style={
                              {
                                // position: "absolute",
                                // bottom: "2%",
                                // width: "75%",
                              }
                            }
                          />
                        ) : (
                          <Btn
                            title='Show more'
                            // onClick={() => setShowMore(!showMore)}
                            onClick={() => handlerCard(index)}
                            style={{
                              position: "absolute",
                              bottom: "2%",
                              width: "75%",
                            }}
                          />
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
      {/* <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          {grids.map((grid) => (
            <Card
              className={classes.card}
              sx={{ backgroundColor: "#04212b", borderRadius: "18px" }}
            >
              <img src={grid.img} />
              <CardContent>
                <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                  {grid.vision}
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: "28px" }}
                >
                  {grid.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#4efd93",
                    fontWeight: "bold",
                    fontSize: "28px",
                  }}
                >
                  {grid.subtitle}
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  {grid.description}
                </Typography>
                {grid.btnTitle && <Btn title={grid.btnTitle} />}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid> */}
    </>
  );
};

export default GridSection;
