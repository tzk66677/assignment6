# Conway's Game of Life with RGB Effects

A creative variant of Conway's Game of Life implemented in p5.js, featuring dynamic RGB colors and enhanced visual clarity.

## Key Features
- **RGB Color Gradient**: Live cells change colors based on their age and number of neighbors.
- **Visible Grid Borders**: Clear dark-gray borders between cells for better visual structure.
- **Slowed Animation**: Frame rate reduced to 15 FPS with state updates every 10 frames for easier observation.
- **Wrapped Edges**: Grid behaves as a toroidal surface (edges connect to opposite sides).

## How to Run
1. Open the code in the [p5.js Web Editor](https://editor.p5js.org/clarktan2002/sketches/wjJEVFyLj).
2. Click "Run" to start the simulation.
3. Observe the evolving patterns with RGB color transitions.

## Customization Tips
- Adjust `resolution` to change cell size.
- Modify `updateRate` to control simulation speed.
- Tweak the `map()` parameters in the drawing loop to alter color behavior.

## Variant Explanation
This implementation extends the classic Game of Life by:
1. **Dynamic Color Mapping**: Cells fade through RGB values depending on their lifespan and neighbor count.
2. **Enhanced Visibility**: Bold grid borders and slowed animations improve pattern tracking.
3. **Age Tracking**: Cells grow "older" over time, visualized through color intensity.

Inspired by *The Nature of Code* and Alan Zucconi's cellular automata explorations.
