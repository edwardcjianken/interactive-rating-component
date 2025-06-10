submitBtn = document.querySelector(".rate-us__submit-btn");
ratingCard = document.querySelector(".rate-us");
thanksCard = document.querySelector(".thank-you");
ratingResult = document.querySelector(".thank-you__result");
ratingSelection = document.querySelector(".rate-us__selection");
radioBtns = document.querySelectorAll('input[type="radio"]');

console.log(submitBtn);
console.log(ratingCard);
console.log(thanksCard);
console.log(radioBtns);

const validateRating = () => {
  for (let i = 0; i < 5; i++) {
    if (radioBtns[i].checked) {
      showNextCard(radioBtns[i].value);
      return;
    }
    const blink = () => {
      ratingSelection.toggleAttribute("data-invalid");
    };

    blink();
    setTimeout(blink, 300);
    setTimeout(blink, 500);
    setTimeout(blink, 800);
  }
};

const showNextCard = (score) => {
  ratingResult.innerHTML = `You selected ${score} out of 5`;
  ratingCard.classList.add("hidden");
  thanksCard.classList.remove("hidden");
};

submitBtn.addEventListener("click", validateRating);
