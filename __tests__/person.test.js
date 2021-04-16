import Person from "../src/classes/person";
import Planet from "../src/classes/planet";
import Mars from "../src/classes/mars";
describe("Person", () => {
  let person;
  beforeEach(() => {
    person = new Person("Nick", 40, "male");
  });
  test("should return a person with correct properties", () => {
    let expectedPerson = new Person("Nick", 40, "male");
    expect(person).toEqual(expectedPerson);
  });
  test("should add the planet mars to person", () => {
    let mars = new Mars();
    person.planet = mars;
    expect(person.planet).toEqual(mars);
  });

  test("should get life expectency string with age", () => {
    let planet = new Planet();
    person.planet = planet;
    expect(person.getRemainingLifeExpectency()).toEqual(
      "You have 30 years left on "
    );
  });
  test("should get life expectency string with age when user exceeds expectency", () => {
    let planet = new Planet();
    person.age = 80;
    person.planet = planet;
    expect(person.getRemainingLifeExpectency()).toEqual(
      "You have exceeded the life expectency on  by 10 years"
    );
  });
});
