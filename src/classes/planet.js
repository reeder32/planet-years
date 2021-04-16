export default class Planet {
  constructor() {
    this.conversionNumber = 1;
    this.name = "";
  }
  convertToPlanetYears(age) {
    return age * this.conversionNumber;
  }
  getLifeExpectencyForGender(gender) {
    if (gender === "male") {
      return 70 * this.conversionNumber;
    } else {
      return 75 * this.conversionNumber;
    }
  }
  getRemainingYearsForGenderAndAge(gender, age) {
    if (gender === "male") {
      return (70 - age) * this.conversionNumber;
    } else if (gender == "female") {
      return (75 - age) * this.conversionNumber;
    }
  }
}
