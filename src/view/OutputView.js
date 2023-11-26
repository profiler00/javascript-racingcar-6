import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../constants/messages';

const Output = {
  printResult() {
    MissionUtils.Console.print(message.ROUND);
  },
  roundResult(car, distance) {
    MissionUtils.Console.print(
      `${car.name} : ${Array.from({ length: distance }, () => '-').join('')}`,
    );
  },
  winner(winners) {
    MissionUtils.Console.print(`${message.END} : ${winners.join(', ')}`);
  },
};

export default Output;
