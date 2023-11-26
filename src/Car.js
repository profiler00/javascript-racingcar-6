import { MissionUtils } from '@woowacourse/mission-utils';
import { integer, random } from './constants/constants';

class Car {
  constructor(name) {
    this.name = name;
    this.position = integer.ZERO;
  }

  // TODO: Mission 3: 자동차 이동 로직 메서드입니다.
  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(
      random.MIN_RANGE,
      random.MAX_RANGE,
    );
    if (randomValue > random.LIMIT) {
      this.position += integer.ONE;
    }
  }
}

export default Car;
