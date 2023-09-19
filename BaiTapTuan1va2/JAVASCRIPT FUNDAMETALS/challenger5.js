console.log("\nBegin Challenger 5")

const calcAverage = (score1, score2, score3)=>{
   
    if (isNaN(score1) || isNaN(score2) || isNaN(score3)){
        throw new Error("All score must be Number!");
    }
    return Number(((Number(score1) + Number(score2) + Number(score3))/3).toFixed(2));
}

const checkWinner = (avgDolhins, avgKoalas)=>{
    if (isNaN(avgDolhins) || isNaN(avgKoalas)){
        console.log("checkWinner func need all parameter are Number");
        return;
    }
    
    const numberAvgDolhins = Number(avgDolhins)
    const numberAvgKoalas = Number(avgKoalas)

    if (numberAvgDolhins >= numberAvgKoalas * 2){
        console.log(`Dolphins win (${numberAvgDolhins} vs. ${numberAvgKoalas})`);
    } else if (numberAvgKoalas >= numberAvgDolhins * 2){
        console.log(`Koalas win (${numberAvgKoalas} vs. ${numberAvgDolhins})`);
    } else {
        console.log("No team wins");
    }
}

try {
    const scoreAvgDolhins = calcAverage(44, 23, 71);
    const scoreAvgKoalas = calcAverage(65, 54, 49);
    
    console.log("Data 1 result: ")
    checkWinner(scoreAvgDolhins, scoreAvgKoalas)
    
    const scoreAvgDolhins2 = calcAverage(85, 54, 41);
    const scoreAvgKholas2 = calcAverage(23, 34, 27);
    console.log("Data 2 result: ")
    checkWinner(scoreAvgDolhins2, scoreAvgKholas2);
} catch (error) {
    console.log(error)
}

console.log("End Challenger 5 \n\n")
