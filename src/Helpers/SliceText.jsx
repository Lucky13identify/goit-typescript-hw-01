export const sliceText = condition => {
  const reversedText = condition.split('').reverse().join('');

  const truncatedReversedText =
    reversedText.length > 7 ? reversedText.slice(0, 7) + '...' : reversedText;

  return truncatedReversedText.split('').reverse().join('');
};
