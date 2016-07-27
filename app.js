/****************************************************
*            Converting Arrays to Strings           *
****************************************************/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("change").innerHTML = fruits;

function changeFunction() {
  fruits[0] = "Kiwi";
  document.getElementById("change").innerHTML = fruits;
}

/****************************************************
*                 Splicing an Array                 *
****************************************************/
document.getElementById("splice-array").innerHTML = fruits;

function spliceFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  document.getElementById("splice-array").innerHTML = fruits;
}
