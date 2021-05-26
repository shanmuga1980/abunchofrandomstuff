var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function naventer(x) {
  x.style.animation = "mouseenter 0.75s 1";
  x.style.animationFillMode = "forwards";
}

function navleave(x) {
  x.style.animation = "mouseleave 0.45s 1";
  x.style.animationFillMode = "forwards";
}

function subnaventer(x) {
  x.style.visibility = "visible";
  document.getElementById("subnavbarbutton").style.animation = "mouseeenter 0.75s 1";
  document.getElementById("subnavbarbutton").style.animationFillMode = "forwards";
}

function subnavleave(x) {
  x.style.visibility = "hidden";
  document.getElementById("subnavbarbutton").style.animation = "mouseleave 0.45s 1";
  document.getElementById("subnavbarbutton").style.animationFillMode = "forwards";
}

function showsubnav(x) {
  x.style.animation = "mouseenter 0.75s 1";
  x.style.animationFillMode = "forwards";
  document.getElementById("subnavContent").style.top = document.getElementById("navbar").offsetHeight;
}

function hidesubnav(x) {
  x.style.animation = "mouseleave 0.75s 1";
  x.style.animationFillMode = "forwards";
  document.getElementById("subnavContent").style.top = "0";
}
  
