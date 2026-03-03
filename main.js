const slideShowImages = ['https://images.wallpapersden.com/image/download/bodybuilder-silhouette_bGVmZ22UmZqaraWkpJRnbWxnrWZsbGc.jpg',
    'https://wallpapercave.com/wp/wp3197418.jpg',
    'https://wallup.net/wp-content/uploads/2019/09/415536-body-building-fitness-muscle-muscles-weight-lifting-bodybuilding-6-748x394.jpg'
];

let slideIndex= 0;
let numberOfStandardTicket = 0;
let numberOfPremiumTicket = 0;
let numberOfVIPTicket = 0;
var totalTicketValue = 0;
buildSlides();
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;

    if (slideIndex >= slideShowImages.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slideShowImages.length - 1;
    }

    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function buildSlides() {
    let slideShowDotsDiv = document.getElementById("slideShowDots");
    let slideShowContainer = document.getElementById("slideshowContainer");
    let prevButton = slideShowContainer.querySelector(".prev");

    slideShowImages.forEach((image, index) => {
        const span = document.createElement("span");
        span.className = 'dot';
        span.onclick = function() {
            currentSlide(index);
        };

        slideShowDotsDiv.appendChild(span);

        const divSlide = document.createElement("div");
        divSlide.className = 'mySlides fade';

        const divNumberText = document.createElement("div");
        divNumberText.className = 'numbertext';
        divNumberText.innerHTML = (index + 1) + ' / ' + slideShowImages.length;
        divSlide.appendChild(divNumberText);

        const slideImage = document.createElement("img");
        slideImage.src = image;
        divSlide.appendChild(slideImage);

        slideShowContainer.insertBefore(divSlide, prevButton);
    });
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = 0
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function slideShowAuto() {
    slideIndex++;

    if (slideIndex >= slideShowImages.length) {
        slideIndex = 0;
    }

    showSlides(slideIndex);
}
setInterval(slideShowAuto, 5000);

function eventCountdownTimer() {
    // Data/hora do evento (imaginando que este seria a 25 de agosto)
    const dataEvento = new Date("2026-08-25T18:00:00");

    // Data/hora atual
    const dataAtual = new Date();

    // Diferença entre as duas datas (convertida de milisegundos para segundos)
    const dif = Math.floor( (dataEvento - dataAtual) / 1000);

    // Extrair dias, horas, minutos e segundos
    const dias = Math.floor( dif / (60 * 60 * 24) );
    const horas = Math.floor( (dif % (60 * 60 * 24)) / (60 * 60) );
    const minutos = Math.floor( (dif % (60 * 60)) / 60 );
    const segundos = dif % 60;

    document.getElementById("eventCountDownText").textContent = 'Tempo até o evento: ' + dias + ' dias, ' + horas + 'h ' + minutos + 'm ' + segundos + 's';
}
setInterval(eventCountdownTimer, 1000);

function addTicket(button) {
   const countSpan = button.parentElement.querySelector('.ticket-count');
   const currentCount = parseInt(countSpan.textContent) + 1;
   countSpan.textContent = currentCount;
   
   const ticketType = button.parentElement.dataset.ticket;
   if (ticketType === 'standard') numberOfStandardTicket = currentCount;
   if (ticketType === 'premium') numberOfPremiumTicket = currentCount;
}

function subtractTicket(button) {
   const countSpan = button.parentElement.querySelector('.ticket-count');
   let current = parseInt(countSpan.textContent);
   
   if (current > 0) {
      current--;
      countSpan.textContent = current;
      
      const ticketType = button.parentElement.dataset.ticket;
      if (ticketType === 'standard') numberOfStandardTicket = current;
      if (ticketType === 'premium') numberOfPremiumTicket = current;
   }
}