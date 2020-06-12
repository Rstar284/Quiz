const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const showButton = document.getElementById('show-img-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()  
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '_______means puting things together?',
    answers: [
      { text: 'Addition', correct: true },
      { text: 'Subtraction' }
    ]
  },
  {
    question: 'Adding numbers horizontely or verticaly gives the same answer?',
    answers: [
      { text: 'False' },
      { text: 'True', correct: true},
    ]
  },
  {
    question: '18 + 2',
    answers: [
      { text: '0.3245', correct: false },
      { text: '20', correct: true },
      { text: '7575817410671', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 +10?',
    answers: [
      { text: '6', correct: false },
      { text: '14', correct: true }
    ]
  },
  {
   question: 'What is the answer of ADDITION called???',
   answers: [
    { text: 'sum', correct: true},
    { text: 'difference'},
    { text: 'add'},
    {text: 'minus'}
   ]
  },
  {
    question: 'Two numbers can be added in any order, the sum always remains the _______.',
    answers: [
      { text: 'different'},
      { text: 'zero'},
      { text: 'same', correct: true}
    ]
  },
  {
    question: 'When we add 0 to any number, we get the same number as the sum',
    answers: [
      { text: 'True', correct: true},
      { text: 'False'}
    ]
  },
  {
    question: '2 + 1 = 3, which property of ADDITION IS USED??',
    answers: [
      { text: 'property of adding 0'},
      { text: 'property of adding in any order'},
      { text: 'property of  adding 1', correct: true}
    ]
  },
  {
    question: 'which is not a KEY WORD of addition???',
    answers: [
      { text: 'In all'},
      { text: 'total'},
      { text: 'sum'},
      { text: 'left', correct: true}
    ]
  },
  {
    question: '12 + 7',
    answers: [
      { text: '18'},
      { text: '19', correct: true},
      { text: '17'}
    ]
  },
  {
    question: 'you can write the addition sums LEFT to RIGHT',
    answers: [
      { text: 'Horizontal ADDITION', correct: true},
      { text: 'Vertical ADDITION', correct: false}
    ]
  },
  {
    question: 'for numbers whose SUM is MORE THAN 10, first make group of ______ and then ADD',
    answers: [
      { text: '5'},
      { text: '20'},
      { text: '10', correct: true}
    ]
  },
  {
    question: 'what MAKES 10???',
    answers: [
      { text: '6 + 3'},
      { text: '3+5'},
      { text: '7 + 3', correct: true}
    ]
  },
  {
    question: 'ADD 4 + 3 + 6???',
    answers: [
      { text: '13', correct: true},
      { text: '12'},
      { text: '14'}
    ]
  },
  {
    question: 'Which addition sentence is corect for number, 19???',
    answers: [
      { text: '9 + 5'},
      { text: '10 + 9', correct: true},
      { text: '7+ 8'}
    ]
  },
  {
    question: 'Threre are 7 flowers in the pot, Rida put 6 more. HOW MANY FLOWERS ARE THERE IN ALL???',
    answers: [
      { text: '20'},
      { text: '15'},
      { text: '13', correct: true}
    ]
  }]
