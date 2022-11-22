const checkIsSameTree = (treeA, treeB) =>
  (!treeA && !treeB) ||
  (treeA?.value === treeB?.value &&
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right));

export { checkIsSameTree };
