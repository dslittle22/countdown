import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Box from '../components/Box';
import CountdownDatePicker from '../components/CountdownDatePicker';
import { formattedDateDiff, countBoxes } from '../utils/dates';
import OptionButton from './OptionButton';
import Footer from './Footer';

export type optionType = 'day' | 'week' | 'month' | 'year';
const App: React.FC = () => {
  const [option, setOption] = useState<optionType>('day');
  const [eventDate, setEventDate] = useState<Date>(
    new Date(new Date().getFullYear(), 11, 31)
  );
  const [startDate, setStartDate] = useState<Date>(new Date());

    const renderOptions = () => {
      const allOptions: optionType[] = ['day', 'week', 'month', 'year']
      return (
        <ButtonGrid>
        {allOptions.map(buttonOption => (
          <OptionButton key={buttonOption} selectedOption={option} buttonOption={buttonOption} handleOptionChange={(option: optionType) => setOption(option)}/>
        ))}
        </ButtonGrid>
      )
    }

  const renderBoxes = () => {
    const numBoxes = countBoxes(startDate, eventDate, option);
    return numBoxes === 0? (<div>None.</div>) : 
      (
      <BoxGrid>
        {[...Array(numBoxes)].map((e, i) => {
          return <Box key={i} timeType={option} number={i + 1} />;
        })}
      </BoxGrid>
    );
  };
  return (
    <>
    <div className='main'>
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
        {`Time until event: ` + formattedDateDiff(startDate, eventDate)}
      </div>
      Visualize remaining time in:
      {renderOptions()}
      {renderBoxes()}
    </div>
    <Footer />
    </>
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
  padding-bottom: 0.5rem;
`;
const DatePickerContainer = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 1rem;
  @media (max-width: 510px) {
    flex-direction: column;
  }
`;
