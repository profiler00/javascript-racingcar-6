const message = {
  START: '자동차 경주 게임을 시작합니다.',
  CAR: '경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분):',
  COUNT: '시도할 횟수를 입력하세요:',
  ROUND: '실행 결과',
  ATTEMPT: '시도',
  END: '최종 우승자',
};

const exception = {
  NULL: '[ERROR] 값을 입력해주세요.',
  LENGTH: '[ERROR] 각 입력값은 5자 이하만 가능합니다.',
  INTEGER: '[ERROR] 시도 횟수는 양의 정수여야 합니다.',
};

export { message, exception };
