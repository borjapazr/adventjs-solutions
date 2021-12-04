const createXmasTree = height => {
  const treeTrunkHeight = 2;
  let tree = '';
  for (let i = 1; i <= height + treeTrunkHeight; i++) {
    for (let j = 1; j <= height + height - 1; j++) {
      // Tree part
      if (i <= height) {
        if (j <= height - i || j >= height + i) {
          tree += '_';
        } else {
          tree += '*';
        }
      }
      // Trunk part
      if (i > height) {
        if (j === (height * 2) / 2) {
          tree += '#';
        } else {
          tree += '_';
        }
      }
    }
    tree += '\n';
  }
  return tree.trim();
};

console.log(createXmasTree(3));
