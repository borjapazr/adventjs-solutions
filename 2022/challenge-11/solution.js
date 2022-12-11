const getCompleted = (part, total) => {
  const [hoursPart, minutesPart, secondsPart] = part.split(':');
  const [hoursTotal, minutesTotal, secondsTotal] = total.split(':');

  const partSeconds = (+hoursPart * 60 + +minutesPart) * 60 + +secondsPart;
  const totalSeconds = (+hoursTotal * 60 + +minutesTotal) * 60 + +secondsTotal;

  const calculateGreatestCommonDivisor = (a, b) => {
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  };

  const gcd = calculateGreatestCommonDivisor(partSeconds, totalSeconds);

  const numerator = partSeconds / gcd;
  const denominator = totalSeconds / gcd;

  return `${numerator}/${denominator}`;
};

export { getCompleted };
