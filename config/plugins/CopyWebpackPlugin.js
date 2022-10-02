const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_path) => new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(_path, 'src', 'assets'),
      to: path.resolve(_path, 'build', 'assets')
    }
  ],
});
