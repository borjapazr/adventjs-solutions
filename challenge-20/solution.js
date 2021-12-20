const pangram = letter => {
  const totalDifferentCharacters = new Set(
    letter
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z]/g, '')
  ).size;
  return totalDifferentCharacters === 26 && letter.includes('ñ');
};

export { pangram };
