/** @type {import('ts-jest').JestConfigWithTsJest} */

const libs = ["react-syntax-highlighter", "p-cancelable", "d3-shape", "d3-path"].join("|");

module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/!(assets)/**/*.{ts,tsx}"],
  
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  setupFiles: ["./src/testing/setupTests.js"],
  transformIgnorePatterns: [`/node_modules/(?!${libs})`],
  globalSetup: "./src/testing/global-setup.js",
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
