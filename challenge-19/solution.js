// Window Sliding Technique -> O(n*log(n)) time complexity
const learn = (time, courses) => {
  let candidateCourseIds = null;
  let maximumAffordableDuration = 0;

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const coursesDuration = courses[i] + courses[j];
      if (coursesDuration === time) {
        return [i, j];
      }
      if (coursesDuration < time && coursesDuration > maximumAffordableDuration) {
        maximumAffordableDuration = coursesDuration;
        candidateCourseIds = [i, j];
      }
    }
  }

  return candidateCourseIds;
};

export { learn };
