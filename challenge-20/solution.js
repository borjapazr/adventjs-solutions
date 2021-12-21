const pangram = letter =>
  new Set(
    letter
      .toLowerCase()
      .normalize('NFD')
      .replace(/([^\u0300-\u036fn]|n(?!\u0303))[\u0300-\u036F]/g, '')
      .replace(/[^\u0303a-z]/g, '')
  ).size === 27;

const pangramAlt = letter => {
  const sanitizedLetterSize = new Set(
    letter
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z]/g, '')
  ).size;

  return sanitizedLetterSize === 26 && letter.includes('n') && letter.includes('ñ');
};

export { pangram, pangramAlt };
