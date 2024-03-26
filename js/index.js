// There are 3 rounds defined, each of which has multiple matchups of 2 teams
// You will need to fill in the teams and the score of the match into the respective fields
// You should also add status: true if you are adding a new matchup so it's displayed as active
// There is also an optional date parameter in case you want to show it
// Inspired by https://codepen.io/jbeason/pen/Wbaedb mention on website https://blog.codepen.io/2018/02/16/need-make-tournament-bracket/ autor: Joe Beason
let sectors = [
	// Sector A
	{
		name: "SectorA",
		first_matchups: [
			{
				team1: "K",
				team2: "O",

				active: true,
			},
			{
				team1: "K",
				team2: "O",
			},
		],
		second_matchup: {
			team1: "",
			team2: "",
		},
	},
	// Sector B
	{
		first_matchups: [
			{
				team1: "K",
				team2: "O",
			},
			{
				team1: "K",
				team2: "O",
			},
		],
		second_matchup: {
			team1: "K",
			team2: "O",
		},
	},
	// Sector C
	{
		first_matchups: [
			{
				team1: "K",
				team2: "O",
			},
			{
				team1: "K",
				team2: "O",
			},
		],
		second_mathchup: {
			team1: "K",
			team2: "O",
		},
	},
];

// Sector D
sector_d = {
	team1: "K",
	team2: "O",
	team3: "L",
};
// Change null to a string with the team's name
// like
// let champion = "ZSB-E";
let champion = null;

addEventListener("load", (ev) => {
	for (const sector of sectors) {
		for (let matchup of sector.first_matchups) {
			// matchup
		}
		sector.second_matchup;
	}

	// Adding matchups
	// for (const round of obj) {
	// 	let rounds = document.querySelectorAll(`.${round.name} .matchup`);

	// 	for (let i = 0; i < round.matchups.length; i++) {
	// 		const elem = rounds[i];
	// 		const matchup = round.matchups[i];
	// 		for (let j = 0; j < matchup.teams.length; j++) {
	// 			if (matchup.status !== undefined || matchup.status) {
	// 				elem.innerHTML += `<li class="team current-team">${matchup.teams[j]}<span class="score">${matchup.score[j]}</span></li>`;
	// 				elem.classList.add("active");
	// 			} else {
	// 				elem.innerHTML += `<li class="team">&nbsp;<span class="score"></span></li>`;
	// 			}
	// 		}
	// 	}
	// }

	// if (champion !== null) {
	// 	let champs = document.getElementById("champions");
	// 	champs.classList.add("active");
	// 	champs.textContent = champion;
	// }
});
