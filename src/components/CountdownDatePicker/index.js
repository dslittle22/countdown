import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CountdownDatePicker.css';

import React from 'react';

const CountdownDatePicker = ({ eventDate, handleNewEventUpdate }) => {
  return (
    <div>
      <DatePicker
        selected={eventDate}
        onChange={handleNewEventUpdate}
        fixedHeight
        isClearable
        placeholderText='Enter a Date'
      />
    </div>
  );
};

export default CountdownDatePicker;
