// There are 3 rounds defined, each of which has multiple matchups of 2 teams
// You will need to fill in the teams and the score of the match into the respective fields
// You should also add status: true if you are adding a new matchup so it's displayed as active
// There is also an optional date parameter in case you would want to show it
let obj = [
	{
		name: "round-one",
		matchups: [
			{
				teams: ["Drzewce Iverna", "Team Wiaska"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Wielbiciele klaudi", "Tichotato"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: false,
			},
			{
				teams: ["Smalec", "Fanklub pana zapalki"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Anki Jax'a", "Igor P"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Malwiaki", "Kiszoniaki wersow"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Stopy Marcysi", "Mamon PDW"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Zakolaki", "Budo Power"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Mokre maćki", "Ukrainian power"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["teamfortness3", "Zaza Enjoyers"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["JBCS TEAM", "Pole Kombii"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Czaby", "kulaski"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["Dziady z budo", "Freewin"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
		],
	},
	{
		name: "round-two",
		matchups: [
			{
				teams: ["T1", "T3"],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
		],
	},
	{
		name: "round-three",
		matchups: [
			{
				teams: ["", "", ""],
				score: [0, 0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", "", ""],
				score: [0, 0, 0],
				date: "12-12-2019 12:00",
			},
		],
	},
	{
		name: "round-four",
		matchups: [
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
		],
	},
	{
		name: "final",
		matchups: [
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
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
