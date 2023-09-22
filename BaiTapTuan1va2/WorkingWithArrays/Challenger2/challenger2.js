
const calcAverageHumanAge = function(ageArr){
    const humanAge = ageArr.map(age =>{
        return age <= 2 ? 2 * age : 16 + age * 4;
    })
    const dogLessThan18Age = humanAge.filter(age => age <= 18);
    console.log("Dog less than 18 years old: ", dogLessThan18Age);
    
    const adultDogAge = humanAge.filter(age => age > 18);
    
    const totalDogAge = adultDogAge.reduce((acc, age) => acc + age, 0);

    return adultDogAge.length === 0 ? 0 : totalDogAge / adultDogAge.length;
}


const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(ages1));
console.log(calcAverageHumanAge(ages2));