//MAZE GENERATOR
//ANDREA VITIANI

//MAZE GENERATOR THROUGH A RECURSIVE BACKTRACKER ALGORITHM IN JS AND P5.JS LIBRARY
//
//Recursive backtracker
//The depth-first search algorithm of maze generation is frequently implemented using backtracking:
//PSEUDO CODE
//Make the initial cell the current cell and mark it as visited
//While there are unvisited cells
//If the current cell has any neighbours which have not been visited
//Choose randomly one of the unvisited neighbours
//Push the current cell to the stack
//Remove the wall between the current cell and the chosen cell
//Make the chosen cell the current cell and mark it as visited
//Else if stack is not empty
//Pop a cell from the stack
//Make it the current cell

//VARS
let rows;
let cols;
let w = 20;
let grid = [];
let current;
let next;

//EACH CELL HAVE THE FOLLOWING PROPERTIES
// I AND J COORDINATES STORED IN TWO DIFFERENT PROPERTIES
//4 WALLS ARRAY
//A 'VISITED' BOOLEAN PROPERTY
//EACH CELL HAVE THE FOLLOWING METHODS
//A 'SHOW' METHOD WHICH RENDER THE CELL
//AN ARRAY OF UNVISITED ADJACENT CELLS

//CELL==================================
class Cell {
	constructor(i, j) {
		this.i = i; //X
		this.j = j; //Y
		this.walls = [true, true, true, true];
		this.visited = false;
	}

	highlight = function () {
		let x = this.i * w;
		let y = this.j * w;
		noStroke();
		fill(0, 0, 255, 100);
		rect(x, y, w, w);
	}
	//THE FUNCTION BELOW DRAW THE LINES OF THE CELLS AND COLOR THE CELL BACKGROUND
	show = function () {
		let x = this.i * w;
		let y = this.j * w;
		stroke(255);
		if (this.walls[0] === true) line(x, y, x + w, y); //top
		if (this.walls[1] === true) line(x + w, y, x + w, y + w); //rigth
		if (this.walls[2] === true) line(x + w, y + w, x, y + w); //bottom
		if (this.walls[3] === true) line(x, y + w, x, y); //left
		if (this.visited) {
			fill(255, 0, 255, 100);
			noStroke();
			rect(x, y, w, w);
		}

	}
	//THE FUNCTION BELOW SAVE THE ADJACENT CELLS IN 4 VARIABLES. 
	checkNeighbors = function () {
		var neighbors = [];
		//ADJACENT CELLS
		let top = grid[index(this.i, this.j - 1)];
		let right = grid[index(this.i + 1, this.j)];
		let bottom = grid[index(this.i, this.j + 1)];
		let left = grid[index(this.i - 1, this.j)];
		//IN THE BELOW  PART THE METHOD CHECH IF THE ADJACENT CELL HAVE BEEN VISITED AND IT IT S A VALID CELL THROUGH A CONDITIONAL STATEMENT (THE FUNCTION CALLED 'INDEX' TAKE CARE OF CHECKING IF THE CELLS ARE OUT OF THE EDGES RETURNING '-1' IN THAT CASE). THE FUNCTION THEN PUT THE UNVISITED CELLS IN AN ARRAY CALLED 'NEIGHBORS'.
		if (top && !top.visited) neighbors.push(top);
		if (right && !right.visited) neighbors.push(right);
		if (bottom && !bottom.visited) neighbors.push(bottom);
		if (left && !left.visited) neighbors.push(left);
		//IF THERE ARE UNVISITED CELLS THE FUNCTION RETURNS ONE RANDOM CELL FROM THE ARRAY ELSE IT RETURN UNDEFINED FOR FURTHER CONDITIONAL STATEMENT IN DRAW
		if (neighbors.length > 0) {
			let r = floor(random(0, neighbors.length));
			return neighbors[r];
		} else {
			return undefined;
		}
	}
}

//SETUP P5.JS==================================
function setup() {
	createCanvas(400, 400);
	frameRate(20);
	cols = floor(width / w);
	rows = floor(height / w);
	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			let cell = new Cell(i, j)
			grid.push(cell);
		}
	}
	current = grid[0];
}
//DRAW P5.JS==================================
function draw() {
	background(51);
	for (let i = 0; i < grid.length; i++) {
		grid[i].show(); //SHOW METHOD OF THE CELL OBJECT IN GRID INDEX:'I'
	}

	current.visited = true; //PUT THE VISITED BOOLEAN PROPERTY OF THE CELL OBJECT TO TRUE. THIS BOOLEAN IS EVALUATED IN THE 'CHECK-NEIGHBORS' METHOD OF THE CELL OBJECT AND IF FALSE PUT THE CELL IN THE NEIGHBORS ARRAY TO BE CHOSEN AS NEXT CELL
	current.highlight();
	//If the current cell has any neighbours which have not been visited

	next = current.checkNeighbors(); //DO THIS: 'let r = floor(random(0, neighbors.length)); return neighbors[r];'
	if (next) {
		//STEP 1: Choose randomly one of the unvisited neighbours
		//STEP 2: Push the current cell to the stack
		//calling the checkNeighbors function take care of oboth step one, two and four
		next.visited = true;
		//STEP 3: Remove the wall between the current cell and the chosen cell
		//		console.log(index(current.i, current.j));
		//		console.log(index(next.i, next.j));
		//		console.log(next[i]);//		console.log(next[i] - current[i]);
		removeWalls(current, next);
		//STEP 4: Make the chosen cell the current cell and mark it as visited
		//calling the checkNeighbors above function take care of oboth step one, two and four
		current = next;
	}
}

//FUNCTIONS===================================
//THIS IMPORTANT FUNCTION CHECK IF A COORDINATE IS NOT OUT OF THE EDGE AND RETURN THE INDEX OF THE CELL FROM THE GRID ARRAY
function index(i, j) {
	if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
		return -1;
	}
	return i + j * cols;
}
//below a function for removing the walls between consequently visited cells
function removeWalls(a, b) {
	a = index(current.i, current.j);
	b = index(next.i, next.j);
	if (a - b === 1) {
		grid[a].walls[3] = false;
		grid[b].walls[1] = false;
	}
	if (a - b === -1) {
		grid[a].walls[1] = false;
		grid[b].walls[3] = false;
	}
	if (a - b === rows) {
		grid[a].walls[0] = false;
		grid[b].walls[2] = false;
	}
	if (a - b === -(rows)) {
		grid[a].walls[2] = false;
		grid[b].walls[0] = false;
	}
}

///////////////
