var obstacle = prompt(
  "Kакъв е типът на обекта ,който се намира пред робота, стена, стол или нищо"
);
if (obstacle == "wall") {
  alert(" Go Sideway");
}
if (obstacle == "chair") {
  alert("Jump");
}
if (obstacle == "nothing") {
  alert("Forward");
}
var pixel = prompt("броя на пикселите в пространството");
if (pixel % 2 == 0) {
  alert("мишката е засечена и робота се приготвя за атака");
}
var totalHits = 0;
while (totalHits < 4) {
  var makeHit = confirm("Роботът,може ли да направи удър");
  if (makeHit) {
    totalHits++;
  }
}
var random = Math.floor(Math.random() * 10) + 1;
{
  if (random == 5) {
    alert("oстана без мебели");
  } else {
    alert("размаза мишката");
  }
}
var robotBattery = confirm("Имаш ли достатъчно енергиея за битка");
if (robotBattery) {
  alert("продължавай да търсиш мишени");
}
if (!robotBattery) {
  alert("Ориентирайте се към най-близкия контакт");
  var firstNumber = Math.floor(Math.random() * 1000 + 1);
  var secondNumber = Math.floor(Math.random() * 1000 + 1);
  if (firstNumber != secondNumber) {
    if (firstNumber < secondNumber) {
      alert("имаме ток");
    } else {
      alert("няма ток");
    }
  }
}
var startNumber = 10;
while (startNumber != 0) {
  if (startNumber % 2 == 0) {
    alert("I am a Robottttt " + startNumber);
  } else {
    alert(startNumber);
  }
  startNumber--;
}
