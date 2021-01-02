import styled from 'styled-components'
import React from 'react'

const Footer: React.FC = () => {
            return (
    <StyledFooter>
      <div className='inner-container'>
      <p className='header-row'>Made by Danny Little in 2020.</p>
        <p className='header-row'>
          <a href='https://github.com/dannylittle715'>
            Github
          </a>
          <a href='https://www.linkedin.com/in/danny-little-3b3665178/'>
            LinkedIn</a>
          <a href='https://www.youtube.com/channel/UCDqiWjbQMqqgomDexzFBUJQ'>
            YouTube</a>
          <a href='https://www.instagram.com/dlittle_music/'>
            Instagram</a>
        </p>
        
      </div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  font-size: 15px;
  background: #555;
  margin-top: 2rem;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: max(300px, 20%);
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;

  .inner-container {
    display: flex;
    flex-direction: column;
    padding: 3rem 0 2rem;
  }
  .header-row {
    display: flex;
    justify-content: space-around;
  }
`;