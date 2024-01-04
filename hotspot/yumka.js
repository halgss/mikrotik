function button_admin(){
    var Myelement1 = document.getElementById("user");
    var Myelement2 = document.getElementById("pass");
    var Myelement3 = document.getElementById("boton-visit");
    var Myelement4 = document.getElementById("boton-submit");
    var Myelement5 = document.getElementById("boton-option");

    Myelement1.style = 'display:block';
    Myelement2.style = 'display:block';
    Myelement4.style = 'display:block';
    Myelement5.style = 'display:block';
    Myelement3.style = 'display:none';

}

function button_visit(){
    var Myelement1 = document.getElementById("user");
    var Myelement2 = document.getElementById("pass");

    console.log(Myelement1.value);
    Myelement1.value = "visitante";
    console.log(Myelement1.value);

    console.log(Myelement2.value);
    Myelement2.value = "";
    console.log(Myelement2.value);
}

function button_option(){
    var Myelement1 = document.getElementById("user");
    var Myelement2 = document.getElementById("pass");
    var Myelement3 = document.getElementById("boton-visit");
    var Myelement4 = document.getElementById("boton-submit");
    var Myelement5 = document.getElementById("boton-option");

    Myelement1.style = 'display:none';
    Myelement2.style = 'display:none';
    Myelement4.style = 'display:none';
    Myelement5.style = 'display:none';
    Myelement3.style = 'display:block';
    
}

let slideIndex = 1;
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
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
  // repetir con el intervalo de 5 segundos
  let timerId = setInterval(() =>{let slides = document.getElementsByClassName("mySlides"); if (slideIndex > slides.length) { slideIndex=1; } else slideIndex++; showSlides(slideIndex);}, 5000);    