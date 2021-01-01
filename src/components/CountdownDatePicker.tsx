import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

type Props = {
  date: Date,
  handleDateChange: (date: Date) => void
}

const CountdownDatePicker: React.FC<Props> = ({date, handleDateChange}) => {
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        fixedHeight
        isClearable
        shouldCloseOnSelect
        placeholderText='Enter a Date'
      />
    </div>
  );
};

export default CountdownDatePicker;