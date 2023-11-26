import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../constants/messages';
import { integer } from '../constants/constants';

import Validation from '../validations/Validation';

const InputView = {
  async startGame() {
    // 게임 시작 메시지 출력
    MissionUtils.Console.print(message.START);

    // TODO: Mission 1: 자동차 이름 입력 메서드입니다.
    const carNames = await MissionUtils.Console.readLineAsync(message.CAR);
    Validation.checkNull(carNames);

    const carNameList = carNames.split(',');
    Validation.checkNameLength(carNameList);
    return carNameList;
  },
  async moveCount() {
    // TODO: Mission 2: 이동 시도 횟수 입력 메서드입니다.
    const totalAttempts = await MissionUtils.Console.readLineAsync(
      message.COUNT,
    );
    Validation.checkNull(totalAttempts);
    Validation.checkCount(totalAttempts);
    return parseInt(totalAttempts, integer.TEN);
  },
};

export default InputView;
