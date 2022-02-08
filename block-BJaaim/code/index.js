let questions = [{
    title: "Inside which HTML element do we put the JavaScript?",
    options: ["javascript","sript","scripting","js"],
    correctAnswer: "sript",
    id: 1
},
{
    title: "What does SQL stand for?",
    options: ["Strong Question Language","Structured Query Language","Structured Question Language","Safe Query Language"],
    correctAnswer: "Structured Query Language",
    id: 2
},
{
    title: "JavaScript is a ___ -side programming language.",
    options: ["Client","Server","Both"," None"],
    correctAnswer: "Both",
    id: 3
},
{
    title: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    options: ["alertBox(“Hello DataFlair!”);","alert(Hello DataFlair!);","msgAlert(“Hello DataFlair!”);","alert(“Hello DataFlair!”);"],
    correctAnswer: "alert(“Hello DataFlair!”);",
    id: 4
},
{
    title: "How do you find the minimum of x and y using JavaScript?",
    options: ["min(x,y);","Math.min(x,y)","Math.min(xy)","min(xy);"],
    correctAnswer: "Math.min(x,y)",
    id: 5
},
{
    title: "Which JavaScript label catches all the values, except for the ones specified?",
    options: ["catch","label","try","default"],
    correctAnswer: "default",
    id: 6
},
]

class Quiz{
    constructor(title,options,correctAnswer,id){
      this.title = title;
      this.options = options;
      this.correctAnswer = correctAnswer;
      this.id = id
    }
    isCorrect(answer){
      return this.correctAnswer === answer
    }
    getCorrectAnswer(){
      return this.correctAnswer;
    }
    createUI(options){
        let opts = ''
        options.forEach((o,id) => {
            opts += ` <input type="radio" id="option-${id}" name="question" value="${o}">
            <label for="option-${id}">"${o}"</label> <br>`
        })
        opts+=`<button type="submit">Submit</button>`
        return opts
    }
  }

  class QuizList{
    constructor(list=[],activeIndex=1,score=0){
      this.list = list.map((l) => {
          let q = new Quiz(l.title,l.options,l.correctAnswer,l.id)
          return q;
    });
      this.activeIndex = activeIndex;
      this.score = score;
    }
    nextQuestion(){
      if(this.list[this.activeIndex])
      {
      this.activeIndex += 1
      this.createUI() 
      }else{
        this.activeIndex += 1
      }
    }
    createUI(){
      let ques = this.list[this.activeIndex-1];
      question.innerHTML = this.activeIndex;
      para.innerHTML = ques.title;
      let options = ques.createUI(ques.options)
      form.innerHTML = options;
      console.log(ques);
      if(this.activeIndex === this.list.length){
        showResult.classList.remove("hide")
      }else{
        showResult.classList.add("hide") 
      }
    }
    updateScore(event){
    event.preventDefault();
    let quest = this.list[this.activeIndex-1];
    if(this.activeIndex <= this.list.length){
    if(form.elements.question.value && form.elements.question.value === quest.getCorrectAnswer()){
        this.score += 1
    }
    console.log(this.score);
    this.nextQuestion()
    }}
  }

  let question = document.querySelector(".ques-no");
  let para = document.querySelector(".ques");
  let form = document.querySelector("form");
  let next = document.querySelector(".next");
  let showResult = document.querySelector(".show-result");

  let quiz = new QuizList(questions,1);
  quiz.createUI()

showResult.addEventListener("click",() => alert(`Score is ${quiz.score}`))
next.addEventListener("click",quiz.nextQuestion.bind(quiz))
form.addEventListener("submit",(event) => quiz.updateScore.call(quiz,event))

