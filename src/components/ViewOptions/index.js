import React from 'react';

const ViewOptions = ({ handleOptionChange }) => {
  return (
    <div>
      <button name='day' onClick={handleOptionChange}>
        Day
      </button>
      <button name='week' onClick={handleOptionChange}>
        Week
      </button>
      <button name='month' onClick={handleOptionChange}>
        Month
      </button>
      <button name='year' onClick={handleOptionChange}>
        Year
      </button>
    </div>
  );
};

export default ViewOptions;
