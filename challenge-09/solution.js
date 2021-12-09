const groupBy = (collection, it) => {
  const object = {};
  const getKey = it instanceof Function ? it : item => item[it];
  collection.forEach(item => {
    const key = getKey(item);
    object[key] = [...(object[key] || []), item];
  });
  return object;
};

const groupByReduce = (collection, it) => {
  const getKey = it instanceof Function ? it : item => item[it];
  return collection.reduce((object, item) => {
    const key = getKey(item);
    return {
      ...object,
      [key]: [...(object[key] || []), item]
    };
  }, {});
};

export { groupBy, groupByReduce };
