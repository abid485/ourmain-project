function checkAnswers() {
  const answers = {
    q1: "The main topic of the audio",
    q2: "Name of the speaker",
    q3: "Time of the event",
  };

  let score = 0;
  const form = document.getElementById("quizForm");

  for (let key in answers) {
    const userAnswer = form[key].value.trim();
    if (userAnswer.toLowerCase() === answers[key].toLowerCase()) {
      score++;
    }
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerText = `You scored ${score} out of 3`;
}
