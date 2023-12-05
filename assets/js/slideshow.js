let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let fotos = document.getElementsByClassName("fotos");
  let puntos = document.getElementsByClassName("punto");
  if (n > fotos.length) {slideIndex = 1}
  if (n < 1) {slideIndex = fotos.length}
  for (i = 0; i < fotos.length; i++) {
    fotos[i].style.display = "none";
  }
  for (i = 0; i < puntos.length; i++) {
    puntos[i].className = puntos[i].className.replace(" active", "");
  }
  fotos[slideIndex-1].style.display = "block";
  puntos[slideIndex-1].className += " active";
}