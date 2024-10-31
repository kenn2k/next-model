"use client";

import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],

  display: "swap",
});

declare module "@mui/material/Pagination" {
  interface PaginationPropsColorOverrides {
    info: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#343A40",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#FF881A",
    },
    secondary: {
      main: "#FFD231",
    },
    success: {
      main: "#4886FF",
    },
    info: {
      main: "#343A40",
    },
    error: {
      main: "#FFF1C2",
    },
  },
});

export default theme;
