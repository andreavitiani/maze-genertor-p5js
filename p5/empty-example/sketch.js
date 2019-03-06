function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  noStroke();
  
  
  for(let x = 20; x < width - 15; x += 40) {
    for(let y = 20; y < height- 15; y += 40) {
    	  fill(random(255), 0, random(255));
  			ellipse(x, y ,30);
    }
  }
}