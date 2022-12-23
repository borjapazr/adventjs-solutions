function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((_, index, systemNamesOriginal) => {
    return (
      stepNumbers[index] <= stepNumbers[index + systemNamesOriginal.slice(index + 1).indexOf(systemNames[index]) + 1]
    );
  });
}

export { checkStepNumbers };
