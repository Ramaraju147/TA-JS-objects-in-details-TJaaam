//Prototypal pattern

let questionMethods = {
    isAnswerCorrect: function(index){
        return index===this.getCorrectAnswer?true:false;
    },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex]
    }

}

function createQuestion(title,options,correctAnswerIndex){
    let question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    return question
}

// Pseudoclassical Pattern 

function createQuestion(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;

    createQuestion.prototype = {
        isAnswerCorrect: function(index){
            return index===this.getCorrectAnswer?true:false;
        },
        getCorrectAnswer: function(){
            return this.options[this.correctAnswerIndex]
        }
    
    }
}


// Create using class

class Question{
    constructor(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index===this.getCorrectAnswer?true:false;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }
}