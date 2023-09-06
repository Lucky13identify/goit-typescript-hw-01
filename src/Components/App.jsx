import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Keyboard } from './Keyboard/Keyboard';
import { Screen } from './Screen/Screen';
import { Container } from './App.styled';

export const App = () => {
  const [task, setTask] = useState('');
  const [mathTask, setMathTask] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = e => {
    const value = e.target.textContent;
    if (Number(value)) {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
    } else if (value === '0') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
    } else if (value === 'AC') {
      setTask('');
      setResult('');
      setMathTask('');
    } else if (value === '×') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + '*');
    } else if (value === '÷') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + '/');
    } else if (value === '-') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
    } else if (value === '+') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
    } else if (value === ',') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + '.');
    } else if (value === '=') {
      try {
        const result = evaluate(mathTask);
        const stringResult = result.toString();

        if (stringResult.includes('.')) {
          const finalResult = stringResult.replace('.', ',');
          setResult(finalResult);
        } else {
          setResult(stringResult);
        }
      } catch (error) {
        console.error('Ошибка в выражении:', error);
      }
    }
  };

  return (
    <Container>
      <Screen task={task} result={result} />
      <Keyboard push={handleButtonClick} />
    </Container>
  );
};
