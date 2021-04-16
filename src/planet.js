export default class Planet {
  constructor(conversionNumber) {
    this.conversionNumber = conversionNumber;
  }
  convertToPlanetYears(age) {
    return age * this.conversionNumber;
  }
  getLifeExpectencyForGender(gender) {}

  getRemainingYearsForGenderAndAge(gender, age) {
    if (gender === "male") {
      return 70 - age * this.conversionNumber;
    } else {
      return 75 - age * this.conversionNumber;
    }
  }
}
