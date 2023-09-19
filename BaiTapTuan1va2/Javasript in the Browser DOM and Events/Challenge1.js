const submitPredict = document.getElementById("submit-predict");
const submitReset = document.getElementById("submit-reset");
const scoreElement = document.getElementById("score");
const suggestElement = document.getElementById("suggest");
const guestNumberElement = document.getElementById("guestNumber");

const MIN = 1, MAX = 20;

function getRandomNumber(){
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

}
let secretNumber = getRandomNumber();
let score = 0;


suggestElement.innerHTML = "";
scoreElement.innerHTML = score;

submitPredict.addEventListener("click", handleClickSubmit)

function handleClickSubmit(){
    let numberPredict = Number(guestNumberElement.value);
    if(numberPredict === secretNumber){
        suggestElement.innerHTML = "Correct Number";
        score++;
        scoreElement.innerHTML = score;
        submitPredict.removeEventListener("click", handleClickSubmit);
        setTimeout(()=>{
            secretNumber = getRandomNumber();
            guestNumberElement.value = "";
            suggestElement.innerHTML = "";
            submitPredict.addEventListener("click", handleClickSubmit);
        }, 3000)
    } else {
        suggestResult(numberPredict, secretNumber);
    }
}

submitReset.addEventListener("click", function(){
    secretNumber = getRandomNumber();
    score = 0;
    scoreElement.innerHTML = score;
    guestNumberElement.value = "";
    suggestElement.innerHTML = "";
})

function suggestResult(numberPredict, secretNumber){
    if(numberPredict > secretNumber){
        suggestElement.innerHTML = "Too High";
    } else {
        suggestElement.innerHTML = "Too Low";
    }
}


