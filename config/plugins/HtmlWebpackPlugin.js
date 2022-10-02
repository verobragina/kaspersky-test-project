const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_path) => new HtmlWebpackPlugin({
  title: 'Kaspersky Test Project',
  template: path.resolve(_path, 'src', 'index.html'),
  filename: path.resolve(_path, 'build', 'index.html'),
});
