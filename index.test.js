import bullsEye from "./index";

describe("Name of the group", () => {
  test("should generate a square dartboard with an even number, where the centre is made up of the four highest values", () => {
    expect(bullsEye(8)).toEqual([
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 3, 3, 3, 3, 2, 1],
      [1, 2, 3, 4, 4, 3, 2, 1],
      [1, 2, 3, 4, 4, 3, 2, 1],
      [1, 2, 3, 3, 3, 3, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]);
  });
  test("should generate a square dartboard with an odd number", () => {
    expect(bullsEye(7)).toEqual([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 3, 3, 3, 2, 1],
      [1, 2, 3, 4, 3, 2, 1],
      [1, 2, 3, 3, 3, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ]);
  });
});
