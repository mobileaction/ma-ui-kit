module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '<rootDir>/src/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!src/**/index.ts',
    '!src/directives/**',
    '!src/plugins/**',
    '!src/**/*.stories.ts',
    '!src/vue-shims.d.ts',
  ],
  moduleFileExtensions: [ "js", "ts", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "babel-jest"
  },
};
