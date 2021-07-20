import Button from './Button';

export default function ButtonPanel() {
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

  return (
    <div className="button_panel">
      {buttons.map(button => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
}
