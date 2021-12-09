import React, { useEffect, useRef, useCallback, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import Button from "@mui/material/Button";

const GenerateMap = () => {
  const map = useRef(null);
  const mapContainerRef = useRef(null);
  mapboxgl.accessToken =
    "pk.eyJ1IjoienljMjMzOSIsImEiOiJja3d5ZHUza2kwazR6MnZranVsNDE3Y290In0.ALxBap2W2FSphrwxYucgzQ"; //process.env.MAPBOX_KEY;

  //console.log(props.pass_array[0].address)
  const [address_test, setaddress_test] = useState("5 philadelphia avenue");

  const handleClick = () => {
    if (address_test === "5 philadelphia avenue") {
      setaddress_test("20 waihou cres");
    } else if (address_test === "20 waihou cres") {
      setaddress_test("94 Naples Way");
    } else if (address_test === "94 Naples Way") {
      setaddress_test("6 New Dawn Lane");
    } else if (address_test === "6 New Dawn Lane") {
      setaddress_test("25 Wharf Road");
    } else if (address_test === "25 Wharf Road") {
      setaddress_test("38 Paikea Street");
    }
  };
  const fetchData = useCallback(() => {
    const geocodingClient = mbxGeocoding({
      accessToken: mapboxgl.accessToken,
    });

    // geocoding with countries
    return geocodingClient
      .forwardGeocode({
        query: address_test,
        countries: ["nz"],
        limit: 2,
      })
      .send()
      .then((response) => {
        const match = response.body;
        const coordinates = match.features[0].geometry.coordinates;
        const placeName = match.features[0].place_name;
        const center = match.features[0].center;

        return {
          type: "Feature",
          center: center,
          geometry: {
            type: "Point",
            coordinates: coordinates,
          },
          properties: {
            description: placeName,
          },
        };
      });
  }, [address_test]);

  useEffect(() => {
    if (map.current) return; // Checks if there's an already existing map initialised.

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 9,
      center: [174.9254161175582, -37.08668060536377],
    });

    // clean up on unmount
    return () => map.current.remove();
  }, []);

  useEffect(() => {
    if (!map.current) return; // Waits for the map to initialise

    const results = fetchData();

    results.then((marker) => {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML("<p>" + marker.properties.description + "</p>")
        )
        .addTo(map.current);

      map.current.on("load", async () => {
        map.current.flyTo({
          center: marker.center,
        });
      });
    });
  }, [fetchData]);

  return (
    <div>
      <div ref={mapContainerRef} className="map-container" />
      <Button variant="contained" onClick={handleClick}>
        Next
      </Button>
    </div>
  );
};

export default GenerateMap;
