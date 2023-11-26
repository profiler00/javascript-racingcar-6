import { integer } from './constants/constants';

class Car {
  constructor(name) {
    this.name = name;
    this.position = integer.ZERO;
  }

  move() {
    this.position += integer.ONE;
  }
}

export default Car;
