export function formatStringWithNumbers(inputString) {
  if (typeof inputString !== 'string') {
    return inputString;
  }

  const parts = inputString.split(/([0-9,×.]+)/);
  const formattedParts = parts.map(part => {
    if (/^[0-9,×.]+$/.test(part)) {
      return part.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return part;
  });

  return formattedParts.join('');
}
