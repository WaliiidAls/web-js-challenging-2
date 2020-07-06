function showSideBar() {
  if (document.getElementById("sidebar").style.display == "none") {
    document.getElementById("sidebar").style.display = "block";
  } else {
    document.getElementById("sidebar").style.display = "none";
  }
}
var myVar;
function Timer() {
  myVar = setTimeout(swapBodies, 3000);
}
function swapBodies() {
  document.getElementById("loadingDiv").style.display = "none";
  document.getElementById("inline").style.display = "block";
}
let favorite = [
  {
    name: "horrible bosses",
  },
];
function addFav(name) {
  let object = {
    name: name,
  };
  favorite.push(object);
}
function showFav() {
  for (let i = 0; i < favorite.length; i++) {
    document.getElementById("list").innerHTML +=
      "<li>" + favorite[i].name + "</li>";
  }
}
function showDetails(name) {
  document.getElementById("listmovie").innerHTML += "<li>" + name + "</li>";
}
