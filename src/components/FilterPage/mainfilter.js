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
import { theme2 } from "./themeForFilterPage";
import Mapbox from "../GenerateMap";
import { Link } from "react-router-dom";

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
      <div>
        <div className="filterbarwhole">
          <ThemeProvider theme={theme2}>
            <Link className="link" to="/">
              <img
                src="image/icon/page2logo.png"
                className="filter-img-logo"
                alt="logo"
              />
            </Link>
            <div className="home-filter-container filterPage">
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
                    style={{
                      width: "8rem",
                    }}
                    variant="outlined"
                    placeholder="Suburb"
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
                      // borderRight: "solid 4px #cdced1",
                    }}
                    variant="outlined"
                    placeholder="Bed & Bath"
                  />
                )}
              />

              {/* <Autocomplete
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
                        backgroundColor: "white",
                        width: "6rem",
                      }}
                      variant="outlined"
                      placeholder="More"
                    />
                  )}
                /> */}

              <button className="btn filter-search" onClick={searchOnClick}>
                Search
              </button>

              <p className="popular">Popular Filters</p>
              <div className="filter-btn-group">
                <button>Furnished</button>
                <button>Parking</button>
                <button>Washer</button>
                <button>A/C</button>
                <button>Pet Friendly</button>
                <button>More</button>
                <button>Sort</button>
              </div>
            </div>
            <img
              src="image/icon/PAGE2login.png"
              className="filter-img-login"
              alt="user"
            />
          </ThemeProvider>
        </div>
        <hr
          style={{
            border: "2px solid #c12141",
            backgroundColor: "#c12141",
            width: "96.5%",
            marginTop: "0.8rem",
            marginBottom: "3rem",
          }}
        ></hr>
        <div className="filter-show-container">
          <div className="display_response">
            {searchData.map((response) => (
              <div className="each_resp">
                <ThemeProvider theme={theme2}>
                  <Card
                    sx={{ maxWidth: 320 }}
                    style={{ marginBottom: "1.5rem" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={response.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography>{response.address}</Typography>
                        <Typography
                          style={{ fontWeight: "bold", display: "flex" }}
                        >
                          {response.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {response.home_type}
                        </Typography>
                      </CardContent>
                      <div
                        className="cardicons"
                        style={{
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                        }}
                      >
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
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        style={{ padding: "0.5rem", fontWeight: "bold" }}
                      >
                        {response.suburb}
                      </Typography>
                    </CardActionArea>
                  </Card>
                </ThemeProvider>
              </div>
            ))}
          </div>

          <div className="map">
            <Mapbox />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
