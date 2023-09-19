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

let gameEvents = new Map(
    [
        [1, 'Begin'],
        [4, 'Yellow Card'],
        [8, 'Goal'],
        [11, 'Substitution'],
        [14, 'Red Card'],
        [16, 'Substitution'],
        [64, 'Yellow Card'],
        [92, 'End']
    ]
)

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...gameEvents.values()];
console.log(events);

/* 2. After the game has finished, is was found that the yellow card from minute 64 was
 unfair. So remove this event from the game events log. */


 gameEvents.delete(64);
console.log("After remove", gameEvents);

/* 3. Compute and log the following string to the console: "An event happened, on average, 
every 9 minutes" (keep in mind that a game has 90 minutes) */

console.log(`An event happened, on average, every ${Math.floor(90 / gameEvents.size)} minutes`);

/* 4. Loop over 'gameEvents' and log each element to the console, marking whether it's 
in the first half or second half (after 45 min) of the game, like this:
 */

for (const [key, value] of gameEvents) {
    console.log(`[${key > 45 ? 'SECOND' : 'FIRST'} HALF] ${key}: ${value.toUpperCase()}`);
}