export default class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.planet = null;
  }

  getRemainingLifeExpectency() {
    const remainingYears = this.planet.getRemainingYearsForGenderAndAge(
      this.gender,
      this.age
    );
    if (remainingYears >= 0) {
      return `You have ${remainingYears} years left on ${this.planet.name}`;
    } else {
      return `You have exceeded the life expectency on ${this.planet.name} by ${
        remainingYears * -1
      } years`;
    }
  }
}
