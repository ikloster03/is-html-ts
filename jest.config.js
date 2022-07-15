module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '**/*.test.ts',
  ],
  roots: [
    '<rootDir>/src',
  ],
};
