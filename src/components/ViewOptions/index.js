import React from 'react';
import './ViewOptions.css';

const ViewOptions = ({ handleOptionChange }) => {
  return (
    <div className='button-grid'>
      <button name='day' onClick={handleOptionChange}>
        Days
      </button>
      <button name='week' onClick={handleOptionChange}>
        Weeks
      </button>
      <button name='month' onClick={handleOptionChange}>
        Months
      </button>
      <button name='year' onClick={handleOptionChange}>
        Years
      </button>
    </div>
  );
};

export default ViewOptions;
