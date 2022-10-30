export default (theme) => ({
  appBar: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    padding: "0 20px",
  },
  appBarScrolled: {
    backgroundColor: "#04212b !important",
    // borderBottom: "1px solid #ededed",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    outerWidth: "100%",
  },
  appBarScrolledMenu: {
    color: "#fff !important",
    // borderBottom: "1px solid #ededed",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarLogo: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
});
