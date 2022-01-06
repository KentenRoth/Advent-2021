const fs = require('fs');
const getData = fs.readFileSync('./data/day1.txt', 'utf-8');
const depths = getData.split('\n');

theDepths = (depths) => {
	let increased = 0;
	for (let i = 0; i < depths.length - 1; i++)
		if (parseInt(depths[i]) < parseInt(depths[i + 1])) {
			increased++;
		}
	console.log(increased);
};

theDepths2 = (depths) => {
	let increased = 0;
	for (let i = 0; i < depths.length - 3; i++) {
		let depthWindow1 =
			parseInt(depths[i]) +
			parseInt(depths[i + 1]) +
			parseInt(depths[i + 2]);
		let depthWindow2 =
			parseInt(depths[i + 1]) +
			parseInt(depths[i + 2]) +
			parseInt(depths[i + 3]);
		if (depthWindow1 < depthWindow2) {
			increased++;
		}
	}
	console.log(increased);
};

theDepths(depths);
theDepths2(depths);
