import React from 'react';

const ViewOptions = ({ handleOptionChange }) => {
  return (
    <div style={{ paddingBottom: '1rem' }}>
      <button style={buttonStyle} name='day' onClick={handleOptionChange}>
        Days
      </button>
      <button style={buttonStyle} name='week' onClick={handleOptionChange}>
        Weeks
      </button>
      <button style={buttonStyle} name='month' onClick={handleOptionChange}>
        Months
      </button>
      <button style={buttonStyle} name='year' onClick={handleOptionChange}>
        Years
      </button>
    </div>
  );
};

const buttonStyle = {
  border: '5px solid #555',
  borderRadius: '2px',
  background: 'white',
  padding: '1rem 2rem',
  margin: '0.5rem',
  textDecoration: 'none',
  fontSize: '1em',
};

export default ViewOptions;
