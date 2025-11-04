export function countdown(start) {
  const result = new Array(start + 1);
  for (let i = start, idx = 0; i >= 0; i--, idx++) {
    result[idx] = i;
  }
  return result;
}
