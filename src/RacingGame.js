import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car';

class RacingGame {
  constructor(carNames, totalAttempts) {
    this.cars = carNames.split(',').map(name => new Car(name));
    this.totalAttempts = totalAttempts;
  }

  // TODO: Mission 4: 각 차수별 실행 결과 출력 메서드입니다.
  playGame() {
    for (let attempt = 1; attempt <= this.totalAttempts; attempt += 1) {
      MissionUtils.Console.print(`시도 ${attempt}:`);
      this.cars.forEach(car => {
        car.move();
        MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
      });
    }
  }

  // TODO: Mission 6: 우승자 결정 메서드입니다.
  determineWinner() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    const winners = this.cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
    return winners;
  }
}

export default RacingGame;
