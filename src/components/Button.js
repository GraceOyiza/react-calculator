import PropTypes from 'prop-types';

export default function Button({ name, operator, actionBtn }) {
  return (
    <button
      className={`btn ${operator ? 'operatorBtn' : ''} ${
        actionBtn ? 'actionBtn' : ''
      }`}
      type="button"
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  operator: false,
  actionBtn: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  operator: PropTypes.bool,
  actionBtn: PropTypes.bool,
};
