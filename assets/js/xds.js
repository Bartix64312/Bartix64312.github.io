var currentSlide = 0;
var slides = document.getElementsByTagName("img");

function showSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

document.getElementsByClassName("prev")[0].addEventListener("click", function() {
  showSlide(currentSlide - 1);
});

document.getElementsByClassName("next")[0].addEventListener("click", function() {
  showSlide(currentSlide + 1);
});
