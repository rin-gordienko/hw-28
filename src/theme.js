import { createTheme } from "@mui/material/styles";

import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/400.css";


const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#605DEC",
      lineHeight: "33px",
      marginBottom: "16px",
      marginTop: "20px",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#6E7491",
      lineHeight: "25px",
      marginBottom: "24px",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 400,
      color: "#7C8DB0",
      lineHeight: "25px",
      marginBottom: "36px",
    },
  },

  palette: {
    primary: {
      main: "#605DEC",
    },
  },
  components: {
    //     MuiButtonBase: {
    //       defaultProps: {
    //         disableRipple: true,
    //       },
    //     },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          marginTop: "40px",
        },
      },
    },
  },
});

export default theme;