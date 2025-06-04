/*Alert po vyplnení správy*/
function showAlert2() {
  alert('Správa bola úspešne odoslaná!');
}

/*Akordeón*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
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