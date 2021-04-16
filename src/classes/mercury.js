import Planet from "./planet";

export default class Mercury extends Planet {
  constructor() {
    super();
    this.conversionNumber = 0.24;
    this.name = "Mercury";
  }
}
