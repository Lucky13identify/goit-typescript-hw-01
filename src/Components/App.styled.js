import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 440px;
  background-color: #141414;

  @media (min-width: 920px) {
    display: flex;
    justify-content: space-between;
    width: ${400 * 3}px;
    border-radius: 0 0 20px 20px;
  }
`;
