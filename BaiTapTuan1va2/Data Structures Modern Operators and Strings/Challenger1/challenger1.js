
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
//1. Create one player array for each team (variables 'players1' and 'players2')

const player1 = game.player[0];
const player2 = game.player[1];

/* 2. The first player in any player array is the goalkeeper and the others are field players
. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
('fieldPlayers') with all the remaining 10 field players */

const gk = player1[0];
const fieldPlayers = player1.slice(1);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)

// ES6 have spread operator 
const allPlayers = [...player1, ...player2];

/* 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' */

// deep copy
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// using optional chaining avoid error when odds is undefined
console.log(game.odds?.team1);
console.log(game.odds?.team2);
console.log(game.odds?.draw);


/* 6. Write a function ('printGoals') that receives an arbitrary number of player names 
(not an array) and prints each of them to the console, along with the number of goals that were 
scored in total (number of player names passed in) */

//using rest parameter
const printGoals = function (...players) {
    players.forEach(player => console.log(player));
    console.log(`${players.length} goals`);
}

printGoals(...game.scored);

/* 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
 without using an if/else statement or the ternary operator. */

const odds = game.odds;

const team1 = {
    name: game.team1,
    odd: odds?.team1,
}
const team2 = {
    name: game.team2,
    odd: odds?.team2,
}

let teamWin = team1.odd < team2.odd && team1;
teamWin = teamWin || odds.team2;

console.log(`Team ${teamWin.name} is more likely to win`);