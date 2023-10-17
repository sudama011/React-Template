import PropTypes from 'prop-types';

const Button = ({ text, onClick, type, className,disabled  }) => {
  return (
    <button
      type={type}
      className={`bg-blue-700 text-white rounded-md px-2 py-1 text-sm cursor-pointer transition-colors duration-300 
      sm:px-3 sm:py-2 sm:text-lg 
      ${disabled ? 'bg-gray-400 cursor-default' : 'bg-blue-500 hover:bg-blue-600'} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Button',
  type: 'button',
  className: '',
  disabled: false,
  onClick: () => {},
};

export default Button;
