const getMinJump = obstacles => {
  if (!obstacles || obstacles.length === 0) {
    return 1;
  }

  for (let jumpSize = 2; ; jumpSize++) {
    if (obstacles.every(obstacle => obstacle % jumpSize !== 0)) {
      return jumpSize;
    }
  }
};

export { getMinJump };
