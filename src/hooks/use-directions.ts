export function useDirections() {
  const getDirections = (latitude?: number, longitude?: number) => {
    if (latitude && longitude) {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
        "_blank"
      );
    }
  };

  return { getDirections };
}
