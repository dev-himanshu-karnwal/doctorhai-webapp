import { useMemo } from "react";
import { getDistance } from "geolib";
import { useCurrentLocation } from "./use-current-location";

interface Location {
  latitude?: number;
  longitude?: number;
}

export function useDistance(targetLocation: Location | undefined | null) {
  const { location: userLocation } = useCurrentLocation();
  const lat = targetLocation?.latitude;
  const lon = targetLocation?.longitude;

  return useMemo(() => {
    if (userLocation && lat && lon) {
      const distanceInMeters = getDistance(
        { latitude: userLocation.latitude, longitude: userLocation.longitude },
        {
          latitude: lat,
          longitude: lon,
        }
      );
      const distanceInKm = (distanceInMeters / 1000).toFixed(1);
      return `${distanceInKm}km away`;
    }
    return "";
  }, [userLocation, lat, lon]);
}
