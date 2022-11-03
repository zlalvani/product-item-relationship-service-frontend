/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  setupFiles: ['./src/testing/setupTests.js'],
  transformIgnorePatterns: [`/node_modules/(?!react-syntax-highlighter)`],
};