import { useEffect, useState } from "react";

function getCurrentLocation() {
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  });
  return new Promise((resolve) => {
    resolve(location);
  });
}
module.exports = getCurrentLocation;
