const contains = (store, product) =>
  store === product ||
  Object.values(store).some(item => (item instanceof Object ? contains(item, product) : item === product));

// Depth-first tree traversal with recursion
const containsDFRecursive = (store, product) => {
  if (store === product) {
    return true;
  }

  const storeKeys = store instanceof Object ? Object.keys(store) : [];

  for (const key of storeKeys) {
    const nestedItem = store[key];
    const isMatch = containsDFRecursive(nestedItem, product);
    if (isMatch) {
      return true;
    }
  }

  return false;
};

// Depth-first tree traversal without recursion
const containsDFNonRecursive = (store, product) => {
  const storeStack = [store];

  while (storeStack.length > 0) {
    const currentItem = storeStack.shift();
    if (currentItem === product) {
      return true;
    }

    const storeKeys = currentItem instanceof Object ? Object.keys(currentItem) : [];

    for (const key of storeKeys) {
      const nestedItem = currentItem[key];

      storeStack.unshift(nestedItem);
    }
  }

  return false;
};

// Breadth-first tree traversal
const containsBF = (store, product) => {
  const queue = [store];
  while (queue.length > 0) {
    const currentItem = queue.shift();
    if (currentItem === product) {
      return true;
    }

    const storeKeys = currentItem instanceof Object ? Object.keys(currentItem) : [];

    for (const key of storeKeys) {
      const nestedItem = currentItem[key];
      queue.push(nestedItem);
    }
  }

  return false;
};

export { contains, containsDFRecursive, containsDFNonRecursive, containsBF };
