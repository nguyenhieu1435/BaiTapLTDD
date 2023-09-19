/* Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
 */

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
}


/* 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
 */


let isStop = false;

const registerNewAnswer = function (poll) {
    let result = prompt(`
${poll.question}    
${poll?.options?.map((option) => {
        return option + "\n";   
    }).join("")}
(Write option number)
    `);
    if (null == result) {
        isStop = true;
        return;
    }
    result = result.trim();
    const listAswer = poll.options?.map((answer, index) => answer[0]);
    
    if (! listAswer.includes(result)){
    
        alert("Wrong answer! Please try again");
        return;
    }
    poll.answers[result] += 1;
    displayResults(poll.answers.join(", "));
}
const displayResults = function (type) {
    if (typeof type == "string"){
        console.log(`Poll results are ${type}`);
    } else if (Array.isArray(type)){
        console.log(type);
    }

}


while(!isStop){
    registerNewAnswer(poll);
}