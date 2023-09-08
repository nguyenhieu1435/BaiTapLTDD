

console.log("\nBegin Challenger 8")

import {calcTip} from "./challenger6.js"

const billValuesChal8 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

const calcAverage = (arr)=>{
    if (!Array.isArray(arr)){
        throw new Error("First parameter must be array");
    }
    // the requirment is calc avg contains in array
    const newArr = arr.filter(item => !isNaN(item));

    const sum = newArr.reduce((acc, cur)=>{
        return acc + cur
    }, 0)
    return Number((sum/newArr.length).toFixed(2));
}



try {
    billValuesChal8 && billValuesChal8.length > 0
    && billValuesChal8.forEach(bill=>{
        const tip = calcTip(bill)
        tips.push(tip)
        totals.push(bill + tip);
    })
    console.log("Tips:" , tips)
    console.log("Totals:", totals)
    console.log(`Avg totals ${calcAverage(totals)}`)
} catch (error) {
    console.log(error);
}
console.log("End Challenger 8\n\n")