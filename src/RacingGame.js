import Car from './Car';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

import { integer } from './constants/constants';

class RacingGame {
  #cars;

  constructor() {
    this.#cars = [];
  }

  // TODO: Mission 7: 게임 시작 메서드입니다.
  async start() {
    const cars = await InputView.startGame();
    this.#car(cars);
    const count = await InputView.moveCount();
    for (let attempt = integer.ZERO; attempt < count; attempt += integer.ONE)
      this.playGame(attempt);
    const winners = this.determineWinner();
    OutputView.winner(winners);
  }

  #car(cars) {
    cars.forEach(car => this.#cars.push(new Car(car)));
  }

  // TODO: Mission 4: 각 차수별 실행 결과 출력 메서드입니다.
  playGame(attempt) {
    OutputView.roundAttempt(attempt);
    this.#cars.forEach(car => {
      car.move();
      OutputView.roundResult(car);
    });
  }

  // TODO: Mission 6: 우승자 결정 메서드입니다.
  determineWinner() {
    const maxPosition = Math.max(...this.#cars.map(car => car.position));
    const winners = this.#cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
    return winners;
  }
}

export default RacingGame;
