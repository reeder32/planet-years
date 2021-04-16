export default class Planet {
  constructor() {
    this.conversionNumber = 1;
  }
  convertToPlanetYears(age) {
    return age * this.conversionNumber;
  }
  getLifeExpectencyForGender(gender) {
    if (gender === "male") {
      return 70;
    } else {
      return 75;
    }
  }
  getRemainingYearsForGenderAndAge(gender, age) {
    if (gender === "male") {
      return 70 - age * this.conversionNumber;
    } else {
      return 75 - age * this.conversionNumber;
    }
  }
}
