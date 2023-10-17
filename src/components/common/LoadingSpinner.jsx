import React from 'react';
import { LuLoader2 } from 'react-icons/lu';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ text, className, size,isLoading }) => {
  
    if(isLoading===false) return null;
  return (
    <div className={`flex justify-center items-center flex-col
    font-bold text-indigo-700 text-2xl
    dark:text-white
    ${className}`}>
      <LuLoader2 size={size} className="animate-spin" />
      <div>
        {text}
      </div>
    </div>
  );
}

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  isLoading:PropTypes.bool
};

LoadingSpinner.defaultProps = {
  text: 'Loading',
  className: '',
  size: 50,
  isLoading: true,
};

export default LoadingSpinner;
