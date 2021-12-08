import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper } from "@mui/material";
import { theme } from "./theme";
import { suburb, price, homeType, more } from "./FilterOption";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
// import { useState } from "react";

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
<<<<<<< HEAD
  // const [value, setValue] = useState([]);

  const [suburbValue, setsuburb] = useState([]);

  const [backendresult, setbackendresult] = useState([]);

  const [filteredresult, setfilteredresult] = useState([]);

  const [finalresult, setfinalresult] = useState([]);

  const handleChangeSuburb = (event) => {
    // (e) => console.log(e.target.value)
    const {
      target: { value },
    } = event;

    console.log(value);
    setsuburb(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(suburbValue);

    if (event.target.value.includes("Albany")) {
      setfilteredresult(
        backendresult.filter((listing) => listing.suburb === "Albany")
      );
    } else if (event.target.value.includes("Epsom")) {
      setfilteredresult(
        backendresult.filter((listing) => listing.suburb === "Epsom")
      );
    } else if (event.target.value.includes("Parnell")) {
      setfilteredresult(
        backendresult.filter((listing) => listing.suburb === "Parnell")
      );
    } else if (event.target.value.includes("CBD")) {
      setfilteredresult(
        backendresult.filter((listing) => listing.suburb === "CBD")
      );
    } else if (event.target.value.includes("Howick")) {
      setfilteredresult(
        backendresult.filter((listing) => listing.suburb === "Howick")
      );
    } else if (event.target.value.includes("Flat Bush")) {
      setfilteredresult(
        backendresult.filter((listing) => listing.suburb === "Flat Bush")
      );
    }
  };
=======
>>>>>>> main
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
            value={suburbValue}
            onChange={handleChangeSuburb}
            PopperComponent={PopperMy}
            ListboxComponent={ListSuburb}
            renderTags={() => null}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  style={{ marginRight: 8 }}
                  checked={selected}
                  value={option.label}
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
