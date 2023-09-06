import { useState, useEffect } from 'react';
import { Container, NumberText, NumberResult } from './Screen.styled';

export const Screen = ({ task, result }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  let timeoutId = 0;

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.key) {
        setIsButtonPressed(true);
        clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeoutId = setTimeout(() => {
          setIsButtonPressed(false);
        }, 5000);
      }
    });

    return () => {
      document.removeEventListener('keydown', () => {
        setIsButtonPressed(false);
      });
      clearTimeout(timeoutId);
    };
  }, []);

  const reversedText = task.split('').reverse().join('');

  const truncatedReversedText =
    reversedText.length > 8 ? reversedText.slice(0, 8) + '...' : reversedText;

  const truncatedText = truncatedReversedText.split('').reverse().join('');
  return (
    <Container>
      <NumberText pressed={isButtonPressed.toString()}>
        {task ? truncatedText : 0}
      </NumberText>
      <NumberResult>{result}</NumberResult>
    </Container>
  );
};
