import styled from 'styled-components';

const commonStyles = `
  margin-top: 40px;
  text-align: right;

  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #d9d9d9;
`;

export const Container = styled.div`
  height: 190px;
  padding: 15px;
  background-color: #23232a;
  border-radius: 0 0 20px 20px;

  /* @media (min-width: 460px) {
    height: 210px;
    padding: 2px;
  } */
`;

export const NumberText = styled.div`
  ${commonStyles}/* @media (min-width: 460px) {
    margin-top: 80px;
  } */
`;

export const NumberResult = styled.div`
  ${commonStyles}
  color: #a6a6a6;
  font-size: 40px;
  margin-top: 10px;
`;

export const Caret = styled.div``;
