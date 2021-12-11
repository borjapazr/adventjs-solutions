const sumPairs = (numbers, result) => {
  const checkedCandidateAddends = {};
  let addendsCombination = null;
  let mostLeftHandCandidateAddend = Number.MAX_VALUE;

  numbers.forEach((currentAddend, index) => {
    const candidateAddend = result - currentAddend;

    if (candidateAddend in checkedCandidateAddends) {
      const candidateAddendLeftIndex = checkedCandidateAddends[candidateAddend];
      if (mostLeftHandCandidateAddend > candidateAddendLeftIndex) {
        addendsCombination = [candidateAddend, currentAddend];
        mostLeftHandCandidateAddend = candidateAddendLeftIndex;
      }
    }
    checkedCandidateAddends[currentAddend] = index;
  });

  return addendsCombination;
};

export { sumPairs };
