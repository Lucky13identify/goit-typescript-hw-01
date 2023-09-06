import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  width: 412px;
  background-color: #141414;

  @media (min-width: 920px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: ${412 * 3}px;
    border-radius: 0 0 20px 20px;
  }
`;
