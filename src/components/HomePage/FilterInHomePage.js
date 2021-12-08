import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper } from "@mui/material";
import { theme } from "./theme";
import { suburb, price, homeType, more } from "./FilterOption";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
  return (
    <ThemeProvider theme={theme}>
      <div className="home-filter">
        <div className="home-filter-container">
          <Autocomplete
            multiple
            size="small"
            id="filter-checkboxes-suburb"
            options={suburb}
            // open="true"
            // openOnFocus={true}
            disableCloseOnSelect
            limitTags={3}
            PopperComponent={PopperMy}
            ListboxComponent={ListSuburb}
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
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ width: "8rem" }}
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
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ width: "8rem" }}
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
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ width: "8rem" }}
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
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ width: "6rem" }}
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
