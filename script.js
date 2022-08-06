const knightsTravails = require("./knights-travails");

// Test Cases

knightsTravails([0, 0], [1, 2]);
// The shortest path was 1 moves!
// The moves were:
// 0, 0
// 1, 2

knightsTravails([3, 3], [7, 6]);
// The shortest path was 3 moves!
// The moves were:
// 3, 3
// 4, 5
// 5, 7
// 7, 6

knightsTravails([0, 0], [7, 7]);
// The shortest path was 6 moves!
// The moves were:
// 0, 0
// 1, 2
// 2, 4
// 3, 6
// 4, 4
// 5, 6
// 7, 7
