import { createTheme } from "@mui/material/styles";


import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/400.css";


const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
    h1: {
      fontSize: "96px",
      fontWeight: 800,
      color: "#605DEC",
      lineHeight: "90px",
      marginTop: "85px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#605DEC",
      lineHeight: "33px",
      marginBottom: "16px",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 400,
      color: "#7C8DB0",
      lineHeight: "25px",
      marginBottom: "36px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#7C8DB0",
      lineHeight: "22px",
      marginRight: "36px",
      marginTop: "10px",
    },
  },

  palette: {
    primary: {
      main: "#605DEC",
    },
  },
  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          width: "95px",
          height: "48px",
          padding: "12px 20px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;