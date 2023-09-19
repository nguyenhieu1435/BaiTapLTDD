const game = {
    player: [
        [
            "Tấn Trường",
            "Công Phượng",
            "Văn Hậu",
            "Văn Toàn",
            "Văn Đức",
            "Đình Trọng",
            "Đức Huy",
            "Đức Chinh",
            "Tiến Linh",
            "Văn Quyết",
            "Đức Lương",
        ],
        [
            "Văn Lâm",
            "Văn Công",
            "Văn Kiên",
            "Công Vinh",
            "Văn Thanh",
            "Văn Quyến",
            "Văn Thắng",
            "Hồng Duy",
            "Hoàng Đức",
            "Khắc Ngọc",
            "Chiến Thắng",
        ]
    ],
    team1: "Bayern Munich",
    team2: "Viet Nam",
    odds: {
        team1: 3.33,
        draw: 1,
        team2: 6.5,
    },
    scored: ["Davies", "Muller", "Lewandowski", "Kimmich"],
  
}

/* 
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
 */

game.scored && game.scored.forEach((player, index) => {
    console.log(`Goal ${index+1}: ${player}`);   
});

/* 2. Use a loop to calculate the average odd and log it to the console (We already
    studied how to calculate averages, you can go check if you don't remember) */

const oddsArray = Object.values(game.odds);
let sumOdds = oddsArray.reduce((sum, odd) => sum + odd, 0);
let averageOdd = oddsArray.length == 0 ? 0 : sumOdds / oddsArray.length;

console.log("AVG: ", averageOdd);

/* 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names  */

console.log(`Odd of victory ${game.team1}: ${game.odds?.team1}`);
console.log(`Odd of draw: ${game.odds?.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds?.team2}`);

/* 
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this: 
*/

const scorers = {};
game.scored && game.scored.forEach((player) => {
    scorers[player] = (scorers[player] || 0) + 1;
});

console.log(scorers);


