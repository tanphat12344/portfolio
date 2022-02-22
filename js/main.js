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
  var z = document.getElementsByClassName("myslai");
  for (j = 0; j < z.length; j++) {
    z[j].style.display = "none";  
  }
  myIndexN++;
  if (myIndexN > z.length) {myIndexN = 1}    
  z[myIndexN-1].style.display = "block";  
  setTimeout(carouselN, 9000);    
}
