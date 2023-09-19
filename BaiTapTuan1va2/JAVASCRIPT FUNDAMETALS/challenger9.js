
console.log("\nBegin Challenger 9")

const printForecast = (arr)=>{
    if (!Array.isArray(arr)){
        throw new Error("First parameter must be array");
    }
    let result = "";

    arr.forEach((temp,index)=>{
        if (index === 0){
            result = "..."
        }
        result += `${temp}oC in ${index+1} days...`;
    })
    console.log(result);
}


const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

printForecast(data1)
printForecast(data2)

console.log("End Challenger 9\n\n")