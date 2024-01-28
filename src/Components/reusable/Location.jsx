import useGeolocation from "./useGeolocation";
import { api_key } from "@/lib/constants";
import { createContext, useEffect, useState } from "react";
import ReactMapGl, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import GeoCoder from "./GeoCoder";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

setKey("AIzaSyCeakuq90M--d11LTVwdqCTo2wQtVstYsM");

export const locationContext = createContext();

const Location = ({ form }) => {
  const { latitude, longitude, error } = useGeolocation();
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  console.log(latitude, longitude);
  // setting it initialy
  useEffect(() => {
    setLong(longitude);
    setLat(latitude);
  }, [longitude, latitude]);

  // further setting
  useEffect(() => {
    console.log(long, lat);
    console.log("changed");
    form.setValue("longitude", long);
    form.setValue("latitude", lat);
    console.log(form.getValues("long"), form.getValues("lat"));

    fromLatLng(lat, long)
      .then(({ results }) => {
        console.log(results);

        const address = results[0]?.formatted_address;
        console.log(address);

        if (address)
          form.setValue("address", address, { shouldValidate: true });

        const addressComp = results[0]?.address_components;

        if (addressComp) {
          const wilayaObj = addressComp?.find((comp) =>
            comp.types.includes("administrative_area_level_1")
          );
          if (wilayaObj) {
            const { short_name } = wilayaObj;
            if (short_name) {
              const wilaya = short_name
                .replace("Wilaya", "")
                .replace("de", "")
                .trim()
                .toLowerCase();
              console.log(wilaya);
              form.setValue("wilaya", wilaya, { shouldValidate: true });
            }
          }
        }
      })
      .catch(console.error);
  }, [lat, long]);

  return (
    <locationContext.Provider value={{ setLat, setLong, long, lat }}>
      <div className="w-[100%] h-60">
        <ReactMapGl
          initialViewState={{ latitude: lat, longitude: long }}
          mapboxAccessToken={api_key}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker
            latitude={lat}
            longitude={long}
            draggable
            onDragEnd={(e) => {
              console.log(e);
              setLat(e.lngLat.lat);
              setLong(e.lngLat.lng);
            }}
          />
          <NavigationControl position="bottom-right" />
          <GeolocateControl
            position="top-left"
            trackUserLocation
            onGeolocate={(e) => {
              console.log(e.coords.latitude, e.coords.longitude);
              setLat(e.coords.latitude);
              setLong(e.coords.longitude);
            }}
          />
          <GeoCoder />
        </ReactMapGl>
      </div>
    </locationContext.Provider>
  );
};

export default Location;
