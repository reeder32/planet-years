import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Person, Mercury, Mars, Jupiter, Venus } from "./classes/index.js";
import bg from "./assets/images/space.jpg";
$("#submit-button").on("click", (e) => {
  e.stopImmediatePropagation();
  e.preventDefault();
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

  if (personName && personAge && personGender) {
    if (personAge <= 0) {
      alert("You can't be less than 0 silly...");
    } else {
      let person = new Person(personName, personAge, personGender);
      person.planet = planet;
      displayResult(person);
    }
  } else {
    alert("You need to fill out all of the form, please...");
  }
});

function displayResult(person) {
  $("#result").fadeIn();
  $("#person-name").text(person.name);
  $("#planet-name").text(person.planet.name);
  $("#years").text(person.planet.convertToPlanetYears(person.age).toFixed(2));
  $("#expectancy").text(
    person.planet.getLifeExpectencyForGender(person.gender).toFixed(2)
  );
  $("#remaining-years").text(person.getRemainingLifeExpectency());
  $("body").css("background-image", "url(" + bg + ")");
}
