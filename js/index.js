let obj = [
	{
		name: "round-one",
		matchups: [
			{
				teams: ["ZSB-E", "ZSO"],
				score: [1, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["Kek", "Hej"],
				score: [0, 1],
				date: "12-12-2019 12:00",
			},
		],
	},
	{
		name: "round-two",
		matchups: [
			{
				teams: ["ZSB-E", "ZSO"],
				score: [1, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["Kek", "Hej"],
				score: [0, 1],
				date: "12-12-2019 12:00",
			},
		],
	},
];

addEventListener("load", (ev) => {
	for (const round of obj) {
		let rounds = document.querySelectorAll(`.${round.name} .matchup`);

		for (let i = 0; i < round.matchups.length; i++) {
			const elem = rounds[i];
			const matchup = round.matchups[i];
			for (let j = 0; j < matchup.teams.length; j++) {
				elem.innerHTML += `<li class="team current-team">${matchup.teams[j]}<span class="score">${matchup.score[j]}</span></li>`;
			}
		}
	}
});
