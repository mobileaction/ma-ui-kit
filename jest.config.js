module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '<rootDir>/src/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
  ],
  collectCoverage: true,
  verbose: true,
  moduleFileExtensions: [ "js", "ts", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "babel-jest"
  },
  setupFiles: [
    "<rootDir>/jest.init.js"
  ],
};
