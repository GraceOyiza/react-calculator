import Big from 'big.js';

export default (Number1, Number2, operator) => {
  const firstNumber = new Big(Number1);
  const secondNumber = Number2 && new Big(Number2);

  switch (operator) {
    case '/':
      return firstNumber.div(secondNumber);
    case '*':
      return firstNumber.mul(secondNumber);
    case '+':
      return firstNumber.add(secondNumber);
    case 'X²':
      return firstNumber.pow(2);
    case '%':
      return firstNumber.div(100).toString();
    default:
      return firstNumber.sub(secondNumber);
  }
};
