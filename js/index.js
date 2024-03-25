// There are 3 rounds defined, each of which has multiple matchups of 2 teams
// You will need to fill in the teams and the score of the match into the respective fields
// You should also add status: true if you are adding a new matchup so it's displayed as active
// There is also an optional date parameter in case you want to show it
// Inspired by https://codepen.io/jbeason/pen/Wbaedb mention on website https://blog.codepen.io/2018/02/16/need-make-tournament-bracket/ autor: Joe Beason
let obj = [
	{
		name: "round-one",
		matchups: [
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
		],
	},
	{
		name: "round-two",
		matchups: [
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
			{
				teams: ["", ""],
				score: [0, 0],
			},
		],
	},
	{
		name: "round-three",
		matchups: [
			{
				teams: ["", "", ""],
				score: [0, 0, 0],
			},
			{
				teams: ["", "", ""],
				score: [0, 0, 0],
			},
		],
	},
	{
		name: "final",
		matchups: [
			{
				teams: ["", ""],
				score: [0, 0],
			},
		],
	},
];
// Change null to a string with the team's name
// like
// let champion = "ZSB-E";
let champion = null;

addEventListener("load", (ev) => {
	// Adding matchups
	for (const round of obj) {
		let rounds = document.querySelectorAll(`.${round.name} .matchup`);

		for (let i = 0; i < round.matchups.length; i++) {
			const elem = rounds[i];
			const matchup = round.matchups[i];
			for (let j = 0; j < matchup.teams.length; j++) {
				if (matchup.status !== undefined || matchup.status) {
					elem.innerHTML += `<li class="team current-team">${matchup.teams[j]}<span class="score">${matchup.score[j]}</span></li>`;
					elem.classList.add("active");
				} else {
					elem.innerHTML += `<li class="team">&nbsp;<span class="score"></span></li>`;
				}
			}
		}
	}

	if (champion !== null) {
		let champs = document.getElementById("champions");
		champs.classList.add("active");
		champs.textContent = champion;
	}
});
