var questions = [{
  question:"Question one?"
  choices:["a","b","c","d"]
  correctAnswer:1
},{
  quesiton:"Question two?"
  choices:["a","b","c","d"]
  correctAnswer:2
},{
  question:"Question three?"
  choices:["a","b","c","d"]
  correctAnswer:1
},{
  question:"Question four?"
  choices:["a","b","c","d"]
  correctAnswer:0
},{
  question:"Question five?"
  choices:["a","b","c","d"]
  correctAnswer:0
}];

var currentQuestion =0;
var correctAnswers =0;
var quizOver =false;

$(document).ready(function(){

  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();

  $(this).find(".nextButton").on("click",function(){
    if(!quizOver){

      value=$("input[type='radio']:checked").val();
