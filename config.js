const emotionsImg = document.getElementById("emotions");
const foodImg = document.getElementById("food");

let selection = "";

emotionsImg.addEventListener("click", function() {
    selection = "emotions";
    shuffleCard(selection);
    alert("Selection: " + selection);
  });
  
  foodImg.addEventListener("click", function() {
    selection = "food";
    shuffleCard(selection);
    alert("Selection: " + selection);
  });