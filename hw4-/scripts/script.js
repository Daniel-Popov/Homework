var welocmeMessage = confirm(
  "Добре дошли в крипто борса Джунгла, искате ли да си купите малко кинти ?"
);

if (welocmeMessage) {
  alert(
    "На вашето внимание актуални валути: Criptomaza, Sharo, Bitcat ,eTorium,Tiger "
  );
} else {
  alert("Благодаря че НЕпазарувахте при нас, хайде чупката.");
}
var bonusBudget = 100;
var currencyValue = 0;
var currencyAmount = 0;

var currencyYouWantToBuy = prompt("Изберете валута която искате да закупите");

if (currencyYouWantToBuy == "Criptomaza") {
  currencyValue = 10;
}
if (currencyYouWantToBuy == "Sharo") {
  currencyValue = 0.5;
}
if (currencyYouWantToBuy == "aBitcat") {
  currencyValue = 100000;
}
if (currencyYouWantToBuy == "aeTorium") {
  currencyValue = 2;
}
if (currencyYouWantToBuy == "Tiger") {
  currencyValue = 50;
}

var currencyAmountYouWantToBuy = prompt(
  "Изберете бройката, която искате да закупите"
);
currencyAmount = currencyAmountYouWantToBuy;
console.log(currencyAmount, currencyValue, bonusBudget);
if (bonusBudget >= currencyAmount * currencyValue) {
  alert(
    "Вие станахте горд собственик на " +
      currencyAmount +
      " единици от валутата " +
      currencyYouWantToBuy +
      " покупката ви струваш " +
      currencyAmount * currencyValue +
      "$" +
      " рестото ви е " +
      (bonusBudget - currencyValue * currencyAmount) +
      " $ "
  );
  var checkYourWealth = confirm(
    "Ти си вече по-богат искаш ли да ти покажа колко много парички имаш"
  );
  if (checkYourWealth) {
    alert(
      "Ти имаш точно " +
        currencyAmount +
        " единици от валутата " +
        currencyYouWantToBuy +
        " на стойност " +
        currencyValue * currencyAmount
    );
    alert("За мен беше удоволствие че избрахте нашия магазин до нови срещи");
  } else {
    alert("Ти губиш, хайде да си ходиш");
  }
} else {
  alert("Много си алчен, няма място за теб в моя магазин. Сбогом");
}
