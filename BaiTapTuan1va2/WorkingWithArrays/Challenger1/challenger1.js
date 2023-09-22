
const JuliadArr = [3, 5, 2, 12, 7];
const KateArr = [4, 1, 15, 8, 4];

function checkDogs(dogsJulia, dogsKate) {
    let newDogsJulia = [...dogsJulia];
    newDogsJulia = newDogsJulia.slice(1, newDogsJulia.length - 2);

    const dogs = [...newDogsJulia, ...dogsKate];

    dogs.forEach(function (dog, i) {
        if (dog >= 5){
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    })
}

checkDogs(JuliadArr, KateArr);