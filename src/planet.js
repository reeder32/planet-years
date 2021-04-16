export default class Planet {
  constructor(conversionNumber) {
      this.conversionNumber = conversionNumber;
  }
  convertToPlanetYears(age) {
    return age * this.conversionNumber;
  }
  getLifeExpectencyForGender(gender, age) {

  }
}