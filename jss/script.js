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
  var secslides = document.getElementsByClassName("secSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > secslides.length) {secSlideIndex = 1} 
  if (n < 1) {secSlideIndex = secslides.length}
  for (j = 0; j < secslides.length; j++) {
      secslides[j].style.display = "none"; 
  }
  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  secslides[secSlideIndex-1].style.display = "block"; 
  dots[secSlideIndex-1].className += " active";
}
