const slideShowImages = [
   "https://images.wallpapersden.com/image/download/bodybuilder-silhouette_bGVmZ22UmZqaraWkpJRnbWxnrWZsbGc.jpg",
   "https://wallpapercave.com/wp/wp3197418.jpg",
   "https://wallup.net/wp-content/uploads/2019/09/415536-body-building-fitness-muscle-muscles-weight-lifting-bodybuilding-6-748x394.jpg",
];

let slideIndex = 0;
let numberOfStandardTicket = 0;
let numberOfPremiumTicket = 0;
let numberOfVIPTicket = 0;
var totalTicketValue = 0;
let slideShowAutoInterval;
const normalize = (str) =>
   str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

document.addEventListener("DOMContentLoaded", () => {
   if (document.getElementById("slideshowContainer")) {
      buildSlides();
      showSlides(slideIndex);
      slideShowAutoInterval = setInterval(slideShowAuto, 5000);
   }

   if (document.getElementById("eventCountDownText")) {
      setInterval(eventCountdownTimer, 1000);
   }

   const submitButton = document.querySelector(".submitButton");
   const commentInput = document.getElementById("Comment");

   if (submitButton && commentInput) {
      const swearWords = [
         "Alcoviteiro",
         "Biltre",
         "Beócio",
         "Calhorda",
         "Energúmeno",
         "Janota",
         "Mentecapto",
         "Mequetrefe",
         "Mocorongo",
         "Paspalho",
         "Palerma",
         "Patife",
         "Pulha",
         "Purgante",
         "Sacripanta",
      ];

      const checkForSwearWords = (e) => {
         const value = normalize(e.target.value);
         const containsSwearWord = swearWords.some((word) =>
            value.includes(normalize(word)),
         );
         if (containsSwearWord) {
            submitButton.disabled = true;
            alert("Por favor, modere a linguagem!");
         } else {
            submitButton.disabled = false;
         }
      };

      commentInput.addEventListener("input", checkForSwearWords);
   }

   document.querySelectorAll(".ToggleGroup").forEach((group) => {
      const hiddenInput = document.getElementById(
         group.id.replace("Group", "Input"),
      );
      if (!hiddenInput) return;

      group.querySelectorAll(".ToggleBtn").forEach((btn) => {
         btn.addEventListener("click", () => {
            btn.classList.toggle("active");

            const selected = [
               ...group.querySelectorAll(".ToggleBtn.active"),
            ].map((b) => b.dataset.value);

            hiddenInput.value = JSON.stringify(selected);
         });
      });
   });
});

function plusSlides(n) {
   slideIndex += n;
   if (slideIndex >= slideShowImages.length) slideIndex = 0;
   if (slideIndex < 0) slideIndex = slideShowImages.length - 1;
   clearInterval(slideShowAutoInterval);
   slideShowAutoInterval = setInterval(slideShowAuto, 5000);
   showSlides(slideIndex);
}

function currentSlide(n) {
   showSlides((slideIndex = n));
}

function buildSlides() {
   const slideShowDotsDiv = document.getElementById("slideShowDots");
   const slideShowContainer = document.getElementById("slideshowContainer");
   if (!slideShowDotsDiv || !slideShowContainer) return;

   const prevButton = slideShowContainer.querySelector(".prev");

   slideShowImages.forEach((image, index) => {
      const span = document.createElement("span");
      span.className = "dot";
      span.onclick = function () {
         currentSlide(index);
      };
      slideShowDotsDiv.appendChild(span);

      const divSlide = document.createElement("div");
      divSlide.className = "mySlides fade";

      const divNumberText = document.createElement("div");
      divNumberText.className = "numbertext";
      divNumberText.innerHTML = index + 1 + " / " + slideShowImages.length;
      divSlide.appendChild(divNumberText);

      const slideImage = document.createElement("img");
      slideImage.src = image;
      divSlide.appendChild(slideImage);

      slideShowContainer.insertBefore(divSlide, prevButton);
   });
}

function showSlides(n) {
   const slides = document.getElementsByClassName("mySlides");
   const dots = document.getElementsByClassName("dot");
   if (!slides.length || !dots.length) return;

   if (n >= slides.length) slideIndex = 0;
   if (n < 0) slideIndex = 0;

   for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
   for (let i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active", "");

   slides[slideIndex].style.display = "block";
   dots[slideIndex].className += " active";
}

function slideShowAuto() {
   slideIndex++;
   if (slideIndex >= slideShowImages.length) slideIndex = 0;
   showSlides(slideIndex);
}

function eventCountdownTimer() {
   const el = document.getElementById("eventCountDownText");
   if (!el) return;

   const dataEvento = new Date("2026-08-25T18:00:00");
   const dataAtual = new Date();
   const dif = Math.floor((dataEvento - dataAtual) / 1000);
   const dias = Math.floor(dif / (60 * 60 * 24));
   const horas = Math.floor((dif % (60 * 60 * 24)) / (60 * 60));
   const minutos = Math.floor((dif % (60 * 60)) / 60);
   const segundos = dif % 60;

   el.textContent =
      "Tempo até o evento: " +
      dias +
      " dias, " +
      horas +
      "h " +
      minutos +
      "m " +
      segundos +
      "s";
}

function addTicket(button) {
   const countSpan = button?.parentElement?.querySelector(".ticket-count");
   if (!countSpan) return;

   const currentCount = parseInt(countSpan.textContent) + 1;
   countSpan.textContent = currentCount;

   const ticketType = button.parentElement.dataset.ticket;
   if (ticketType === "standard") numberOfStandardTicket = currentCount;
   if (ticketType === "premium") numberOfPremiumTicket = currentCount;
}

function subtractTicket(button) {
   const countSpan = button?.parentElement?.querySelector(".ticket-count");
   if (!countSpan) return;

   let current = parseInt(countSpan.textContent);
   if (current > 0) {
      current--;
      countSpan.textContent = current;

      const ticketType = button.parentElement.dataset.ticket;
      if (ticketType === "standard") numberOfStandardTicket = current;
      if (ticketType === "premium") numberOfPremiumTicket = current;
   }
}
