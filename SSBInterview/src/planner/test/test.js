import roadmap from "../roadmap.mjs";

const result = roadmap();
console.log(result.length);        // 23
console.log(result[0].group);      // algebra
console.log(result[22].group);     // IntegralCalculus
function getLevelStatuses(levels, finishedIds) {
  const furthestDone = Math.max(
    -1,
    ...finishedIds.map((id) => levels.findIndex((l) => l.id === id))
  );

  return levels.map((level, index) => {
    if (finishedIds.includes(level.id)) {
      return { ...level, status: "completed" };
    }
    if (index === furthestDone + 1) {
      return { ...level, status: "current" };
    }
    if (index < furthestDone) {
      return { ...level, status: "open" };
    }
    return { ...level, status: "locked" };
  });
}

const levels = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

console.log(getLevelStatuses(levels, []));
console.log(getLevelStatuses(levels, [1, 2]));
console.log(getLevelStatuses(levels, [3, 4]));