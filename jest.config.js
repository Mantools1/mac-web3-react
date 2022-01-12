module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@mac-web3-react/(.*)$': '<rootDir>/packages/$1/src',
  },
}
