// Helper function to safely execute functions that might throw errors
export const safeExecute = <T>(fn: () => T, fallback: T): T => {
  try {
    return fn();
  } catch (error) {
    console.error("Error in safeExecute:", error);
    return fallback;
  }
};

// Helper for safely mapping arrays where item processing might fail
export const safeMap = <T, R>(
  items: T[] | undefined | null,
  mapFn: (item: T, index: number) => R,
  fallback: R[] = [],
): R[] => {
  if (!items) return fallback;

  return items
    .map((item, index) => {
      try {
        return mapFn(item, index);
      } catch (error) {
        console.error(`Error mapping item at index ${index}:`, error);
        // Return undefined or some fallback for this specific item
        return undefined as unknown as R;
      }
    })
    .filter((item): item is R => item !== undefined);
};