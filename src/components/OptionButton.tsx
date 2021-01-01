import styled from 'styled-components'
import {optionType} from './App'
import React from 'react'

type Props = {
    handleOptionChange: (currentOption: optionType) => void
    option: optionType
}

const OptionButton: React.FC<Props> = ({handleOptionChange, option}) => {
    return (
        <StyledButton onClick={() => handleOptionChange(option)}>
            {option.substring(0, 1).toLocaleUpperCase() + option.substring(1) + 's'}
        </StyledButton>
    )
}

export default OptionButton


const StyledButton = styled.button`
  border: 5px solid #555;
  border-radius: 2px;
  background: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1em;
  transition: color 200ms;
  display: grid;
  justify-content: center;

  :hover {
    color: white;
    background: #555;
  }
`;
