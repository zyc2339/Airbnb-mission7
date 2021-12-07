import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Popper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const theme = createTheme({
  //   palette: {
  //     type: "light",
  //     primary: {
  //       main: "#ffffff",
  //     },
  //     secondary: {
  //       main: "#c02141",
  //     },
  //   },

  components: {
    // Name of the component

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
        root: {
          width: "8rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",

          borderRadius: "20px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          top: "2rem",
          backgroundColor: "yellow",
        },
        listbox: {
          //   border: "1px solid green",
        },
        paper: {
          backgroundColor: "red",
          fontSize: "1rem",
          lineHeight: "1",
          height: "300px",
          //   fontWeight: "bold",
        },
        option: {
          padding: "0.8rem 0",
          maxHeight: "20px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          left: "12.5rem",
        },
      },
    },
  },
});

const PopperMy = function (props) {
  return (
    <Popper
      {...props}
      style={{ width: 250, height: 500, position: "relative" }}
    />
  );
};
const ListMy = function (props) {
  return <ul {...props} style={{ width: 250, height: 350 }} />;
};
const suburb = [
  { label: "Auckland Districts: Any  ", value: 1 },
  { label: "CBD", value: 2 },
  { label: "Central", value: 3 },
  { label: "Waitakere", value: 4 },
  { label: "East Tamaki", value: 5 },
  { label: "Hauraki Gulf", value: 6 },
  { label: "Manukau City", value: 7 },
  { label: "Papakura", value: 8 },
  { label: "Franklin", value: 9 },
  { label: "Northshore", value: 10 },
  { label: "Rodney", value: 11 },
  { label: "Wellsford", value: 12 },
];
export default function ThemePractice() {
  //   const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Autocomplete
          size="small"
          id="filter-checkboxes-suburb"
          options={suburb}
          open="true"
          disableCloseOnSelect
          PopperComponent={PopperMy}
          ListboxComponent={ListMy}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                // icon={icon}
                // checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.label}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder="Suburb" />
          )}
        />
      </ThemeProvider>
    </div>
  );
}
