export function printMultiples(base, times) {
  const result = new Array(times);
  for (let i = 0; i < times; i++) {
    result[i] = base * (i + 1);
  }
  return result;
}
