const fixFiles = files =>
  files.map(
    (duplicatesCounter => file => {
      duplicatesCounter[file] = duplicatesCounter[file] + 1 || 0;
      return `${file}${duplicatesCounter[file] ? `(${duplicatesCounter[file]})` : ''}`;
    })({})
  );

export { fixFiles };
