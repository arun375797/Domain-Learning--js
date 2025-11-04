export function calculateBMI(weightKg, heightMeters) {
  if (heightMeters === 0) {
    return Infinity;
  }
  const bmi = weightKg / (heightMeters * heightMeters);
  return Math.round(bmi * 10) / 10;
}
