const questions = [
     {
        question: "Which of the following is the building block of proteins?",
        answer: [
            { text: "Fatty acids", correct: false},
            { text: "Amino acids", correct: true},
            { text: "Monosaccharides", correct: false },
            { text: "Nucleotides acids", correct: false },
        ]
    },
    {
        question: "Which of these is a disaccharide commonly found in milk?",
        answer: [
            { text: "Glucose", correct: false },
            { text: "Sucrose", correct: false },
            { text: "Lactose", correct: true },
            { text: "Maltose", correct: false },
        ]
    },
    {
        question: "Enzymes act as biological catalysts because they:",
        answer: [
            { text: "Increase the activation energy", correct: false },
            { text: "Decrease the activation energy", correct: true },
            { text: "Are consumed in the reaction", correct: false },
            { text: "Provide energy to the reaction", correct: false },
        ]
    },
    {
        question: "Which vitamin is essential for collagen synthesis and wound healing?",
        answer: [
            { text: "Vitamin A", correct: false },
            { text: "Decrease the activation energy", correct: true },
            { text: "Are consumed in the reaction", correct: false },
            { text: "Provide energy to the reaction", correct: false },
        ]
    },
    {
        question: "Where does gas exchange of oxygen and carbon dioxide mainly take place?",
        answer: [
            { text: "Stomach", correct: false },
            { text: "Kidneys", correct: false },
            { text: "Alveoli", correct: true },
            { text: "Heart", correct: false },
        ]
    },
    {
        question: "Which plane divides the body into left and right halves?",
        answer: [
            { text: "Frontal plane", correct: false },
            { text: "Sagittal plane", correct: true },
            { text: "Transverse plane", correct: false },
            { text: "Coronal plane", correct: false },
        ]
    },
    {
        question: "uhmmm may sasabihin ako sayo.",
        answer: [
            { text: "Ano yon?", correct: true },
            { text: "Papansin lang?", correct: true },
            { text: "Ano ba yan?", correct: true },
            { text: "Anoooo?", correct: true },
        ]
    },
    {
        question: "Alam mo ba...",
        answer: [
            { text: "Anooo?", correct: true },
            { text: "Hindi syempre", correct: true },
            { text: "Hindi", correct: true },
            { text: "Ano ba yonnn?", correct: true },
        ]
    },
    {
        question: "Maganda ka daw sabi ni...",
        answer: [
            { text: "syempre ako na toh eh", correct: true },
            { text: "sabi nino?", correct: true },
            { text: "maganda talaga ako", correct: true },
            { text: "baliw", correct: true },
        ]
    },
    {
        question: "crush ka ng gumawa nito, end piliin mo after nito",
        answer: [
            { text: "Maniwala", correct: true },
            { text: "Wehhhh?", correct: true },
            { text: "Okay", correct: true },
            { text: "baliw", correct: true },
        ]
    },

];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    document.getElementById("end-btn").style.display = "none";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
    document.getElementById("end-btn").style.display = "inline-block";
    
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();