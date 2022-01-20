/**
 * questions array
 */
 const QUESTION_BANK = [
  {
   question : 'What was the first commercially successful video game?',
   answer: [
     { text: 'Pong', correct: true},
     { text: 'Pac Man'},
     {text:  'Tetris'},
     {text:  'Space Invaders'}
   ]
  },
  {
   question : 'What is the best selling videogame of all time?',
   answer: [
     { text: 'Minecraft', correct: true},
     { text: 'Call of Duty', correct: false},
     {text:  'Super Mario Bros', correct:false},
     {text:  'Fortnite', correct:false}
   ]
  },
  {
   question : 'What year was the Super Nintendo Entertainment System (SNES) released?',
   answer: [
     { text: '1986', correct: false},
     { text: '1998', correct: false},
     {text:  '1991', correct: true},
     {text:  '2000', correct:false}
   ]
  },
  {
   question : 'What product did Nintendo first release before taking on the world of video games?',
   answer: [
     { text: 'Digital Watch', correct: false},
     { text: 'Board Game', correct: false},
     {text:  'Pinball Machine', correct:false},
     {text:  'Playing Cards', correct:true}
   ]
  },
  {
   question : 'What is the most expensive video game made to date?',
   answer: [
     { text: 'Call Of Duty MW2', correct: false},
     { text: 'GTA V', correct: true},
     {text:  'World of Warcraft', correct:false},
     {text:  'Battlfield V', correct:false}
   ]
  },
  {
   question : 'What year was the first virtual reality headset created?',
   answer: [
     { text: '2000', correct: false},
     { text: '2005', correct: false},
     {text:  '1992', correct:false},
     {text:  '1995', correct:true}
   ]
  },
  {
   question : 'Which game featured an orange character hopping on a pyramid of cubes?',
   answer: [
     { text: 'Q Bert', correct: true},
     { text: 'Jungle King', correct: false},
     {text:  'Donkey Kong', correct:false},
     {text:  'Dig Dug', correct:false}
   ]
  },
  {
   question : 'Which of the following was one of the first "run and gun shooter" games?',
   answer: [
     { text: 'Spy Hunter', correct: false},
     { text: 'Paperboy', correct: false},
     {text:  'Front Line', correct:true},
     {text:  '1942', correct:false}
   ]
  },
  {
   question : 'Retsu and Geki are computer-controlled opponents in which video game?',
   answer: [
     { text: 'Tekken', correct: false},
     { text: 'Streets of Rage', correct: false},
     {text:  'Street Fighter', correct:true},
     {text:  'Mortal Kombat', correct:false}
   ]
  },
  {
    question : 'Mario first appeared in which classic video game?',
    answer: [
      { text: 'Zelda', correct: false},
      { text: 'Donkey Kong', correct: true},
      {text:  'Back to School', correct:false},
      {text:  'Paperboy', correct:false}
    ]
   },
]
let startButton= document.getElementById("start-quiz")
let nextButton = document.getElementById("next")
let questionElement= document.getElementById('quiz-questions')
let answerElement= document.getElementById('answer-btn')
let shuffleQuestions, currentQuestionIndex
let quizContainer = document.getElementById('quiz')
let submitButton = document.getElementById('submit')
let quizResults = document.getElementById('form-result')
let countRightAnswers = 0;
let questionResult = document.getElementById('answer-counter')
let answerButtons = document.getElementById('answer-btn')

startButton.addEventListener('click', buildQuiz); /*click to start quiz*/
nextButton.addEventListener('click', showNextQuestion);
function buildQuiz(){
  console.log("Start Game!");
  startButton.classList.add('hide');
  shuffleQuestions = QUESTION_BANK.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionElement.classList.remove('hide');
  answerButtons.classList.remove('hide');
  showNextQuestion();
  countRightAnswers = 0;/* counter to 0 */
  submitButton.addEventListener('click', showResults)
}
function showNextQuestion() {
  currentQuestionIndex++
  resetState()
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}
 /**
  * Adds button and sets answer to questions within button
  */
 function showQuestion(question){
  questionElement.innerText = question.question;
  question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', showAnswers)
    answerElement.appendChild(button)
  })
 }
 /**
  * removes next button and original answers
  */
 function resetState(){
   nextButton.classList.add('hide')
   while (answerElement.firstChild) {
     answerElement.removeChild
     (answerElement.firstChild)
   }
 }
 /**
  * creates an event to selectAnswer adds the next button after clicking answers
  */
function showAnswers(event) {
  let selectedAnswer = event.target;
  let isCorrect = selectedAnswer.dataset.correct;
  if (isCorrect) {
    countRightAnswers++;
  }
  // Show the answers in green/red
  Array.from(answerElement.children).forEach(button => {
    markAnswerWithColor(button, button.dataset.correct);
  })
  checkForGameOver();
}
function checkForGameOver() {
  if(shuffleQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    submitButton.classList.remove('hide');
    answerButtons.classList.add('hide');
    questionElement.classList.add('hide');
  }
}
function markAnswerWithColor(button, isCorrect) {
  resetAnswerColors(button)
  if (isCorrect) {
    button.classList.add('correct');
  } else {
    button.classList.add('incorrect')
  }
}
function resetAnswerColors(button) {
  button.classList.remove('correct');
  button.classList.remove('incorrect');
}
function showResults(){
  questionResult.classList.remove('hide');
  questionResult.innerHTML = (`You Answered ${countRightAnswers} out of 10 Answers Correct!!`)
  submitButton.classList.add('hide');
  answerButtons.classList.add('hide');
}

















