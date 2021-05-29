var str = "Thrissur";
var data;
var lat;
var main = document.querySelector("#name");
function setbg(color) {
  document.getElementById("input").style.background = color;
}

async function funcName(link) {
  const response = await fetch(link);
  data = await response.json();
  lat = data.results[0].coordinates.latitude;
  console.log(lat);
  main.innerHTML = lat;
}

var button = document.querySelector("button");
function fn1() {
  str = document.getElementById("input").value;
  var link = "https://api.openaq.org/v1/latest?city=" + str;
  funcName(link);
}
