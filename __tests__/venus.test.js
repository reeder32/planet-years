import Venus from "../src/venus.js";

describe("Venus", () => {
  let venus;
  beforeEach(() => {
    venus = new Venus();
  });
  test("should return conversion number for planet years", () => {
    expect(venus.convertToPlanetYears(1)).toEqual(0.62);
  });
});
