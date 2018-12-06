var questions = [{
    question: "What is a proper naming convention in JavaScript?",
    choices: ["lowerCase", "CamelCase", "1stNumber", "x"],
    correctAnswer: 0
}, {
    question: "What is a string?",
    choices: ["A series of numbers in numerical order", "A series of characters inside quotation marks", "More than one decimal occuring in an array", "Letters and numbers occuring in an array"],
    correctAnswer: 1
}, {
    question: "What does the .slice() function do?",
    choices: ["Cuts the array argument number in half", "Tells you the number of items in the array without a particular element", "Extracts a part of a string and returns the part in a new string", "Cuts out all bugs in syntax"],
    correctAnswer: 2
}, {
    question: "What does the pop() method do?",
    choices: ["Adds the last used string to the array", "Removes last listed item in an array", "Abbreviates listed items in array", "Removes the item in the array least like the others"],
    correctAnswer: 1
}, {
    question: "What is a Boolean?",
    choices: ["A data type holding two possible values - true or false", "A tool used to hint bugs in syntax", "A method allowing you to merge existing arrays", "All of the above"],
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
