//let mazeDiv = document.getElementById('maze');
////let pmaze = document.getElementById('pmaze');
//let theMaze;
//let square;
//let mazeBoundaries = false;
//let mazeNode;
//let deleteMaze = false;
//
//
//class Maze {
//	constructor() {
//		this.height = this.generateBoundries();
//		this.width = this.height;
//		this.wall = [];
//		this.spaces = this.generateSpacesArray();
//		this.entrance = this.generateEntrance();
//		this.exit = this.generateExit();
//	}
//
//	generateBoundries() {
//		return Math.floor(10 + (Math.random() * 4) + 1);
//	}
//
//	generateEntrance() {
//		let coordinates = [0];
//		coordinates.unshift(Math.floor((Math.random() * this.width) + 1));
//		return coordinates;
//	}
//
//	generateExit() {
//		let coordinates = [this.height];
//		coordinates.unshift(Math.floor((Math.random() * this.width) + 1));
//		return coordinates;
//	}
//
//	generateSpacesArray() {
//		let coordinatesFinalArray = [];
//
//		for (let x = 0; x < this.width; x++) {
//			for (let y = 0; y < this.height; y++) {
//				let coordinates = [];
//				coordinates.push(x);
//				coordinates.push(y);
//				coordinatesFinalArray.push(coordinates);
//			}
//		}
//
//		return coordinatesFinalArray;
//	}
//
//	generateWallsArray() {
//		console.log("hello");
//	}
//
//}
//
////DOM INTERACTION AND RENDER===================================
//
//function buttonsInteraction() {
//
//	let mazeStatus = false;
//
//	document.addEventListener('click', (e) => {
//		if (e.target.className === "button newmaze") {
//
//			if (!mazeStatus) {
//				theMaze = new Maze();
//				//				console.log(theMaze);
//				mazeStatus = true;
//				renderMaze();
//			} else {
//				mazeNode = mazeDiv.getElementsByTagName('div');
//				mazeDiv.removeChild(mazeNode[0]);
//				theMaze = new Maze();
//				mazeStatus = true;
//				renderMaze();
//			}
//
//		} else if (e.target.className === "button delete" && mazeStatus === true) {
//			mazeNode = mazeDiv.getElementsByTagName('div');
//			//			mazeDiv.removeChild(mazeBoundaries);
//			mazeDiv.removeChild(mazeNode[0]);
//
//			mazeStatus = false;
//		} else if (e.target.className === "go" && mazeStatus === true) {
//			console.log('GO');
//		}
//
//	})
//}
//
//
//function renderMaze() {
//	if (mazeDiv) {
//		mazeBoundaries = document.createElement("div");
//		mazeDiv.appendChild(mazeBoundaries);
//		mazeBoundaries.style.height = `${theMaze.height * 30}px`;
//		mazeBoundaries.style.width = `${theMaze.width * 30}px`;
//		mazeBoundaries.classList.add('realmaze');
//		console.log(theMaze.spaces);
//		//		renderMazeSpaces()
//	}
//	//	else {
//	//		mazeDiv.removeChild(mazeBoundaries);
//	//	}
//}
//let hello = 0;
//
//function renderMazeSpaces() {
//	for (let y = 0; y < theMaze.width; y++) {
//		for (let x = 0; x < theMaze.height; x++) {
//			squaresMaze = document.createElement('div');
//			mazeBoundaries.appendChild(squaresMaze);
//			coordinate = document.createElement('p');
//			squaresMaze.appendChild(coordinate);
//			coordinate.innerHTML = theMaze.spaces[x];
//			coordinate.style.margin = '3px';
//			squaresMaze.classList.add('sqaremaze');
//			squaresMaze.style.height = '30px';
//			squaresMaze.style.width = `30px`;
//			console.log(coordinate);
//		}
//	}
//}
//
//
//
//buttonsInteraction();

////////////



//
//
//function generateSpacesArray() {
//	let coordinatesFinalArray = [];
//	for (let x = 0; x < 10; x++) {
//		for (let y = 0; y < 10; y++) {
//			let coordinates = [];
//			let cardinals = 'NSOEV';
//			coordinates.push(x);
//			coordinates.push(y);
//			coordinates.push(cardinals);
//			coordinatesFinalArray.push(coordinates);
//		}
//	}
//	return coordinatesFinalArray;
//}
//
//
//
//let spaces = generateSpacesArray();
//
//spaces[0][2] = spaces[0][2].replace(/V/, '');
//
//let currentPosition = spaces[0];



//function walls() {
//
//}



//function generateWalls() {
//	//	return Math.floor((Math.random() * (spaces.length) + 1));
//	for (let i = 0; i < spaces.length; i++) {
//		let dice = Math.floor((Math.random() * 4) + 1);
//		if (dice === 1) {
//			//			spaces[i].push('i= ' + i);
//			//			spaces[i].push('dice= ' + dice);
//			//			spaces[i].push('sorted: N');
//			//			if (i < 99) spaces[i + 1].push('inherited S from index:' + (i));
//			spaces[i].push('N');
//			if (i < 99) spaces[i + 1].push('S');
//		} else if (dice === 2) {
//			//			spaces[i].push('i= ' + i);
//			//			spaces[i].push('dice= ' + dice);
//			//			spaces[i].push('sorted: S');
//			//			if (i > 0) spaces[i - 1].push('inherited N from index:' + (i));
//			spaces[i].push('S');
//			if (i > 0) spaces[i - 1].push('N');
//			//		} else if (dice === 3) {
//			//			spaces[i].push('i= ' + i);
//			//			spaces[i].push('dice= ' + dice);
//			//			spaces[i].push('sorted: W');
//			//			if (i < 90) spaces[i + 10].push('inherited E from index:' + (i));
//			spaces[i].push('W');
//			if (i < 90) spaces[i + 10].push('E');
//		} else if (dice === 4) {
//			//			spaces[i].push('i= ' + i);
//			//			spaces[i].push('dice= ' + dice);
//			//			spaces[i].push('sorted: E');
//			//			if (i > 9) spaces[i - 10].push('inherited W from index:' + (i));
//			spaces[i].push('E');
//			if (i > 9) spaces[i - 10].push('W');
//
//		}
//	}
//}

//generateWalls()

//class Robot {
//	constructor() {
//		this.currentPosition = spaces[0];
//	}
//
//
//	function move() {
//		if (currentPosition[1] < 9) {
//			if (/V/.test(currentPosition[2])) {
//				spaces[x][2].replace(/V/, '');
//				console.log(spaces[x]);
//				x = x + 1;
//				spaces[x][2].replace(/V/, '');
//				console.log(spaces[x]);
//				currentPosition = spaces[x];
//				console.log(currentPosition);
//			}
//
//		}
//
//	}
//
//}
//console.log(spaces);
//
////let currentPosition;
//let x = 0;
//let n = x + 1;
//let s = x - 1;
//let e = x + 10;
//let w = x - 10;
//
//console.log(currentPosition);
//
//function move(cardinal) {
//	x = 
//	currentPosition = spaces[cardinal];
//	if (/V/.test(currentPosition[2])) {
//		spaces[cardinal][2] = spaces[cardinal][2].replace(/V/, '');
//		console.log(spaces[cardinal]);
//		console.log('current position: ' + currentPosition);
//	}
//}
//
//function mS() {
//	if (currentPosition[1] > 0) {
//		if (currentPosition[2] !== 'S') {
//			x -= 1;
//			//			console.log(x);
//			currentPosition = spaces[x];
//console.log(currentPosition);
//}
//else {
//	console.log('wall S');
//}
//} else {
//	console.log('wall S');
//}
//}
//
//function mE() {
//
//	if (currentPosition[0] < 9) {
//		if (currentPosition[2] !== 'E') {
//			x += 10;
//			//			console.log(x);
//			currentPosition = spaces[x];
//			console.log(currentPosition);
//		} else {
//			console.log('wall E');
//		}
//	} else {
//		console.log('wall E');
//	}
//}
//
//
//function mW() {
//	if (currentPosition[0] > 0) {
//		if (currentPosition[2] !== 'W') {
//			x -= 10;
//			//			console.log(x);
//			currentPosition = spaces[x];
//			console.log(currentPosition);
//		} else {
//			console.log('wall W');
//		}
//	} else {
//		console.log('wall W');
//	}
//}
//
//
//function setup() {
//	//	createCanvas(400, 400);
//	//	background(0, 0, 0);
//	createCanvas(400, 400);
//	background(0);
//}
//
//function draw() {
//
//}
//
//
//
//class Spaces {
//	constructor() {
//		this.spaces = this.generateSpaces();
//		this.visited = false;
//		this.walls = ['N', 'S', 'W', 'E'];
//	}
//
//	generateSpaces() {
//		let spacesArray = [];
//		for (let x = 0; x < 10; x++) {
//			console.log(x);
//			for (let y = 0; y < 10; y++) {
//				let spaces = [];
//				spaces.push(x, y);
//				spacesArray.push(spaces);
//				//				console.log(spaces);
//			}
//		}
//		return spacesArray;
//	}
//}
//
//let maze = new Spaces();
//
//console.log(maze);
//
//
//
//
//function setup() {
//	createCanvas(400, 400);
//	background(100, 100, 100);
//}
//
//function draw() {
//	stroke(255);
//	noFill();
//	let cells = [];
//	for (let x = 0; x < 10; x += 10) {
//		for (let y = 0; y < 10; y += 10 A) {
//			let singleCells = [];
//			singleCells.push(x, y);
//			cells.push(singleCells);
//			rect(cells[x][0], cells[x][1], 10, 10);
//		}
//	}
//
//	for (let i = 0; i < cells.length; i++) {
//
//	}
//
//
//	for (let x = 0; x < cells.length; x += canvas.width / 10) {
//		for (let y = 0; y < canvas.height; y += canvas.height / 10) {
//			hello = rect(x, y, canvas.width / 10, canvas.height / 10);
//		}
//	}


//}



//console.log(hello);

//let cells = [];
//
//for (let x = 0; x < 10; x++) {
//	for (let y = 0; y < 10; y++) {
//		let singleCells = [];
//		singleCells.push(x, y);
//		singleCells.push('NSOEV'); // ACHRONYM FOR NORD SUD OVEST EST & VISITED
//		cells.push(singleCells);
//	}
//}
//
//let cellsStack = [];
//
//let currentLocation = Math.floor(Math.random() * 100 + 1);
////console.log(currentLocation);
////console.log(cells[currentLocation][2]);
////cells[currentLocation][2] = cells[currentLocation][2].replace(/V/, '');
//
//function makeMaze() {
//	for (let i = 0; i < 1000; i++) {
//		cellsStack.push(currentLocation);
//		if (currentLocation[i] === currentLocation[i - 1] && currentLocation[i] === currentLocation[i - 2] && currentLocation[i] === currentLocation[i -3] && currentLocation[i] === currentLocation[i -4] && currentLocation[i] === currentLocation[i -5]) {
//			currentLocation = cellsStack.pop();
//		}
//
//		let dice = Math.floor(Math.random() * 4 + 1);
//		console.log(dice);
//		if (dice === 1) {
//			if (currentLocation < 99) {
//
//				//			console.log(cells[currentLocation]);
//				cells[currentLocation][2] = cells[currentLocation][2].replace(/N/, '');
//				if (/V/.test(cells[currentLocation + 1][2])) {
//					currentLocation += 1;
//					//				console.log('N');
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/S/, '');
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/V/, '');
//					console.log(cells[currentLocation]);
//				} else {
//					console.log(cells[currentLocation]);
//					//				console.log('current location still the same')
//				}
//			}
//		} //N
//
//		if (dice === 2) {
//			console.log(dice);
//
//			if (currentLocation > 0) {
//				//			console.log(cells[currentLocation]);
//				cells[currentLocation][2] = cells[currentLocation][2].replace(/S/, '');
//				if (/V/.test(cells[currentLocation - 1][2])) {
//					currentLocation -= 1;
//					//				console.log('S');
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/N/, '');
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/V/, '');
//					console.log(cells[currentLocation]);
//				} else {
//					console.log(cells[currentLocation]);
//					//				console.log('current location still the same')
//				}
//			}
//		} //S
//		if (dice === 3) {
//
//			console.log(dice);
//			//			console.log(cells[currentLocation]);
//			if (currentLocation > 9) {
//				cells[currentLocation][2] = cells[currentLocation][2].replace(/O/, '');
//				if (/V/.test(cells[currentLocation - 10][2])) {
//					currentLocation -= 10;
//					//				console.log('O');
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/E/, '');
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/V/, '');
//					console.log(cells[currentLocation]);
//				} else {
//					console.log(cells[currentLocation]);
//					//				console.log('current location still the same')
//				}
//			}
//		} //O
//		if (dice === 4) {
//
//			console.log(dice);
//			if (currentLocation < 90) {
//				//			console.log(cells[currentLocation]);
//				cells[currentLocation][2] = cells[currentLocation][2].replace(/E/, '');
//				if (/V/.test(cells[currentLocation + 10][2])) {
//					//				currentLocation += 10;
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/O/, '');
//					cells[currentLocation][2] = cells[currentLocation][2].replace(/V/, '');
//					console.log(cells[currentLocation]);
//				} else {
//					console.log(cells[currentLocation]);
//					//				console.log('current location still the same')
//				}
//			}
//		} //E
//		console.log(i);
//	}
//	//	console.log(cells);
//}

function setup() {

}

function draw() {

}


let cols, rows;
let w = 40;
let cell = [];
let currentCell = random
let stack = [];

class cellsObj {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		//		this.visited = false;
		//		this.deadEnd = false;
		//		this.walls = 'NSOE';
	}
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(50);
	for (let x = 0; x < 40; x++) {
		for (let y = 0; y < 40; y++) {
			cell.push(new cellsObj(x, y));
		}
	}

}









///////////








/////////////
