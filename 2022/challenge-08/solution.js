const checkPart = part => {
  const middle = part.length / 2;

  return [...part.slice(0, middle)].every((currentLeftLetter, index) => {
    const nextLeftLetter = part[index + 1];
    const currentRightLetter = part[part.length - index - 1];
    const nextRightLetter = part[part.length - index - 2];

    return (
      currentLeftLetter === currentRightLetter ||
      currentLeftLetter === nextRightLetter ||
      nextLeftLetter === currentRightLetter
    );
  });
};

export { checkPart };
