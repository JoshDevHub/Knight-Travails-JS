const Board = require('./board');

class KnightsTravails {
  #board;
  #origin;
  #target;
  #knight;

  constructor(origin, target, piece) {
    this.#board = new Board();
    this.#origin = this.#board.findSquareByName(origin);
    this.#target = this.#board.findSquareByName(target);
    this.#knight = piece;
  }

  executeSearch() {
    this.#origin.visit();
    const queue = [this.#origin];
    while (queue.length > 0) {
      const currentSquare = queue.shift();

      const enqueueList = this.createEnqueueList(currentSquare);
      queue.push(...enqueueList);
    }
  }

  createEnqueueList(currentSquare) {
    const coordinate = currentSquare.getCoordinates();
    const coordinateList = this.#knight.moveListFor(coordinate);
    return coordinateList
      .map((coord) => this.#board.findSquareByCoordinate(coord))
      .filter((square) => square.isUnvisited())
      .map((square) => {
        square.visit(currentSquare);
        return square;
      });
  }

  tracePath() {
    let currentSquare = this.#target;
    const path = [this.#target];
    while (currentSquare !== this.#origin) {
      currentSquare = currentSquare.getPredecessor();
      path.unshift(currentSquare);
    }
    return path.map((square) => square.getCoordinates().name())
  }

}

module.exports = KnightsTravails;
