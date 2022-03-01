// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
};


var myIndexN = 0;
carouselN();

function carouselN() {
  var j;
  var y = document.getElementsByClassName("myslai");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  myIndexN++;
  if (myIndexN > y.length) {myIndexN = 1}    
  y[myIndexN-1].style.display = "block";  
  setTimeout(carouselN, 9000);    
}

var myIndexM = 0;
carouselM();

function carouselM() {
  var k;
  var z = document.getElementsByClassName("sliderpj3");
  for (k = 0; k < z.length; k++) {
    z[k].style.display = "none";  
  }
  myIndexM++;
  if (myIndexM > z.length) {myIndexM = 1}    
  z[myIndexM-1].style.display = "block";  
  setTimeout(carouselM, 3000); // Change image every 2 seconds
};

