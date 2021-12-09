import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper, Card } from "@mui/material";
import { suburb, price, homeType, more } from "../HomePage/FilterOption";
import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PetsIcon from "@mui/icons-material/Pets";
import ParkIcon from "@mui/icons-material/Park";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { theme } from "../HomePage/theme";
import Mapbox from "../GenerateMap";

import Footer from "../Footer";

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
export default function Mainfilter() {
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
    <div className="filterpgwhole">
      <div className="filterbarwhole">
        <div>
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

                <button className="btn btn-search" onClick={searchOnClick}>
                  Search
                </button>
              </div>
            </div>
          </ThemeProvider>

          <div className="display_response">
            {searchData.map((response) => (
              <div className="each_resp">
                <Card sx={{ maxWidth: 270 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={response.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {response.suburb}
                      </Typography>
                      <Typography>{response.address}</Typography>
                      <Typography>{response.price}</Typography>
                      <Typography>{response.home_type}</Typography>
                    </CardContent>
                    <div className="cardicons">
                      <div className="bedbathparkicons">
                        <BedIcon />
                        {response.bed}
                        <BathtubIcon />
                        {response.bath}
                        <DirectionsCarIcon />
                        {response.park}
                      </div>
                      <div>
                        <PetsIcon />
                        {response.pet}
                        <ShoppingCartIcon />
                        {response.shop}
                        <ParkIcon />
                        {response.tree}
                        <RestaurantIcon />
                        {response.food}
                      </div>
                    </div>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="map">
          <Mapbox />
        </div>
      </div>
      <Footer />
    </div>
  );
}
