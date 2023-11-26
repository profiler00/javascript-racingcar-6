import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages';

import Validation from '../validations/Validation';

const InputView = {
  async startGame() {
    // 게임 시작 메시지 출력
    MissionUtils.Console.print(MESSAGE.start);

    // TODO: Mission 1: 자동차 이름 입력 메서드입니다.
    const carNames = await MissionUtils.Console.readLineAsync(MESSAGE.car);
    Validation.checkNull(carNames);

    const carNameList = carNames.split(',');
    Validation.checkNameLength(carNameList);
    return carNameList;
  },
  async moveCount() {
    // TODO: Mission 2: 이동 시도 횟수 입력 메서드입니다.
    const totalAttempts = await MissionUtils.Console.readLineAsync(
      MESSAGE.count,
    );
    Validation.checkNull(totalAttempts);
    Validation.checkCount(totalAttempts);
    return parseInt(totalAttempts, 10);
  },
};

export default InputView;
