import React from 'react';
import './Box.css';
const Box = ({ timeType, number }) => {
  const formattedTimeType = timeType[0].toUpperCase() + timeType.substring(1);
  return <div className='box'>{`${formattedTimeType} ${number}`}</div>;
};

export default Box;
