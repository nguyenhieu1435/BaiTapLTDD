
console.log("\nBegin Challenger 3")


const calcAvgScore = (scores)=>{
    const newScores = scores.filter(score => isNaN(score) === false)

    const sum = newScores.reduce((a,b)=>a+(b-0),0)
    return Number((sum/newScores.length).toFixed(2));
}

const MIN_SCORE = 100;

const DolphinsScores = [96, 108, 89]
const KoalasScores = [88, 91, 110]

const avgDolphins = calcAvgScore(DolphinsScores);

const avgKoalas = calcAvgScore(KoalasScores);

if (avgDolphins > avgKoalas && avgDolphins >= MIN_SCORE){
    console.log("Dolphins team win the trophy")
} else if (avgDolphins < avgKoalas && avgKoalas >= MIN_SCORE){
    console.log("Koalas team win the trophy")
} else if (avgDolphins === avgKoalas && avgDolphins >= MIN_SCORE){
    console.log("The two teams draw")
} else {
    console.log("No team wins the trophy")
}

console.log("End Challenger 3\n\n")

