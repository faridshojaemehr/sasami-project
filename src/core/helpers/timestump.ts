export function convertToTimestamp(
  start: Date,
  end: Date,
  createdAt: Date,
): { start: number; end: number; createdAt: number } {
  const startTimestamp = new Date(start).getTime();
  const endTimestamp = new Date(end).getTime();
  const createdAtTimestamp = new Date(createdAt).getTime();

  return {
    start: startTimestamp,
    end: endTimestamp,
    createdAt: createdAtTimestamp,
  };
}
