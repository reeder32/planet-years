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
    let years;
    if (remainingYears - Math.floor(remainingYears) !== 0) {
      years = remainingYears.toFixed(2);
    } else {
      years = remainingYears;
    }
    if (remainingYears >= 0) {
      return `You have ${years} years left on ${this.planet.name}`;
    } else {
      return `You have exceeded the life expectency on ${this.planet.name} by ${
        years * -1
      } years`;
    }
  }
}
