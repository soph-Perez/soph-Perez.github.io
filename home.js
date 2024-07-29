/* .js files add interaction to your website */
var factList = [
  "There is an Ocean Garbage Patch Twice the Size of Texas!",
  "Plastic in the Ocean Could Cover the Earth 400 Times!",
  "According to a study completed by the University of Georgia, 18 billion pounds of plastic trash winds up in our oceans each year. That’s enough to cover every foot of coastline around the world with five full trash bags of plastic!",
  "Widespread pollution has created dead zones, places, where it is no longer possible to support marine or plant life. There are about 500 dead zones in the ocean, equivalent in size to the entire United Kingdom!",
  "Over ⅓ of the Atlantic ocean has been negatively impacted by pollution. The Atlantic ocean is critical habitat for shellfish, and shellfish businesses on the East Coast have been negatively impacted as a result!"
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
  factButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
