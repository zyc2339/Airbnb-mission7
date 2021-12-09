import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Popper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Chip } from "@mui/material/";
import { useState } from "react";
const font = '"Roboto", sans-serif';

export const theme = createTheme({
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
        },
        tag: {
          height: "1rem",
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
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: font,
          fontSize: "0.5rem",
          fontWeight: "bold",
          //   maxHeight: "1rem",
        },
      },
    },
  },
});

const PopperMy = function (props) {
  return <Popper {...props} style={{ width: 228, height: 380 }} />;
};
const ListMy = function (props) {
  return (
    <ul
      {...props}
      style={{
        width: 228,
        minHeight: 380,
      }}
    />
  );
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
  const [value, setValue] = useState([]);
  const onDelete = (title) => () => {
    setValue((value) => value.filter((v) => v.title !== title));
  };
  //   const classes = useStyles();
  return (
    <div className="theme-background">
      <ThemeProvider theme={theme}>
        <div className="home-filter">
          <div className="home-filter-container">
            <Box>
              <Autocomplete
                multiple
                // limitTags={3}
                size="small"
                id="filter-checkboxes-suburb"
                options={suburb}
                // open="true"
                // openOnFocus={true}
                disableCloseOnSelect
                PopperComponent={PopperMy}
                ListboxComponent={ListMy}
                getOptionLabel={(option) => option.label}
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
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
                renderTags={() => null}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Where would you like to live?"
                    //   InputProps={{ className: "textfield__label" }}
                  />
                )}
              />{" "}
              <Box
                mt={3}
                sx={{
                  "& > :not(:last-child)": { mr: 1 },
                  "& > *": { mr: 1 },
                }}
              >
                {value.map((v) => (
                  <Chip
                    key={v.label}
                    label={v.label}
                    onDelete={onDelete(v.label)}
                  />
                ))}
              </Box>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
