const correctAnswers = [
  //q1
  "A",
  //q2
  "B",
  //q3
  "B",
  //q4
  "D",
  //q5
  "B",
  //q6
  "A",
  //q7
  "A",
  //q8
  "D",
  //q9
  "A",
  //q10
  "B",
  //q11
  "D",
  //q12
  "A",
  //13
  "B",
  //q14
  "A",
  //q15
  "B",
  //q16
  "B",
  //q17
  "C",
  //q18
  "C",
  //q19
  "B",
  //q20
  "A",
  //q21
  "B",
  //q22
  "C",
  //q23
  "B",
  //q24
  "A",
  //q25
  "D",
];
const form = document.querySelector(".quiz-form");
const resultScore = document.querySelector(".result-score");
const resultPassFail = document.querySelector(".result-pass-fail");
const headline = document.querySelector(".headline");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
    form.q11.value,
    form.q12.value,
    form.q13.value,
    form.q14.value,
    form.q15.value,
    form.q16.value,
    form.q17.value,
    form.q18.value,
    form.q19.value,
    form.q20.value,
    form.q21.value,
    form.q22.value,
    form.q23.value,
    form.q24.value,
    form.q25.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    const qIndex = index + 1;

    if (answer === "") {
      alert(
        `Question ${qIndex} isn't answered. Please answer the question and resubmit the test.`
      );
    } else if (answer !== correctAnswers[index]) {
      alert(
        `Question ${qIndex} is incorrect. The correct answer is ${correctAnswers[
          index
        ].valueOf()}`
      );
    } else if (answer === correctAnswers[index]) {
      //score based off of percentage per question
      score += 4;
    }
  });

  window.scrollTo(0, 600);

  resultScore.classList.remove("d-none");
  resultScore.classList.add("font-weight-bold");

  let output = 0;
  const timer = setInterval(() => {
    resultScore.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  resultPassFail.classList.remove("d-none");
  if (score >= 80) {
    resultPassFail.querySelector("span").textContent = "Passed";
    resultPassFail.classList.add("text-success", "font-weight-bold");
    headline.classList.add("d-none");
  } else {
    resultPassFail.querySelector("span").textContent = "Failed";
    resultPassFail.classList.add("text-danger", "font-weight-bold");
    headline.classList.add("d-none");
  }
});
