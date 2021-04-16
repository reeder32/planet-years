import Mercury from "../src/classes/mercury";

describe("Mercury", () => {
  let mercury;
  beforeEach(() => {
    mercury = new Mercury();
  });
  test("should return conversion number for planet years", () => {
    expect(mercury.convertToPlanetYears(1)).toEqual(0.24);
  });
});
