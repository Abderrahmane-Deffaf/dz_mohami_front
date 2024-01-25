import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import useGeolocation from "./useGeolocation";
// eslint-disable-next-line import/no-unresolved
import { api_key } from "@/lib/constants";
import { useEffect } from "react";

const Location = ({form}) => {
  const { latitude, longitude, error } = useGeolocation();
  console.log(latitude, longitude)
  useEffect(()=> {
    form.setValue("long", longitude);
    form.setValue("lat", latitude);
  }, [longitude, latitude])
  
  return (
    <div>
      <APIProvider apiKey={api_key}>
        <div className=" w-full h-[10rem] rounded-lg overflow-hidden">
          <Map
            zoom={19}
            center={{ lat: latitude, lng: longitude }}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
          {/* <AdvancedMarker
            position={{ lat: latitude, lng: longitude }}
          ></AdvancedMarker> */}
        </div>
      </APIProvider>
    </div>
  );
};

export default Location;
