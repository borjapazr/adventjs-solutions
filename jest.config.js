module.exports = {
  testEnvironment: 'node',
  testSequencer: '<rootDir>/utils/test-alphabetical-sequencer.js',
  maxWorkers: 1,
  verbose: true,
  setupFiles: ['<rootDir>/utils/test.utils.js']
};
