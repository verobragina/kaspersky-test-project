const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(_path, env) {
  const isDevelopment = env === 'development';

  return {
    entry: path.resolve(_path, 'src', 'js', 'index.js'),

    output: {
      path: path.resolve(_path, 'build'),
      filename: isDevelopment ? '[name].js' : '[name].[hash:8].js',
      clean: true,
    },

    devServer: {
      port: 8000,
      hot: isDevelopment,
      compress: true,
      clientLogLevel: 'warn',
      contentBase: path.resolve(_path, 'build'),
      watchContentBase: true,
    },

    plugins: [
      require('../plugins/HtmlWebpackPlugin')(_path),
      require('../plugins/CopyWebpackPlugin')(_path),
      new MiniCssExtractPlugin({
        filename: "[name].[hash:8].css",
      }),
    ],

    module: {
      rules: [
        {
          oneOf: [
            require('../rules/jsRules')(_path)
          ]
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader'],
        },
        {
          test: /\.(woff)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },

    resolve: {
      extensions: ['.js'],
    },
  };
}
