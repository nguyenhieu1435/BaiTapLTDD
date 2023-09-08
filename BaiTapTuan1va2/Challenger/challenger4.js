
console.log("\nBegin Challenger 4")

const billValues = [275, 40, 430];


billValues && billValues.length > 0 && 
billValues.forEach(bill => {
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    tip = tip.toFixed(2) - 0;

    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}\n`)
})


console.log("End Challenger 4 \n\n")

