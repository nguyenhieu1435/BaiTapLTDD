console.log("\nBegin Challenger 1")

const calcBMI = (mass, height) => {
    return (mass / (height ** 2)).toFixed(1) - 0;
}

const calcBMI2 = (mass, height) => {
    return Number((mass / (Math.pow(height, 2))).toFixed(1));
}

const MarkInfo = {
    mass: 78,
    height: 1.69
}

const JohnInfo = {
    mass: 92,
    height: 1.95
}

const markHigherBMI = calcBMI(MarkInfo.mass, MarkInfo.height) > calcBMI(JohnInfo.mass, JohnInfo.height)

const MarkInfo2 = {
    mass: 95,
    height: 1.88
}

const JohnInfo2 = {
    mass: 85,
    height: 1.76
}

const markHigherBMI2 = calcBMI2(MarkInfo2.mass, MarkInfo2.height) > calcBMI2(JohnInfo2.mass, JohnInfo2.height);


console.log(`Data 1, markHigherBMI: ${markHigherBMI}`)
console.log(`Data 2, markHigherBMI2: ${markHigherBMI2}`);


export { calcBMI, calcBMI2 };


console.log("End Challenger 1 \n\n")