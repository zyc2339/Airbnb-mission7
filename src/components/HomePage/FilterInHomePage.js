import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper } from "@mui/material";
import { theme } from "./theme";
import { suburb, price, homeType, more } from "./FilterOption";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";

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

export default function FilterInHomePage(props) {
  const [suburbArray, setSuburbArray] = useState([]);
  const [backendData, setBackendData] = useState([]);
  const [filteredSuburbData, setFilteredSuburbData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const handleSuburbChange = (event, value) => {
    setSuburbArray(Array.from(value, (x) => x.label));
    // getBackendResult();

    if (Array.from(value, (x) => x.label).includes("Albany")) {
      setFilteredSuburbData(
        backendData.filter((listing) => listing.suburb === "Albany")
      );
    } else if (Array.from(value, (x) => x.label).includes("Epsom")) {
      setFilteredSuburbData(
        backendData.filter((listing) => listing.suburb === "Epsom")
      );
    } else if (Array.from(value, (x) => x.label).includes("Parnell")) {
      setFilteredSuburbData(
        backendData.filter((listing) => listing.suburb === "Parnell")
      );
    } else if (Array.from(value, (x) => x.label).includes("CBD")) {
      setFilteredSuburbData(
        backendData.filter((listing) => listing.suburb === "CBD")
      );
    } else if (Array.from(value, (x) => x.label).includes("Howick")) {
      setFilteredSuburbData(
        backendData.filter((listing) => listing.suburb === "Howick")
      );
    } else if (Array.from(value, (x) => x.label).includes("Flat Bush")) {
      setFilteredSuburbData(
        backendData.filter((listing) => listing.suburb === "Flat Bush")
      );
    }
  };

  const searchOnClick = () => {
    setSearchData(filteredSuburbData.concat(searchData));
  };

  useEffect(() => {
    fetch("https://sleepy-brook-55036.herokuapp.com/results", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      .then((json) => {
        setBackendData(json);
      });
  }, []);
  useEffect(() => {
    console.log(filteredSuburbData);
    console.log(suburbArray);
  });

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
            onChange={handleSuburbChange}
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
            <button className="btn btn-search" onClick={searchOnClick}>
              Search
            </button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
