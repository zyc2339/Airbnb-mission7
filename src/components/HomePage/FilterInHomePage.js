import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

// import { useState } from "react";

// const useStyles = makeStyles({

//   TextField: {
//     fontFamily: "Roboto",
//     color: "white",
//     backgroundColor: "white",
//     "&:hover": {
//       //
//     },
//   },
// });
const PopperMy = function (props) {
  return <Popper {...props} style={{ width: 280, height: 300 }} />;
};
const ListMy = function (props) {
  return (
    <ul
      {...props}
      style={{
        width: 280,
        minHeight: 300,

        border: "1px solid black",
      }}
      placement="bottom-start"
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

// const price = [
//   { label: "$0-$100", value: 1 },
//   { label: "$100-$200", value: 2 },
//   { label: "$300-$400", value: 3 },
// ];
export default function FilterInHomePage() {
  //   const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="home-filter">
        <div className="home-filter-container">
          <Autocomplete
            multiple
            size="small"
            id="filter-checkboxes-suburb"
            options={suburb}
            open="true"
            // openOnFocus={true}
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
              <TextField
                {...params}
                variant="outlined"
                placeholder="Suburb"
                //   InputProps={{ className: "textfield__label" }}
              />
            )}
          />

          <select>
            <option>Home Type</option>
            <option>q</option>
            <option>q</option>
            <option>q</option>
          </select>

          <select>
            <option>Bed & Bath</option>
            <option>q</option>
            <option>q</option>
            <option>q</option>
          </select>
          <select>
            <option>More</option>
            <option>q</option>
            <option>q</option>
            <option>q</option>
          </select>
          <Link className="link" to="/find">
            <button className="btn btn-search">Search</button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
