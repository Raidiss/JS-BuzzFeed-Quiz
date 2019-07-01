let readlineSync = require('readline-sync');

let personalityA = 0;

// letStart();
function letStart() {
  let answer = readlineSync.keyInYNStrict("Are you a woman?");
  if (answer) {
    console.log("Great. Because this game is just for empowered women.\n");
  } else {
    console.log("Ummm, Are you sure?, all human being has a woman inside.\n");
    letStart();
  }
}

// // QUESTION_1;
function questionOne() {
  let answer = readlineSync.keyInYNStrict("Question 1. \n Have you ever worn clothing with the labels/tags still attached?");
  if (answer) {
    console.log("It is ok. It happened to me too \n");
    personalityA += 1;
  } else {
    nestedQuestion();
  }
}

function nestedQuestion() {
  let answer = readlineSync.keyInYNStrict(" Ummm and What about wear the clothes the other way around?");
  if (answer) {
    console.log("Yay, it is the rigth way to go!! :-)\n ");
    personalityA += 2;
  } else {
    console.log("It is ok, wait for the moment, we are getting old :-(\n");
    personalityA += 1;
  }
}

function questionTwo() {
  let answer = readlineSync.keyInYNStrict(" Question 2. \n If someone has something between their teeth, would you tell them?");
  if (answer) {
    personalityA += 2;

  } else {
    personalityA += 1;
  }
}

let questionThree = () => {
  let answersQuestionThree = ['EXCITED TO TACKLE A NEW DAY!', '... IN THE MORNING?', 'TIRED, OBVIOUSLY!'],
    index = readlineSync.keyInSelect(answersQuestionThree, 'Question 3. \n How do you usually feel when you wake up in the morning? Pick a answer?', {
      cancel: false
    });

  switch (index) {
    case 0:
      personalityA += 3;
      break;
    case 1:
      personalityA += 2;
      break;
    case 2:
      personalityA += 1;
      break;
    default:
      questionThree();
  }
}

let questionFour = () => {
  let answersQuestionFour = ['YEAH, IT IS CALLED BEING HUMAN!', 'NO, NOT REALLY!'],
    index = readlineSync.keyInSelect(answersQuestionFour, 'Question 4. \n Do you ever feel sad for no real reason? Pick a answer?', {
      cancel: false
    });

  switch (index) {
    case 0:
      personalityA += 1;
      break;
    case 1:
      personalityA += 2;
      break;
    default:
      questionFour();
  }
}

let questionFive = () => {
  let answersQuestionFive = ['YES!', 'MMM, NOPE. WHO REALLY DOES?', 'I TRY!'],
    index = readlineSync.keyInSelect(answersQuestionFive, 'Question 5. \n Do you actually enjoy exercise? Pick a answer?', {
      cancel: false
    });

  switch (index) {
    case 0:
      nestedQuestion1()
      personalityA += 3;
      break;
    case 1:
      personalityA += 1;
      break;
    case 2:
      personalityA += 2;
      break;
    default:
      questionFive();
  }
}
let nestedQuestion1 = () => {
  let answersQuestionSix = ['PRETTY RECENTLY', 'I CAN NOT REMEMBER',"LOL, WHAT'S A VACATION?"],
    index = readlineSync.keyInSelect(answersQuestionSix, 'Question 6. \n When was the last time you had a vacation?', {
      cancel: false
    });

  switch (index) {
    case 0:
      personalityA += 1;
      break;
    case 1:
      personalityA += 1;
      break;
      case 2:
      personalityA += 1;
      break;
    default:
      nestedQuestion1();
  }
}
function calculatePersonality() {
  console.log('\n\n');
  if (personalityA >= 10) {
    console.log('Your personality type is: COMMANDER!!\n Commanders are natural-born leaders. People with this personality type are bold, imaginative and strong-willed leaders, alaways finding a way or make one!');
  } else if (personalityA >= 6) {

    console.log('Your personality type is: MEDIATOR!!\n Mediator personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better!');
  } else if (personalityA >= 4) {
    console.log('Your personality type is: Adventurer!!\n Adventurer personalities are true artists, but not necessarily in the typical sense where they’re out painting happy little trees.');
  }
}
//
console.log("DISCOVER YOUR PERSONALITY!\n")
//
let name = readlineSync.question("What is your name?\n")
//
console.log(`Hi ${name}. I'm going to ask you a series of questions. Based on your answers, I'm going to tell you what kind of personality you have.\n`)

letStart();
questionOne();
questionTwo();
questionThree()
questionFour();
questionFive();
calculatePersonality();