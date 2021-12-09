import { createTheme, ThemeProvider } from "@mui/material/styles";

const font = '"Roboto", sans-serif';

export const theme2 = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#c02141",
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
        root: {
          fontFamily: font,
          maxHeight: "15rem",
          color: "white",
          backgroundColor: "#6f747b",

          //   borderRight: "1px solid black",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          maxHeight: "15rem",
        },
        popper: {
          height: "500px",
        },
        listbox: {
          width: "100%",
        },
        paper: {
          fontSize: "1rem",
          lineHeight: "1",
          minHeight: "30px",
          width: "228px",
          //   fontWeight: "bold",
        },
        option: {
          fontFamily: font,
          fontWeight: "bold",
          paddingLeft: "1px",
          maxHeight: "30px",
          fontSize: "0.8rem",
          position: "relative",
          right: "1rem",
          maxWidth: "16rem",
        },
        input: {
          fontWeight: "bold",
          paddingLeft: "1rem",
          opacity: 1,
          height: "1.3rem",
          fontSize: "0.8rem",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "1px",
          left: "10rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          marginRight: "2rem",
        },
      },
    },
  },
});

export default function ThemePractice() {
  return (
    <div className="theme-background">
      <ThemeProvider theme={theme2}>abc</ThemeProvider>
    </div>
  );
}
