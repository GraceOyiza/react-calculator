import PropTypes from 'prop-types';

export default function Display({ memorized, current }) {
  return (
    <div className="display">
      <div className="display_upper">{memorized}</div>
      <div className="display_lower">{current}</div>
    </div>
  );
}

Display.defaultProps = {
  memorized: '',
  current: '0',
};

Display.propTypes = {
  memorized: PropTypes.string,
  current: PropTypes.string,
};
