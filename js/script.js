console.log("script.js connected!");

let selectedAnswers = [];

let questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
    let buttons = block.querySelectorAll(".answer-btn");
    buttons.forEach(button=> {
        button.addEventListener("click", () =>{

            buttons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            selectedAnswers[index]= parseInt(button.dataset.points);
        });
    });

});

document.getElementById("show-result").addEventListener("click", displayResult);

function displayResult() {
    let total = 0;
    selectedAnswers.forEach(points => {
        total += points;
    });
    
    let resultText = "";
    if (total <= 6) {
        resultText = "You are Rafael Nadal who is disciplinedand consistent.";
    }
    else if (total <= 9) {
        resultText = "You are Roger Federer who is creative and stylish.";
    }
    else if (total<= 12) {
        resultText = "You are Novak Djokovic who is strategic and mentally strong.";
    }
    else {
        resultText = "You are Carlos Alcaraz who is agressive and powerful.";
    }

    document.getElementById("result-text").textContent = resultText;
    document.getElementById("result-container").style.display = "block";
}