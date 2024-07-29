var displayName = document.getElementById("hidden");
var button = document.getElementById("myButton");

button.addEventListener("click", displayHidden);

function displayHidden(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = "Thank you " + text + " for supporting our goal to raise awareness on ocean pollution! A little change to you, results in big effects for the world!"
}