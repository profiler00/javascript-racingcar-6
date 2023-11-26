import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 게임 2', () => {
  test('두 대의 자동차가 경주 후 결과 확인', async () => {
    // given
    const inputs = ['kia,volvo', '2'];
    const outputs = ['실행 결과', 'kia : ', 'volvo : ----', 'kia : -----', 'volvo : --------', '최종 우승자 : volvo'];
    const randoms = [0, 4, 5, 8];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('자동차 경주 게임 2', () => {
  test('세 대의 자동차가 경주 후 결과 확인', async () => {
    // given
    const inputs = ['pobi,woni,crong', '3'];
    const outputs = ['pobi : -', 'woni : ', 'crong : '];
    const randoms = [4, 3, 4, 3, 4, 3];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('자동차 경주 게임 4', () => {
  test('네 대의 자동차가 경주 후 승자 확인', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,crong,honux', '4'];
    const outputs = ['pobi : -', 'woni : ', 'crong : -', 'honux : '];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
