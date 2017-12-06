
var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", " Ask: what would your mother do?", "Ask: what would an Australian do"]

function answer() {
    var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};
