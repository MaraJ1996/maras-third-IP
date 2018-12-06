var questions = [{
    question: "Question one?",
    choices: ["a", "b", "c", "d"],
    correctAnswer: 1
}, {
    question: "Question two?",
    choices: ["a", "b", "c", "d"],
    correctAnswer: 2
}, {
    question: "Question three?",
    choices: ["a", "b", "c", "d"],
    correctAnswer: 1
}, {
    question: "Question four?",
    choices: ["a", "b", "c", "d"],
    correctAnswer: 0
}, {
    question: "Question five?",
    choices: ["a", "b", "c", "d"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Select Answer");
                $(document).find(".quizMessage").show();
            } else {

                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();

                    $(document).find(".nextButton").text("Want to try again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
