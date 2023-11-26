import { exception } from '../constants/messages';

// TODO: Mission 5: 오류 처리 메서드입니다.
const Validation = {
  checkNull(input) {
    if (!input) throw new Error(exception.NULL);
  },
  checkNameLength(input) {
    input.map(name => {
      if (name.length >= 6) {
        throw new Error(exception.LENGTH);
      }
      return name;
    });
  },
  checkCount(input) {
    input.split(',').forEach(character => {
      if (!'0123456789'.includes(character)) {
        throw new Error(exception.INTEGER);
      }
    });
  },
};

export default Validation;
