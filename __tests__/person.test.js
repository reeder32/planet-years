import Person from "../src/person.js";

describe("Person", () => {
  let person;
  beforeEach(() => {
    person = new Person("Nick", 40, "male");
  });
  test("should return a person with correct properties", () => {
    let expectedPerson = new Person("Nick", 40, "male");
    expect(person).toEqual(expectedPerson);
  });
});
