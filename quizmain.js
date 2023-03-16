// Define quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of India?",
        choices: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "What is the largest country in the world?",
        choices: ["Russia", "China", "Canada", "USA"],
        answer: "Russia"
    },
    {
        question: "What is the currency of Japan?",
        choices: ["Yen", "Euro", "Dollar", "Pound"],
        answer: "Yen"
    }
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Display current question and choices
function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("choices").innerHTML = "";
    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerHTML = choice;
        button.onclick = () => {
            if (choice === question.answer) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < quizQuestions.length) {
                displayQuestion();
            } else {
                displayScore();
            }
        };
        document.getElementById("choices").appendChild(button);
    });
}

// Display final score
function displayScore() {
    document.getElementById("question").innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("submit").style.display = "none";
    document.getElementById("scoreboard").innerHTML = "";
}

// Start the quiz
displayQuestion();
