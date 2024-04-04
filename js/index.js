// There are three rounds in total: eliminations, semifinals and finals
// The first two are divided into three sectors, where 2 matchups of 2 teams each compete to form a single matchup with 2 teams
let sectors = [
	// Let this sector serve as an example
	// Sector A
	{
		first_matchups: [
			{
				// Here there are two teams. Team 1 has a score of 0 and Team 2 has 2 points
				members: {
					"Team 1": 0,
					"Team 2": 2,
				},
				winner: 2, // 1 = Team 1, 2 = Team 2 and so on
				inactive: true, // Set to true if you haven't yet decided on the matchup so it stays greyed out
				ongoing: false, // Set to true if it's currently played
			},
			{
				members: {
					"Team 3": 2,
					"Team 4": 1,
				},
				winner: 1,
				inactive: true,
				ongoing: false,
			},
		],
		second_matchup: {
			members: {
				"Team 2": 0,
				"Team 3": 2,
			},
			winner: 2,
			inactive: true,
			ongoing: false,
		},
	},
	// Sector B
	{
		first_matchups: [
			{
				members: {
					"Team 1": 0,
					"Team 2": 2,
				},
				winner: 1,
				inactive: true,
				ongoing: false,
			},
			{
				members: {
					"Team 1": 0,
					"Team 2": 2,
				},
				winner: 1,
				inactive: true,
				ongoing: false,
			},
		],
		second_matchup: {
			members: {
				"Team 1": 0,
				"Team 2": 2,
			},
			winner: 1,
			inactive: true,
			ongoing: false,
		},
	},
];

let finals = {
	members: {
		"Team 1": 0,
		"Team 2": 1,
	},
	winner: 2,
	inactive: true,
	ongoing: false,
};

// Change null to a string with the team's name
// like
let champion = "ZSB-E";
// let champion = null;

function addMatchup(elem, matchup) {
	if (matchup.inactive) {
		elem.classList.add("inactive");
	} else if (matchup.ongoing) elem.classList.add("ongoing");

	for (const [teamName, score] of Object.entries(matchup.members)) {
		elem.innerHTML += `<li class="team"><span>${teamName}</span><span class="score">${score}</span></li>`;
	}
}

addEventListener("load", (ev) => {
	let sectorElems = document.querySelectorAll(".sector"),
		semisElems = document.querySelectorAll(".semis-section");
	for (let i = 0; i < sectorElems.length; i++) {
		let sector = sectorElems[i],
			semis = semisElems[i];
		let sectorObj = sectors[i],
			sectorMatchupElems = sector.querySelectorAll(".matchup");

		for (let j = 0; j < sectorObj.first_matchups.length; j++) {
			let matchup = sectorObj.first_matchups[j],
				matchupElem = sectorMatchupElems[j];
			addMatchup(matchupElem, matchup);
		}

		let semisMatchupElem = semis.querySelector(".matchup"),
			matchup = sectorObj.second_matchup;

		addMatchup(semisMatchupElem, matchup);
	}
	addMatchup(
		document.querySelector(".matchup-container-round-three .matchup"),
		finals
	);
	if (champion !== null) {
		document.querySelector("#champion-container").classList.remove("hidden")


		let champs = document.getElementById("champions");
		champs.classList.add("active");
		champs.textContent = champion;
	}
});
