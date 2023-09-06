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
  // eslint-disable-next-line no-unused-vars
  const [isCommaAllowed, setIsCommaAllowed] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isDecimalAllowed, setIsDecimalAllowed] = useState(true);

  const lastChar = task.charAt(task.length - 1);

  const conditions =
    lastChar !== '×' &&
    lastChar !== '/' &&
    lastChar !== '+' &&
    lastChar !== '-' &&
    lastChar !== ',';

  const specialContitions =
    !task.endsWith(',') &&
    lastChar !== ',' &&
    Number(lastChar) &&
    !task.endsWith('×') &&
    !task.endsWith('/') &&
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

  useEffect(() => {
    const handleKeyDown = event => {
      const key = event.key;

      if (Number(key) || (key === '0' && task !== '')) {
        setTask(prevState => prevState + key);
        setMathTask(prevState => prevState + key);
        setIsDecimalAllowed(true);
      } else if (key === 'Backspace') {
        setTask('');
        setResult('');
        setMathTask('');
        setIsDecimalAllowed(true);
      } else if (key === 'x' || key === 'X' || key === 'ч' || key === 'Ч') {
        if (conditions) {
          setTask(prevState => prevState + '×');
          setMathTask(prevState => prevState + '*');
          setIsDecimalAllowed(true);
        }
      } else if (key === '/') {
        if (conditions) {
          setTask(prevState => prevState + '÷');
          setMathTask(prevState => prevState + '/');
          setIsDecimalAllowed(true);
        }
      } else if (key === '-') {
        if (conditions) {
          setTask(prevState => prevState + key);
          setMathTask(prevState => prevState + key);
          setIsDecimalAllowed(true);
        }
      } else if (key === '+') {
        if (conditions) {
          setTask(prevState => prevState + key);
          setMathTask(prevState => prevState + key);
          setIsDecimalAllowed(true);
        }
      } else if (key === ',') {
        if (specialContitions) {
          setTask(prevState => prevState + key);
          setMathTask(prevState => prevState + '.');
          setIsDecimalAllowed(false);
        }
      } else if (key === '=') {
        giveResult();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [conditions, giveResult, lastChar, mathTask, specialContitions, task]);

  const handleButtonClick = e => {
    const value = e.target.textContent;

    if (Number(value) || (value === '0' && task !== '')) {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
      setIsCommaAllowed(true);
    } else if (value === '0') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
      setIsDecimalAllowed(true);
    } else if (value === 'AC') {
      setTask('');
      setResult('');
      setMathTask('');
      setIsDecimalAllowed(true);
    } else if (value === '×') {
      if (conditions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + '*');
        setIsDecimalAllowed(true);
      }
    } else if (value === '÷') {
      if (conditions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + '/');
        setIsDecimalAllowed(true);
      }
    } else if (value === '-') {
      if (conditions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + value);
        setIsDecimalAllowed(true);
      }
    } else if (value === '+') {
      if (conditions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + value);
        setIsDecimalAllowed(true);
      }
    } else if (value === ',') {
      if (specialContitions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + '.');
        setIsDecimalAllowed(false);
      }
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
