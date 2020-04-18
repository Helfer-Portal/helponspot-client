import { useState, useEffect } from "react";

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

export const usePosition = (
  permission = false,
  callback = (location) => {},
  watch = false,
  settings = defaultSettings
) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords, timestamp }) => {
    let location = { latitude: coords.latitude, longitude: coords.longitude };
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
    callback(location);
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!permission) {
      return;
    }
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [permission]);
  return { ...position, error, browserPermissionGranted: true };
};
