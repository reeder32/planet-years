import Mercury from "../src/mercury.js";

describe("Mercury", () => {
  let mercury;
  beforeEach(() => {
    mercury = new Mercury();
  });
  test("should return conversion number for planet years", () => {
    expect(mercury.convertToPlanetYears(1)).toEqual(0.24);
  });
});
