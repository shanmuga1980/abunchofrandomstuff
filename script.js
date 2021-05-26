var prevScrollpos = window.pageYOffset;
var screenwidth = window.innerWidth;

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

if (screenwidth < 850) {
  document.getElementById("navitem1").innerHTML = "<i class="fa fa-home"></i>";
