import { EXCEPTION } from '../constants/messages';

const Validation = {
  checkNull(input) {
    if (!input) throw new Error(EXCEPTION.null);
  },
  checkNameLength(input) {
    input.map(name => {
      if (name.lengh > 6) {
        throw new Error(EXCEPTION.length);
      }
      return name;
    });
  },
  checkCount(input) {
    input.split(',').forEach(character => {
      if (!'0123456789'.includes(character)) {
        throw new Error(EXCEPTION.count);
      }
    });
  },
};

export default Validation;
