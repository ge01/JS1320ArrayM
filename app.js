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

/****************************************************
*          Using splice() to Remove Elements        *
****************************************************/
document.getElementById("splice-array1").innerHTML = fruits;

function spliceFunction1() {
  fruits.splice(0,1);
  document.getElementById("splice-array1").innerHTML = fruits;
}

/****************************************************
*                   Joining Arrays                  *
****************************************************/
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

document.getElementById("two-arrays").innerHTML = myChildren;

/****************************************************
*                 Slicing an Array                  *
****************************************************/
var citrus = fruits.slice(1,3);
document.getElementById("slice").innerHTML = fruits + "<br>" + citrus;
