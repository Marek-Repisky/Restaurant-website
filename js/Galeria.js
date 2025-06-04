/*Alert po vyplnení správy*/
function showAlert2() {
  alert('Správa bola úspešne odoslaná!');
}

/*Slideshow*/
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

/*Vypne banner po kliknutí na X*/
document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});

/*Otvorí a zatvorí chat*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("chatButton").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("chatButton").style.display = "block";
}

/*Odpočet v banneri*/
function updateCountdown() {
  const now = new Date()
  const targetDate = new Date(now.getFullYear(), 11, 24, 0, 0, 0, 0);
  const timeUntilTargetDate = targetDate - now;

  const days = Math.floor(timeUntilTargetDate / (24 * 60 * 60 * 1000));

  document.getElementById('countdown').innerHTML = `${days}`;
}

/*Updatetuje sa 1 za deň*/
setInterval(updateCountdown, 24 * 60 * 60 * 1000);

updateCountdown();

