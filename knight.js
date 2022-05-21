class Knight {
  position;
  #moveOffsets = [
    [2, 1], [2, -1],
    [1, 2], [1, -2],
    [-2, 1], [-2, -1],
    [-1, 2], [-1, -2]
  ]

  static moveListFor(coordinate) {
    return new Knight(coordinate).moveList();
  }

  constructor(position) {
    this.position = position;
  }

  moveList() {
    return this.#moveOffsets
             .map((set) => this.position.newCoordinateWithOffset(...set))
             .filter((move) => move !== undefined);
  }
}

module.exports = Knight;
