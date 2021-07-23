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
}
export default App;
