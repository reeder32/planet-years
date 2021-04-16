import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Person, Mercury, Mars, Jupiter, Venus } from "./classes/index.js";

$("#submit-button").on("click", (event) => {
  event.preventDefault();
  const personName = $("#name").val();
  const personAge = parseInt($("#age").val());
  const personGender = $("#gender-selector option:selected").val();
  const planetValue = parseInt($("#planet-selector option:selected").val());
  let planet;
  switch (planetValue) {
    case 0:
      planet = new Jupiter();
      break;
    case 1:
      planet = new Mars();
      break;
    case 2:
      planet = new Mercury();
      break;
    case 3:
      planet = new Venus();
      break;
    default:
      console.log("planet value is incorrect", planetValue);
  }
  console.log(planetValue);
  if (personName && personAge && personGender) {
    let person = new Person(personName, personAge, personGender);
    person.planet = planet;
    displayResult(person);
  } else {
    alert("You need to fill out all of the form, please...");
  }
});

function displayResult(person) {
  $("#result").fadeIn();
  $("#planet-name").text(person.planet.name);
  $("#years").text(person.planet.convertToPlanetYears(person.age));
  $("#expectancy").text(
    person.planet.getLifeExpectencyForGender(person.gender)
  );
  $("#remaining-years").text(person.getRemainingLifeExpectency());
}
