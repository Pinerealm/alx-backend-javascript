import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Methods
  cloneCar() {
    const CarClass = this.constructor[Symbol.species] || Car;
    return new CarClass(this.brand, this.motor, this.color);
  }

  static get [Symbol.species]() {
    return Car;
  }
}
