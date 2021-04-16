import Jupiter from "../src/classes/jupiter";

describe("Jupiter", () => {
  let jupiter;
  beforeEach(() => {
    jupiter = new Jupiter();
  });
  test("should return conversion number for planet years", () => {
    expect(jupiter.convertToPlanetYears(1)).toEqual(11.86);
  });
});
