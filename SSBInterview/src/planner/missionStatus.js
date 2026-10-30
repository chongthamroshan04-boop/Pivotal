export function getMissionStatuses(missions, completedIds) {
  const furthestDone = Math.max(
    -1,
    ...completedIds.map((id) => missions.findIndex((m) => m.id === id))
  );

  return missions.map((mission, index) => {
    if (completedIds.includes(mission.id)) {
      return { ...mission, status: "completed" };
    }
    if (index === furthestDone + 1) {
      return { ...mission, status: "current" };
    }
    if (index < furthestDone) {
      return { ...mission, status: "open" };
    }
    return { ...mission, status: "locked" };
  });
}