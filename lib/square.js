const Coordinate = require('./coordinate');

class Square {
  #coordinate;
  #visited = false;
  #predecessor = null;

  constructor(...coordinates) {
    this.#coordinate = new Coordinate(...coordinates);
  }

  isUnvisited() {
    return !this.#visited;
  }

  getCoordinates() {
    return this.#coordinate;
  }

  getPredecessor() {
    return this.#predecessor;
  }

  visit(predSquare = null) {
    this.#predecessor = predSquare;
    this.#visited = true;
  }
}

module.exports = Square;
