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
    let animal = document.getElementById("animal");
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
    if ((slideIndex) == 1) {animal.innerText="Gaur"}   
    if ((slideIndex) == 2) {animal.innerText="Jaguar"}  
    if ((slideIndex) == 3) {animal.innerText="Tigre"}    
  }
  // repetir con el intervalo de 5 segundos
  let timerId = setInterval(() =>{let slides = document.getElementsByClassName("mySlides"); if (slideIndex > slides.length) { slideIndex=1; } else slideIndex++; showSlides(slideIndex);}, 5000);    