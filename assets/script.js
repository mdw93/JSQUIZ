const myTimer = document.getElementById("myTimer");

const startButton = document.getElementById("startGame");

let displayScore = document.getElementById('myScore')

let myScore = 0

let secondsLeft = 30;

displayScore.innerText

const myQuestion = document.getElementById('myQuestion');
const myFirst = document.getElementById('one');
const mySecond = document.getElementById('two');
const myThird = document.getElementById('three');
const myFourth = document.getElementById('four');

startButton.onclick = function() {
  const myCountdown = setInterval(function() {
    
    questionLog()
    myChanges()

    secondsLeft--;
    myTimer.textContent = secondsLeft + " seconds left until gameover!";

    if (questionBank === 0) {
      clearInterval(myCountdown)
      secondsLeft = 30
    }
    else if(secondsLeft === 0) {    
      clearInterval(myCountdown);
      myTimer.textContent = 'All questions answered!'
      alert('Your score ' + myScore + ' was saved to highscore')
      localStorage.setItem('score', myScore)
      myQuestion.innerText = questionBank[questionBank.length - 1].question
      myFirst.innerText = questionBank[questionBank.length - 1].first
      mySecond.innerText = questionBank[questionBank.length - 1].second
      myThird.innerText = questionBank[questionBank.length - 1].third
      myFourth.innerText = questionBank[questionBank.length - 1].fourth
      secondsLeft = 30
      displayScore.innerText = 'Your last score ' + localStorage.getItem('score')
    }  
  }, 1000);
};

function questionLog() {
  firstQuestion()
}

function firstQuestion(){
  myQuestion.innerText = questionBank[0].question
  myFirst.innerText = questionBank[0].first
  mySecond.innerText = questionBank[0].second
  myThird.innerText = questionBank[0].third
  myFourth.innerText = questionBank[0].fourth
}

function myChanges () {
  if (questionBank.length === 1) {
    lastQuestion(); } else {
    myFirst.onclick = function () {
    secondsLeft--
    secondsLeft--
    questionBank.shift()
    questionLog
    }
  }
}

mySecond.onclick = function () {
  if (questionBank.length === 1) {
    lastQuestion();
  } else {
    secondsLeft--
    secondsLeft--
    questionBank.shift()
    questionLog
  }
}

myThird.onclick = function () {
  if (questionBank.length === 1) {
    lastQuestion();
  } else {
    myScore++
    questionBank.shift()
    questionLog
  }
}

myFourth.onclick = function () {
  if (questionBank.length === 1) {
    lastQuestion();
  } else {
    secondsLeft--
    secondsLeft--
    questionBank.shift()
    questionLog
  }
}

function lastQuestion () {
  myFirst.onclick = function () {
    localStorage.setItem('score', myScore)
    alert('Your score ' + myScore + ' was saved to highscore')
    return
  }
  mySecond.onclick = function () {
    localStorage.setItem('score', myScore)
    alert('Your score ' + myScore + ' was saved to highscore')
    return
  }
  myThird.onclick = function () {
    myScore++
    localStorage.setItem('score', myScore)
    alert('Your score ' + myScore + ' was saved to highscore')   
    console.log(questionBank) 
    return
  }
  myFourth.onclick = function () {
    localStorage.setItem('score', myScore)
    alert('Your score ' + myScore + ' was saved to highscore')
    return
  }
}

displayScore.innerText = 'Your last score ' + localStorage.getItem('score')

let questionBank = [
  {
  question : 'What is a Boolean value?',
  first : 'String',
  second : 'Number',
  third : 'True or False',
  fourth : 'None of the above.',
  },{
  question : 'What is the abbreviation of JavaScript?',
  first : 'Jscript',
  second : 'Java',
  third : 'JS',
  fourth : 'None of the above.',
  },{
  question : 'What are the two main JS variables you should use?',
  first : 'Var and Const',
  second : 'Let and Var',
  third : 'Const and Let',
  fourth : 'None of the above.',
},{
  question : 'What type of language is javascript?',
  first : 'functional',
  second : 'Procedural',
  third : 'Object-oriented',
  fourth : 'None of the above.',
},{
  question : 'How to remove the first item of an array?',
  first : '.push()',
  second : '.remove()',
  third : '.shift()',
  fourth : '.split()',
},{
  question : 'What type of bracket is used in an array?',
  first : '||',
  second : '()',
  third : '{}',
  fourth : 'None of the above.',
},{
  question : 'What is the main issue that VAR causes?',
  first : 'It is unable to be updated',
  second : 'It can only be a string',
  third : 'It has bad scope',
  fourth : 'None of the above.',
},{
  question : 'Is Javascript case sensitive?',
  first : 'Definetly not',
  second : 'Sometimes it is',
  third : 'Of course',
  fourth : 'None of the above.',
},{
  question : 'What type of Brackets are used in an obkect?',
  first : '[]',
  second : '()',
  third : '{}',
  fourth : 'None of the above.',
},{
  question : 'What is the starting point of an array?',
  first : '-1',
  second : '1',
  third : '0',
  fourth : 'None of the above.',
},{
  question : 'What other main languages does javascript work with?',
  first : 'HTML',
  second : 'CSS',
  third : 'Both of the above.',
  fourth : 'None of the above.',
},{
  question : 'Is JavaScript cool?',
  first : 'Totally',
  second : 'Why are we even asking that question?',
  third : 'Both of the above.',
  fourth : 'None of the above.',
},{
    question : 'Good job on the quiz (refresh to try again)',
    first : 'I hope you had fun!',
    second : 'Click on highscore below for top five scores!',
    third : 'C is defintely not correct!',
    fourth : 'Or is it?',
}
]