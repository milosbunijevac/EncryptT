const path = require('path');
const webpack = require('webpack');
const postcssNext = require('postcss-cssnext');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, '/public/src/', 'index.js'),
  ],
  output: ({ path: path.join(`${__dirname}/public/`), filename: 'bundle.js' }),
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postcssNext,
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
