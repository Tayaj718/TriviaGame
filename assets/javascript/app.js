var questions = [
    {
        prompt: "Who was the first Robin of Teen Titans?\n(a) Damian Wayne\n\(b) Dick Grayson\n(c) Jason Todd\n(d) Tim Drake",
        answer: "b"
        console.log(this);
    }
]
var score = 0;

//CREATE A FOR LOOP
for(var i=0; i< questions.lenght; i++) {
var response = window.prompt(questions[i].prompt)
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');