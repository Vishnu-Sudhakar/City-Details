var str = "Thrissur";
var data;
var lat;
function setbg(color) {
  document.getElementById("input").style.background = color;
}

async function funcName(link) {
  const response = await fetch(link);
  data = await response.json();
  lat = data.results[0].coordinates.latitude;
  console.log(lat);

  // if (lat == null) {
  //   lat = 0;
  //   return lat;
  // }
  // document.getElementById("lats").value = "Your Latitude is : " + lat;
}

var button = document.querySelector("button");
document.getElementById("lat").innerText = "Your Latitude is : " + lat;
function fn1() {
  str = document.getElementById("input").value;
  var link = "https://api.openaq.org/v1/latest?city=" + str;
  funcName(link);
}
