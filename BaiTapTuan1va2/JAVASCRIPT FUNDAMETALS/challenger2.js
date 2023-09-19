import { calcBMI, calcBMI2 } from "./challenger1.js"
console.log("\nBegin Challenger 2")



const MarkInfo = {
    mass: 78,
    height: 1.69
}

const JohnInfo = {
    mass: 92,
    height: 1.95
}

const MarkInfo2 = {
    mass: 95,
    height: 1.88
}

const JohnInfo2 = {
    mass: 85,
    height: 1.76
}


const markHigherBMI = calcBMI(MarkInfo.mass, MarkInfo.height) > calcBMI(JohnInfo.mass, JohnInfo.height)

const markHigherBMI2 = calcBMI2(MarkInfo2.mass, MarkInfo2.height) > calcBMI2(JohnInfo2.mass, JohnInfo2.height);

/* 1. Print a nice output to the console, saying who has the higher BMI.The message
is either "Mark's BMI is higher than John's!"
or "John's BMI is higher than Mark's!"
 */
if (markHigherBMI) {
    console.log(`Data 1, Mark's BMI is higher than John's!`)
} else {
    console.log(`Data 1, John's BMI is higher than Mark's!`)
}

if (markHigherBMI2) {
    console.log(`Data 2, Mark's BMI is higher than John's!`)
} else {
    console.log(`Data 2, John's BMI is higher than Mark's!`)
}
/* 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
BMI(28.3) is higher than John 's (23.9)!
*/

if (markHigherBMI) {
    console.log(`Mark's BMI (${calcBMI(MarkInfo.mass, MarkInfo.height)}) is higher than John's (${calcBMI(JohnInfo.mass, JohnInfo.height)})!`)
} else {
    console.log(`John's BMI (${calcBMI(MarkInfo.mass, MarkInfo.height)}) is lower than Mark's (${calcBMI(JohnInfo.mass, JohnInfo.height)}) !`)
}


console.log("End Challenger 2 \n\n")