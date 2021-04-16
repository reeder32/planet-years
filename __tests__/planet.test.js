import Planet from "../src/planet.js";

describe("Planet", () => {
  let planet;
  beforeEach(() => {
    planet = new Planet(1);
  });
  test("it should take a number and convert it to the number of years for that planet", () => {
    expect(planet.convertToPlanetYears(40)).toBe(40);
  });

  test("it should return the life expectency based on the age and male gender and conversion", () => {
    expect(planet.getRemainingYearsForGenderAndAge("male", 40)).toBe(30);
  });
  test("it should return the life expectency based on the age and femal gender and conversion", () => {
    expect(planet.getRemainingYearsForGenderAndAge("femmale", 40)).toBe(35);
  });

  test("it should return the life expectency for gender", () => {
    expect(planet.getLifeExpectencyForGender("male")).toBe(70);
  });
});
