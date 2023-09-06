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

  useEffect(() => {
    const handleKeyDown = event => {
      const key = event.key;

      if (Number(key) || (key === '0' && task !== '')) {
        setTask(prevState => prevState + key);
        setMathTask(prevState => prevState + key);
        setIsDecimalAllowed(true); // Разрешаем ввод запятой после цифр
      } else if (key === 'Backspace') {
        setTask('');
        setResult('');
        setMathTask('');
        setIsDecimalAllowed(true); // Разрешаем ввод запятой после очистки
      } else if (key === 'x' || key === 'X' || key === 'ч' || key === 'Ч') {
        if (conditions) {
          setTask(prevState => prevState + '×');
          setMathTask(prevState => prevState + '*');
          setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака умножения
        }
      } else if (key === '/') {
        if (conditions) {
          setTask(prevState => prevState + '÷');
          setMathTask(prevState => prevState + '/');
          setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака деления
        }
      } else if (key === '-') {
        if (conditions) {
          setTask(prevState => prevState + key);
          setMathTask(prevState => prevState + key);
          setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака минус
        }
      } else if (key === '+') {
        if (conditions) {
          setTask(prevState => prevState + key);
          setMathTask(prevState => prevState + key);
          setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака плюс
        }
      } else if (key === ',') {
        // Разрешаем ввод запятой после числа и перед оператором, только если нет другой запятой в числе
        if (
          !task.endsWith(',') &&
          lastChar !== ',' &&
          Number(lastChar) &&
          !task.endsWith('×') &&
          !task.endsWith('/') &&
          !task.endsWith('+') &&
          !task.endsWith('-')
        ) {
          setTask(prevState => prevState + key);
          setMathTask(prevState => prevState + '.');
          setIsDecimalAllowed(false); // Запрещаем ввод дополнительной запятой
        }
      } else if (key === '=') {
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
          Notiflix.Notify.warning('Error expression. Try again!');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [conditions, lastChar, mathTask, task]);

  const handleButtonClick = e => {
    const value = e.target.textContent;

    if (Number(value) || (value === '0' && task !== '')) {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
      setIsCommaAllowed(true); // Разрешаем ввод запятой после цифр
    } else if (value === '0') {
      setTask(prevState => prevState + value);
      setMathTask(prevState => prevState + value);
      setIsDecimalAllowed(true); // Разрешаем ввод запятой после 0
    } else if (value === 'AC') {
      setTask('');
      setResult('');
      setMathTask('');
      setIsDecimalAllowed(true); // Разрешаем ввод запятой после очистки
    } else if (value === '×') {
      if (true) {
        console.log(value);
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + '*');
        setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака умножения
      }
    } else if (value === '÷') {
      if (conditions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + '/');
        setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака деления
      }
    } else if (value === '-') {
      if (conditions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + value);
        setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака минус
      }
    } else if (value === '+') {
      if (conditions) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + value);
        setIsDecimalAllowed(true); // Разрешаем ввод запятой после знака плюс
      }
    } else if (value === ',') {
      // Разрешаем ввод запятой только если нет другой запятой в числе
      if (
        !task.endsWith(',') &&
        lastChar !== ',' &&
        Number(lastChar) &&
        !task.endsWith('×') &&
        !task.endsWith('/') &&
        !task.endsWith('+') &&
        !task.endsWith('-')
      ) {
        setTask(prevState => prevState + value);
        setMathTask(prevState => prevState + '.');
        setIsDecimalAllowed(false); // Запрещаем ввод дополнительной запятой
      }
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
        Notiflix.Notify.warning('Error expression. Try again!');
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
