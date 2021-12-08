module.exports = {
  testEnvironment: 'node',
  testSequencer: '<rootDir>/testSequencer.js',
  maxWorkers: 1,
  verbose: true,
  setupFiles: ['<rootDir>/utils/test.utils.js']
};
