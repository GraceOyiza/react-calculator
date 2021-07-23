import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button_panel">
      {buttons.map(button => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
}
