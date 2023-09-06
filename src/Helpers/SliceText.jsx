export const sliceText = condition => {
  const reversedText = condition.split('').reverse().join('');
  if (window.innerWidth > 920) {
    const truncatedReversedText =
      reversedText.length > 8 ? reversedText.slice(0, 8) + '...' : reversedText;

    return truncatedReversedText.split('').reverse().join('');
  }
  const truncatedReversedText =
    reversedText.length > 7 ? reversedText.slice(0, 7) + '...' : reversedText;

  return truncatedReversedText.split('').reverse().join('');
};
