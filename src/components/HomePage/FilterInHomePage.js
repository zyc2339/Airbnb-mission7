import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper, Box, Chip } from "@mui/material";
import { theme } from "./theme";
import { suburb, price, homeType, more } from "./FilterOption";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const PopperMy = function (props) {
  return <Popper {...props} style={{ width: 228, height: 380 }} />;
};
const ListSuburb = function (props) {
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
const ListOther = function (props) {
  return (
    <ul
      {...props}
      style={{
        width: 228,
        minHeight: 220,
      }}
    />
  );
};

export default function FilterInHomePage() {
  const [value, setValue] = useState([]);
  const onDelete = (title) => () => {
    setValue((value) => value.filter((v) => v.title !== title));
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="home-filter">
        <div className="home-filter-container">
          <Autocomplete
            multiple
            size="small"
            id="filter-checkboxes-suburb"
            options={suburb}
            disableCloseOnSelect
            limitTags={3}
            PopperComponent={PopperMy}
            ListboxComponent={ListSuburb}
            renderTags={() => null}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                style={{ width: "16rem" }}
                variant="outlined"
                placeholder="Where would you like to live?"
              />
            )}
          />

          <Autocomplete
            multiple
            size="small"
            id="filter-checkboxes-suburb"
            options={price}
            limitTags={1}
            disableCloseOnSelect
            PopperComponent={PopperMy}
            ListboxComponent={ListOther}
            getOptionLabel={(option) => option.label}
            renderTags={() => null}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{
                  width: "8rem",
                  borderLeft: "rgb(143, 139, 139) solid 2px",
                }}
                variant="outlined"
                placeholder="Price"
              />
            )}
          />

          <Autocomplete
            multiple
            size="small"
            id="filter-checkboxes-suburb"
            options={homeType}
            limitTags={1}
            disableCloseOnSelect
            PopperComponent={PopperMy}
            ListboxComponent={ListOther}
            getOptionLabel={(option) => option.label}
            renderTags={() => null}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{
                  width: "8rem",
                  borderLeft: "rgb(143, 139, 139) solid 2px",
                }}
                variant="outlined"
                placeholder="Home Type"
              />
            )}
          />

          <Autocomplete
            multiple
            size="small"
            id="filter-checkboxes-suburb"
            options={price}
            limitTags={1}
            disableCloseOnSelect
            PopperComponent={PopperMy}
            ListboxComponent={ListOther}
            getOptionLabel={(option) => option.label}
            renderTags={() => null}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{
                  width: "8rem",
                  borderLeft: "rgb(143, 139, 139) solid 2px",
                }}
                variant="outlined"
                placeholder="Bed & Bath"
              />
            )}
          />

          <Autocomplete
            multiple
            size="small"
            id="filter-checkboxes-suburb"
            options={more}
            disableCloseOnSelect
            limitTags={1}
            PopperComponent={PopperMy}
            ListboxComponent={ListOther}
            getOptionLabel={(option) => option.label}
            renderTags={() => null}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{
                  width: "6rem",
                  borderLeft: "rgb(143, 139, 139) solid 2px",
                }}
                variant="outlined"
                placeholder="More"
              />
            )}
          />

          <Link className="link" to="/find">
            <button className="btn btn-search">Search</button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
