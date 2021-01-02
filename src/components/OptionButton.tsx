import styled from 'styled-components'
import {optionType} from './App'
import React from 'react'

type Props = {
    handleOptionChange: (currentOption: optionType) => void
    buttonOption: optionType,
    selectedOption: optionType
}

const OptionButton: React.FC<Props> = ({handleOptionChange, buttonOption, selectedOption}) => {
    return (
        <StyledButton onClick={() => handleOptionChange(buttonOption)} buttonOption={buttonOption} selectedOption={selectedOption}>
            {buttonOption.substring(0, 1).toLocaleUpperCase() + buttonOption.substring(1) + 's'}
        </StyledButton>
    )
}

export default OptionButton

type StyledButtonProps = {
  buttonOption: optionType,
  selectedOption: optionType
}
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
  background: ${(p: StyledButtonProps )=> p.selectedOption === p.buttonOption? "#555" : 'white'};
  color: ${(p: StyledButtonProps )=> p.selectedOption !== p.buttonOption? "#555" : 'white'};

  :hover {
    color: white;
    background: #555;
  }
`;
