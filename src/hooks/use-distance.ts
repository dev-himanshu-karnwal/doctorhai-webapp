import { useMemo } from "react";
import { getDistance } from "geolib";
import { useCurrentLocation } from "./use-current-location";

interface Location {
  latitude?: number;
  longitude?: number;
}

export function useDistance(targetLocation: Location | undefined | null) {
  const { location: userLocation } = useCurrentLocation();

  return useMemo(() => {
    if (userLocation && targetLocation?.latitude && targetLocation?.longitude) {
      const distanceInMeters = getDistance(
        { latitude: userLocation.latitude, longitude: userLocation.longitude },
        {
          latitude: targetLocation.latitude,
          longitude: targetLocation.longitude,
        }
      );
      const distanceInKm = (distanceInMeters / 1000).toFixed(1);
      return `${distanceInKm}km away`;
    }
    return "";
  }, [userLocation, targetLocation?.latitude, targetLocation?.longitude]);
}
