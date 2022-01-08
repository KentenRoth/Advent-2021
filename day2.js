const fs = require('fs');
const getData = fs.readFileSync('./data/day2.txt', 'utf-8');
const movement = getData.split('\n');

moving = (array) => {
	let horizontal = 0;
	let depth = 0;
	array.map((x) => {
		let direction = x.split(' ');
		let amount = parseInt(direction[1]);
		if (direction[0] === 'forward') {
			return (horizontal = horizontal + amount);
		}
		if (direction[0] === 'up') {
			return (depth = depth - amount);
		}
		if (direction[0] === 'down') {
			return (depth = depth + amount);
		}
	});
	console.log('h ', horizontal, ' d', depth);
	console.log('total movement', horizontal * depth);
};

submarineMovement = (array) => {
	let horizontal = 0;
	let depth = 0;
	let aim = 0;

	array.map((x) => {
		let direction = x.split(' ');
		let amount = parseInt(direction[1]);
		if (direction[0] === 'forward') {
			let depthChange = aim * amount;
			horizontal = horizontal + amount;
			return (depth = depth + depthChange);
		}
		if (direction[0] === 'up') {
			return (aim = aim - amount);
		}
		if (direction[0] === 'down') {
			return (aim = aim + amount);
		}
	});

	console.log('h', horizontal, ' d', depth, ' a', aim);
	console.log('total movement', horizontal * depth);
};

moving(movement);
submarineMovement(movement);
