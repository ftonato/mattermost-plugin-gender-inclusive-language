module.exports = {
  testEnvironment: 'jsdom',
  globals: {
    PostUtils: {},
  },
  setupFiles: ['<rootDir>/jest-setup.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '**/src/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/src/constants.js',
    '!**/src/index.js',
  ],
};
