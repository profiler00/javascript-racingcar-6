import { MissionUtils } from '@woowacourse/mission-utils';
import { integer } from './constants/constants';
import { random } from './constants/constants';

import Car from './Car';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

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

    // TODO: Mission 4: 각 차수별 실행 결과 출력 메서드입니다.
    OutputView.printResult();

    for (let i = integer.ZERO; i < count; i += integer.ONE) this.playGame();
    const winners = this.determineWinner();
    OutputView.winner(winners);
  }

  #car(cars) {
    cars.forEach(car => this.#cars.push(new Car(car)));
  }

  playGame() {
    // TODO: Mission 3: 자동차 이동 로직 메서드입니다.
    this.#cars.forEach(car => {
      let distance = MissionUtils.Random.pickNumberInRange(
        random.MIN_RANGE,
        random.MAX_RANGE,
      );
      if (distance < random.LIMIT) distance = integer.ZERO;
      if (distance >= random.LIMIT) car.move();
      OutputView.roundResult(car, distance);
    });
    MissionUtils.Console.print(this.#cars.map(car => car.position));
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
