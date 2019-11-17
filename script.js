function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}
Question.prototype.displayQuestion = function() {
  console.log(this.question);
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ": " + this.answers[i]);
  }
};
Question.prototype.checkAnswer = function(ans, callback) {
  var sc;
  if (ans === this.correct) {
    console.log("correct");
    sc = callback(true); // callback is the keepScore variable which conteny the score function
  } else {
    console.log("try agian");
    sc = callback(false);
  }
  this.displayScore(sc);
};
Question.prototype.displayScore = function(score) {
  console.log("your curent score is " + score);
  console.log("---------------");
};
var q1 = new Question("Is JS the best programming language", ["yes", "no"], 0);
var q2 = new Question(
  "who is the best footballer in the world",
  ["messi", "ronaldo"],
  0
);
var q3 = new Question(
  "how do you describe coding",
  ["boring", "hard", "fun", "easy"],
  2
);
var questions = [q1, q2, q3];

function score() {
  var sc = 0;
  return function(correct) {
    if (correct) {
      sc++;
    }
    return sc;
  };
}

var keepscore = score();

function nextQuestion() {
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();

  var answer = prompt("please select the correct answer ");

  if (answer !== "exit") {
    questions[n].checkAnswer(parseInt(answer), keepscore);
    nextQuestion();
  }
}

nextQuestion();
