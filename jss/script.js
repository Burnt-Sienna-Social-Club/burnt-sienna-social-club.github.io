/* Open when someone clicks on Small menu button  */
function openMenu() {
  document.getElementById("smlMenu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeMenu() {
  document.getElementById("smlMenu").style.width = "0%";
}


/* Main Nav Dropdown menu--------------------------------------------
When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//picture slideshow-------------------------//

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//second slideshow-----------------------------------------------------//

var secSlideIndex = 1;
secShowSlides(secSlideIndex);

// Next/previous controls
function secPlusSlides(n) {
  secShowSlides(secSlideIndex += n);
}

// Thumbnail image controls
function secCurrentSlide(n) {
  secShowSlides(secSlideIndex = n);
}

function secShowSlides(n) {
  var j;
  var secSlides = document.getElementsByClassName("secSlides");
  var secDots = document.getElementsByClassName("secDot");
  if (n > secSlides.length) {secSlideIndex = 1} 
  if (n < 1) {secSlideIndex = secSlides.length}
  for (j = 0; j < secSlides.length; j++) {
      secSlides[j].style.display = "none"; 
  }
  for (j = 0; j < secDots.length; j++) {
      secDots[j].className = secDots[j].className.replace(" active", "");
  }
  secSlides[secSlideIndex-1].style.display = "block"; 
  secDots[secSlideIndex-1].className += " active";
}
