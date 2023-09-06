import { Container, NumberText, NumberResult, Caret } from './Screen.styled';

export const Screen = ({ task, result }) => {
  return (
    <Container>
      <NumberText>{task ? task : 0}</NumberText>
      <Caret></Caret>
      <NumberResult>{result}</NumberResult>
    </Container>
  );
};
