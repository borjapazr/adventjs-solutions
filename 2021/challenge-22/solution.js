const countDecorations = bigTree =>
  bigTree ? bigTree.value + countDecorations(bigTree.left) + countDecorations(bigTree.right) : 0;

export { countDecorations };
