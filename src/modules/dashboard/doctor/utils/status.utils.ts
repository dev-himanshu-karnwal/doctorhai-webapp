/**
 * Calculates the expected return time in ISO format based on requested minutes.
 */
export const calculateExpectedAtISO = (
  expectedAt: string | undefined
): string | null => {
  if (!expectedAt) return null;

  const minutes = parseInt(expectedAt.replace("m", ""), 10);
  if (isNaN(minutes)) return null;

  const expectedAtDate = new Date();
  expectedAtDate.setMinutes(expectedAtDate.getMinutes() + minutes);
  return expectedAtDate.toISOString();
};
