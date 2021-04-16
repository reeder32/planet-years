export default class Planet {
  constructor(conversionNumber) {
      this.conversionNumber = conversionNumber;
  }
convertNumberToYears(number) {
  return number * this.conversionNumber;
}
  
}