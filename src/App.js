import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import useStyles from "./styles";
import GridSection from "./components/GridSection";
import Vision from "./components/Vision";
import Collection from "./components/Collection";
import CollectionComp from "./components/CollectionComp";
import Whitepapers from "./components/Whitepapers";
import FaqComp from "./components/FaqComp";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Video from "./components/Video";
import SecondCollection from "./components/SecondCollection";
import "./App.css";
function App() {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.mainContainer}
        sx={{
          width: "100%",
        }}
      >
        <Navbar />
        <HeroSection />
      </Box>
      <Box
        sx={{
          backgroundColor: "#070517",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <GridSection />
      </Box>
      <Box
        sx={{
          backgroundColor: "#04212b",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Video />
      </Box>
      <Box
        sx={{
          backgroundColor: "#070517",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Vision />
      </Box>
      <Box
        sx={{
          backgroundColor: "#070517",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Roadmap />
      </Box>
      <Box
        sx={{
          backgroundColor: "#070517",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          paddingTop: { lg: "60px", xs: "20px" },
        }}
      >
        <CollectionComp />
      </Box>
      <Box
        className={classes.collectionContainer}
        sx={{
          display: { lg: "block", md: "block", sm: "none", xs: "none" },
        }}
      >
        <Collection />
      </Box>
      <Box
        className="collectionContainer"
        sx={{
          display: { lg: "none", md: "none", sm: "block", xs: "block" },
          // marginTop: "-250px",
        }}
      >
        <SecondCollection />
      </Box>
      <Box
        sx={{
          backgroundColor: "#070517",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Whitepapers />
        <FaqComp />
      </Box>
      <Box
        sx={{
          background: "linear-gradient(to right top,#070517 , #0e0a2a)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Team />
      </Box>
      {/* Responsive problem in this component */}
      <Box className={classes.collectionContainer} sx={{ width: "100%" }}>
        <Contact />
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </>
  );
}

export default App;
