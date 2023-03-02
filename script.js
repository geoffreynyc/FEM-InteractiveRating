"use strict";

const mainWrapper = document.querySelector(".main-wrapper");
const thankYouWrapper = document.querySelector(".thank-you-wrapper");
const submit = document.querySelector(".submit-btn");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rate-btn");

submit.addEventListener("click", () => {
  thankYouWrapper.classList.remove("hidden");
  mainWrapper.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
