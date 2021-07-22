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

  if (operators.includes(btn)) {
    if ((!prev || prev === '0') && total) {
      prev = total;
      total = null;
    } else if (next) {
      prev = operate(prev, next, operator).toString();
      next = '0';
      total = null;
    }
    operator = btn;
  }
};

export default calculate;
