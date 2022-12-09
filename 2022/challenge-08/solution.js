const checkPart = part => {
  return [...part].some((_letter, i) => {
    const nextPart = part.substring(0, i) + part.substring(i + 1);
    return nextPart === [...nextPart].reverse().join('');
  });
};

export { checkPart };
