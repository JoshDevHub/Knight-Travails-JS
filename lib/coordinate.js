class Coordinate {
  #xPosition;
  #yPosition;

  constructor(xPos, yPos) {
    this.#xPosition = xPos;
    this.#yPosition = yPos;
  }

  name() {
    const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return `${files[this.#xPosition]}${ranks[this.#yPosition]}`
  }

  equalsOtherCoordinate(other) {
    return this.name() === other.name();
  }

  newCoordinateWithOffset(xOffset, yOffset) {
    const newCoords = [
      this.#xPosition + xOffset,
      this.#yPosition + yOffset
    ];
    const isInvalidPosition = (coord) => coord > 7 || coord < 0;
    if (newCoords.some(isInvalidPosition)) return;

    return new Coordinate(...newCoords);
  }
}

module.exports = Coordinate;
