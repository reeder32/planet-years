import Mars from "../src/mars.js";

describe("Mars", () => {
  let mars;
  beforeEach(() => {
    mars = new Mars();
  });
  test("it should convert the number of years for the planet's conversion rate number", () => {
    expect(mars.convertToPlanetYears(1)).toEqual(1.88);
  });
  test("it should return the life expectency for Mars with conversion rate number", () => {
    expect(mars.getLifeExpectencyForGender("male")).toEqual("idk");
  });
});
