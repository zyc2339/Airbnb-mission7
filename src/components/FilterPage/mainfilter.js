import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PetsIcon from '@mui/icons-material/Pets';
import ParkIcon from '@mui/icons-material/Park';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Mapbox from '../GenerateMap';
import FilterInHomePage from "../HomePage/FilterInHomePage.js";
import Footer from '../Footer'
import Header from '../Header'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const suburbs = [
  "Any",
  "Albany",
  "Epsom",
  "Howick",
  "Parnell",
  "Flat Bush",
  "CBD",
];

const houseTypes = [
  "Any",
  "House",
  "Apartment",
  "Terraced House",
  "Units",
  "Duplex",
];

function valuetext(slidervalue) {
  return `${slidervalue}°C`;
}

export default function Mainfilter() {
  const [slidervalue, setsliderValue] = useState([0, 1000]);
  const [suburb, setsuburb] = useState([]);
  const [housetype, sethousetype] = useState([]);

  const [backendresult, setbackendresult] = useState([]);

  const [filteredresult, setfilteredresult] = useState([]);

  const [finalresult, setfinalresult] = useState([]);

  const handleChangeSlide = (event, newsliderValue) => {
    setsliderValue(newsliderValue);
  };

  const handleChangeSuburb = (event) => {
    const {
      target: { value },
    } = event;
    setsuburb(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );

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

  const finalarray = () => {
    setfinalresult(filteredresult.concat(finalresult));
  };

  const handleChangeHouseType = (event) => {
    const {
      target: { value },
    } = event;
    sethousetype(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
        console.log(json);
        setbackendresult(json);
      });
  }, []);

  useEffect(() => {
    console.log(filteredresult);
    console.log(suburb);
    console.log(finalresult);
  });

  return (
    <div >
      <Header />
      <FilterInHomePage />
      <div className="filterpgwhole">
      <div>
      <div className="filterbarwhole">
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Suburbs</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={suburb}
            onChange={handleChangeSuburb}
            input={<OutlinedInput label="Suburbs" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {suburbs.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={suburb.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Home Type</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={housetype}
            onChange={handleChangeHouseType}
            input={<OutlinedInput label="House Type" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {houseTypes.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={housetype.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <Box sx={{ width: 250 }}>
          <Slider
            value={slidervalue}
            onChange={handleChangeSlide}
            getAriaValueText={valuetext}
            max={1000}
          />
        </Box>
      </div>

      <Button variant="contained" onClick={finalarray} sx={{height:35}}>
        Search
      </Button>
      </div>        
      <div className="display_response">
        {finalresult.map((response) => (
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
                <Typography>
                  {response.address}
                </Typography>
                <Typography>
                  {response.price}
                </Typography>
                <Typography>
                  {response.home_type}
                </Typography>
              </CardContent>
              <div className="cardicons">
              <div className="bedbathparkicons">
              <BedIcon />{response.bed}
              <BathtubIcon />{response.bath}
              <DirectionsCarIcon />{response.park}
              </div>
              <div>
              
              <PetsIcon />{response.pet}
              <ShoppingCartIcon />{response.shop}
              <ParkIcon />{response.tree}
              <RestaurantIcon />{response.food}
              
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
