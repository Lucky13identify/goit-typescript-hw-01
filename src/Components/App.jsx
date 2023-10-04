/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';
import Notiflix from 'notiflix';
import { Keyboard } from './Keyboard/Keyboard';
import { Screen } from './Screen/Screen';
import { Container } from './App.styled';

export const App = () => {
  const [task, setTask] = useState('');
  const [mathTask, setMathTask] = useState('');
  const [result, setResult] = useState('');

  const lastChar = task.charAt(task.length - 1);

  const conditions =
    lastChar !== '×' &&
    lastChar !== '÷' &&
    lastChar !== '+' &&
    lastChar !== '-' &&
    lastChar !== ',';

  const specialContitions =
    !task.endsWith(',') &&
    lastChar !== ',' &&
    Number(lastChar) &&
    !task.endsWith('×') &&
    !task.endsWith('÷') &&
    !task.endsWith('+') &&
    !task.endsWith('-');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const giveResult = () => {
    try {
      let mathExpression = mathTask.replace(/,/g, '.');

      const result = evaluate(mathExpression);

      const formattedResult = result.toLocaleString('ru-RU');

      setResult(formattedResult);
    } catch (error) {
      Notiflix.Notify.warning('Error expression. Try again!');
    }
  };

  const changeState = (stringKey, optionalKey = stringKey) => {
    setTask(prevState => prevState + stringKey);
    setMathTask(prevState => prevState + optionalKey);
  };

  const clearState = () => {
    setTask('');
    setResult('');
    setMathTask('');
  };

  useEffect(() => {
    const handleKeyDown = event => {
      const key = event.key;

      if (Number(key) || (key === '0' && task !== '')) {
        changeState(key);
      } else if (key === 'Backspace') {
        clearState();
      } else if (
        (conditions && key === 'x') ||
        key === 'X' ||
        key === 'ч' ||
        key === 'Ч'
      ) {
        changeState('×', '*');
      } else if (conditions && key === '/') {
        changeState('÷', '/');
      } else if (conditions && key === '-') {
        changeState(key);
      } else if (conditions && key === '+') {
        changeState(key);
      } else if (specialContitions && key === ',') {
        changeState(key, '.');
      } else if (key === '=') {
        giveResult();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [giveResult]);

  const handleButtonClick = e => {
    const value = e.target.textContent;

    if (Number(value) || (value === '0' && task !== '')) {
      changeState(value);
    } else if (value === '0') {
      changeState(value);
    } else if (value === 'AC') {
      clearState();
    } else if (conditions && value === '×') {
      changeState(value, '*');
    } else if (conditions && value === '÷') {
      changeState(value, '/');
    } else if (conditions && value === '-') {
      changeState(value);
    } else if (conditions && value === '+') {
      changeState(value);
    } else if (specialContitions && value === ',') {
      changeState(value, '.');
    } else if (value === '=') {
      giveResult();
    }
  };

  return (
    <Container>
      <Screen task={task} result={result} />
      <Keyboard push={handleButtonClick} />
    </Container>
  );
};
