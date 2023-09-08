
console.log("\nBegin Challenger 7")


const calcBMI = (user)=> {
    const {mass, height} = user;

    if (isNaN(mass) || isNaN(height)){
        throw new Error("Mass and Height must be number");
    }
    const BMI = Number((mass / (height ** 2)).toFixed(1));

    return {
        ...user,
        BMI
    }
}

let johnInfo = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95 
}
let markInfo = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69
}

try {
    johnInfo = calcBMI(johnInfo);
    markInfo = calcBMI(markInfo);

    if (johnInfo.BMI > markInfo.BMI){
        console.log(`${johnInfo.fullname.split(/\s/)[0]+"'s"} BMI (${johnInfo.BMI}) is higher than ${markInfo.fullname.split(/\s/)[0]+"'s"} (${markInfo.BMI})!`)
    } else if (markInfo.BMI > johnInfo.BMI) {
        console.log(`${markInfo.fullname.split(/\s/)[0]+"'s"} BMI (${markInfo.BMI}) is higher than ${johnInfo.fullname.split(/\s/)[0]+"'s"} (${johnInfo.BMI})!`)
    } else {
        console.log(`Both ${johnInfo.fullname.split(/\s/)[0]+"'s"} and ${markInfo.fullname.split(/\s/)[0]+"'s"} equal`)
    }

} catch (error) {
    console.log(error);   
}

console.log("End Challenger 7\n\n")