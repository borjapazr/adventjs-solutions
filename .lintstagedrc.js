module.exports = {
  '*.{js,ts}': ['prettier --check --write --ignore-unknown', 'eslint --cache --color --fix'],
  '*': ['prettier --check --write --ignore-unknown']
};
