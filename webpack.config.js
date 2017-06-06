const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ['babel-polyfill', 'webpack-hot-middleware/client'],
    app: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: path.join(__dirname, 'src/css'),
    },
    {
      test: /\.svg$/,
      loader: 'file-loader',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: [
      'node_modules',
    ],
  },
};
