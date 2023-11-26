import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages';
import { integer } from '../constants/constants';

const Output = {
  roundAttempt(attempt) {
    MissionUtils.Console.print(`${MESSAGE.attempt} ${attempt + integer.ONE}:`);
  },
  roundResult(car) {
    MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  },
  winner(winners) {
    MissionUtils.Console.print(`${MESSAGE.end} ${winners.join(', ')}`);
  },
};

export default Output;
