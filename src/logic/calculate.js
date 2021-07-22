import operate from './operate';

const calculate = (calculator, btn) => {
  let { total, next, operator, prev } = calculator;
  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

  const operators = ['/', '*', '+', '-'];

  if (numbers.includes(btn)) {
    total = null;
    if (!prev || prev === '0') {
      prev = btn;
    } else if (prev && !operator) {
      prev += btn;
    } else if ((operator && !next) || (next && next[0] === '0')) {
      next = btn;
    } else if (operator && next) {
      next += btn;
    }
  }
};

export default calculate;
