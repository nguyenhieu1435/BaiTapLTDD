
const show_result = document.getElementById("show_result");
let listNames = [
    "underscore_case",
    "first_name",
    "Some_Variable",
    "calculate_AGE",
    "delayed_departure",
]

function convertCamelCase(variableName = ""){
    let temp = variableName.toLowerCase();
    temp = temp.split("_").map((word, index) => {
        if (index > 0) {
            word = word[0].toUpperCase() + word.slice(1);
        }
        return word;
    }).join("");
    return temp;
}

let newListNames = listNames.map((variableName) => {
    return convertCamelCase(variableName);
    
})


show_result.innerHTML = newListNames.map((value, index)=>{
    
    return `<p>${value} ${Array(index+1).fill().map(()=>{return "✅"}).join("")}</p>`
}).join("")