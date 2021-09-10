import { createTheme, makeStyles } from "@material-ui/core";
const theme = createTheme();

const useStyles = makeStyles({
  containermt: {
    marginTop: 30,
  },
  card: {
    padding: 30,
  },
  avatar: {
    backgroundColor: "#c79316",
    width: 80,
    height: 80,
  },
  icon: {
    fontSize: 60,
  },
  form: {
    marginTop: 40,
    marginBottom: 10,
  },
  gridmb: {
    marginBottom: 20,
  },
  link: {
    marginTop: 8,
    fontSize: "1.1rem",
    fontFamily: "Roboto",
    lineHeight: 1.5,
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  appBar: {
    paddingTop: 0,
    paddingBottom: 0,
    background: "linear-gradient(20deg, #2E52F8,#56A7F2 )",
    position: "static",
  },
  grow: {
    flexGrow: 0,
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
    },
  },
  linkAppBarLogo: {
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    textDecoration: "none",
  },
  mr: {
    marginRight: 3,
  },
  mr2: {
    marginRight: 10,
    color: "#1890FF",
    marginBottom: 10,
    boxShadow: "0 0 3px gray",
    fontSize: 35,
    height: "100%",
  },
  buttonIcon: {
    fontSize: 14,
    padding: 0,
  },
  linkAppBarDesktop: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 16px",
    color: "inherit",
    textDecoration: "none",
  },
  linkAppBarDesktopSelected: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 16px",
    color: "inherit",
    background: "#5674FA",

    borderRadius: 5,
    textDecoration: "none",
  },
  linkDivisiones: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 16px",
    color: "#378fee",
    borderBottom: "1px solid #378fee",
  },
  list: {
    width: 250,
  },
  listItem: {
    padding: 0,
  },
  linkAppBarMobile: {
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    padding: "8px 16px",
    color: "inherit",
    textDecoration: "none",
  },
  listItemIcon: {
    minWidth: 35,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  textLogo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 700,
    marginRight: 20,
    fontFamily: "Roboto Slab",
  },
  textNavBar: {
    color: "#fff",
    fontSize: 16,
  },
  tabsNav: {
    display: "inline-flex",
  },
  linkAppBarDesktopUnique: {
    backgroundColor: "#fff",
    color: "black",
    fontSize: 20,
    padding: "0px 10px",
    fontWeight: 900,
    fontFamily: "Roboto Slab",
    marginTop: 5,
  },
  mainPage: {
    width: "90%",
    padding: 0,
  },
  selector: {
    display: "inline-flex",
    flexGrow: 0,
  },
  textField: {
    marginRight: 20,
    height: 0,
  },
  organizationText: {
    marginTop: 25,
    paddingTop: 10,
  },
});

export default useStyles;
