'use strict';

var userName = prompt('Why don\'t we play a guessing game to know more about me. Let\'s start with your name:');
console.log('User name is: ', userName);

var wrongAnswerMsg = 'Sorry you got it wrong';
var rightAnswerMsg = 'You guessed it right, '+ userName;

var questions = ['Is Football my favourite sport?'];
questions.push('Is Kobe better than Lebron?');
questions.push('Would Duke win NCAA tournament?');
questions.push('Do I think Game Of Thrones tv show is good?');
questions.push('Is coming up with questions the toughest part of the lab?');
questions.push('What is my lucky number?');
questions.push('What is one of my favourite sports to watch?');

var luckyNum = Math.floor(Math.random() * 10);

var totalCorrect = 0;

var answer;

function validate_answers (answer)
{
  if('Y' === answer.substr(0,1).toUpperCase()){
     return true;
    
  }
 else
 {return false;
}
}

for(var i = 0; i < 5; i++){
  answer = prompt(questions[i], 'Y');
  validate_answers(answer);
  if (validate_answers(answer))
    {
      totalCorrect++;
      alert(rightAnswerMsg);
    } 
  else{
    alert(wrongAnswerMsg);
  }

}

var number = 0;
var counter = 1;

for(var guess = 0; guess < 4; guess++) {
  number = parseInt(prompt(questions[5]));
  if(number === luckyNum) {
    totalCorrect++;
    alert('Yay you got it right. Took you ' + counter + ' guesses');
    break;
  }
  if (number < luckyNum) {
    alert('sorry you guessed too low');
    counter++;
  } else if (number > luckyNum) {
    alert('you guessed too high');
    counter++;
  } else if (isNaN(number) || number === null) {
    alert('please enter an actual number');
    counter++;
  }
}

console.log('total guesses for question 6:', counter);

var sports = ['Basketball', 'Football', 'Cricket'];
var flag = false;
var tries = 1;

var allSports = ' ';

while(tries <= 7){
  answer = prompt(questions[6]);
  tries++;

  for (var si = 0; si < sports.length; si++) {

    if (answer === sports[si]) {
      totalCorrect++;
      alert(rightAnswerMsg);
      flag = true;
      break;
    }
  }

  if (!flag) {
    alert('incorrect guess - try again');
  }
  else{
    break;
  }

}

for(var ss = 0; ss < sports.length; ss++){
  allSports = allSports + sports[ss] + ' ';
}

console.log('Allsports string: ', allSports);
alert('I like to watch following sports: ' + allSports);

console.log('total right answers: ', totalCorrect);
alert('You got ' + totalCorrect + ' out of 7, ' + userName);
