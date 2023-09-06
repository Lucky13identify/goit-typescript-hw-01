import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 1px;
  padding-right: 1px;

  min-width: 390px;
  background-color: #141414;

  @media (min-width: 920px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1000px;
    border-radius: 0 0 20px 20px;
  }
`;
