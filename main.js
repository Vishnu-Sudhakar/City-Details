function setbg(color) {
  document.getElementById("input").style.background = color;
}

var button = document.querySelector("button");
function fn1() {
  var str = document.getElementById("input").value;
  console.log(str);
}
button.addEventListener("click", function () {
  fetch("https://api.openaq.org/v1/latest?city=" + str + "")
    .then((response) => response.json())
    .then((data) => console.log(data))

    .catch((err) => alert("No match found!"));
});
