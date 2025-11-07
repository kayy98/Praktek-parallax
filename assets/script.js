let text = document.getElementById("text");
let treeLeft = document.getElementById("tree-left");
let treeRight = document.getElementById("tree-right");
let gateLeft = document.getElementById("gate-Left");
let gateRight = document.getElementById("gate-Right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.margintop = value * 2.5 + "PX";
  treeLeft.style.left = value * -1.5 + "px";
  treeRight.style.left = value * 1.5 + "px";
  gateLeft.style.left = value * -1.5 + "px";
  gateRight.style.left = value * 1.5 + "px";
});
