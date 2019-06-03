module.exports = {
  name: 'd3nyx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/d3nyx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
