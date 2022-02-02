// Without Object
let title = "Where is the capital of Jordan";

let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];

let correctAnswerIndex = 1

function isAnswerCorrect(index){
    return index===correctAnswerIndex?true:false;
}

function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

// Organize using object

let ques1 = {
    title: "Where is the capital of Jordan",
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        return index===correctAnswerIndex?true:false;
    },
    getCorrectAnswer(){
        return options[correctAnswerIndex];
    }
}

// Use a function to create object

function createQuestion(title,options,correctAnswerIndex){
    let question = {}
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index){
        return index===question.correctAnswerIndex?true:false;
    }
    question.getCorrectAnswer = function(){
        return question.options[question.correctAnswerIndex];
    }
}

let ques1 = createQuestion("Where is the capital of Jordan",['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)


// Convert the function to use `this` keyword

function createQuestion(data){
    let {title,options,correctAnswerIndex} = data;
    let question = {}
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index){
        return index===this.correctAnswerIndex?true:false;
    }
    question.getCorrectAnswer = function(){
        return this.options[this.correctAnswerIndex];
    }
    return question;
}

const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };

  let ques1 = createQuestion(testData)


  console.log(ques1.title)
  console.log(ques1.options)
  console.log(ques1.correctAnswerIndex)
  console.log(ques1.isAnswerCorrect(2))
  console.log(ques1.getCorrectAnswer())