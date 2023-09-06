import {
  Container,
  Button,
  ButtonAC,
  ButtonZero,
  ButtonOpperation,
  ButtonResult,
} from './Keyboard.styled';

export const Keyboard = ({ push }) => {
  return (
    <Container>
      <li>
        <ButtonAC onClick={push}>AC</ButtonAC>
      </li>
      <li>
        <ButtonOpperation onClick={push}>&divide;</ButtonOpperation>
      </li>
      <li>
        <Button onClick={push}>7</Button>
      </li>
      <li>
        <Button onClick={push}>8</Button>
      </li>
      <li>
        <Button onClick={push}>9</Button>
      </li>
      <li>
        <ButtonOpperation onClick={push}>&times;</ButtonOpperation>
      </li>
      <li>
        <Button onClick={push}>4</Button>
      </li>
      <li>
        <Button onClick={push}>5</Button>
      </li>
      <li>
        <Button onClick={push}>6</Button>
      </li>
      <li>
        <ButtonOpperation onClick={push}>-</ButtonOpperation>
      </li>
      <li>
        <Button onClick={push}>1</Button>
      </li>
      <li>
        <Button onClick={push}>2</Button>
      </li>
      <li>
        <Button onClick={push}>3</Button>
      </li>
      <li>
        <ButtonOpperation onClick={push}>+</ButtonOpperation>
      </li>
      <li>
        <ButtonZero onClick={push}>0</ButtonZero>
      </li>
      <li>
        <Button onClick={push}>&#44;</Button>
      </li>
      <li>
        <ButtonResult onClick={push}>=</ButtonResult>
      </li>
    </Container>
  );
};
