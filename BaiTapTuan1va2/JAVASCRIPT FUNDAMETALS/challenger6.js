console.log("\nBegin Challenger 6")

export const calcTip = (bill)=>{
    if (isNaN(bill)){
        throw new Error("Bill value must be number!");
    }
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    tip = Number(tip.toFixed(2));
    return tip;
}

const tips = [];
const total = [];
// if declare billValues will duplicate with another file variable
const billValuesChal6 = [125, 555, 44];

try {
    billValuesChal6 && billValuesChal6.length > 0 &&
    billValuesChal6.forEach((bill)=>{
        const tip = calcTip(bill);
        tips.push(tip);
        total.push(bill + tip);
    })
} catch (error) {
    console.log(error)
}
console.log("Bills", billValuesChal6)
console.log("Tips", tips);
console.log("Total", total);


console.log("End Challenger 6 \n\n")