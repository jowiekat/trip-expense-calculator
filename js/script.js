var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget for this trip? "));
   var numDays = Number(prompt("How many days does your trip last? "));
   var accommodation = Number(prompt("What are your total accommodation cost? "));

  calculateDailyBudget(totalBudget, accommodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

 dailyBudget.innerText = ` You can spend ${daily} euro  a day on food and fun!🙌🙌`;
 dailyBudget.style.color = "Green"
 dailyBudget.style.fontSize = "1.2em"
};

tripInfoButton.addEventListener("click", tripInfo);
