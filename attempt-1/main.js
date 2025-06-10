const ratingCard = document.querySelector(".rate-us");
const thanksCard = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".rate-us__submit-btn");
const ratingContainer = document.querySelector(".rate-us__scores");
const radioBtns = document.querySelectorAll("input[name='score']");
const ratingResult = document.querySelector(".thank-you__result");

console.log(radioBtns);

submitBtn.addEventListener("click", validateRating);

function validateRating() {
  for (let i = 0; i < 5; i++) {
    if (radioBtns[i].checked) {
      showThanksCard(radioBtns[i].value);
      return;
    }
  }

  console.log("None checked.");

  const blink = () => {
    ratingContainer.toggleAttribute("data-invalid");
  };

  blink();
  setTimeout(blink, 200);
  setTimeout(blink, 500);
  setTimeout(blink, 700);
}

function showThanksCard(score) {
  ratingResult.innerHTML = `You have selected ${score} out of 5`;
  ratingCard.classList.add("hidden");
  thanksCard.classList.remove("hidden");
}
