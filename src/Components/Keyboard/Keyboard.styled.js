import styled from 'styled-components';

const commonStyles = `
  color: white;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 100%;

  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const hover = `
  &:hover {
    transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: orange;
  }

`;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 15px;
  gap: 6px;

  @media (min-width: 920px) {
    margin: 0;
    width: 412px;
    padding: ${8 * 1.3}px;
    gap: ${6 * 1.2}px;
  }
`;

export const Button = styled.button`
  ${commonStyles}
  background-color: #2f2f2f;

  @media (min-width: 920px) {
    width: ${80 * 1.2}px;
    height: ${80 * 1.2}px;
    font-size: ${40 * 1.2}px;
  }

  ${hover}
`;

export const ButtonOpperation = styled.button`
  ${commonStyles}
  background-color: #3D3F4A;

  @media (min-width: 920px) {
    width: ${80 * 1.2}px;
    height: ${80 * 1.2}px;
    font-size: ${40 * 1.2}px;
  }

  ${hover}
`;

export const ButtonResult = styled.button`
  ${commonStyles}
  background-color: #003853;

  @media (min-width: 920px) {
    width: ${80 * 1.2}px;
    height: ${80 * 1.2}px;
    font-size: ${40 * 1.2}px;
  }

  ${hover}
`;

export const ButtonAC = styled.button`
  ${commonStyles}
  width: 250px;
  margin-right: 2px;
  background-color: #6d4b88;
  border-radius: 50px;

  @media (min-width: 920px) {
    width: ${250 * 1.2}px;
    margin-right: ${1 * 1.2}px;
  }

  ${hover}
`;

export const ButtonZero = styled.button`
  ${commonStyles}
  width: 165px;
  margin-right: 1px;
  background-color: #2f2f2f;
  border-radius: 50px;

  @media (min-width: 920px) {
    width: ${165 * 1.2}px;
    margin-right: ${1 * 1.2}px;
    height: ${80 * 1.2}px;
  }

  ${hover}
`;
