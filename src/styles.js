import { makeStyles } from "@material-ui/core/styles";
import background from "./assets/Media/background.png";
import bg1 from "./assets/Media/bg1.png";
import footer from "./assets/Media/footer.png";
import skatingBG from "./assets/Media/skatingBG.png";
import Vector1 from "./assets/Media/Vector1.png";
const useStyles = makeStyles((theme) => ({
  // root: {
  //   boxShadow: "none",
  //   backgroundColor: "transparent",
  // },
  // typography: {
  //   fontWeight: "800",
  //   color: "#04212b",
  //   paddingRight: "40px",
  // },
  // typographyContainer: {
  //   display: "flex",
  //   direction: "row",
  //   justifyContent: "space-evenly",
  //   padding: "40px",
  // },
  mainContainer: {
    backgroundImage: `url(${background})`,
    height: "870px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  },
  CardBG: {
    backgroundImage: `url(${Vector1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    height: "500px",
  },
  skating: {
    backgroundImage: `url(${skatingBG})`,

    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // width: "100%",
    height: "100vh",
  },
  heroTitle: {
    color: "#04212b",
    paddingTop: "120px",
    fontWeight: "800 !important",
  },
  heroSubtitle: {
    color: "#04212b",
    paddingTop: "12px",
  },

  cardGrid: {
    padding: "20px 0",
    display: "flex",
    flexDirection: "row",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
  },
  rd2: {
    position: "relative",
    bottom: "11.5%",
  },
  rd3: {
    position: "relative",
    bottom: "24%",
  },
  line: {
    backgroundColor: "#fff",
    height: "1px",
    width: "70%",
    marginLeft: "13px",
  },
  collectionContainer: {
    backgroundImage: `url(${bg1})`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    backgroundColor: "#070517",
  },
  typo: {
    marginTop: "10px",
    marginBottom: "10px",
    color: "#fff",
  },
  c1: {
    height: "250px",
    width: "200px",
  },
  c2: {
    height: "250px",
    width: "200px",
  },
  c3: {
    height: "250px",
    width: "200px",
  },
  c4: {
    height: "250px",
    width: "200px",
  },
  c5: {
    height: "250px",
    width: "200px",
  },
  c6: {
    height: "250px",
    width: "200px",
  },

  // Ccard2: {
  //   borderRadius: "15px",
  //   padding: "20px",
  //   position: "relative",
  //   left: "26%",
  //   top: "39%",
  // },
  // Ccard3: {
  //   borderRadius: "15px",
  //   padding: "20px",
  //   position: "relative",
  //   left: "15%",
  //   top: "12%",
  // },
  // Ccard4: {
  //   borderRadius: "15px",
  //   padding: "20px",
  //   position: "relative",
  //   top: "26%",
  //   left: "-8%",
  // },
  // Ccard5: {
  //   borderRadius: "15px",
  //   padding: "20px",
  //   position: "relative",
  //   top: "-20%",
  //   left: "-34%",
  // },
  // Ccard6: {
  //   borderRadius: "15px",
  //   padding: "20px",
  //   position: "relative",
  //   top: "-50%",
  //   left: "460%",
  // },
  sphereCollection: {
    height: "260px",
    width: "260px",
    position: "relative",
    left: "77%",
    top: "466%",
  },
  bgSphere: {
    height: "170px",
    width: "170px",
    position: "relative",
    left: "7%",
  },
  Wimage: {
    height: "320px",
    width: "320px",
  },
  WhitepaperCard: {
    padding: "32px",
    height: "570px",
  },
  footer: {
    backgroundImage: `url(${footer})`,
    height: "550px",
    backgroundColor: "#070517",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    marginTop: "-4px",
  },
  input: {
    color: "#fff",
  },
  NewStaking: {
    // background:linear-gradient
    backgroundColor: "#04212B",
  },
}));
export default useStyles;
