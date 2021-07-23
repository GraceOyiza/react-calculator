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
function App() {
  return (
    <>
      <div className="App">
        <div className="Appcalculator">
          <Display />
          <ButtonPannel />
        </div>
      </div>
    </>
  );
}

export default App;
