import ButtonPannel from './ButtonPanel';
import Display from './Display';

const buttons = [
  'AC',
  'X²',
  '%',
  '/',
  '9',
  '8',
  '7',
  '*',
  '6',
  '5',
  '4',
  '+',
  '3',
  '2',
  '1',
  '-',
  '0',
  '.',
  '+/-',
  '=',
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      prev: '0',
      next: '0',
      operator: null,
    };
  }

  handleDisplay = (prev, next, total, op) => {
    let ans;
    if (total) {
      ans = total;
    } else if (!op) {
      ans = prev;
    } else {
      ans = next;
    }
    return ans;
  };

  render() {
    const { prev, next, total, operator } = this.state;
    return (
      <>
        <div className="App">
          <div className="Appcalculator">
            <Display
              current={this.handleDisplay(prev, next, total, operator)}
            />
            <ButtonPannel>
              {buttons.map(button => {
                const operators = ['+', '-', '*', '/', '%', 'X²'];
                const isOperator = operators.includes(button);
                const isAcBtn = button === 'AC';
                return (
                  <Button
                    onClick={this.handleClick}
                    key={button}
                    name={button}
                    operator={isOperator}
                    acBtn={isAcBtn}
                  />
                );
              })}
            </ButtonPannel>
          </div>
        </div>
      </>
    );
  }
}
export default App;
