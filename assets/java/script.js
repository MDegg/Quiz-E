let startButton= document.getElementById("start-quiz") 
let questionElement= document.getElementById('quiz-questions')   
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
   showQuestion(shuffleQuestions[currentQuestionIndex])

 }

 function showQuestion(questions){
  questionElement.innerText = questions.question;
 }


 function selectAnswer(){


 }

 const questions = [
 {
  question : 'What was the first commercially successful video game?',
  answer: [
    { text: 'Pong', correct: true},
    { text: 'Pac Man', correct: false}
  ]

 }

 ]