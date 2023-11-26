import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../constants/messages';
import { integer } from '../constants/constants';

const Output = {
  roundAttempt(attempt) {
    MissionUtils.Console.print(`${message.ATTEMPT} ${attempt + integer.ONE}:`);
  },
  roundResult(car) {
    MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  },
  winner(winners) {
    MissionUtils.Console.print(`${message.END} ${winners.join(', ')}`);
  },
};

export default Output;
