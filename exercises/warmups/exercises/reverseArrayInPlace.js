export function reverseArrayInPlace(list) {
  const midpoint = Math.floor(list.length / 2);
  for (let i = 0; i < midpoint; i++) {
    const oppositeIndex = list.length - 1 - i;
    const temp = list[i];
    list[i] = list[oppositeIndex];
    list[oppositeIndex] = temp;
  }
  return list;
}
