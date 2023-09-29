import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getters
  get floors() {
    return this._floors;
  }

  // Setters
  set floors(floors) {
    this._floors = floors;
  }

  // Methods
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
