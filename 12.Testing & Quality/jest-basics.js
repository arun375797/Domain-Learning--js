// Example Jest test file
describe("math helpers", () => {
  test("adds numbers", () => {
    expect(2 + 3).toBe(5);
  });

  test("handles floating point with toBeCloseTo", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});

// Run with: npx jest math.test.js
