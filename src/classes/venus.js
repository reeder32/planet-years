import Planet from "./planet";

export default class Venus extends Planet {
  constructor() {
    super();
    this.conversionNumber = 0.62;
    this.name = "Venus";
  }
}
