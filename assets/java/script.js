let startButton= document.getElementById("start-quiz")
let nextButton = document.getElementById("next") 
let questionElement= document.getElementById('quiz-questions') 
let answerElement= document.getElementById('answer-btn')
let shuffleQuestions, currentQuestionIndex
//let questionElement = document.getElementById('quiz-question')
let answerButtons = document.getElementById('answer-btn')

startButton.addEventListener('click', buildQuiz);

 function buildQuiz(){
   console.log("Start Game!");
   startButton.classList.add('hide');
   shuffleQuestions = questions.sort(() => Math.random() - .5);
   currentQuestionIndex = 0
   questionElement.classList.remove('hide');
   answerButtons.classList.remove('hide');
   nextQuestion()
        
   }

 function nextQuestion(){
   resetState()
   showQuestion(shuffleQuestions[currentQuestionIndex])

 }

 function showQuestion(questions){
  questionElement.innerText = questions.question;
  questions.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
      button.dataset.correct = answer.correct
      console.log('correct!')
    }
  button.addEventListener('click', selectAnswer)
  answerElement.appendChild(button)
  })
 }

 function resetState(){
   nextButton.classList.add('hide')
   while (answerElement.firstChild) {
     answerElement.removeChild
     (answerElement.firstChild)
   }
 }

 function selectAnswer(event){
    let buttonSelect = event.target
    let correct = buttonSelect.dataset.correct

 }

 const questions = [
 {
  question : 'What was the first commercially successful video game?',
  answer: [
    { text: 'Pong', correct: true},
    { text: 'Pac Man', correct: false},
    {text:  'Tetris', correct:false},
    {text:  'Space Invaders', correct:false}
  ]

 },

 {
  question : 'What was the first commercially successful video game?',
  answer: [
    { text: 'Pong', correct: true},
    { text: 'Pac Man', correct: false}
  ]

 }
 ]