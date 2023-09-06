import styled from 'styled-components';

const commonStyles = `
  color: white;
  width: 100px;
  height: 100px;
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
  margin: auto;
  width: 418px;
  padding: 8px;
  gap: 6px;

  @media (min-width: 920px) {
    margin: 0;
    width: ${418 * 1.3}px;
    padding: ${8 * 1.3}px;
    gap: ${6 * 1.3}px;
  }
`;

export const Button = styled.button`
  ${commonStyles}
  background-color: #2f2f2f;

  @media (min-width: 920px) {
    width: ${100 * 1.3}px;
    height: ${100 * 1.3}px;
    font-size: ${40 * 1.3}px;
  }

  ${hover}
`;

export const ButtonOpperation = styled.button`
  ${commonStyles}
  background-color: #3D3F4A;

  @media (min-width: 920px) {
    width: ${100 * 1.3}px;
    height: ${100 * 1.3}px;
    font-size: ${40 * 1.3}px;
  }

  ${hover}
`;

export const ButtonResult = styled.button`
  ${commonStyles}
  background-color: #003853;

  @media (min-width: 920px) {
    width: ${100 * 1.3}px;
    height: ${100 * 1.3}px;
    font-size: ${40 * 1.3}px;
  }

  ${hover}
`;

export const ButtonAC = styled.button`
  ${commonStyles}
  width: 311px;
  margin-right: 1px;
  background-color: #6d4b88;
  border-radius: 50px;

  @media (min-width: 920px) {
    width: ${311 * 1.3}px;
    margin-right: ${1 * 1.3}px;
  }

  ${hover}
`;

export const ButtonZero = styled.button`
  ${commonStyles}
  width: 205px;
  margin-right: 1px;
  background-color: #2f2f2f;
  border-radius: 50px;

  @media (min-width: 920px) {
    width: ${205 * 1.3}px;
    margin-right: ${1 * 1.3}px;
    height: ${100 * 1.3}px;
  }

  ${hover}
`;
