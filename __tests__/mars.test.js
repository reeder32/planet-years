import Mars from "../src/classes/mars";

describe("Mars", () => {
  let mars;
  beforeEach(() => {
    mars = new Mars();
  });
  test("it should convert the number of years for the planet's conversion rate number", () => {
    expect(mars.convertToPlanetYears(1)).toEqual(1.88);
  });
  test("it should return the life expectency for Mars with conversion rate number and male", () => {
    expect(mars.getLifeExpectencyForGender("male")).toEqual(131.6);
  });
  test("it should return the life expectency for Mars with conversion rate number and female", () => {
    expect(mars.getLifeExpectencyForGender("female")).toEqual(141);
  });
});
