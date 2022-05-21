const Square = require('./square');

class Board {
  totalSize = 64;
  #boardArray;

  constructor() {
    this.#boardArray = Array.from(
                         { length: this.totalSize },
                         (_, i) => new Square(Math.floor(i / 8), i % 8)
                       );
  }

  findSquareByCoordinate = (coordinate) => {
    const coordinateFinder = (square) => {
      return square.getCoordinates().equalsOtherCoordinate(coordinate);
    }
    return this.#findSquare(coordinateFinder);
  }

  findSquareByName = (name) => {
    const nameFinder = (square) => square.getCoordinates().name() === name;
    return this.#findSquare(nameFinder);
  }

  #findSquare(finderCallback) {
    return this.#boardArray.find(finderCallback);
  }
}

module.exports = Board;
