import React from 'react';
import {optionType} from './App'

import styled from 'styled-components';

type Props = {
  timeType: optionType,
  number: number
}


const Box: React.FC<Props> = ({ timeType, number }) => {
  const formattedTimeType: string = timeType[0].toUpperCase() + timeType.substring(1);
  return <StyledBox>{`${formattedTimeType} ${number}`}</StyledBox>;
};

export default Box;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  font-size: 25px;
  background-color: rgb(143, 143, 143);
  color: rgb(245, 244, 242);
  transition: all 200ms;
  transform: scale(0.99);
  max-width: 400px;
}

:hover {
  transform: scale(1);
`;
