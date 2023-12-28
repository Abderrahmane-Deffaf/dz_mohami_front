import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: 28.0339,
    longitude: 1.6596,
    error: null,
  });

  useEffect(() => {
    const handleSuccess = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const handleError = (error) => {
      setLocation({
        latitude: null,
        longitude: null,
        error: error.message,
      });
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );

    // You can also watch for changes in position using:
    // const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, options);

    // Don't forget to clear the watcher if needed:
    // return () => navigator.geolocation.clearWatch(watchId);
  }, []); // Empty dependency array to run the effect once on mount

  return location;
};

export default useGeolocation;
