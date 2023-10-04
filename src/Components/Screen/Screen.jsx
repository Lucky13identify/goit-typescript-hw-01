import { useState, useEffect } from 'react';
import { Container, NumberText, NumberResult } from './Screen.styled';
import { sliceText } from 'Helpers/SliceText';
import { formatStringWithNumbers } from 'Helpers/FormatString';

export const Screen = ({ task, result }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  let timeoutId = 0;

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (Number(e.key)) {
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

  return (
    <Container>
      <NumberText $pressed={isButtonPressed.toString()}>
        {task ? sliceText(formatStringWithNumbers(task)) : 0}
      </NumberText>
      <NumberResult>{formatStringWithNumbers(result)}</NumberResult>
    </Container>
  );
};
