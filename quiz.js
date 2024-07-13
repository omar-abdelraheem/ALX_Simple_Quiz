function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector("input[name='quiz']:checked").value;
  let feedBack = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedBack.textContent = "Correct! Well done.";
  } else {
    feedBack.textContent = "That's incorrect. Try again!";
  }
  console.log(userAnswer);
}
let submitBtn = document.getElementById("submit-answer");
submitBtn.addEventListener("click", checkAnswer);

// let correctAnswer = "4";
// let userAnswer = document.querySelector("input[name='quiz']");
// let feedBack = document.getElementById("feedback");
// if (correctAnswer === userAnswer) {
//   console.log("Correct! Well done.");
// } else {
//   console.log("That's incorrect. Try again!");
// }
