import React, { useState } from 'react';
import './App.css';
import Box from './Box';
import CountdownDatePicker from './CountdownDatePicker';
import ViewOptions from './ViewOptions';

const App = () => {
  const [option, setOption] = useState('day');
  const [eventDate, setEventDate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    return new Date(year, 11, 31);
  });
  const [remainingTime, setRemainingTime] = useState(() => {
    return Math.round((eventDate - new Date()) / (24 * 60 * 60 * 1000)) + 1;
  });

  const capitalize = s => {
    if (typeof s !== 'string') return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleNewEventUpdate = newDate => {
    setEventDate(newDate);
    setRemainingTime(calculateRemainingTime());
  };

  const handleOptionChange = e => {
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
          return <Box key={i} timeType={option} number={i + 1} />;
        })}
      </div>
    );
  };

  return (
    <div>
      <h1>Countdown</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '1rem',
        }}
      >
        Event is on:
        <CountdownDatePicker
          eventDate={eventDate}
          handleNewEventUpdate={handleNewEventUpdate}
        />
      </div>
      <div style={{ paddingBottom: '1rem' }}>{formatRemainingTime()}</div>
      Vizualize remaining time in:
      <ViewOptions handleOptionChange={handleOptionChange} />
      <div className='container'>{renderBoxes()}</div>
    </div>
  );
};

export default App;
