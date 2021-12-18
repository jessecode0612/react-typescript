import { defaults } from 'ts-jest/presets';
module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  collectCoverage: true,
  verbose: true,
  transform: {
    ...defaults.transform
  },
  transformIgnorePatterns: ['/node_modules/(?!(react-markdown)/)'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy'
  },
  testMatch: ['**/tests/*.test.(tsx|ts)']
};
