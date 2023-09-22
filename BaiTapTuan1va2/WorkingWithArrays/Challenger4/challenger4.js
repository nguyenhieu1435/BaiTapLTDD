let dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']}
]
/* 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. 
(The result is in grams of food, and the weight needs to be in kg) */
dogs = dogs.map(dog=>{
    return {
        ...dog,
        recommendedFood : Math.floor(dog.weight ** 0.75 * 28)
    }
})
/* 2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose)  */

const dogOfSarad = dogs.find(dog => dog.owners.includes('Sarah'));

if (dogOfSarad.curFood > (dogOfSarad.recommendedFood * 1.1)){
    console.log('Dog of Sarad eating too much');
} else if (dogOfSarad.curFood < (dogOfSarad.recommendedFood * 0.9)){
    console.log('Dog of Sarad eating too little');
}

/* 3. Create an array containing all owners of dogs who eat too much 'ownersEatTooMuch') and an array 
with all owners of dogs who eat too little ('ownersEatTooLittle'). */

let ownersEatTooMuch = dogs.filter(dog =>{
    return dog.curFood > (dog.recommendedFood * 1.1);
})
ownersEatTooMuch = ownersEatTooMuch.flatMap(dog => dog.owners);

let ownersEatTooLittle = dogs.filter(dog =>{
    return dog.curFood < (dog.recommendedFood * 0.9);
})  
ownersEatTooLittle = ownersEatTooLittle.flatMap(dog => dog.owners);

/* 4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!" */
const ownerNameEatTooMuch = ownersEatTooMuch.join(' and ');
console.log(`${ownerNameEatTooMuch}'s dogs eat too much!`);
const ownerNameEatTooLittle = ownersEatTooLittle.join(' and ');
console.log(`${ownerNameEatTooLittle}'s dogs eat too little!`);

/* 5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false) */

dogs.forEach(dog =>{
    if (dog.curFood === dog.recommendedFood){
        console.log(`Dog of ${dog.owners.length > 1 ? 
            `${dog.owners.join(' and ')} are` : 
            `${dog.owners[0]} is`
        } eating exactly the amount of food that is recommended`);
    } else {
        console.log(`Dog of ${dog.owners.length > 1 ? 
            `${dog.owners.join(' and ')} are` : 
            `${dog.owners[0]} is`
        } not eating exactly the amount of food that is recommended`);
    }
})

/* 6. Log to the console whether there is any dog eating an okay amount of food
(just true or false) */
dogs.forEach(dog =>{
    if (dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1)){
        console.log(`Dog of ${dog.owners.length > 1 ? 
            `${dog.owners.join(' and ')} are` : 
            `${dog.owners[0]} is`
        } eating an okay amount of food`);
    } else {
        console.log(`Dog of ${dog.owners.length > 1 ? 
            `${dog.owners.join(' and ')} are` : 
            `${dog.owners[0]} is`
        } not eating an okay amount of food`);
    }
})
/* 7. Create an array containing the dogs that are eating an okay amount of food (try
    to reuse the condition used in 6.) */
let dogsEatOkay = dogs.filter(dog =>{
    return dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1);
})
console.log("dogsEatOkay: ", dogsEatOkay);

/* 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects) */

let dogsCopy = dogs;
dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log("dogsCopy Sorted: ", dogsCopy);

