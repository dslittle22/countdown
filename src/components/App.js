import React, { useState } from 'react';
import './App.css';
import Box from './Box';
import ViewOptions from './ViewOptions';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [option, setOption] = useState('day');
  const [eventDate, setEventDate] = useState(new Date(2020, 12, 31));
  const [eventTitle, setEventTitle] = useState("New Year's Eve");
  const [remainingTime, setRemainingTime] = useState(() => {
    return Math.round((eventDate - new Date()) / (24 * 60 * 60 * 1000)) + 1;
  });

  const capitalize = (s) => {
    if (typeof s !== 'string') return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleNewEventUpdate = (newDate) => {
    setEventDate(newDate);
    setRemainingTime(calculateRemainingTime());
  };

  const handleOptionChange = (e) => {
    setOption(e.target.name);
    const newTime = calculateRemainingTime();
    setRemainingTime(newTime);
  };

  const calculateRemainingTime = () => {
    const dayInMS = 24 * 60 * 60 * 1000;
    const today = new Date();
    const totalDays = Math.round((eventDate - today) / dayInMS) + 1;

    if (totalDays < 1) return 0;
    if (option === 'day') return totalDays;
    switch (option) {
      case 'week':
        return Math.floor(totalDays / 7) + 1;
      case 'month':
        return Math.floor(totalDays / 30) + 1;
      case 'year':
        return Math.floor(totalDays / 365) + 1;
      default:
        return totalDays;
    }
  };

  const formatRemainingTime = () => {
    return `${capitalize(option)}s until event: ` + calculateRemainingTime();
  };

  const renderBoxes = () => {
    const numBoxes = calculateRemainingTime();
    return (
      <div className='container'>
        {[...Array(numBoxes)].map((e, i) => {
          return <Box key={i} />;
        })}
      </div>
    );
  };

  return (
    <div>
      <h1>Countdown App</h1>
      <p>
        Event Title: <br />
        <input
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        ></input>
      </p>

      <p>Event is on:</p>
      <DatePicker
        selected={eventDate}
        onChange={handleNewEventUpdate}
        fixedHeight
        isClearable
        placeholderText='Enter a Date'
      />
      <p>{formatRemainingTime()}</p>
      <ViewOptions handleOptionChange={handleOptionChange} />
      <div className='container'>{renderBoxes()}</div>
    </div>
  );
};

export default App;
