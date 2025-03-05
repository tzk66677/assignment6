let grid;
let cols;
let rows;
let resolution = 20; // Grid cell size
let updateRate = 10; // Update cell state every 10 frames
let frameCounter = 0;

function setup() {
  createCanvas(800, 600);
  frameRate(15); // Lower frame rate for slower updates
  cols = width / resolution;
  rows = height / resolution;
  grid = createGrid(cols, rows);
}

function draw() {
  background(0);

  // Draw grid cells
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      let cell = grid[i][j];

      // Set color based on cell state
      if (cell.state === 1) {
        let ageColor = map(cell.age, 0, 10, 100, 255); // Map age to color
        let neighborColor = map(countNeighbors(grid, i, j), 0, 8, 100, 255); // Map neighbors to color
        fill(neighborColor, ageColor, 255 - neighborColor); // RGB gradient effect
      } else {
        fill(0); // Dead cells are black
      }

      // Draw cell with visible borders
      stroke(50); // Border color (dark gray)
      strokeWeight(1); // Border thickness
      rect(x, y, resolution, resolution);
    }
  }

  // Update cell states at a slower rate
  frameCounter++;
  if (frameCounter >= updateRate) {
    let nextGrid = createGrid(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j].state;
        let neighbors = countNeighbors(grid, i, j);

        // Apply Conway's rules
        if (state === 0 && neighbors === 3) {
          nextGrid[i][j] = { state: 1, age: 0 }; // Birth
        } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
          nextGrid[i][j] = { state: 0, age: 0 }; // Death
        } else {
          nextGrid[i][j] = { state: state, age: grid[i][j].age + 1 }; // Survival
        }
      }
    }

    grid = nextGrid;
    frameCounter = 0; // Reset counter
  }
}

// Initialize grid with random states
function createGrid(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = { state: floor(random(2)), age: 0 }; // state: 0/1, age: lifespan
    }
  }
  return arr;
}

// Count live neighbors (wrapped edges)
function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols; // Wrap around edges
      let row = (y + j + rows) % rows;
      sum += grid[col][row].state;
    }
  }
  sum -= grid[x][y].state; // Exclude self
  return sum;
}