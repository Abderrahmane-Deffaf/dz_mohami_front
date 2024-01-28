import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import { api_key } from "@/lib/constants";
import { useContext, useEffect } from "react";
import { locationContext } from "./Location";

const GeoCoder = () => {
  const {setLong, setLat, long, lat} = useContext(locationContext) ; 

  const mapboxgeo = new MapboxGeocoder({
    accessToken: api_key,
    marker: false,
    collapsed: true,
  });
  useControl(() => mapboxgeo);
  
  mapboxgeo.on("result", (e) => {
    const coords = e.result.geometry.coordinates;
    setLong(coords[0]);
    setLat(coords[1]);
    console.log(e.result) ; 

    console.log(coords);
  });
  return null;
};

export default GeoCoder;
