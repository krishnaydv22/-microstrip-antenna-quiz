//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var optionList = [optionA, optionB, optionC, optionD];
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Which of the following is the most common version of the printed antenna?",

    choiceA: "Horn antenna",
    choiceB: " Micro-strip antenna",
    choiceC: "Wire antenna",
    choiceD: " Lens antenna",
    correctAnswer: 2
}, {
    question: "The shape of the patch in rectangular Micro-strip antenna is",

    choiceA: "Circular",
    choiceB: "Cylindrical",
    choiceC: "Rectangular",
    choiceD: "Elliptical",
    correctAnswer: 3
}, {
    question: "For most of the micro strip substrates",

    choiceA: "Conductor loss is more significant than di electric loss",
    choiceB: "Di electric loss is more significant than conductor loss",
    choiceC: "Conductor loss is not significant",
    choiceD: "Di-electric loss is less significant	A) Conductor loss is more significant than di electric loss	U",
    correctAnswer: 1
}, {
    question: "Which of the following allows independent optimization of feed mechanism?",

    choiceA: "Micro-strip line feed",
    choiceB: "Coaxial feed",
    choiceC: "Aperture coupling",
    choiceD: "Proximity Coupling",
    correctAnswer: 3
}, {
    question: " Which of the following is the disadvantage of Micro-strip line feeding?",

    choiceA: " Spurious feed radiation increases with increase in substrate thickness",
    choiceB: "Spurious feed radiation decreases with increase in substrate thickness",
    choiceC: "There is no Bandwidth limit",
    choiceD: "Low spurious radiation",
    correctAnswer: 1
}, {
    question: "The wave number in air for EM wave propagating on a micro strip line operating at 10GHz is given by",

    choiceA: "200",
    choiceB: "211",
    choiceC: "312",
    choiceD: "209",
    correctAnswer: 4
}, {
    question: "Bandwidth of my micro-strip antenna can be increase by following method",

    choiceA: "eliminate partial grounds",
    choiceB: "increase substrate grounds",
    choiceC: "exclude slots",
    choiceD: " exclude round shapes",
    correctAnswer: 2
}, {
    question: "Which of the following feeding has largest bandwidth?",

    choiceA: "Micro-strip line feed",
    choiceB: "Proximity coupling feed",
    choiceC: "Coaxial coupling feed",
    choiceD: "Aperture Coupled feed",
    correctAnswer: 2
}, {
    question: "The effective di electric constant of a microstrip line is",

    choiceA: " Equal to one",
    choiceB: " Equal to the permittivity of the material",
    choiceC: " Cannot be predicted",
    choiceD: "Lies between 1 and the relative permittivity of the micro strip line",
    correctAnswer: 4
}, {
    question: "Disadvantage of microstrip patch antenna is ___________",

    choiceA: "Higher efficiency",
    choiceB: "Lower gain",
    choiceC: "High power handling capacity",
    choiceD: "Inherity high impedance bandwidth",
    correctAnswer: 2
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    // quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    for (let i = 0; i < optionList.length; i++) {
        const optins = optionList[i];
        optins.style.background = "#fff";
        optins.disabled = false;
    }
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know the concepts!!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    console.log(answer);
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
        }
        else {
            optionList[answer-1].style.background = "#FF0000";
        }
        optionList[questions[questionIndex].correctAnswer-1].style.background = "#008000";
        questionIndex++;
        for (let i = 0; i < optionList.length; i++) {
            const optins = optionList[i];
            optins.disabled = true;
        }
        setTimeout(getQuestion,2000);
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
        }
        else {
            optionList[answer-1].style.background = "#FF0000";
        }
        optionList[questions[questionIndex].correctAnswer-1].style.background = "#008000";
        choices.style.display = "none";
        for (let i = 0; i < optionList.length; i++) {
            const optins = optionList[i];
            optins.disabled = true;
        }
        showScore();
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
