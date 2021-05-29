var str = "Thrissur";
var data;
var long;
var lat;
var name;
var main = document.querySelector("#name");
var main2 = document.querySelector("#name2");
function setbg(color) {
  document.getElementById("input").style.background = color;
}

async function funcName(link) {
  const response = await fetch(link);
  data = await response.json();
  lat = data.results[0].coordinates.latitude;
  long = data.results[0].coordinates.longitude;
  console.log(lat);
  main.innerHTML = lat + " is " + str + "'s latitude";
  main2.innerHTML = long + " is " + str + "'s longitude";
}

var button = document.querySelector("button");
function fn1() {
  str = document.getElementById("input").value;
  str = str.charAt(0).toUpperCase() + str.slice(1);
  var link = "https://api.openaq.org/v1/latest?city=" + str;
  funcName(link);
}
var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});
