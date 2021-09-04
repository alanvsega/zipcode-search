export default {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coverageDirectory: 'tests/coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'lcov'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts'
  ],
  testTimeout: 30000
}
