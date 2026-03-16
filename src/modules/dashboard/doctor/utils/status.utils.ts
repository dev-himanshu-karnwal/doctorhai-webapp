/**
 * Calculates the expected return time as an ISO string based on requested minutes.
 * Handles both relative time ("5m") and existing ISO strings.
 */
export const calculateExpectedAtISO = (
  expectedAt: string | undefined
): string | null => {
  if (!expectedAt || expectedAt.trim() === "") return null;

  // If it's already an ISO string, return it as is
  if (expectedAt.includes("T")) {
    try {
      return new Date(expectedAt).toISOString();
    } catch {
      return null;
    }
  }

  // Handle minutes (e.g., "5m")
  const minutes = parseInt(expectedAt.replace("m", ""), 10);
  if (!isNaN(minutes)) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minutes);
    // Ensure seconds and milliseconds are 0 to make it cleaner
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.toISOString();
  }

  // Handle other date strings
  try {
    const parsed = new Date(expectedAt);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  } catch {
    // ignore
  }

  return null;
};
