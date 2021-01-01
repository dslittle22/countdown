import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Box from '../components/Box';
import CountdownDatePicker from '../components/CountdownDatePicker';
import { dateDiff, countBoxes } from '../utils/dates';
import OptionButton from './OptionButton';

export type optionType = 'day' | 'week' | 'month' | 'year';
const App: React.FC = () => {
  const [option, setOption] = useState<optionType>('day');
  const [eventDate, setEventDate] = useState<Date>(
    new Date(new Date().getFullYear(), 11, 31)
  );
  const [startDate, setStartDate] = useState<Date>(new Date());

    const renderOptions = () => {
      const allOptions = ['day', 'week', 'month', 'year']
      return (
        <ButtonGrid>
        {allOptions.map(option => (
          <OptionButton option={option as optionType} handleOptionChange={(currentOption: optionType) => setOption(option as optionType)}/>
        ))}
        </ButtonGrid>
      )
    }

  const renderBoxes = () => {
    const numBoxes = countBoxes(startDate, eventDate, option);
    return (
      <BoxGrid>
        {[...Array(numBoxes)].map((e, i) => {
          return <Box key={i} timeType={option} number={i + 1} />;
        })}
      </BoxGrid>
    );
  };
  return (
    <div>
      <h1>Countdown</h1>
      <DatePickerContainer>
        <FlexColumn>
          Starting date:
          <CountdownDatePicker
            date={startDate}
            handleDateChange={setStartDate}
          />
        </FlexColumn>
        <FlexColumn>
          Event is on:
          <CountdownDatePicker
            date={eventDate}
            handleDateChange={setEventDate}
          />
        </FlexColumn>
      </DatePickerContainer>
      <div style={{ paddingBottom: '1rem' }}>
        {`Time until event: ` + dateDiff(startDate, eventDate)}
      </div>
      Visualize remaining time in:
      {renderOptions()}
      {renderBoxes()}
    </div>
  );
};

export default App;

const BoxGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const ButtonGrid = styled.div`
  padding-bottom: 1em;
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const DatePickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  @media (max-width: 510px) {
    flex-direction: column;
  }
`;
