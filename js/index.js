/*Alert po vyplnení formuláru*/
function showAlert() {
    alert('Ďakujeme za vašu rezerváciu!');
}
/*Alert po vyplnení správy*/
function showAlert2() {
    alert('Správa bola úspešne odoslaná!');
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

/*Smooth scrooling*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*Vypne cookie popup po kliknutí na "Suhlasím"*/
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("cookiesAccepted")) {
        showCookiePopup();
    }
});

function acceptCookies() {
    const popup = document.getElementById("cookie-popup");
    popup.style.display = "none";
    localStorage.setItem("cookiesAccepted", "true"); // Add this line
}

function showCookiePopup() {
    const popup = document.getElementById("cookie-popup");
    if (popup) {
        popup.style.display = "block";
    }
}