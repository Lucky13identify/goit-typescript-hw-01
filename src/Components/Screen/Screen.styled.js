import styled, { keyframes } from 'styled-components';

const commonStyles = `
  margin-top: 20px;
  text-align: right;

  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #d9d9d9;
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 220px;
  padding: 15px;

  border-radius: 0 0 20px 20px;
  background-color: #23232a;

  @media (min-width: 920px) {
    height: 600px;
    padding: ${15 * 1.3}px;
  }
`;

export const NumberText = styled.div`
  ${commonStyles}

  @media (min-width: 920px) {
    margin-top: ${40 * 1.3}px;
    width: 510px;

    font-size: ${80 * 1.3}px;
  }

  &::after {
    content: '';
    height: 70px;
    width: 3px;
    display: ${({ pressed }) => (pressed === 'true' ? 'inline-block' : 'none')};

    background-color: #778899;
    animation: ${blinkAnimation} 1.7s infinite;
  }
`;

export const NumberResult = styled.div`
  ${commonStyles}

  margin-top: 10px;
  overflow: auto;

  font-size: 40px;

  color: #a6a6a6;

  @media (min-width: 920px) {
    margin-top: ${10 * 1.3}px;
    width: 500px;

    font-size: ${40 * 1.3}px;
  }
`;
