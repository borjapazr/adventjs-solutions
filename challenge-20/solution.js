const pangram = letter =>
  new Set(
    letter
      .toLowerCase()
      .normalize('NFD')
      .replace(/^(?!\u0303)[\u0300-\u036F]/g, '')
      .replace(/[^\u0303a-z]/g, '')
  ).size === 27;

export { pangram };
