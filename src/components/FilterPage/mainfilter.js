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
    fetch("http://localhost:3131/results", {
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
    <div>
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

      <Button variant="contained" onClick={finalarray}>
        Search
      </Button>

      <div>
        <Box sx={{ width: 300 }}>
          <Slider
            value={slidervalue}
            onChange={handleChangeSlide}
            getAriaValueText={valuetext}
            max={1000}
          />
        </Box>
      </div>

      <div className="display_response">
        {finalresult.map((response) => (
          <div className="each_resp">
            <p>{response._id}</p>
            <p>{response.suburb}</p>
            <p>{response.home_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
